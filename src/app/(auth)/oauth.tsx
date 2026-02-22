import { Text } from "@/components/ui/text";
import React from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OAuth() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-2">
      <Image
        source={require("@root/assets/images/icon.png")}
        className="aspect-square size-8 rounded-lg self-center overflow-hidden"
      />
      <View className="items-center">
        <Text className="text-3xl font-semibold">Please be patient!</Text>
        <Text className="text-xl">We're signing you in</Text>
      </View>
      <ActivityIndicator className="text-foreground size-12" />
    </SafeAreaView>
  );
}
