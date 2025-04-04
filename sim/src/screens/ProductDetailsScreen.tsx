import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  image: { width: '100%', height: 200, resizeMode: 'contain' },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, marginVertical: 10 },
  price: { fontSize: 16, color: 'green' },
});

export default ProductDetailsScreen;
