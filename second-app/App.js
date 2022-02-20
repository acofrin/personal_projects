import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GameOverScreen from './screens/GameOverScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const[userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content= <GameScreen userCoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if (guessRounds>0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber = {userNumber} onRestart={configureNewGameHandler}/>;
  }

  return (
    <View style={styles.screen} >
      <Header title="Guess how Many Farts!" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1
  }

});
