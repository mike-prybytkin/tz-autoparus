export default class Api {
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  private baseProtocol = 'https://';

  async checkApi(url: string) {
    const response = await fetch(`${this.proxyUrl}${this.baseProtocol}${url}`);
    if (response.status === 200) {
      return true;
    }
    return false;
  }
}
