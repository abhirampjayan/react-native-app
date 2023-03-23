import React from 'react';

import {
  Text,
  View,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={!isDarkMode ? styles.container_dark : styles.container_light}>
      <SafeAreaView>
        <StatusBar
          animated={true}
          backgroundColor="#00cccc"
          barStyle={'light-content'}
        />
        <View style={styles.logo}>
          <Text style={styles.text}>ZET!</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container_dark: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  container_light: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
  },
  text: {
    color: '#1c1c1c',
    fontSize: 32,
    fontWeight: '600',
  },
  logo: {
    backgroundColor: '#00cccc',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
export default AppPro;
