import { View, Text, Image } from "react-native";
import tw from "twrnc";

const NoDataFound = () => {
  return (
    <View
      style={tw`flex items-center justify-center w-full flex-1 p-5 bg-black`}
    >
      <Image
        source={require("../../assets/images/no-data.png")}
        style={tw`w-40 h-40`}
        resizeMode="contain"
      />
      <Text style={tw`text-center text-gray-500 text-[20px] mt-4`}>
        No Data found
      </Text>
    </View>
  );
};

export default NoDataFound;
