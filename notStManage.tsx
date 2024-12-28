import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const SimpleNoStateExample: React.FC = () => {
  let name = '';  // Variabel biasa, bukan state

  // Fungsi handleSubmit yang akan dipanggil ketika tombol "Submit" ditekan
  const handleSubmit = () => {
    Alert.alert(`Welcome to Training React Native, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Aplikasi Trena</Text>
      </View>

      <TextInput
        placeholder="Masukkan nama Anda"  // Placeholder yang akan muncul ketika input kosong
        onChangeText={(text) => name = text}  // Mengupdate variabel name tanpa menggunakan state
        style={styles.input}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {/* Menampilkan teks berdasarkan variabel name */}
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

// Styling komponen
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

export default SimpleNoStateExample;
