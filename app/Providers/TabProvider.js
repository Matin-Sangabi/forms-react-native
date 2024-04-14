import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { FeedStack } from "./StackProviders";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountScreen from "../Screen/AccountScreen";
import PostScreen from "../Screen/PostScreen";
import AddPostButton from "../Components/AddPostButton";


const Tabs = createBottomTabNavigator();

export default TabsProviders = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: Platform.OS === "ios" ? 80 : 60,
      },
    }}
  >
    <Tabs.Screen
      name="Feed"
      component={FeedStack}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />

    <Tabs.Screen
      name="Post"
      component={PostScreen}
      options={() => ({
        tabBarButton: (props) => <AddPostButton {...props} />,
      })}
    />
    <Tabs.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
        headerShown: true,
        headerTitleAlign: "center",
      }}
    />
  </Tabs.Navigator>
);
