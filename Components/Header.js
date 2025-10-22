import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { width:'100%', padding:12, alignItems:'center', borderBottomWidth:1, borderColor:'#ddd' },
  text: { fontSize:18, fontWeight:'600' }
});
