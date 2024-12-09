import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";

interface HeaderProps {
    name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
    const navigation:any = useNavigation();
    return (
        <View style={tw`flex flex-row items-center justify-between p-5 bg-black`}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu"  size={20} color={"#fff"} />
            </TouchableOpacity>
            <Text style={tw`text-[20px] text-white`}>{name}</Text>
            <TouchableOpacity>
                <Icon name="bell" size={20} color={"#fff"} />
            </TouchableOpacity>
        </View>
    )
}

export default Header