import { OutgoingHttpHeaders } from "http2";
import { dbApiRequest } from "../constants/requests";
import { DbApiConstructorProps } from "./DbApiTypes";
import { CurrentUser } from "../../components/redux/slices/App/appTypes";

export default class DbApi {
  _baseUrl: string;
  _headers: HeadersInit;
  constructor({ baseUrl, headers }: DbApiConstructorProps) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    // console.log('DB constructor');
  }

  _request(url: string, reqObj: RequestInit, errMsg: string) {
    return fetch(url, reqObj).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((err) => {
          return Promise.reject(
            `${errMsg} ${err.message} ${
              err.validation ? err.validation.body.message : ""
            }`
          );
        });
      }
    });
  }

  //------------- Auth - Users part --------------

  _auth(userInfo: Record<string, unknown>, path: string) {
    return this._request(
      `${this._baseUrl}/${path}`,
      {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify(userInfo),
      },
      "Error:"
    );
  }

  registerUser = (userInfo: Record<string, unknown>) => {
    return this._auth(userInfo, "signup");
  };

  authorizeUser = (userInfo: Record<string, unknown>) => {
    return this._auth(userInfo, "signin");
  };

  checkToken = (token: string) => {
    return this._request(
      `${this._baseUrl}/users/me`,
      {
        headers: { ...this._headers, authorization: `Bearer ${token}` },
        method: "GET",
      },
      "Error:"
    );
  };

  updateUserInfo = ({
    userInfo,
    token,
  }: {
    userInfo: CurrentUser;
    token: string;
  }) => {
    return this._request(
      `${this._baseUrl}/users/me`,
      {
        headers: { ...this._headers, authorization: `Bearer ${token}` },
        body: JSON.stringify(userInfo),
        method: "PATCH",
      },
      "Error:"
    );
  };

  updateUserpic = ({
    userpic,
    token,
  }: {
    userpic: FormData;
    token: string;
  }) => {
    return this._request(
      `${this._baseUrl}/userpics`,
      {
        headers: { authorization: `Bearer ${token}` },
        // headers: this._headersFile,
        body: userpic,
        method: "POST",
      },
      "Error:"
    );
  };

  //------------- Get All Coaches -------------------

  getAllCoaches(token: string) {
    return this._request(
      `${this._baseUrl}/users/coaches`,
      {
        headers: { ...this._headers, authorization: `Bearer ${token}` },
        method: "GET",
      },
      "Error:"
    );
  }
  createRandomCoach() {
    return this._request(
      `${this._baseUrl}/users/coaches/create/random`,
      {
        headers: { ...this._headers },
        method: "GET",
      },
      "Error:"
    );
  }
}

export const dbApi = new DbApi(dbApiRequest);
