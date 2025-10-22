import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ✅ Make sure you have this installed

export default function SettingScreen({ navigation }) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("Logged out!") },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings ⚙️</Text>

      {/* Profile Option */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons name="person-circle-outline" size={24} color="#007bff" />
        <Text style={styles.optionText}>Profile</Text>
      </TouchableOpacity>

      {/* Notifications */}
      <View style={styles.optionRow}>
        <Ionicons name="notifications-outline" size={24} color="#007bff" />
        <Text style={styles.optionText}>Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={() => setNotifications(!notifications)}
        />
      </View>

      {/* Dark Mode */}
      <View style={styles.optionRow}>
        <Ionicons name="moon-outline" size={24} color="#007bff" />
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>

      {/* Privacy */}
      <TouchableOpacity style={styles.option}>
        <Ionicons name="lock-closed-outline" size={24} color="#007bff" />
        <Text style={styles.optionText}>Privacy & Security</Text>
      </TouchableOpacity>

      {/* Help */}
      <TouchableOpacity style={styles.option}>
        <Ionicons name="help-circle-outline" size={24} color="#007bff" />
        <Text style={styles.optionText}>Help & Support</Text>
      </TouchableOpacity>

      {/* About */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("About")}
      >
        <Ionicons name="information-circle-outline" size={24} color="#007bff" />
        <Text style={styles.optionText}>About App</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={[styles.option, styles.logout]} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#dc3545" />
        <Text style={[styles.optionText, { color: "#dc3545" }]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    marginLeft: 10,
  },
  logout: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
