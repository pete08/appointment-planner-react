import React from "react";

export const Tile = ({ name, description, key }) => {
  const values = Object.values(description);
  // const listItems = values.map((value) => 
  //   <p className="tile" key={key}>{value}</p>
  // );

  return (
    <div className="tile-container">
      <p className="tile-title" > {name} </p>
      {values.map((value) => 
        <p className="tile" key={key}>{value}</p>
      )}
    </div>
  );
};
