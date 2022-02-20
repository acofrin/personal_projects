import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import MainScreenButton from '../buttons/MainScreenButton';
import Colors from '../constants/Color';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = props => {    
   
    const navigation = useNavigation();
   
    return (

        <View style={styles.screen}>
            <ImageBackground source = {require('../assets/Mount.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.buttons}>
                <MainScreenButton title="Profile" onPress={() => navigation.navigate("Profile Screen")}/>
                <MainScreenButton title="View Climbs" onPress={() => navigation.navigate("View Screen")}/>
                <MainScreenButton title="Log Climbs" onPress={() => navigation.navigate("Log Screen")}/>
            </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    buttons: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        padding: 20,
    },
    image: {
        flex: 1,
        justifyContent: "center"
      }
});

export default HomeScreen;