/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./react-leaflet.css";
import "leaflet/dist/leaflet.css";
import data from "../assets/data.json";
import { MarkerIcon } from "./react-leaflet-icon.js";
// import IconLocation from "../assets/venue_location_icon.svg";

const position = [19.42911, -99.168131];

const reactleaflet = () => {
  const [search, setSearch] = useState("");
  const { venues } = data;

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredUsers = useMemo(
    () =>
      venues.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [venues, search]
  );

  const markers = filteredUsers.map((venue) => (
    <Marker position={venue.geometry} icon={MarkerIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  ));
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="grid-mapa"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div>{markers}</div>
      </MapContainer>

      <div className="Search1">
        <label>
          <h2 className="text-search">
            Aquí puedes filtrar entre restaurantes, bares y bibliotecas:
          </h2>
        </label>
        <input
          className="inputBonito1"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

export default reactleaflet;
