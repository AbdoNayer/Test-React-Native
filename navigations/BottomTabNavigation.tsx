import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { About, Contact, Home, Profile } from '../screens';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const tabsOptions = {
    tabBarShowLabel: false,
    headerShown: false
}

function BottomTabNavigation() {
    return (
        <Tab.Navigator screenOptions={tabsOptions}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon name="home" size={20} color={focused ? "#900" : "#000"} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="About"
                component={About}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon name="infocirlceo" size={20} color={focused ? "#900" : "#000"} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon name="user" size={20} color={focused ? "#900" : "#000"} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon name="phone" size={20} color={focused ? "#900" : "#000"} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation