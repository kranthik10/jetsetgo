import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "@/components/MapView";
import { Ionicons } from "@expo/vector-icons";

const now = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-row items-center justify-between p-4">
        <Ionicons name="logo-jet" size={32} color="black" />
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <MapView />
      <View className="absolute bottom-4 left-4 right-4 flex-row justify-between">
        <TouchableOpacity className="bg-white p-4 rounded-full">
          <Text className="text-black">Connections Nearby</Text>
          <View className="absolute top-0 right-0 bg-red-500 rounded-full w-6 h-6 items-center justify-center">
            <Text className="text-white">5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-full">
          <Text className="text-black">Find Nearby Activities</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default now;
