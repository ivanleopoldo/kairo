import "@/global.css";

import { NAV_THEME } from "@/lib/theme";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  initialRouteName: "(auth)",
};

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaProvider>
      <ThemeProvider
        value={NAV_THEME[colorScheme === "dark" ? "dark" : "light"]}
      >
        <ClerkProvider tokenCache={tokenCache}>
          <RootLayoutNav />
          <PortalHost />
        </ClerkProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function RootLayoutNav() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Protected guard={isSignedIn}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>
    </Stack>
  );
}
