import Selector from '../../../constants/constants';

const addLoader = () => {
  const mainWrapper = document.querySelector(Selector.mainWrapper) as HTMLElement;
  const loader = `
  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`;
  const div = document.createElement('div');
  div.className = 'loader-wrapper';
  div.innerHTML = loader;
  mainWrapper.appendChild(div);
};

const removeLoader = () => {
  const loader = document.querySelector('.loader-wrapper') as HTMLElement;
  loader.remove();
};

export { addLoader, removeLoader };
