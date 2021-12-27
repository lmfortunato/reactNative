import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const ImageDetail = ({title, img, rate}) => {
    return(
        <View>
            <Text>{title}</Text>
            <Image source={img} />
            <Text>Image score - {rate}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail