import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function CardIcon({ icon }) {
    return (
        <LinearGradient
            end={{ x: 0, y: 0.1 }}
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
        marginLeft: 15,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#a7c9c8'
    }
});


export default CardIcon;