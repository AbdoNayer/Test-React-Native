import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";

// Define the type for a product
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  availabilityStatus: string;
}

const ItemResult = ({ item }: { item: Product }) => {
  return (
    <TouchableOpacity style={tw`w-1/2 p-1.2`}>
      <View
        style={tw`border w-full border-[#ddd] bg-white overflow-hidden rounded-lg shadow-sm`}
      >
        <View style={tw`p-4 relative overflow-hidden bg-white`}>
          <View
            style={[
              tw`absolute top-0 right-0 px-3 py-2 ${
                item?.availabilityStatus === "In Stock"
                  ? "bg-green-700"
                  : "bg-amber-500"
              }`,
              { zIndex: 999 },
            ]}
          >
            <Text
              style={tw`text-[13px] font-bold ${
                item?.availabilityStatus === "In Stock"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {item?.availabilityStatus}
            </Text>
          </View>
          <Image
            source={{ uri: item?.thumbnail }}
            style={tw`w-full h-40 rounded-md bg-white relative`}
            resizeMode="cover"
          />
        </View>
        <View style={tw`p-2 border-t border-[#ddd]`}>
          <Text style={tw`mt-2 text-lg font-bold`} numberOfLines={1}>
            {item?.title}
          </Text>
          <Text style={tw`text-gray-700 leading-5`} numberOfLines={3}>
            {item?.description}
          </Text>
          <View style={tw`mt-2 justify-center items-end`}>
            <Text style={tw`text-red-500 font-bold`}>${item?.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemResult;
