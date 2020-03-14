import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    width: -1,
    height: 500,
    latitude: 14,
    longitude: 100.5   ,
    zoom: 8
  });

  return (
    <ReactMapGL mapboxApiAccessToken={"pk.eyJ1IjoieGJpcmQwMDciLCJhIjoiY2s3b3doNnMyMDFyNDNlc3ZoZ2hqMWk1dSJ9.zuvxRhZk0bDOgUGEYbD5AA"}
      {...viewport}
      onViewportChange={setViewport}
    />
  );
}
export default Map