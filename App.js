import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, SimpleLineIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import DashboardScreen from './screens/DashboardScreen';
import ExerciseListView from './screens/ExerciseListView';
import ExerciseTemplates from './screens/ExerciseTemplates';
import WelcomeScreen from './screens/WelcomeScreen';
import useGetOnboardingStatus from './utils/useGetOnboardingStatus';
import { createStackNavigator } from '@react-navigation/stack';
import AddExerciseScreen from './screens/AddExerciseScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function useResetScreenOnBlur() {
  useFocusEffect(
    React.useCallback(() => {
      return () => navigation.setParams({ screen: undefined, params: undefined });
    }, [navigation])
  );
};

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: 'black' }, tabBarActiveTintColor: 'white' }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="graph" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="TemplateStack" component={TemplateStackScreen} options={{
        unmountOnBlur: true,
        tabBarLabel: 'Templates',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="weight-lifter" size={size} color={color} />
        ),
      }} />
      <Tab.Screen
        name="Statistics"
        component={ExerciseListView}
        options={{
          tabBarLabel: 'Statistics',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star" size={size} color={color} />
          ),
        }} />
      <Tab.Screen name="Profile" component={WelcomeScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-person-circle" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}

const TemplateStack = createStackNavigator();

function TemplateStackScreen() {
  return (
    <TemplateStack.Navigator screenOptions={{ headerShown: false }}>
      <TemplateStack.Screen name="ExerciseTemplates" component={ExerciseTemplates} />
      <TemplateStack.Screen name="AddExerciseTemplate" component={AddExerciseScreen} />
    </TemplateStack.Navigator>
  );
}

export default function App() {
  const { isFirstLaunch, isLoading: onboardingIsLoading } = useGetOnboardingStatus();
  let initialRoute = "Home";

  if (onboardingIsLoading) {
    return null;
  }

  if (isFirstLaunch) {
    initialRoute = "Welcome";
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>)

} 
