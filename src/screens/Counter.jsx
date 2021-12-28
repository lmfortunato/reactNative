import React, {useState, useReducer} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const reducer = (state, {type, payload}) => {
    //state === {counter:number}
    switch (type){
        case "increment":
            return {
                ...state,
                counter: state.counter + payload
            }
        case "decrement":
            return {
                ...state,
                counter: state.counter - payload
            }
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})

    return(
        <View>
            <Text>Current Count:</Text>
            <Button 
                onPress={() => {
                    dispatch({type: "increment", payload: 1})
                }} 
                title="+"/>
            <Text>{state.counter}</Text>
            <Button 
                onPress={() => {
                    dispatch({type: "decrement", payload: 1})
                }} 
                title="-"
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default Counter;