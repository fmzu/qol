import { Tabs } from "expo-router"

import Ionicons from "@expo/vector-icons/Ionicons"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
      }}
      height={180}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "メッセージ",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "mail-sharp" : "mail-outline"}
              color={color}
              size={32}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "アルバム",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "camera" : "camera-outline"}
              color={color}
              size={32}
            />
          ),
        }}
      />
    </Tabs>
  )
}
