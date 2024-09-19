import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/home";
import Appointements from "./pages/appointements";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./pages/profile";

const Tab = createBottomTabNavigator();

export default function Tabs() {

  const screenOptions = {
    tabBarStyle: {
      backgroundColor: "#002851",
    },
    tabBarActiveTintColor: "#339CFF",
    tabBarInactiveTintColor: "#fff",
  };

  const tabs = [{
    name: "Home",
    component: Home,
    icon: "home",
  }, {
    name: "Agendamentos",
    component: Appointements,
    icon: "calendar",
  }, {
    name: "Perfil",
    component: Profile,
    icon: "person",
  }];

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
    >
      {tabs.map((t) => (
        <Tab.Screen
          key={t.name}
          name={t.name}
          component={t.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={t.icon} color={color} size={size} />
            ),
          }}
        />
      ))}

    </Tab.Navigator>
  );
}
