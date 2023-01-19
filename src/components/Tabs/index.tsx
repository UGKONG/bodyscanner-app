import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../../screens/Home";
import Body from "../../screens/Body";
import Pose from "../../screens/Pose";
import Setting from "../../screens/Setting";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 홈 탭
function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "바디스캐너" }}
      />
    </Stack.Navigator>
  );
}

// 바디 탭
function BodyTab() {
  return (
    <Stack.Navigator initialRouteName="Body">
      <Stack.Screen
        name="Body"
        component={Body}
        options={{ headerTitle: "검사 선택" }}
      />
      <Stack.Screen
        name="Pose"
        component={Pose}
        options={{ headerTitle: "정적 검사" }}
      />
      <Stack.Screen
        name="Rom"
        component={Pose}
        options={{ headerTitle: "동적 검사" }}
      />
    </Stack.Navigator>
  );
}

// 셋팅 탭
function SettingTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "help";

          if (name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (name === "BodyTab") {
            iconName = focused ? "body" : "body-outline";
          } else if (name === "SettingTab") {
            iconName = focused ? "construct-sharp" : "construct-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#8b61dc",
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen
        name="BodyTab"
        component={BodyTab}
        options={{ tabBarBadge: 2 }}
      />
      <Tab.Screen name="SettingTab" component={SettingTab} />
    </Tab.Navigator>
  );
}
