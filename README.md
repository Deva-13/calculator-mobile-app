# Calculator Mobile App

A simple, elegant, and fully functional calculator mobile application built with React Native and Expo.

## Features

✨ **Core Features**
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Decimal number support
- Clear (C) functionality to reset the calculator
- Delete (backspace) to remove the last digit
- Percentage calculation
- Toggle sign (±) to change positive/negative numbers
- Real-time display updates

🎨 **Design**
- Dark theme with modern UI
- Responsive layout that works on all screen sizes
- Color-coded buttons for different operations
- Smooth animations and touch feedback

📱 **Cross-Platform**
- Works on iOS
- Works on Android
- Works on Web (via Expo Web)

## Project Structure

```
calculator-mobile-app/
├── App.tsx                          # Main app component
├── src/
│   ├── components/
│   │   ├── Calculator.tsx          # Main calculator logic
│   │   ├── Display.tsx             # Display component
│   │   └── Button.tsx              # Reusable button component
│   └── utils/
│       └── calculatorUtils.ts      # Calculator utility functions
├── app.json                         # Expo configuration
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Deva-13/calculator-mobile-app.git
cd calculator-mobile-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## Running on Different Platforms

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Web
```bash
npm run web
```

## How to Use

1. **Enter Numbers**: Tap the number buttons (0-9) to enter values
2. **Operations**: Tap an operation button (+, −, ×, ÷) to perform calculations
3. **Decimals**: Tap the dot (.) to add decimal points
4. **Equals**: Tap = to get the result
5. **Clear**: Tap C to reset the calculator
6. **Delete**: Use the backspace function to remove the last digit
7. **Percentage**: Convert numbers to percentages
8. **Toggle Sign**: Change positive numbers to negative and vice versa

## Technologies Used

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform and build tools
- **TypeScript**: Type-safe JavaScript
- **React Hooks**: State management with useState

## Color Scheme

- **Background**: Dark gray (#1a1a1a, #262626)
- **Numbers**: Medium gray (#404040)
- **Operations**: Orange (#ff9500)
- **Functions**: Light gray (#505050)
- **Equals**: Green (#4CAF50)
- **Text**: White (#ffffff)

## Features Breakdown

### Calculator Component
- Manages calculator state (display, previous value, operation, etc.)
- Handles all user interactions
- Performs calculations using utility functions

### Display Component
- Shows the current input or result
- Dynamically adjusts font size for large numbers
- Clean, readable typography

### Button Component
- Reusable button with different styles based on type
- Smooth touch feedback with activeOpacity
- Supports custom styling

### Utility Functions
- `calculateResult()`: Performs arithmetic operations
- `formatDisplay()`: Formats numbers for display

## Future Enhancements

- [ ] Scientific calculator mode (sin, cos, tan, log, etc.)
- [ ] Calculation history
- [ ] Theme customization (light/dark mode toggle)
- [ ] Keyboard support for desktop/web
- [ ] Animation improvements
- [ ] Unit tests

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

---

**Built with ❤️ using React Native**