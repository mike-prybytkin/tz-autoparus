import Api from '../../api/api';
import { IAppModel } from './types';

export default class AppModel implements IAppModel {
  private api;

  constructor() {
    this.api = new Api();
  }

  async checkApi(url: string) {
    const result = await this.api.checkApi(url);
    return result;
  }
}
