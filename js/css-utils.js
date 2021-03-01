// From https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode

export const getCSSCustomProp = propKey => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);

  if (response.length) {
    response = response.replace(/\"/g, '').trim();
  }

  return response;
};
