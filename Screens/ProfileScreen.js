import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Amna Bibi</Text>
      <Text style={styles.role}>Software Developer</Text>
      <Text style={styles.bio}>
        Passionate about coding, creativity, and building user-friendly digital experiences.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#222' },
  role: { fontSize: 16, color: '#007bff', marginVertical: 5 },
  bio: { fontSize: 14, color: '#555', textAlign: 'center', paddingHorizontal: 30, marginTop: 10 },
});
