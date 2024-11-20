import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
    const navigation:any = useNavigation();
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            elevation: 0,
            backgroundColor: '#000',
            padding: 15,
            shadowColor: "#959595",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.40,
            shadowRadius: 2.2,
        }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu" size={20} color={"#fff"} />
            </TouchableOpacity>
            <Text style={{ color: '#fff' }}>{name}</Text>
            <TouchableOpacity>
                <Icon name="bell" size={20} color={"#fff"} />
            </TouchableOpacity>
        </View>
    )
}

export default Header