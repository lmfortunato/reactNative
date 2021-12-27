import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import ColorCounter from "../components/ColorCounter";

const ColorGenerator = () => {
    return(
        <View>
            <ColorCounter color="red"/>
            <ColorCounter color="green"/>
            <ColorCounter color="blue"/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ColorGenerator;