import { dbApiRequest } from "../constants/requests";

export default class DbApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    // console.log('DB constructor');
  }

  _request(url, reqObj, errMsg) {
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

  _auth(userInfo, path) {
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

  registerUser = (userInfo) => {
    return this._auth(userInfo, "signup");
  };

  authorizeUser = (userInfo) => {
    return this._auth(userInfo, "signin");
  };

  checkToken = (token) => {
    return this._request(
      `${this._baseUrl}/users/me`,
      {
        headers: { ...this._headers, authorization: `Bearer ${token}` },
        method: "GET",
      },
      "Error:"
    );
  };

  updateUserInfo = ({ userInfo, token }) => {
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

  //------------- db part -------------------

  testRequest() {
    console.log("In test request");
    return this._request(
      `${this._baseUrl}/test`,
      {
        headers: { ...this._headers },
        method: "GET",
      },
      "Test request error:"
    );
  }
}

export const dbApi = new DbApi(dbApiRequest);
