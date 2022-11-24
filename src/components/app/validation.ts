const validateAllDomain = (str: string) => {
  const RE = /^(?:https?:\/\/)?(?:www\.)?([^/]+)/;
  if (!str) {
    return null;
  }
  const result = str.match(RE);
  if (result) {
    return result[1];
  }
  return null;
};

const validatePartOfDomain = (str: string) => {
  const RE = /^(?!.*_)([\wа-яА-ЯёЁ]([\wа-яА-ЯёЁ-]*[\wа-яА-ЯёЁ])*\.)+(?!.*\d)[\wа-яА-ЯёЁ]{2,63}$/i;
  if (!str) {
    return null;
  }
  const result = str.match(RE);
  if (result) {
    return result[0];
  }
  return null;
};

const validateByClickButton = (str: string) => {
  const protocol = 'http';
  if (!str) return null;

  if (str.toLowerCase().includes(protocol)) {
    console.log(protocol);
    return validateAllDomain(str);
  }
  console.log(str);
  return validatePartOfDomain(str);
};

export default validateByClickButton;
