import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import { dotStyle, activeDotStyle, dataImage } from "./config"; // Adjust the path as necessary
import tw from "twrnc";

interface ImageItem {
  id: string;
  url: string;
}

interface Props {
  dataImage: ImageItem[];
}

const Slider = () => {
  return (
    <View
      style={tw`w-[95%] relative bg-[#f00] m-auto h-[180px] rounded-[10px] overflow-hidden mb-5`}
    >
      <Swiper
        containerStyle={tw`w-full h-full relative`}
        autoplay={true}
        paginationStyle={tw`absolute bottom-[10px]`}
        dotStyle={dotStyle}
        activeDotStyle={activeDotStyle}
        loop={true}
        autoplayTimeout={4}
      >
        {dataImage.map((item, index) => (
          <View key={index} style={tw`relative`}>
            <Image
              source={{
                uri: item.url,
              }}
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Slider;
