import { Container } from "./index.style";
import { Props } from "./index.type";

export default function FaceBox({ data }: Props) {
  return <Container style={data} />;
}
