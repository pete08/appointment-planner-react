import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  console.log(`TileList props.array...:  ${JSON.stringify(props.array)}`)
  const tilesArray = props.array
  // if (props.array.length > 0) {
  //   console.log(`TileList props.array > 0 ...:  ${JSON.stringify(props.array)}`)
  //   let listing = tilesArray.map((item, index) => {
  //     const [name, ...rest] = item;
  //     return(
  //       <Tile name={name} description={rest} key={index}/>
  //     );
  //   })
  // }

  return (
    <div className="tiles">
      {(tilesArray.length > 0)? tilesArray.map((item, index) => {
        const {name, ...rest} = item;
        return (<Tile name={name} description={rest} key={index}/>)
      }):<></>
      }
    </div>
  );
};
