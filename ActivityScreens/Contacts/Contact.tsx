import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {TUsers} from '../Home.tsx';
import {styles} from '../../Stylesheet/StyleSheet.tsx';
import {useNavigation} from '@react-navigation/native';
type TContactProps = {
  user: TUsers;
};

function Contact({user}: TContactProps) {
  const navigation = useNavigation();
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
