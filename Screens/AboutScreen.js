import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        This app demonstrates React Native navigation and screen design best practices.
        It’s built with simplicity, reusability, and clean UI principles in mind.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f9ff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#222' },
  text: { fontSize: 15, color: '#555', textAlign: 'center', lineHeight: 22 },
});
