import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

export const Formulaire = ({route, navigation}) => {
    let [prenom, setPrenom] = useState('');
    let [nom, setNom] = useState('');
    let [age, setAge] = useState('');

    const {ajouterUtilisateur} = route.params || '';

    const handlePrenom = (valuePrenom) => {
        setPrenom(valuePrenom);
    } 
    const handleNom = (valueNom) => {
        setNom(valueNom);
    }
    const handleAge = (valueAge) => {
        setAge(valueAge);
    }

    const ajoutUtilisateur = () => {
        route.params.ajouterUtilisateur({
            prenom: prenom,
            nom: nom,
            age: age,
        });
    };

  return (
    <View>
        <Navbar navigation={navigation}/>
        <Text>Voici le formulaire pour ajouter d'autres utilisateurs </Text>
        <View>
            <TextInput onChangeText={handlePrenom} placeholder='Entrez votre prénom'/>
            <TextInput onChangeText={handleNom} placeholder='Entrez votre nom'/>
            <TextInput onChangeText={handleAge} placeholder='Entrez votre age'/>
            <Button title='Ajouter votre utilisateur' onPress={ajoutUtilisateur}/>
        </View>
    </View>
  );
};

export default Formulaire;
