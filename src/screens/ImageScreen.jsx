import React from "react";
import { View, Text, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

export default function ImageScreen() {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail title="Forest" img={require("../../assets/forest.jpg")} rate={8}/>
            <ImageDetail title="Mountain" img={require("../../assets/mountain.jpg")} rate={7}/>
            <ImageDetail title="Beach" img={require("../../assets/beach.jpg")} rate={10}/>
        </View>
    );
}

const styles = StyleSheet.create({})