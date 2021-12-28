import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

const TextScreen = () => {
    const [password,setPassword] = useState("");

    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput
            autoCapitalize="none" //sin mayuscula
            autoCorrect={false}
            style={styles.input}
            value={password}
            onChangeText={(value) => setPassword(value)}
            />
            {password.length >= 5  
            ? null 
            : <Text style={styles.error}>Password must be longer than 5 characters</Text>}
            {/* <Text>My name is {name}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
        height: 40
    },
    error:{
        color: "red"
    }
});

export default TextScreen;