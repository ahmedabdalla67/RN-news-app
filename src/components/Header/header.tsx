import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles';
export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/profile.png')} style={styles.img} />
            <Text style={styles.text}>Hello, John!</Text>
            <Image source={require('../../assets/images/notification.png')} style={[styles.img, { width: 30, height: 30}]} />
        </View>
    )
}
