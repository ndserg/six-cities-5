import React from "react";
import PropTypes from "prop-types";
import placeCardProp from "../place-card/place-card.prop";
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import {Icon} from 'leaflet';
import "leaflet/dist/leaflet.css";

const zoom = 12;
const city = [52.38333, 4.9];

const map = {
  center: city,
  zoom,
  zoomControl: true,
  style: {height: `100%`}
};

const icon = new Icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const Map = (props) => {
  const {offers} = props;

  return (
    <MapContainer center={map.center} zoom={map.zoom} scrollWheelZoom={map.zoomControl} style={map.style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {offers.map((offer) =>
        <Marker
          key={offer.id}
          icon = {icon}
          position={[offer.location.latitude, offer.location.longitude]}
        />
      )}
    </MapContainer>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
};

export default Map;
