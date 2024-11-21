import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, ItemResult } from '../components'

const Home = () => {
    return (
        <SafeAreaView>
            <Header name='Home' />
            <ItemResult />
        </SafeAreaView>
    )
}

export default Home