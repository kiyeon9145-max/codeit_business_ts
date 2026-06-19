type User = {
  email: string;
  password: string;
  username: string;
};

//순수함수
const isCredentialValidate = (user: User, credential: string) => {
  const [email, password] = credential.split("-");
  return user.email === email && user.password === password;
};
