import React from "react";
import {useSelector} from 'react-redux';
import PropTypes from "prop-types";
import placeCardProp from "../place-card/place-card.prop";
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import {Icon} from 'leaflet';
import "leaflet/dist/leaflet.css";

const zoom = 12;

const map = {
  center: [52.38333, 4.9],
  zoom,
  zoomControl: true,
  style: {height: `100%`}
};

const icon = new Icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const iconActive = new Icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

const getIcon = (currentId, offerId) => {
  return Number(currentId) === offerId ? iconActive : icon;
};

const Map = (props) => {
  const {offers} = props;
  const currentOfferId = useSelector((state) => state.currentOfferId);

  return (
    <MapContainer center={map.center} zoom={map.zoom} scrollWheelZoom={map.zoomControl} style={map.style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {offers.map((offer) =>
        <Marker
          key={offer.id}
          icon = {getIcon(currentOfferId, offer.id)}
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
