try {
  // 여기에서 로직을 실행하는데 혹시 중간에 에러가 난다면
  const makeProfile = (user) => {
    return `이메일: ${user.info.email}`;
  };
  console.log(makeProfile({ info: { email: "asd@asd.com" } }));
  console.log(makeProfile({ bio: { email: "asd@asd.com" } }));
  console.log(makeProfile({ info: { email: "zxc@asd.com" } }));
} catch (err) {
  // 에러를 잡아서 에러가 아닌 예외로 따로 처리한다.
  console.log(err);
}
