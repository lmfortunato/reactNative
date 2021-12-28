import { StatusBar } from 'expo-status-bar';
import {createAppContainer } from "react-navigation"
import { createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import ListScreen from './src/screens/Listscreen';
import ImageScreen from './src/screens/ImageScreen';
import Counter from './src/screens/Counter';
import ColorScreen from './src/screens/ColorScreen';
import ColorGenerator from './src/screens/ColorGenerator';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';


const navigator = createStackNavigator(
  {
    Home: Home,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
    Counter: Counter,
    ColorScreen: ColorScreen,
    ColorGenerator: ColorGenerator,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React Native App"
    }
  }
)

export default createAppContainer(navigator)
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hi There! Im Lu 🥳</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
