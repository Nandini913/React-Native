import {ScrollView} from 'react-native-gesture-handler';
import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../Stylesheet/StyleSheet';

export function UserProfile({route}: {route: any}) {
  const {user} = route.params;
  return (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.profile}
        />
      </View>
      <View style={styles.userData}>
        <Text style={styles.user}>
          Name : {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.user}>Maiden Name : {user.maidenName}</Text>
        <Text style={styles.user}>Username : {user.username}</Text>
        <Text style={styles.user}>Email : {user.email}</Text>
        <Text style={styles.user}>Age : {user.age}</Text>
        <Text style={styles.user}>BirthDate : {user.birthDate}</Text>
        <Text style={styles.user}>Phone : {user.phone}</Text>
        <Text style={styles.user}>Gender : {user.gender}</Text>
        <Text style={styles.user}>BloodGroup : {user.bloodGroup}</Text>
        <Text style={styles.user}>Height : {user.height}</Text>
        <Text style={styles.user}>Weight : {user.weight}</Text>
        <Text style={styles.user}>Eye Color : {user.eyeColor}</Text>
        <Text style={styles.user}>University : {user.university}</Text>
      </View>
    </ScrollView>
  );
}
