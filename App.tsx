import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home, {TUsers} from './ActivityScreens/Home.tsx';
import ContactUs from './ActivityScreens/Contacts/Contacts.tsx';
import AboutUs from './ActivityScreens/AboutUs.tsx';
import {UsersProvider} from './DataContext/UserDataContext.tsx';
import {UserProfile} from './ActivityScreens/Contacts/UserProfile.tsx';

export type RootStackParamList = {
  Home: undefined;
  Contacts: undefined;
  AboutUs: undefined;
  UserProfile: {
    user: TUsers;
  };
};

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <UsersProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contacts" component={ContactUs} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </UsersProvider>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
