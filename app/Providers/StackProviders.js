import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../Screen/FeedScreen";
import DetailsScreen from "../Screen/DetailsScreen";
import AccountScreen from "../Screen/AccountScreen";

const Stack = createNativeStackNavigator();

export const FeedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listing" component={FeedScreen} />
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="FeedDetails" component={DetailsScreen} />
    </Stack.Group>
  </Stack.Navigator>
);
