import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../config/colors';

function Banner() {
    return (
        <LinearGradient end={{ x: 0.5, y: 0.7 }} colors={[colors.green_secondary, colors.green_primary]} style={styles.banner} />
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