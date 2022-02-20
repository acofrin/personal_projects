import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';
import text from '../constants/Text';


const HomeHeader = props => {

    const backbuttonText = () => {
        return (
            <Text style={{color: Color.accent2, fontWeight: 'bold'}}> Back</Text> 
        );
    }
    
    return (
        <View style={styles.header}>
                <Text style={text.header}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 32,
        backgroundColor: Color.accent3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default HomeHeader;