// components/PDFViewer.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { PinchGestureHandler, State, TapGestureHandler, HandlerStateChangeEvent } from 'react-native-gesture-handler'; // Corrigido o tipo do evento
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const PDFViewer = ({ pages }: { pages: React.ReactNode[] }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const scale = useSharedValue(1);
  const lastTap = useSharedValue(0);

  // Detectando o gesto de Pinça para zoom
  const onPinchEvent = (event: any) => {
    scale.value = event.scale;
  };

  const onPinchStateChange = (event: any) => {
    if (event.state === State.END) {
      scale.value = withTiming(1, { duration: 300 });
    }
  };

  // Detectando o duplo toque para zoom
  const handleDoubleTap = (event: HandlerStateChangeEvent<any>) => {
    const currentTime = Date.now();
    const tapInterval = currentTime - lastTap.value;

    if (tapInterval < 300) {
      // Duplo toque
      if (scale.value === 1) {
        scale.value = withTiming(1.5, { duration: 200 }); // Aumentar o zoom para 1.5x
      } else {
        scale.value = withTiming(1, { duration: 200 }); // Reduzir o zoom para 1x
      }
    }

    lastTap.value = currentTime;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Botão de abrir o modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Abrir Documento</Text>
      </TouchableOpacity>

      {/* Modal com o PDF Viewer */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {/* Gestos para Pinça e Duplo Toque */}
          <PinchGestureHandler
            onGestureEvent={onPinchEvent}
            onHandlerStateChange={onPinchStateChange}
          >
            <Animated.View style={[styles.modalContent, animatedStyle]}>
              <TapGestureHandler
                onHandlerStateChange={handleDoubleTap} // Detecta o duplo toque
              >
                <Animated.View style={styles.scrollView}>
                  <ScrollView
                    horizontal={false}
                    pagingEnabled
                    showsVerticalScrollIndicator={false}
                  >
                    {pages.map((page, index) => (
                      <View key={index} style={styles.pageContainer}>
                        {page}
                      </View>
                    ))}
                  </ScrollView>
                </Animated.View>
              </TapGestureHandler>
            </Animated.View>
          </PinchGestureHandler>

          {/* Botão de fechar o modal */}
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: width * 0.9,
    height: height * 0.8,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    minHeight: height * 0.8,
  },
  closeButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
});

export default PDFViewer;
