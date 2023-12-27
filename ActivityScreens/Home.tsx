import {SafeAreaView, Text, View, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../Stylesheet/StyleSheet.tsx';
import {useFetchData} from '../FetchData/fetchData.ts';
import {useUserContext} from '../DataContext/UserDataContext.tsx';
import {getAllUsers} from '../FetchData/GetUrl.ts';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App.tsx';

export type TUsers = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  university: string;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type THomeProps = {
  navigation: HomeScreenNavigationProp;
};

type TFetchedData = {
  users: TUsers[];
  limit: number;
  skip: number;
  total: number;
};
function Home({navigation}: THomeProps) {
  const {setUsers} = useUserContext();
  const {data} = useFetchData<TFetchedData>(getAllUsers());
  useEffect(() => {
    data && setUsers(data.users);
  }, [data]);

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.header}>Welcome to React Navigation</Text>
      <View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Contacts')}>
          <Text style={styles.text}>Contact List</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.text}>About Us</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Home;
