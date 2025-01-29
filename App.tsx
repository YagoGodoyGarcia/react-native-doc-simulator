// App.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PDFViewer from './components/PDFViewer';
import Alvara from './components/Alvara';

const CustomPage = ({ text }: { text: string }) => (
  <View style={styles.pageContent}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default function App() {
  return (
    <PDFViewer
      pages={[
        <Alvara/>,
        <CustomPage text="Página 2 - Outra Página" />,
        <CustomPage text="Página 3 - Simulando um PDF" />,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
