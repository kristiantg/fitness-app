import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import DashboardScreen from './screens/DashboardScreen';
import ExerciseListView from './screens/ExerciseListView';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ExerciseTemplates from './screens/ExerciseTemplates';
import WelcomeScreen from './screens/WelcomeScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: 'black' }, tabBarActiveTintColor: 'white' }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="graph" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Templates" component={ExerciseTemplates} options={{
        tabBarLabel: 'Templates',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="weight-lifter" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Statistics" component={ExerciseListView} options={{
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

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
} 
