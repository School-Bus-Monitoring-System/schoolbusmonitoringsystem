import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import { Icon } from "leaflet";

const Map = () => {
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });
  return (
    <MapContainer center={[30.5151556, 76.6598196]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[30.5151556, 76.6598196]} icon={customIcon}/>
    </MapContainer>
  );
};

export default Map;
