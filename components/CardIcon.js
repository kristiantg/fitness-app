import React from 'react';

import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';

function CardIcon({ icon }) {
    return (
        <LinearGradient
            end={{ x: 0.5, y: 0.4 }}
            colors={['white', '#9cbebf']}
            style={styles.cardDot}>
            {icon}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    cardDot: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.green_primary
    }
});


export default CardIcon;