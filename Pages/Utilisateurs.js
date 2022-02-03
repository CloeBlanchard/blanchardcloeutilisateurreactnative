import { View, Text, Button } from 'react-native';
import React from 'react';
import Navbar from '../Components/Navbar';
import { useState } from 'react/cjs/react.development';

export const Utilisateurs = ({route, navigation}) => {
    // affiche des utilisateurs
    const {utilisateurs} = route.params || "";
    // const [utilisateurs, setUtilisateurs] = useState([]);

    // const ajoutUtilisateurs = (nouvelUtilisateur) => {
    //     setUtilisateurs([...utilisateurs, nouvelUtilisateur]);
    // };

    // const handleAjoutUtilisateur = () => {
    //     navigation.navigate('Ajouter un nouvel utilisateur', {ajoutUtilisateurs: ajoutUtilisateurs});
    // }

  return (
    <View>
        <Navbar navigation={navigation} />
        <Text> Voici la liste des utilisateurs :
        {JSON.stringify(utilisateurs)}
        </Text>
    </View>
  );
};

export default Utilisateurs;
