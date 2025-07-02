import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { AuthProvider } from './src/contexts/AuthContext';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import AuthNavigator from './scr/navigation/AuthNavigator';
import AppNavigator from '.src/navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './src/hooks/useAuth';




const AppContent = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [shoswOnboargind, setOnboarding] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const checkOnboarding = async () => {
            try {
                const seen = await AsyncStore.getItem('@volleyhub:hasSeenOnboarding');
                if(!seen) { setShowOnboarging(true); }
            } catch (e) {
                console.error('Erro ao verificar onboarging:', e);
            } finally {
                setTimeout(() => {
                    setShowSplash(false);
                    setChecking(false);
                }, 2000);
            }
        };

        checkOnboarding();
    }, []);

    if (chicking) { return <SplashScreen /> };
    if (showOnboarding) {
        return <OnboadingScreen onFinish = {async () => {
            await AsyncStore.setItem('@volleyhub:hasSeenOnboarding', 'true');
            setShowOnboarding(false);
        }} />;
    }

    return user ? <AppNavigator /> : <AuthNavigator />;
};

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <AppContent />
                </NavigationContainer>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
