import React, {useState, useReducer} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, {type, payload}) => {
        //state === {red:number, green:number, blue:number}
        //action === {colorToChange: "red||green||blue", amount: 15|| -15}
        switch (type){
            case "red":
                if(state.red + payload > 255 || state.red + payload < 0) return state;
                return {
                    ...state,
                    red: state.red + payload
                }
            case "green":
                return state.green + payload > 255 || state.green + payload < 0
                ? state
                : {
                    ...state,
                    green: state.green + payload
                }
            case "blue":
                return state.blue + payload > 255 || state.blue + payload < 0
                ? state
                : {
                    ...state,
                    blue: state.blue + payload
                }
            default:
                return state;
        }
    }
const ColorGenerator = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0}); //primer param reducer, segundo initialState
    const {red, green, blue} = state;

    return(
        <View>
            <ColorCounter
            onIncrease={() => dispatch({type: "red", payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: "red", payload: -1 * COLOR_INCREMENT})}
            color="red"
            />
            <ColorCounter
            onIncrease={() => dispatch({type: "green", payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: "green", payload: -1 * COLOR_INCREMENT})}
            color="green"
            />
            <ColorCounter
            onIncrease={() => dispatch({type: "blue", payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: "blue", payload: -1 * COLOR_INCREMENT})}
            color="blue"
            />

            <View style={{width:100, height:100, backgroundColor: `rgb(${red}, ${green},${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ColorGenerator;