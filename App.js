import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClassLifeCycle from './pages/ClassLifeCycle';

export default function App() {
  return (
    <View style={styles.container}>
      <ClassLifeCycle />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
