import {useEffect, useState, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);
  const isRendered = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRendered.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution:
            `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      );

      instance.addLayer(layer);
      setMap(instance);
      isRendered.current = true;
    }
  });

  return map;
}

export default useMap;
