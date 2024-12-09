import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import tw from "twrnc";

const Slider = () => {
  return (
    <View
      style={tw`w-[95%] relative bg-[#f00] m-auto h-[180px] rounded-[10px] overflow-hidden mb-5`}
    >
      <Swiper
        containerStyle={tw`w-full h-full relative`}
        autoplay={true}
        paginationStyle={tw`absolute bottom-[10px]`}
        dotStyle={{
          borderRadius: 50,
          height: 10,
          width: 10,
          backgroundColor: "#DDD",
        }}
        activeDotStyle={{
          backgroundColor: "#F00",
          width: 10,
          height: 10,
          borderRadius: 50,
        }}
        loop={true}
        autoplayTimeout={2}
      >
        <View style={tw`relative`}>
          <Image
            source={{
              uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            }}
            style={tw`w-full h-full`}
            resizeMode="cover"
          />
        </View>
        <View style={tw`relative`}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            }}
            style={tw`w-full h-full`}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Slider;
