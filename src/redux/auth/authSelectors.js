const getIsLoggedIn = state => state.auth.isLoggedIn;
const getToken = state => state.auth.token;
const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getToken,
};
export default authSelectors;
