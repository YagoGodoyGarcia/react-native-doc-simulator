import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Alvara() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        
        <View style={styles.headerText}>
          <Text style={styles.title}>PREFEITURA DO MUNICÍPIO DE SÃO PAULO</Text>
          <Text style={styles.subtitle}>SECRETARIA MUNICIPAL DE MOBILIDADE E TRÂNSITO</Text>
          <Text style={styles.documentTitle}>ALVARÁ DE ESTACIONAMENTO</Text>
        </View>
      </View>

      {/* Linha 1 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Modalidade:</Text>
        <Text>Taxi</Text>
      </View>
      
      {/* Linha 2 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Número do Alvará:</Text>
        <Text>123456</Text>
      </View>
      
      {/* Linha 3 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Validade:</Text>
        <Text>31/12/2025</Text>
      </View>
      
      {/* Linha 4 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Endereço:</Text>
        <Text>Rua Fictícia, 123 - Bairro Fictício</Text>
      </View>

      {/* Linha 5 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Condutor:</Text>
        <Text>João da Silva</Text>
      </View>

      {/* Linha 6 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Marca/Modelo:</Text>
        <Text>Fiat Uno</Text>
      </View>

      {/* Linha 7 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Placa:</Text>
        <Text>ABC-1234</Text>
      </View>

      {/* Linha 8 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Isenção:</Text>
        <Text>ICMS/IPVA</Text>
      </View>

      {/* Linha 9 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Observação:</Text>
        <Text>Licença emitida para veículo de transporte escolar</Text>
      </View>

      {/* Linha 10 - Dados Fixos */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Data de Emissão:</Text>
        <Text>01/01/2023</Text>
      </View>

      {/* QR Code */}
      <View style={styles.qrCodeContainer}>
        <FontAwesome5 name="qrcode" size={50} color="black" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headerText: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  documentTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  rowTitle: {
    fontWeight: 'bold',
    width: '30%', // Ajuste da largura da coluna
    fontSize: 14,
  },
  qrCodeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
