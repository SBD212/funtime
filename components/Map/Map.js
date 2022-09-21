import { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  useGoogleMap,
} from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import styles from "./Map.module.css";
import { Fragment } from "react";

const Map = (props) => {
  const center = useMemo(() => ({ lat: 51.481583, lng: -3.17909 }), []);
  const map = useGoogleMap();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
    <Fragment>
      <button
        onClick={() => {
          map.panTo(center);
          map.setZoom(13)
        }}
      >
        <FontAwesomeIcon
          icon={faLocationArrow}
          style={{ height: "0.25rem" }}
        />
      </button>
      <GoogleMap
        center={center}
        zoom={13}
        mapContainerClassName={styles.map_container}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        {props.places.map((place) => (
          <MarkerF
            key={place.name}
            position={{ lat: place.location.lat, lng: place.location.lng }}
          />
        ))}
      </GoogleMap>
    </Fragment>
  );
};

export default Map;
