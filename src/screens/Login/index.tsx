import Container from "../../layouts/Container";
import store from "../../store";
import { Button } from "./index.style";

export default function Login() {
  const dispatch = store((x) => x?.dispatch);

  // 로그인
  const login = () => {
    const value = { USER_SQ: 1, USER_NM: "전상욱" };
    dispatch("user", value);
  };

  return (
    <Container.View>
      <Button onPress={login}>임시로그인</Button>
    </Container.View>
  );
}
