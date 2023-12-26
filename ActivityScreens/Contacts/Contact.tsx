import {View, Text, Image} from 'react-native';
import React from 'react';
import {TUsers} from '../Home.tsx';
import {styles} from '../../Stylesheet/StyleSheet.tsx';
type TContactProps = {
  user: TUsers;
};

function Contact({user}: TContactProps) {
  return (
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
  );
}

export default Contact;
