import { Text } from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Page() {
    return (
        <View>
            <Text>WING SUPREMACY BABY RAHHHHHHHHHHH!!!!!!!!!🗣️🗣️🗣️🔊🔊🔊🔥🔥🔥</Text>
            <Link href="/sandwich">Take me to the not as good page</Link>
        </View>
    );
}