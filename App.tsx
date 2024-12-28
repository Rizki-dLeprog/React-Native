import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const SimpleStateExample: React.FC = () => {
  const [name, setName] = useState<string>('');

  const handleSubmit = () => {
    Alert.alert(`Welcome to Training React Native, ${name}!`);
  };

  return (
    <View style={styles.container}>

      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Aplikasi Trena</Text>
      </View>

      <TextInput
        placeholder="Masukkan nama Anda"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      
      <Button title="Submit" onPress={handleSubmit} />

      {name ? (
        <Text style={styles.text}> 
          Nama Anda: {name}
        </Text>
      ) : (
        <Text style={styles.text}>
          Silakan masukkan nama.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  appBar: {
    padding: 10,
    marginBottom: 20,
  },
  appBarText: {
    color: 'black',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default SimpleStateExample;
