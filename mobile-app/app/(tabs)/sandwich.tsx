import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>This is the sandwich page, but wings are better</Text>
        <Link href="/wings">Take me to the goated page</Link>
    </View>
        );
}