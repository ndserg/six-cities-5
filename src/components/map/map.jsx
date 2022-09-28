import React from 'react';
import {useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from "prop-types";
import placeCardProp from "../place-card/place-card.prop";
import useMap from '../../hooks/useMap';
import {MARKER_DEFAULT, MARKER_CURRENT} from '../../const';
import leaflet, {Icon, Marker} from 'leaflet';
import "leaflet/dist/leaflet.css";

const defaultCustomIcon = new Icon(MARKER_DEFAULT);
const currentCustomIcon = new Icon(MARKER_CURRENT);

const markerGroup = leaflet.layerGroup();

function Map(props) {
  const {offers, city} = props;
  const currentOfferId = useSelector((state) => state.currentOfferId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      markerGroup.clearLayers();
      markerGroup.addTo(map);

      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude,
      }, city.location.zoom);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
              currentOfferId !== undefined &&
              offer.id === Number(currentOfferId)
                ? currentCustomIcon
                : defaultCustomIcon
          )
          .addTo(markerGroup);
      });
    }
  });

  return <div style={{height: `100%`}} ref={mapRef}></div>;
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
  city: PropTypes.object.isRequired,
};

export default Map;
