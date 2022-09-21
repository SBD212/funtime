import { useMemo, useState, Fragment } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import styles from "./Map.module.css";

const Map = (props) => {
  const center = useMemo(() => ({ lat: 51.481583, lng: -3.17909 }), []);
  const [map, setMap] = useState(null);
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
    <Fragment>
      <div className={styles.flex}>
        <button
          className={styles.centre_btn}
          onClick={() => {
            map.panTo(center);
            map.setZoom(13);
          }}
        >
          Reset Map
        </button>
      </div>

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
            onClick={() => onSelect(place)}
          />
        ))}

        {selected.location && (
          <InfoWindowF
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <div>
              <h6>{selected.name}</h6>
              <p>{selected.description}</p>
              <p>{selected.postcode}</p>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </Fragment>
  );
};

export default Map;
