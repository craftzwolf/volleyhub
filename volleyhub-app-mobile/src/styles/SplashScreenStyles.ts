/* SPLASHsCREENsTYLE */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    load: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2, 
        borderColor: '#232323',
    },

    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default styles;
