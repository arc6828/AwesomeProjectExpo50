import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {    
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));
    };


    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{ backgroundColor : "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20 }}>
                <Text style={{ fontSize : 20 }}>Weight (kg.)</Text>
                <TextInput value={ weight } onChangeText={ (newWeight) => setWeight(newWeight) } style={{ fontSize : 20 }} keyboardType="numeric" placeholder="Input your weight" />
            </View>
            {/* แถวที่ 2 */}
            <View  style={{ backgroundColor : "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20 }}>
                <Text style={{ fontSize : 20 }}>Height (cm.)</Text>
                <TextInput value={ height } onChangeText={ (newHeight) => setHeight(newHeight) } style={{ fontSize : 20 }} keyboardType="numeric" placeholder="Input your height" />
            </View>
            {/* แถวที่ 3 */}
            {/* flex, backgroundColor, borderRadius, height, justifyContent, alignItem, marginRight */}
            <View style={{ flexDirection : "row", marginVertical:20 }}>
                <View style={{ backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center" ,marginRight:10 }}>
                    {/* <Text style={{ fontSize : 20 }}>24.22</Text> */}
                    <Text style={{ fontSize : 20 }}>{ bmi }</Text>
                </View>
                <View style={{ backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center", marginLeft:10  }}>
                    <Text style={{ fontSize : 20 }}>Normal</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            {/* <Button title="Calculate" onPress={ onPressButton } />     */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
        
        </View>
    );
}
