import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  type: 'number' | 'operation' | 'function' | 'equals';
  style?: ViewStyle;
}

export default function Button({ label, onPress, type, style }: ButtonProps) {
  const getButtonStyle = () => {
    switch (type) {
      case 'operation':
        return styles.operationButton;
      case 'equals':
        return styles.equalsButton;
      case 'function':
        return styles.functionButton;
      case 'number':
      default:
        return styles.numberButton;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, type === 'operation' && styles.operationText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minWidth: '22%',
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  numberButton: {
    backgroundColor: '#404040',
  },
  operationButton: {
    backgroundColor: '#ff9500',
  },
  functionButton: {
    backgroundColor: '#505050',
  },
  equalsButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
  operationText: {
    fontSize: 28,
  },
});