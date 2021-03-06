import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = props => {
    return (
    <View style={styles.screen}>
        <Text> Its over B****</Text>
        
        <Button title="TRY AGAIN" onPress={props.onRestart}/>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;