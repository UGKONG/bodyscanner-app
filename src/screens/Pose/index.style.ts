import styled from "styled-components/native";
import type { CameraCapturedPicture } from "expo-camera";

export const Container = styled.SafeAreaView`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #00000090;
  transform: translateY(12px);
`;
export const ImageContainer = styled.View`
  width: 300px;
  height: 500px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;
export const Image = styled.Image.attrs<{ data: CameraCapturedPicture }>(
  (x) => ({
    resizeMode: "cover",
    source: { uri: x?.data?.uri },
  })
)<{ data: CameraCapturedPicture }>`
  width: 100%;
  height: 450px;
  transform: rotateY(180deg);
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  flex: 1;
  border-top: 1px solid #aaa;
`;
export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))<{ line?: boolean }>`
  flex: 1;
  border-right: ${(x) => (x?.line ? "1px solid #aaa" : "none")};
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  letter-spacing: 1px;
  color: #333;
`;
