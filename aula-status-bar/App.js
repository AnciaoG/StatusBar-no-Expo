import React, { useState } from 'react';
import { View, Text, Button, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="blue"
        barStyle="dark-content"
        animated={true}
        hidden={!visible}
      />
      <Text style={styles.text}>StatusBar azul com texto escuro</Text>
      <Button
        title={visible ? "Ocultar StatusBar" : "Exibir StatusBar"}
        onPress={() => setVisible(!visible)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
