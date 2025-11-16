export const isTokenValid = (token) => {
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();  // Check expiry
    } catch {
      return false;
    }
  };
  
export const getTokenFromHeader = (header) => {
    return header?.startsWith('Bearer ') ? header.slice(7) : null;
};