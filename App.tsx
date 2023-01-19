import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import Tabs from "./src/components/Tabs";
import Modal from "./src/layouts/Modal";
import Login from "./src/screens/Login";
import store from "./src/store";

export default function App() {
  const user = store((x) => x?.user);

  useEffect(() => {
    console.log(`
▶ 앱이 시작되었습니다.
    `);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tabs />
      <Modal visible={!user}>
        <Login />
      </Modal>
    </NavigationContainer>
  );
}
