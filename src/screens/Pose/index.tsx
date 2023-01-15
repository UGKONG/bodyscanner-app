import {
  Camera,
  CameraCapturedPicture,
  CameraType,
  FaceDetectionResult,
} from "expo-camera";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components/native";
import FaceBox from "../../components/FaceBox";
import { Face } from "./index.type";
import SnepResult from "./SnepResult";

export default function Pose() {
  const [camera, setCamera] = useState<Camera | null>(null);
  const [faceBoxList, setFaceBoxList] = useState<Face[]>([]);
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [img, setImg] = useState<null | CameraCapturedPicture>(null);

  // 카메라 권한 취득
  const getPermission = (): void => {
    if (permission) return;
    requestPermission()
      .then(() => {})
      .catch(() => {});
  };

  // 전/후면 토글
  const typeChange = (): void => {
    const front = CameraType.front;
    const back = CameraType.back;
    setType((prev) => (prev === front ? back : front));
  };

  // 얼굴 인식 콜백
  const onFacesDetected = (faces: FaceDetectionResult): void => {
    let faceList = faces?.faces;
    let result: Face[] = [];

    faceList?.forEach((item) => {
      let { origin, size } = item?.bounds;
      let left = origin?.x ?? 0;
      let top = origin?.y ?? 0;
      let width = size?.width ?? 0;
      let height = size?.height ?? 0;
      result.push({ left, top, width, height });
    });

    setFaceBoxList(result);
  };

  // 촬영
  const snep = () => {
    if (!camera) return;
    let options = { quality: 1, base64: true };
    camera.takePictureAsync(options).then(setImg);
  };

  useEffect(getPermission, [permission]);

  return (
    <Container>
      {/* 카메라 */}
      <CameraContainer
        type={type}
        onFacesDetected={onFacesDetected}
        ref={(ref) => setCamera(ref)}
      >
        {faceBoxList?.map((item, i) => (
          <FaceBox key={i} data={item} />
        ))}
      </CameraContainer>

      {/* 버튼 컨테이너 */}
      <ButtonContainer>
        <Button onPress={typeChange}>
          <ButtonText>전환</ButtonText>
        </Button>
        <Button onPress={snep}>
          <ButtonText>촬영</ButtonText>
        </Button>
        <Button>
          <ButtonText>갤러리</ButtonText>
        </Button>
      </ButtonContainer>

      {img && <SnepResult data={img} reset={() => setImg(null)} />}
    </Container>
  );
}

const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
`;
const CameraContainer = styled(Camera)`
  width: 100%;
  flex: 1;
  position: relative;
`;
const ButtonContainer = styled.View`
  width: 100%;
  height: 100;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;
const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border-width: 1;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;
const ButtonText = styled.Text``;
