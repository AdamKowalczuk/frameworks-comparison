export const getToken = (): string => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
  };
