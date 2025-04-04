import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.productCard} 
            onPress={() => navigation.navigate('ProductDetails', { product: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title.substring(0, 20)}...</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  productCard: { flex: 1, margin: 10, padding: 10, borderWidth: 1, borderRadius: 10 },
  image: { width: '100%', height: 100, resizeMode: 'contain' },
  title: { fontSize: 14, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'green' },
});

export default HomeScreen;
