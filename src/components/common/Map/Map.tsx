import React from 'react';
import style from './Map.module.scss';

const Map = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d70847.7122291897!2d44.01301882842602!3d56.29546803739852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1654188074330!5m2!1sru!2sru"
    width="600"
    height="450"
    loading="lazy"
    title="map"
    className={style.map}
  />
);

export default Map;
