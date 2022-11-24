interface IAppController {
  initApp(): void;
  checkApi(url: string): void;
  getSearchValue(query?: string): void;
}

interface IAppView {
  listnerSearchButton(handler: SearchHandler): void;
  updateFrame(url: string): void;
}

interface IAppModel {
  checkApi(url: string): Promise<boolean>;
}

type SearchHandler = (query: string) => void;

export { IAppController, IAppView, IAppModel, SearchHandler };
