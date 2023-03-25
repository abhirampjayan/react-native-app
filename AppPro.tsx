import React from 'react';

import {
  View,
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  // StatusBar,
} from 'react-native';
import FancyCard from './components/FancyCard';
import FlatCard from './components/FlatCard';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={!isDarkMode ? styles.container_dark : styles.container_light}>
      <SafeAreaView>
        <ScrollView>
          <FlatCard />
          <FancyCard />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container_dark: {
    flex: 1,
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
  brand: {
    justifyContent: 'center',
  },
});
export default AppPro;
