import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Components/Navbar';

export const Home = ({navigation}) => {
  return (
    <View>
        <Navbar navigation={navigation}/>
      <Text> Page d'accueil </Text>
    </View>
  );
};

export default Home;
