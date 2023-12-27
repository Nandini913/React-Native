import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home, {TUsers} from './ActivityScreens/Home.tsx';
import AboutUs from './ActivityScreens/AboutUs.tsx';
import {UsersProvider} from './DataContext/UserDataContext.tsx';
import {ContactStack} from './ActivityScreens/Contacts/Contact.tsx';

export type RootStackParamList = {
  Home: undefined;
  Contacts: undefined;
  AboutUs: undefined;
};

export type ContactStackParamsList = {
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
        <Stack.Screen
          name="Contacts"
          component={ContactStack}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AboutUs" component={AboutUs} />
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
