import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { CameraView } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FacialRegister({ navigation }) {
  const [cameraVisible, setCameraVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [facing, setFacing] = useState('front');

  async function registerFace(photoUri) {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('cuil', '123456789');
      formData.append('image', {
        uri: photoUri,
        name: 'photo.jpg',
        type: 'image/jpeg'
      });

      const res = await fetch('https://52ve8mm1q0ra.share.zrok.io/register', {
        method: 'POST',
        headers: {
          'skip_zrok_interstitial': 'true',
        },
        body: formData
      });

      const data = await res.json();
      if (res.ok) {
        await AsyncStorage.setItem('facialRegistered', 'true');
        Alert.alert('Registro exitoso');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', data.message || 'No se pudo registrar');
      }
    } catch (error) {
      Alert.alert('Error de red', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {cameraVisible && (
        <CameraView style={styles.camera} facing={facing} />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          const photoUri = 'uri_de_ejemplo'; // aquí integras la captura real
          await registerFace(photoUri);
        }}
      >
        <Text style={styles.buttonText}>Registrar Rostro</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#1976d2" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { flex: 1, width: '100%' },
  button: { backgroundColor: '#1976d2', padding: 15, borderRadius: 25, marginTop: 20,marginBottom: 50, },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center',paddingHorizontal: 20,},
});
