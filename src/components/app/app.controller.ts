import AppView from './app.view';
import AppModel from './app.model';
import { IAppController } from './types';

export default class AppController implements IAppController {
  private view;

  private model;

  private baseUrl: string;

  constructor() {
    this.baseUrl = 'autoparus.com';
    this.view = new AppView();
    this.model = new AppModel();
    this.view.listnerSearchButton(this.getSearchValue);
  }

  initApp(): void {
    this.checkApi();
  }

  async checkApi(url = this.baseUrl) {
    const result = await this.model.checkApi(url);
    if (result) {
      this.view.updateFrame(url);
    } else {
      console.log('message');
    }
  }

  getSearchValue = (query?: string): void => {
    this.checkApi(query);
  };
}
