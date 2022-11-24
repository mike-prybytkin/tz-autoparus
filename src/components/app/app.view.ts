import { IAppView, SearchHandler } from './types';
import Selector from '../../constants/constants';
import validateByClickButton from './validation';

export default class AppView implements IAppView {
  listnerSearchButton(handler: SearchHandler): void {
    const searchButton = document.querySelector(Selector.searchButton);
    const searchInput = document.querySelector(Selector.searchInput) as HTMLInputElement;
    searchButton?.addEventListener('click', () => {
      const { value } = searchInput;
      const result = validateByClickButton(value);
      if (result) {
        handler(result);
      } else {
        console.log('message');
      }
    });
  }

  updateFrame(url: string) {
    const iFrame = document.querySelector(Selector.iFrame) as HTMLIFrameElement;
    iFrame.src = `https://${url}`;
  }
}
