import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return(
        <View>
            <Text>Current Count:</Text>
            <Button 
                onPress={() => {
                setCounter(counter+1)
                }} 
                title="+"/>
            <Text>{counter}</Text>
            <Button 
            onPress={() => {
                setCounter(counter-1)
            }} 
            title="-"/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Counter;