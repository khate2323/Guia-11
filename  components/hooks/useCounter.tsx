import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export function useCounter(initialValue: number = 10) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([initialValue]);

  useEffect(() => {
    // Evita duplicar valores si no hay cambio real
    setHistory(prev => {
      if (prev[prev.length - 1] !== count) {
        return [...prev, count];
      }
      return prev;
    });
  }, [count]);

  const Incrementacion = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrementacion = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetear = () => {
    if (count !== 0) {
      setCount(0);
    }
  };

  const confirmarReset = () => {
    console.log("Long press detectado");
    Alert.alert(
      'Confirmar Reinicio',
      '¿Estás seguro de que deseas reiniciar el contador a 0?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí, reiniciar', onPress: resetear, style: 'destructive' },
      ]
    );
  };
  return {
    count,
    history,
    Incrementacion,
    decrementacion,
    resetear,
    confirmarReset,
  };
}
