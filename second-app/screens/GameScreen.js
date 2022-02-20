import React, {useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min; 
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const[currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, props.userCoice));
    
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userCoice, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === userCoice){
            onGameOver(rounds);
        }
    }, [currentGuess, userCoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userCoice) || (direction === 'greater' && currentGuess > props.userCoice))
        {Alert.alert ('you motherf***** liar...', 'tell the f******* truth', [{text: 'ugh', style: 'cancel'}]);
        return;
    }
    if (direction === 'lower'){
        currentHigh.current = currentGuess;
    } else {
        currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
    };

    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
                <Card style= {styles.buttonContainer}>
                    <Button title = "LOWER" onPress={nextGuessHandler.bind(this, 'lower')}/>
                    <Button title = "GREATER" onPress={nextGuessHandler.bind(this, 'greater')}/>
                </Card>

        </View>

    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    style:{},
    style:{}
});

export default GameScreen;