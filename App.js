import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
import "react-native-gesture-handler"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './screens/Login'
import ProductManager from './screens/ProductManager'
import Scanner from './screens/Scanner'  
import EditProduct from "./screens/EditProduct";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#1976d2' },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Iniciar sesión' }}
        />
        <Stack.Screen
          name="ProductManager"
          component={ProductManager}
          options={{ title: 'Gestión de Productos' }}
        />
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{ title: 'Escanear Código' }}
        />
        <Stack.Screen
  name="EditProduct"
  component={EditProduct}
  options={{ title: "Editar Producto" }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
