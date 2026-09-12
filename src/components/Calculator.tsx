import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Display from './Display';
import Button from './Button';
import { calculateResult } from '../utils/calculatorUtils';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberPress = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimalPress = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setWaitingForNewValue(false);
    }
  };

  const handleOperationPress = (op: string) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculateResult(previousValue, currentValue, operation);
      setDisplay(result.toString());
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculateResult(previousValue, currentValue, operation);
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleDelete = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleToggleSign = () => {
    const value = parseFloat(display);
    setDisplay((value * -1).toString());
  };

  const handlePercentage = () => {
    const value = parseFloat(display);
    setDisplay((value / 100).toString());
  };

  return (
    <View style={styles.calculator}>
      <Display value={display} />
      
      <View style={styles.buttonGrid}>
        {/* Row 1 */}
        <Button label="C" onPress={handleClear} type="function" />
        <Button label="+/-" onPress={handleToggleSign} type="function" />
        <Button label="%" onPress={handlePercentage} type="function" />
        <Button label="÷" onPress={() => handleOperationPress('/')} type="operation" />

        {/* Row 2 */}
        <Button label="7" onPress={() => handleNumberPress('7')} type="number" />
        <Button label="8" onPress={() => handleNumberPress('8')} type="number" />
        <Button label="9" onPress={() => handleNumberPress('9')} type="number" />
        <Button label="×" onPress={() => handleOperationPress('*')} type="operation" />

        {/* Row 3 */}
        <Button label="4" onPress={() => handleNumberPress('4')} type="number" />
        <Button label="5" onPress={() => handleNumberPress('5')} type="number" />
        <Button label="6" onPress={() => handleNumberPress('6')} type="number" />
        <Button label="−" onPress={() => handleOperationPress('-')} type="operation" />

        {/* Row 4 */}
        <Button label="1" onPress={() => handleNumberPress('1')} type="number" />
        <Button label="2" onPress={() => handleNumberPress('2')} type="number" />
        <Button label="3" onPress={() => handleNumberPress('3')} type="number" />
        <Button label="+" onPress={() => handleOperationPress('+')} type="operation" />

        {/* Row 5 */}
        <Button label="0" onPress={() => handleNumberPress('0')} type="number" style={styles.zeroButton} />
        <Button label="." onPress={handleDecimalPress} type="number" />
        <Button label="=" onPress={handleEquals} type="equals" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#262626',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  zeroButton: {
    flex: 2,
  },
});