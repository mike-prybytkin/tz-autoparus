import AppView from './app.view';
import AppModel from './app.model';
import { IAppController } from './types';
import showToastMessage from '../UI/toast-message/toast-message';
import { addLoader, removeLoader } from '../UI/toast-message/loder';

export default class AppController implements IAppController {
  private view;

  private model;

  private baseUrl: string;

  constructor() {
    this.baseUrl = 'autoparus.com';
    this.view = new AppView();
    this.model = new AppModel();
  }

  initApp(): void {
    this.view.listnerSearchButton(this.getSearchValue);
  }

  async checkApi(url = this.baseUrl) {
    addLoader();
    const result = await this.model.checkApi(url);
    if (result) {
      this.view.updateFrame(url);
    } else {
      showToastMessage('Такого домена не существует', 'red');
    }
    removeLoader();
  }

  getSearchValue = (query?: string): void => {
    this.checkApi(query);
  };
}
