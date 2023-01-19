import { Text } from "react-native";
import Button from "../../layouts/Button";
import Container from "../../layouts/Container";

export default function Home({ navigation }: any) {
  return (
    <Container.Scroll>
      <Text>바디스캐너 메인 스크린</Text>
    </Container.Scroll>
  );
}
