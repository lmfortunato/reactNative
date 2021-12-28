import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import { withOrientation } from "react-navigation";

const Home = ({navigation}) => { //props obj, tiene el navigation
    const greeting = "Hi There, My name is Lu!"
    return (
        <View>
            <Button
            onPress={() => navigation.navigate("ListScreen")} //Lo matcheo con la key de createStackNavigator
            title="Go to ListScreen"
            />

            <Button
            onPress={() => navigation.navigate("ImageScreen")} //Lo matcheo con la key de createStackNavigator
            title="Go to ImageScreen"
            />

            <Button
            onPress={() => navigation.navigate("Counter")} //Lo matcheo con la key de createStackNavigator
            title="Go to Counter"
            />

            <Button
            onPress={() => navigation.navigate("ColorScreen")} //Lo matcheo con la key de createStackNavigator
            title="Go to Color Screen"
            />

            <Button
            onPress={() => navigation.navigate("ColorGenerator")} //Lo matcheo con la key de createStackNavigator
            title="Go to Color Generator"
            />

            <Button
            onPress={() => navigation.navigate("TextScreen")} //Lo matcheo con la key de createStackNavigator
            title="Go to Text Screen"
            />

            <Button
            onPress={() => navigation.navigate("BoxScreen")} //Lo matcheo con la key de createStackNavigator
            title="Go to Box Screen"
            />
            
            <TouchableOpacity onPress={() => navigation.navigate("ListScreen")}>
                <Text>Go to List Screen</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Getting started with react native</Text>
            <Text style={styles.subtitle}>{greeting}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    },
    subtitle: {
        fontSize:20
    }
})

export default Home;