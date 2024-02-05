export default function authHeader() {

    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;

    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }