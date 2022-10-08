import React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { PointContext } from '../App';

export default function MyPoint() {
  const pointContext = React.useContext(PointContext);

  return (
    <View style={styles.point}>
      <Text style={{ fontSize: 24 }}>Your Point : {pointContext.point}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  point: {
    marginTop: 50,
    alignItems: 'center',
  },
});
