import "@/global.css";

import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NAV_THEME } from "../lib/theme";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaProvider>
      <ThemeProvider
        value={NAV_THEME[colorScheme === "dark" ? "dark" : "light"]}
      >
        <Stack />
        <PortalHost />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
