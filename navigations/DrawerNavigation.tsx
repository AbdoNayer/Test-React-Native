import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { About, Home } from '../screens';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const drawerOptions = {
    drawerStyle: {
        backgroundColor: '#fff',
        width: 250,
        padding: 0,
        borderRadius: 10,
    },
    headerStyle: {
        backgroundColor: "#fff"
    },
    drawerLabelStyle: {
    },
    drawerActiveTintColor: '#000',
    drawerActiveBackgroundColor: '#ddd',
    headerShown: false,
    headerTintColor: '#000',
    drawerItemStyle: {
        borderRadius: 10,
    },
}

const DrawerNavigation = () => {

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={drawerOptions}>
            <Drawer.Screen
                name="Home"
                component={BottomTabNavigation}
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                    headerShadowVisible: false,
                    drawerIcon: () => (
                        <Icon name="home" size={20} color={"#000"} />
                    )
                }}
            />
            <Drawer.Screen
                name="About"
                component={About}
                options={{
                    drawerLabel: "About",
                    title: "About",
                    headerShadowVisible: false,
                    drawerIcon: () => (
                        <Icon name="infocirlceo" size={20} color={"#000"} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation