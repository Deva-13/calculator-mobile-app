import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DisplayProps {
  value: string;
}

export default function Display({ value }: DisplayProps) {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    minHeight: 80,
  },
  displayText: {
    fontSize: 48,
    fontWeight: '300',
    color: '#ffffff',
    letterSpacing: 1,
  },
});