import { View, Text, Pressable } from 'react-native';
import React from 'react';

let utilisateurs = [
    {
        nom: "Blanchard",
        prenom: "Cloé",
        age: "23"
    },{
        nom: "Blanchard",
        prenom: "Cloé",
        age: "23"
    },{
        nom: "Blanchard",
        prenom: "Cloé",
        age: "23"
    }
]

export const Navbar = ({navigation}) => {

    // fonction permettant de naviguer sur la page d'accueil
    const handleHomePage = () => {
        navigation.navigate("Home");
    }
    const handleDisplayUsers = () => {
        navigation.navigate("DisplayUsers", {utilisateurs});
    }
    const handleFormulaire = () => {
        navigation.navigate("Formulaire")
    }
  return (
    <View>
        <Text>Ceci est une Navbar </Text>
      <Pressable style={ ({pressed}) => ({backgroundColor: pressed? "#00ffff": "yellow"})}
      onPress={handleHomePage}>
          <Text> Page d'accueil </Text>
      </Pressable>
      <Pressable style={ ({pressed}) => ({backgroundColor: pressed? "#00ffff": "yellow"})}
      onPress={handleDisplayUsers}>
          <Text> Affichage des utilisateurs </Text>
      </Pressable>
      <Pressable style={ ({pressed}) => ({backgroundColor: pressed? "#00ffff": "yellow"})}
      onPress={handleFormulaire}>
          <Text> Formulaire d'ajout d'utilisateurs </Text>
      </Pressable>
    </View>
  );
};

export default Navbar;
