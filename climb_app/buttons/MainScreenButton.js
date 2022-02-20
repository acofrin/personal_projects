import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';
import Texts from '../constants/Text';

const MainScreenButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{...styles.buttonContainer, ...props.style}}>
                <Text style= {Texts.button} >{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex:1,
        elevation: 8,
        backgroundColor: Color.accent2,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: Color.accent3,
        borderWidth: 2,
        marginVertical: 50,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 0.86,  
    },

});

export default MainScreenButton;