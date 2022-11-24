import Selector from '../../../constants/constants';

const showToastMessage = (message: string, color: string) => {
  const checkToast = document.querySelector(Selector.toast) as HTMLElement;
  if (!checkToast) {
    const toastHTML = `<span>${message}</span>`;
    M.toast({ html: toastHTML });
    const toast = document.querySelector(Selector.toast) as HTMLElement;
    toast.style.backgroundColor = color;
  }
};

export default showToastMessage;
