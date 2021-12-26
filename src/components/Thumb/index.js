import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable, inInfo }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt={movieId} inInfo={inInfo}/>
      </Link>
    ) : (
      <Image src={image} alt={movieId} inInfo={inInfo} />
    )}
  </div>
);

export default Thumb;
