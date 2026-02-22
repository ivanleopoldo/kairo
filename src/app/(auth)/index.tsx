import { Button } from "@/components/ui/button";
import { SocialConnections } from "@/components/ui/social-connections";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthIndex() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-2 px-4">
      <Image
        source={require("@root/assets/images/icon.png")}
        className="aspect-square size-8 rounded-lg self-center overflow-hidden"
      />
      <View className="gap-6">
        <View className="items-center">
          <Text className="text-3xl font-semibold">Welcome to Kairo!</Text>
          <Text className="text-lg text-muted-foreground">
            Sign in to continue
          </Text>
        </View>
        <SocialConnections />
        <Button onPress={() => router.push("/oauth")}>
          <Text>OAuth</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
