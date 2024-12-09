import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ItemResult, NoDataFound, Slider } from "../components";
import tw from "twrnc";

// Define the type for a product
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  availabilityStatus:string
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products); // Set the products array
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Render a single product item
  const renderItem = ({ item }: { item: Product }) => (
    <ItemResult item={item} />
  );
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header name="Home" />
      <View style={tw`py-4 h-full`}>
        <Slider />
        <Text style={tw`text-[20px] text-center text-black`}>Category</Text>
        <View style={tw`px-2 flex-1 mt-5`}>
          {loading ? (
            <View
              style={tw`flex items-center justify-center w-full h-screen flex-1`}
            >
              <ActivityIndicator size="large" color="#fff" />
            </View>
          ) : (
            <FlatList
              data={products}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              numColumns={2}
              contentContainerStyle={tw``}
              ListEmptyComponent={() => (
                <NoDataFound />
              )}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
