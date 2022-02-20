import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';
import text from '../constants/Text';
import { Button, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-elements/dist/helpers';
import { useNavigation } from '@react-navigation/native';

const MainHeader = props => {

    const navigation = useNavigation();

    const backbuttonText = () => {
        return (
            <Text style={{color: Color.accent2, fontWeight: 'bold'}}> Back</Text> 
        );
    }
    
    return (
        <View style={styles.header}>
            <View style={{flex: 1, justifyContent:'flex-start', alignItems:'flex-start'}}>
                <Button   
                    icon={<Icon
                        name="arrow-left"
                        size={15}
                        color={Color.accent2}
                    />}
                    title={backbuttonText}
                    type='clear'
                    onPress={navigation.goBack}
                />
            </View>
            <View style={{flex: 2, justifyContent:'flex-start'}}>
                <Text style={text.header}>{props.title}</Text>
            </View>
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

export default MainHeader;