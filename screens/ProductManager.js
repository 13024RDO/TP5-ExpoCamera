import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function ProductManager({ navigation }) {
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    navigation.navigate("Scanner", { setProducts, products });
  };

  const handleEditProduct = (item, index) => {
    navigation.navigate("EditProduct", {
      product: item,
      index,
      products,
      setProducts,
    });
  };

  const handleDeleteProduct = (index) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de eliminar este producto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => {
            const updated = products.filter((_, i) => i !== index);
            setProducts(updated);
          },
        },
        Alert.alert(
        "Eliminado Correctamente!"
    )
      ]
      
    );
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Productos</Text>

      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>Escanear producto</Text>
      </TouchableOpacity>

      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.productItem}>
            <View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productCode}>Código: {item.code}</Text>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditProduct(item, index)}
              >
                <Text style={styles.actionText2}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteProduct(index)}
              >
                <Text style={styles.actionText1}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f6fa" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#1976d2" },
  addButton: {
    backgroundColor: "#1976d2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  addButtonText: { color: "white", fontWeight: "bold", textAlign: "center" },
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  productName: { fontSize: 16, fontWeight: "bold" },
  productCode: { color: "#555" },
  actions: { flexDirection: "row", alignItems: "center" },
  editButton: { marginRight: 10 },
  deleteButton: {},
  actionText1: { color: "#ff0000ff", fontWeight: "bold" },
  actionText2: { color: "#1eff00ff", fontWeight: "bold" },
});
