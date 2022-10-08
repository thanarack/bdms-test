import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  Dimensions,
} from 'react-native';
import { PointContext } from '../App';

export default function Board() {
  const pointContext = React.useContext(PointContext);

  /**
   * When the user clicks the "New Game" button, reset the point value to 0 and update the screen to
   * "main" screen
   */
  const onNewGame = () => {
    pointContext.resetPoint();
    pointContext.updateScreen('main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leader boards</Text>
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollView}>
          <ScrollView>
            {pointContext.users.map((data, index) => (
              <View key={index} style={styles.table}>
                <Text style={{ width: 200 }}>{data.name}</Text>
                <Text style={{ width: 20 }}>{data.point}</Text>
              </View>
            ))}
            {!pointContext.users.length && <Text>No have user.</Text>}
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={{ bottom: 100 }}>
        <Button onPress={onNewGame} title="New Game" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
  },
  table: {
    flex: 1,
    width: Dimensions.get('window').width - 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
