import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Button, Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import Input from '../components/input';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';


const StartGameScreen = props => {
    
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(); 

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue ('');
        setConfirmed(false);
    };
    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
            <Card style={styles.summaryContainer}>
            <Text>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title= "START GAME" onPress={()=> props.onStartGame(selectedNumber)} />
            </Card>
    }

    

    const confirmInputHandler = () => {
            const chosenNumber = parseInt(enteredValue);
            if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
                Alert.alert(
                    'Don`t try being sneaky...',
                    'Number has to be between 1 an 99.',
                    [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
                );
                return;
            }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    };

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }} >
        <View style = {styles.screen}>
            <Text style={styles.title} >Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Make a Guess</Text>
                <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType="number-pad" 
                    maxlength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Reset" onPress={(resetInputHandler)} color={Colors.accent} /></View>
                <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/></View>
            </View>
                </Card>
                {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:{
        width: 95
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop:20,
        alignItems: 'center'
    },
});


export default StartGameScreen;