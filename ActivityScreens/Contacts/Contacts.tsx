import {
  FlatList,
  SafeAreaView,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import React from 'react';
import Contact from './Contact.tsx';
import {styles} from '../../Stylesheet/StyleSheet.tsx';
import {useUserContext} from '../../DataContext/UserDataContext.tsx';

function ContactUs() {
  const {users} = useUserContext();
  return (
    <SafeAreaView>
      <Text style={styles.header}>Welcome to the Contact Screen</Text>
      {users ? (
        <FlatList
          data={users}
          renderItem={({item}) => <Contact user={item} />}
        />
      ) : (
        <View>
          <Text>Loading...</Text>
          <ActivityIndicator size="small" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
}

export default ContactUs;
