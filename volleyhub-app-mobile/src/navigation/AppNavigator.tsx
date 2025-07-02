import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';

// COACH IMPORTS
import CoachDashboard from '../screens/coach/Dashboard';
import TeamManager from '../screens/coach/TeamManager';
import TrainingCalendar from '../screens/coach/TrainingCalendar';


// PLAYER IMPORTS
import PlayerProfile from '../screens/player/Profile';
import PlayerTraining from '../screens/player/Training';
import Achievements from '../screens/player/Achievements';


// VISITOR IMPORTS
import VisitorHome from '../screens/visitor/home';
import ChatScreen from '..screens/ChatScreen';


export type AppStackParamList = {
    CoachDashboard: undefined;
    TeamManager: undefined;
    TrainingCalendar: undefined;

    PlayerProfile: undefined;
    PlayerTraining: undefined;
    Achievements: undefined;

    VisitorHome: undefined;
    ChatScreen: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppNavigator = () => {
    const { user } = useAuth();

    return (
        <Stack.Navigator screenOptions = {{ headerShown: false }}>
        {user ?.role === 'coach' && (
            <>
                <Stack.Screen name = "CoachDashboard" component = {CoachDashboard} />
                <Stack.Screen name = "TeamManager" component = {TeamManager} />
                <Stack.Screen name = "TrainingCalendar" component = {TrainingCalendar} />
            </>
        )}

        {user?.role === 'player' && (
            <>
                <Stack.Screen name = "PlayerProfile" component = {PlayerProfile} />
                <Stack.Screen name = "PlayerTraining" component = {PlayerTraining} />
                <Stack.Screen name = "Achievements" component = {Achievements} />
            </>
        )}

        {user?.role === 'visitor' && (
            <Stack.Screen name = "VisitorHome" component = {VisitorHome} />
        )}

        {/* All people screen */}
        <Stack.Screen name = "ChatScreen" component = {ChatScreen} />
        </Stack.Navigator>
    );
};
export default AppNavigator;
