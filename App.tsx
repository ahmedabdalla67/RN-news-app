import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';

import HomeScreen from './src/screens/homeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/Navigation/mainStack';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
