import styled from "styled-components/native";
import { Props } from "./index.type";

export default function FaceBox({ data }: Props) {
  return <Container style={data} />;
}

const Container = styled.View`
  position: absolute;
  border: 1px solid #f00;
`;
