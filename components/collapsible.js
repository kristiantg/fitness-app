import React, { useState } from 'react';

import {
    SafeAreaView,
    Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Collapsible from 'react-native-collapsible';

import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
    {
        title: 'Terms and Conditions',
        content:
            'The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).',
    },
    {
        title: 'Privacy Policy',
        content:
            'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
    },
    {
        title: 'Return Policy',
        content:
            'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
];

//To make the selector (Something like tabs)
const SELECTORS = [
    { title: 'T&C', value: 0 },
    { title: 'Privacy Policy', value: 1 },
    { title: 'Return Policy', value: 2 },
    { title: 'Reset all' },
];

const CollapsibleTest = () => {
    const [activeSections, setActiveSections] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [multipleSelect, setMultipleSelect] = useState(true);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const setSections = (sections) => {
        setActiveSections(sections.includes(undefined) ? [] : sections);
    };

    const renderHeader = (section, _, isActive) => {
        return (
            <Animatable.View
                duration={400}
                style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor">
                <Text style={styles.headerText}>{section.title}</Text>
            </Animatable.View>
        );
    };

    const renderContent = (section, _, isActive) => {
        return (
            <Animatable.View
                duration={400}
                style={[styles.content, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor">
                <Animatable.Text
                    animation={isActive ? 'bounceIn' : undefined}
                    style={{ textAlign: 'center' }}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={toggleExpanded}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Single Collapsible</Text>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={collapsed} align="center">
                        <View style={styles.content}>
                            <Text style={{ textAlign: 'center' }}>
                                This is a dummy text of Single Collapsible View
                            </Text>
                        </View>
                    </Collapsible>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default CollapsibleTest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        margin: 20,
        borderRadius: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        borderRadius: 25
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
        textAlign: 'center',
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});