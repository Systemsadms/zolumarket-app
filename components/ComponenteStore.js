import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Componente ZoluFood</Text>
      <Button
        title="ZoluMarketTest"
        onPress={() => navigation.navigate('ZoluMarketTest')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});