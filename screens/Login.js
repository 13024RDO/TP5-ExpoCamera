import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const navigation = useNavigation();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function handleLogin() {
    navigation.navigate('ProductManager');
  }

  function openCamera() {
    setShowCamera(true);
  }

  return (
    <View style={styles.container}>
      {!showCamera && (
        <>
          <Image source={require('../assets/1.png')} style={styles.profile} />

          <View style={styles.tarjeta}>
            <View style={styles.cajaTexto}>
              <TextInput
                placeholder='Correo@gmail.com'
                placeholderTextColor="#888"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.cajaTexto}>
              <TextInput
                placeholder='Contraseña'
                placeholderTextColor="#888"
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.PadreBoton}>
              <TouchableOpacity
                style={styles.cajaBoton}
                activeOpacity={0.8}
                onPress={handleLogin}
              >
                <Text style={styles.TextoBoton}>Iniciar Sesión</Text>
              </TouchableOpacity>

            
            </View>
          </View>
        </>
      )}

      {showCamera && (
        <>
          <CameraView style={styles.camera} facing={facing} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f6fa',
    padding: 20,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#1976d2',
    backgroundColor: '#e3f2fd',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  tarjeta: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1976d2',
    borderStyle: 'solid',
    backgroundColor: '#e3f2fd',
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  cajaTexto: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    marginBottom: 15,
    width: 250,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },
  PadreBoton: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  cajaBoton: {
    backgroundColor: '#1976d2',
    borderRadius: 30,
    paddingVertical: 12,
    width: '70%',
  },
  TextoBoton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
