import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import RouteName from '../../utils/routes/RouteName';
import { MainStackParamList } from '../../Navigation/mainStack';
import { styles } from './style';

export default function LoginScreen() {
    const { navigate } = useNavigation<NavigationProp<MainStackParamList>>();
    function clickLogin() {
        navigate(RouteName.MainTabs);
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.noteText}>Hello again login to MK News</Text>
            <View style={styles.frame}>
                <Text style={styles.labelText}>UserName</Text>
                <TextInput style={styles.textInput} placeholder='Enter UserName' textContentType='username' />
                <Text style={styles.labelText}>Password</Text>
                <TextInput style={styles.textInput} placeholder='Enter Password' secureTextEntry={ true } textContentType='password' />
            </View>
            <TouchableOpacity onPress={clickLogin} style={styles.btn}>
                <Text style={styles.textBtn}>Login</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
}