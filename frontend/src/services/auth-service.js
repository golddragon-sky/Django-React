import HttpService from "./htttp.service";

class AuthService {
  // authEndpoint = process.env.API_URL;

  login = async (payload) => {
    const loginEndpoint = 'login';
    console.log(loginEndpoint);
    return await HttpService.post(loginEndpoint, payload);
  };

  register = async (credentials) => {
    const registerEndpoint = 'register';
    console.log(registerEndpoint);
    return await HttpService.post(registerEndpoint, credentials);
  };

  logout = async () => {
    const logoutEndpoint = 'logout';
    return await HttpService.post(logoutEndpoint);
  };

  forgotPassword = async (payload) => {
    const forgotPassword = 'password-forgot';
    return await HttpService.post(forgotPassword, payload);
  }

  resetPassword = async (credentials) => {
    const resetPassword = 'password-reset';
    return await HttpService.post(resetPassword, credentials);
  }

  getProfile = async() => {
    const getProfile = 'me';
    return await HttpService.get(getProfile);
  }

  updateProfile = async (newInfo) => {
    const updateProfile = "me";
    return await HttpService.patch(updateProfile, newInfo);
  }
}

export default new AuthService();
