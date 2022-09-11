import React, { useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Collapsible from 'react-native-collapsible';

import { FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors'

const CollapsibleTest = ({data}) => {
    console.log("mapper data")
    console.log(data)

    const exerciseCards = data.map((exercise, index) => {
        const content = exercise.sets.map((set, index) => {
           return <ExerciseSets key={index} reps={set.reps} setNumber={set.setNumber} weight={set.weight}/>
        })

        return <View style={styles.container}><ExerciseCollapsible key={index} content={content} sets={'8x20'} title={exercise.exerciseTitle} subTitle={exercise.exerciseSubtitle}/></View>
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                    {exerciseCards}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CollapsibleTest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        margin: 10,
        borderRadius: 20
    },
    image: {
        resizeMode: "contain",
        height: 60,
        width: 60
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 25
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: colors.green_primary
    },
    headerSubText: {
        color: colors.green_primary
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


function ExerciseCollapsible({title, sets, subTitle, content}) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

  return (
    <>
      <TouchableOpacity onPress={toggleExpanded}>
        <ExerciseHeader collapsed={collapsed} title={title} sets={sets} subTitle={subTitle}/>
                    </TouchableOpacity>
                    <Collapsible collapsed={collapsed} align="center">
                        <View style={styles.content}>
                           <ExerciseTableHeader/>
                           {content}
                        </View>
                    </Collapsible>
    </>
  )
}

function ExerciseSets({setNumber, weight, reps}) {
  return (
    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
        <View style={{ flex: 1, alignSelf: 'stretch'}}>
            <Text style={[styles.headerSubText, {textAlign: 'center', padding: 5}]}>{setNumber}</Text>  
        </View> 
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text style={[styles.headerSubText, {textAlign: 'center', padding: 5}]}>{weight} kg</Text>
        </View> 
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text style={[styles.headerSubText, {textAlign: 'center', padding: 5}]}>{reps}</Text>     
        </View> 
    </View>
  )
}

function ExerciseTableHeader() {
  return (
    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row'  }}>
    <View style={{ flex: 1, alignSelf: 'stretch'}}>
        <Text style={[styles.headerSubText, {fontWeight: '600', textTransform: 'uppercase', textAlign: 'center'}]}>set</Text>    
    </View> 
    <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <Text style={[styles.headerSubText, {fontWeight: '600', textTransform: 'uppercase', textAlign: 'center'}]}>kg</Text> 
    </View> 
    <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <Text style={[styles.headerSubText, {fontWeight: '600', textTransform: 'uppercase', textAlign: 'center'}]}>reps</Text>     
    </View> 
</View>
  )
}

function ExerciseHeader({title, subTitle, sets, collapsed}) {
  return (
    <View style={styles.header}>
    <Image style={styles.image} source={require("../assets/testExercise.png")}></Image>
    <View style={{alignItems: "center", justifyContent: 'center'}}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerSubText}>{subTitle}</Text>
    </View>
    <View>
        <Text style={styles.headerSubText}>{sets} kg</Text>
    </View>
    {collapsed ? <FontAwesome name="angle-right" size={24} color={colors.green_primary}/> : <FontAwesome name="angle-down" size={24} color={colors.green_primary} />}
</View>
  )
}