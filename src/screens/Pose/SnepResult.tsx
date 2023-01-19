import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Image,
  ImageContainer,
} from "./index.style";
import type { SnepResultProps } from "./index.type";

export default function SnepResult({ data, reset }: SnepResultProps) {
  return (
    <Container>
      <ImageContainer>
        <Image data={data} />
        <ButtonContainer>
          <Button line={true} onPress={reset}>
            <ButtonText>저장</ButtonText>
          </Button>
          <Button onPress={reset}>
            <ButtonText>취소</ButtonText>
          </Button>
        </ButtonContainer>
      </ImageContainer>
    </Container>
  );
}
