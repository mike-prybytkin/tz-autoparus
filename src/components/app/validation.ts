const validateByClickButton = (str: string) => {
  const RE = /^(?:https?:\/\/)?(?:www\.)?([^/]+)/;
  if (!str) {
    return null;
  }
  const result = str.match(RE)[1];
  return result;
};

export default validateByClickButton;
