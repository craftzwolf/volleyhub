import React, { useEffect } from 'react';
import { View,Text, Image, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';
import styles from '../styles/SplashScreenStyles';


const SplashScreen = () => {
    const navigation = useNavigation<any>();
    const { isDark, colors } = useTheme();
    const { user } = useAuth();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(user) {
                navigation.replace('AppNavigator');
            } else {
                navigation.replace('LoginScreen');
            }
        }, 2500);

        return () => clearTimeout(timeout);
    }, [user]);

    return (
        <View style = {[styles.main, { backgroundColor: colors.background }]}>
            <Image source = {require('../../assets/imagens/logo.png')}
                   style = { styles.logo}
                   resizeMode = "contain"
            />

            <Text style = {[styles.title, { color: colors.text }]}>VolleyHub</Text>
            <ActivityIndicator size = "large" color = { colors.primary } />
        </View>
    );
};

export default SplashScreen;
