export const createCredential = (email: string, password: string) => {
    return `${email}-${password}`;
  };
export const parseCredential = (credential: string) => {
    const [email, password] = credential.split("-");
    return {email, password}
  }