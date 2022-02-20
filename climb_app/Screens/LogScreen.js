import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Color from '../constants/Color';
import Texts from '../constants/Text';
import {Slider} from '@miblanchard/react-native-slider';

const LogScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.sidebyside}>
                <Text style= {Texts.average, styles.headerLabels} > Date     </Text>
                <TextInput style= {styles.input}/>
            </View>
                <Text style= {Texts.average, styles.headerLabels}> Tick </Text>
                <Text style= {Texts.average, styles.headerLabels}> Type </Text>
                <Text style= {Texts.average, styles.headerLabels}> Grade </Text>
                    <Slider 
                        minimumValue= {4} 
                        maximumValue= {15}
                        step={1}
                        value = {10}/>
                <Text style= {Texts.average, styles.headerLabels}> Style </Text>
                <Text style= {Texts.average, styles.headerLabels}> Where </Text>
                <Text style= {Texts.average, styles.headerLabels}> Notes </Text>
                <TouchableOpacity style={styles.buttonContainer}>
                     <Text style= {Texts.button} >Log It!</Text>
                </TouchableOpacity> 
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'flex-start'
    },
    buttonContainer: {
        flex:1,
        elevation: 8,
        backgroundColor: Color.accent2,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: Color.accent3,
        borderWidth: 2,
        marginVertical:200,
        marginHorizontal:10,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 0.86,  
    },
    input: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 10
    },
    headerLabels: {
        justifyContent: "flex-start",
        alignContent: "flex-start"
    },
    sidebyside:{
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default LogScreen;