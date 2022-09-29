const USER_NAME_KEY_NAME = `six-cities-login`;

export const getUserName = () => {
  const token = localStorage.getItem(USER_NAME_KEY_NAME);
  return token || ``;
};

export const saveUserName = (userName) => {
  localStorage.setItem(USER_NAME_KEY_NAME, userName);
};

export const dropUserName = () => {
  localStorage.removeItem(USER_NAME_KEY_NAME);
};
