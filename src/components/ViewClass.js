import axios from "axios";
import React, { useEffect, useState } from "react";
export default function ViewClass(props) {
  const [classs, setClass] = useState();
  const getClass = async () => {
    var data = await axios.get("http://localhost:3000/head/class");
    console.log(typeof data);
    setClass(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    console.log("useeffect called");
    getClass();
    console.log("useeffect ended");
  }, [classs]);
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
        width: "100%",
      }}
    >
      <table
        style={{
          alignSelf: "center",
          fontSize: 20,
          justifyContent: "center",
          color: "white",
          width: "100%",
        }}
      >
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Teacher</th>
        </tr>
        {classs ? (
          classs.map((classes, index) => (
            <tr>
              <td>{index+1}</td>
              <td>{classes.name}</td>
              <td>{classes.teacherid.tid.name}</td>
            </tr>
          ))
        ) : (
          <label
            style={{
              alignSelf: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            Sorry We are out of classes!!
          </label>
        )}
      </table>
    </div>
  );
}
