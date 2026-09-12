export function calculateResult(
  firstValue: number,
  secondValue: number,
  operation: string
): number {
  switch (operation) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    case '/':
      if (secondValue === 0) {
        return 0; // Handle division by zero
      }
      return firstValue / secondValue;
    default:
      return secondValue;
  }
}

export function formatDisplay(value: number): string {
  // Format large numbers with commas
  if (Math.abs(value) >= 1000) {
    return value.toLocaleString();
  }
  return value.toString();
}