import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from "./Map.module.css";

const Map = (props) => {
  const center = useMemo(() => ({ lat: 51.481583, lng: -3.17909 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
    <GoogleMap
      center={center}
      zoom={13}
      mapContainerClassName={styles.map_container}
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      {props.places.map((place) => (
        <MarkerF
          key={place.name}
          position={{ lat: place.location.lat, lng: place.location.lng }}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
