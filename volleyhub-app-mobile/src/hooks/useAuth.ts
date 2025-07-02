import { useAuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
    const context = useAuthContext();
    const { user, signIn, signOut } = context;

    return {
        user,
        signIn,
        signOut,
        isLogged: !!user,
        isCoach: user?.role === 'coach',
        isPlayer: user?.role === 'player',
        isVisitor: user?.role === 'visitor',
    };
};
