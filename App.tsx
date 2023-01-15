import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera, CameraType, FaceDetectionResult } from "expo-camera";
import { useEffect, useState } from "react";

type faceBoxList = { left: number; top: number; width: number; height: number };

export default function App() {
  const [faceBoxList, setFaceBoxList] = useState<faceBoxList[]>([]);
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();

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
    let result: faceBoxList[] = [];

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

  useEffect(getPermission, [permission]);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        {/* 카메라 */}
        <Camera
          type={type}
          style={styles.camera}
          onFacesDetected={onFacesDetected}
        >
          <View style={[styles.face, faceBoxList]}></View>
        </Camera>

        {/* 버튼 컨테이너 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.changeButton}
            onPress={typeChange}
          >
            <Text>전환</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.changeButton, { width: 70, height: 70 }]}
          >
            <Text>촬영</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.changeButton}>
            <Text>갤러리</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  camera: {
    width: "100%",
    flex: 1,
    position: "relative",
  },
  face: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#f00",
  },
  buttonContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
  changeButton: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
});
