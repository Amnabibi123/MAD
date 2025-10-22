import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp 👋</Text>
      <Text style={styles.subtitle}>Explore different sections below</Text>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800' }}
        style={styles.image}
      />

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Setting')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#222' },
  subtitle: { fontSize: 15, color: '#666', marginBottom: 10 },
  image: { width: '90%', height: 180, borderRadius: 10, marginVertical: 20 },
  buttonGroup: { width: '90%', alignItems: 'center' },
  button: {
    backgroundColor: '#007bff',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
