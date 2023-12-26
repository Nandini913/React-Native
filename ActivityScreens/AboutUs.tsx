import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {styles} from '../Stylesheet/StyleSheet.tsx';
function AboutUs() {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Welcome to the About Us Screen</Text>
    </SafeAreaView>
  );
}

export default AboutUs;
