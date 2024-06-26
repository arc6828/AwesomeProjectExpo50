import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MyMapView from "../../components/week10/MyMapView";
import GPS from "../../helpers/GPS";

export default function LocationQuiz(){
    const [location, setLocation] = useState(null);
  //ACTION WHEN ENTER SCREENS
  const onLoad = async () => {
    let loc = await GPS.getLocation();
    if (loc) {
      //console.log("Location : ", loc);
      setLocation(loc);
    }
  };
  useEffect(() => {
    console.log("ENTER SCREEN");
    onLoad();
  }, []);

  //SCREEN UI
  return (
    <View style={{ flex: 1 }}>
        {/* <Text> { JSON.stringify(location) } </Text> */}
        <Text>{location ? new Date(location.timestamp).toString() : "-"}</Text>  
        <View style={{flexDirection : 'row', height : 70 , backgroundColor : "#50E3C2"}}>      
            <View style={{ flex : 1, flexDirection : 'column' }}>
                <Text style={{ textAlign : 'center'}}>Lat/Lon</Text>
                <Text style={{ textAlign : 'center'}}>{ location ? location.coords.latitude : "-" }</Text>                      
                <Text style={{ textAlign : 'center'}}>{ location ? location.coords.longitude : "-" }</Text>                    
            </View>
            <View style={{ flex : 1, flexDirection : 'column' }}>
                <Text style={{ textAlign : 'center'}}>Speed / Accuracy</Text>                    
                <Text style={{ textAlign : 'center'}}>
                    { location ? Number(location.coords.speed * 3.6).toFixed(0) : "-" } km/h
                </Text> 
                <Text style={{ textAlign : 'center'}}> 
                    { location ? Number(location.coords.accuracy).toFixed(0) : "-" } m.
                </Text> 
            </View> 
        </View> 
        <View style={{ flex: 1 }}>
            <MyMapView location={location} setLocation={setLocation} />
            {/* <MyMapView  /> */}
        </View> 
    </View>
  );
}
