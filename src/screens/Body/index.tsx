import Container from "../../layouts/Container";
import { Button } from "./index.style";

export default function Body({ navigation }: any) {
  const move = (name: string) => {
    navigation.navigate(name);
  };

  return (
    <Container.Scroll>
      <Button onPress={() => move("Pose")}>정적검사</Button>
      <Button onPress={() => move("Rom")}>동적검사</Button>
    </Container.Scroll>
  );
}
