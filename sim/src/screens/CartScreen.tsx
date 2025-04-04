import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title} - ${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      <Button title="Clear Cart" onPress={clearCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: { padding: 10, borderBottomWidth: 1 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
});

export default CartScreen;
