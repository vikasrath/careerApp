import { Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons'; // Import icon library
import { Text, TouchableOpacity } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Career Sathi",
          headerTitle: () => (
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4B9CD3' }}>Career Sathi</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Ionicons name="briefcase" size={24} color="#4B9CD3" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#E0F7FA', // Background color for header
          },
          headerTitleAlign: 'center', // Center-align title
        }}
      />
    </Stack>
  );
}
