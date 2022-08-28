import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../config/colors';

function Banner() {
    return (
        <LinearGradient end={{ x: 0.4, y: 0.2 }} colors={[colors.green_primary, colors.green_secondary]} style={styles.banner} />
    );
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: colors.green_primary,
        borderRadius: 200,
        height: 400,
        transform: [{ scaleX: 1.4 }],
        top: -225,
        width: '100%',
        position: 'absolute'
    }
});

export default Banner;