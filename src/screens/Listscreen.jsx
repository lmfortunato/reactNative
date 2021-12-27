import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ListScreen (){
    const friends = [
        {name: "Friend1" , age:20},
        {name: "Friend2" , age:21},
        {name: "Friend3" , age:22},
        {name: "Friend4" , age:23},
        {name: "Friend5" , age:24},
        {name: "Friend6" , age:25},
        {name: "Friend7" , age:26},
        {name: "Friend8" , age:27},
        {name: "Friend9" , age:28},
    ]

    return (
        <FlatList 
        //horizontal //le digo que sea horizontal, tambien puede ser horizontal={false}
        //showsHorizontalScrollIndicator={false} //no quiero la scroll bar
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={ ({item}) => { //destructuring del item
            //el === {item: {name: "Friend1"}, index:0}
            return <Text style={styles.text}>{item.name} - Age {item.age}</Text>
        }}/>
    )
}

const styles = StyleSheet.create({
    text: {
        marginRight:50
    }
})