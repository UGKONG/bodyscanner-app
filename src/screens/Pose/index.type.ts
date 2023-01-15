import { CameraCapturedPicture } from "expo-camera";
import { SetStateAction } from "react";
import { Dispatch } from "react";

export type Face = {
  left: number;
  top: number;
  width: number;
  height: number;
};
export type SnepResultProps = {
  data: CameraCapturedPicture;
  reset: () => void;
};
