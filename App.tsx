import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FAB from './ components/FAB';
import { useCounter } from './ components/hooks/useCounter';

export default function App() {
  const {
  count,
  history,
  Incrementacion,
  decrementacion,
  resetear,
  confirmarReset,
} = useCounter(10);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB
        label="+1"
        onPress={Incrementacion}
        onLongPress={confirmarReset}
        position="right"
        bottomOffset={100}
      />
      <FAB
        label="-1"
        onPress={decrementacion}
        onLongPress={confirmarReset}
        position="right"
        bgColor="red"
      />
      <FAB
        label="Resetear"
        onPress={resetear}
        onLongPress={confirmarReset}
        position="left"
        bgColor='green'
      />


      <View style={styles.historyBox}>
        <Text style={styles.historyTitle}>Historial:</Text>
        <ScrollView>
          {history.map((value, index) => (
            <Text key={index} style={styles.historyItem}>
              {index + 1}. {value}
            </Text>
          ))}
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 96,
    fontWeight: 'bold',
    color: '#000',
  },
  historyBox: {
    marginTop: 40,
    width: '80%',
    maxHeight: 250,
    backgroundColor: 'pink',
    borderRadius: 23,
    padding: 10,
  },
  historyTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  historyItem: {
    fontSize: 16,
  },
});
