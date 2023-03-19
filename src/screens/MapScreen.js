import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";

// console.log('on mapScreen')

const initialRegion = {
  latitude: -31.3846989,
  longitude: -64.1816605,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const MapScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const handleSelectedLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate('Nuevo', { mapLocation: selectedLocation})
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSaveLocation}>
          <Ionicons name="md-save-outline" color="white" size={22} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleSaveLocation]);

  return (
    <MapView
      // provider="google"
      initialRegion={initialRegion}
      style={styles.container}
      onPress={handleSelectedLocation}
    >
       {selectedLocation && (
         <Marker
         title="Ubicacion seleccionada"
         coordinate={{
           latitude: selectedLocation.lat,
           longitude: selectedLocation.lng,
          }}
          />
          )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;


//AIzaSyDiT6ThL89rseKH6uHPCG_jCoBDsTYlzgQ

//https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyDiT6ThL89rseKH6uHPCG_jCoBDsTYlzgQ&signature=YOUR_SIGNATURE