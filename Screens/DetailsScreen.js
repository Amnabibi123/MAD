import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Details</Text>
      <Text style={styles.text}>
        Version: 1.0.0{"\n"}Platform: React Native{"\n"}Developed by: Amna Bibi{"\n"}Year: 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fefefe' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#222' },
  text: { fontSize: 16, color: '#555', textAlign: 'center', lineHeight: 26 },
});
