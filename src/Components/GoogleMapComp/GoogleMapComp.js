"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const GoogleMapComp = () => {
  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54887.78680540336!2d76.67667306842631!3d30.704715896348926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe555e7bf2e91%3A0xffb409b433075d3!2sKharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1735302446951!5m2!1sen!2sin" width="100%" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default GoogleMapComp;
