import React from "react";
import { NavLink } from "react-router-dom";

function Folder(props) {
  let navLink = "/folder/" + props.folder.id;

  return <NavLink to={navLink}>{props.folder.folder_name}</NavLink>;
}

export default Folder;
