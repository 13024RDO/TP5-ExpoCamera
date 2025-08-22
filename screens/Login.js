import React from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'

export default function Login({ navigation }) {
  return (
    <View style={styles.padre}>


      <Image source={require('../assets/1.png')} style={styles.profile} />


      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput
            placeholder='Correo@gmail.com'
            placeholderTextColor="#888"
            style={styles.input}
          />
        </View>
        <View style={styles.cajaTexto}>
          <TextInput
            placeholder='Contraseña'
            placeholderTextColor="#888"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>


        <View style={styles.PadreBoton}>
          <TouchableOpacity
            style={styles.cajaBoton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.TextoBoton}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
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
  },
  cajaTexto: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    marginVertical: 10,
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
})
