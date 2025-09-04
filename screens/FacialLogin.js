// screens/FacialLogin.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';

export default function FacialLogin({ navigation }) {
  const [loading, setLoading] = useState(false);

  async function recognizeFace(photoUri) {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: photoUri,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });

      const res = await fetch('https://52ve8mm1q0ra.share.zrok.io/recognize', {
        method: 'POST',
        headers: { 'skip_zrok_interstitial': 'true' },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', data.message || 'No se reconoció el rostro');
      }
    } catch (error) {
      Alert.alert('Error de red', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reconocimiento Facial</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#1976d2" />
      ) : (
        <Button title="Iniciar reconocimiento" onPress={() => recognizeFace('file://ruta-de-prueba.jpg')} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
});
