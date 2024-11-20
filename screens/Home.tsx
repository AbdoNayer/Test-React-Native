import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components'

const Home = () => {
    return (
        <SafeAreaView>
            <Header name='Home' />
        </SafeAreaView>
    )
}

export default Home