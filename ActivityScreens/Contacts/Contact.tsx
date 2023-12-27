import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {TUsers} from '../Home.tsx';
import {styles} from '../../Stylesheet/StyleSheet.tsx';
import {createStackNavigator} from '@react-navigation/stack';
import {ContactStackParamsList} from '../../App.tsx';
import {UserProfile} from './UserProfile.tsx';
import ContactUs from './Contacts.tsx';
import {NavigationProp} from '@react-navigation/native';

type TContactProps = {
  user: TUsers;
  navigation: NavigationProp<ContactStackParamsList>;
};
const Stack = createStackNavigator();
const defaultUser: TUsers = {
  id: 1,
  firstName: 'Terry',
  lastName: 'Medhurst',
  maidenName: 'Smitham',
  age: 50,
  gender: 'male',
  email: 'atuny0@sohu.com',
  phone: '+63 791 675 8914',
  username: 'atuny0',
  birthDate: '2000-12-25',
  image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
  bloodGroup: 'A−',
  height: 189,
  weight: 75.4,
  eyeColor: 'Green',
  university: 'Capitol University',
};
export function ContactStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        initialParams={{user: defaultUser}}
      />
    </Stack.Navigator>
  );
}

function Contact({navigation, user}: TContactProps) {
  const navigateToUser = () => {
    navigation.navigate('UserProfile', {user: user});
  };
  return (
    <Pressable onPress={navigateToUser}>
      <View style={styles.contact}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: user.image,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.userDetail}>
          <Text>
            Name : {user.firstName} {user.lastName}
          </Text>
          <Text>Age : {user.age}</Text>
          <Text>Phone : {user.phone}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Contact;
