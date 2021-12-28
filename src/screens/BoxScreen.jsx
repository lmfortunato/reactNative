import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Box 1</Text>
            <Text style={styles.textStyle2}>Box 2</Text>
            <Text style={styles.textStyle3}>Box 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems:"center",
        height:600,
        borderWidth:3,
        borderColor: "rgb(196, 144, 209)",
        backgroundColor: "#5C50DE",
        // justifyContent: "space-evenly",
        flexDirection:"row",
        padding:10    
    },
    textStyle1: {
        textAlign:"center",
        textAlignVertical:"center",
        width: 100,
        height:100,
        borderWidth:3,
        borderColor: "#508FDE",
        flex: 1,
        backgroundColor:"yellow"
    },
    textStyle2: {
        textAlign:"center",
        textAlignVertical:"center",
        width: 100,
        height:100,
        borderWidth:3,
        borderColor: "#508FDE",
        flex:2,
        alignSelf:"flex-start",
        backgroundColor:"yellow"
    },
    textStyle3: {
        textAlign:"center",
        textAlignVertical:"center",
        width: 100,
        height:100,
        borderWidth:3,
        borderColor: "#508FDE",
        flex: 3,
        alignSelf:"flex-end",
        backgroundColor:"yellow"
    }
})

export default BoxScreen;

//margin -> marginVertical, marginHorizontal, marginTop, marginBottom, marginLeft, marginRight
//padding -> paddingVertical, paddingHorizontal, paddingTop, paddingBottom, paddingLeft, paddingRight
//width, height
//borderWidth -> borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth
//borderColor


//Flex parent properties
//alignItems -> stretch, flex-start, center, flex-end
//flexDirection-> column, row
//justifyContent -> flex-start, center, flex-end, space-around, space-evenly, space-between

//Flex child properties
//flex -> === flex grow
//alignSelf -> flex-start, flex-end- center

//Position
//relative, absolute
//...StyleSheet.absoluteFillObject 