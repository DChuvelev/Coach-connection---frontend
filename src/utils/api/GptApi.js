export default class GptApi {
    constructor() {
        this._baseUrl = "http://localhost:3001";
        this._headers = {
            "Content-Type": "application/json"
        };
    }

    askGpt(message) {
        return fetch(`${this._baseUrl}/askGpt`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(message)
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((err) => {
                    return Promise.reject(`${err.message}`);
                })                
            }    
        })
    }


}

export const gptApi = new GptApi();