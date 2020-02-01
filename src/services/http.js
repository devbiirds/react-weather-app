/* eslint-disable no-undef */
export default class HTTP {
  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  static Get(url) {
    return fetch(url).then(this.checkStatus).then((response) => response.json())
      .catch((error) => alert(error.message));
  }
}
