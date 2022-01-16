import axios from "axios";
import React, { useEffect, useState } from "react";
export default function DeleteTeacher(props) {
  const [teachers, setTeacher] = useState();
  const [get, set] = useState();
  const getTeachers = async () => {
    var data = await axios.get("http://localhost:3000/admin/teachers");
    console.log(typeof data);
    setTeacher(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    console.log("useeffect called");
    getTeachers();
    console.log("useeffect ended");
  }, [set]);
  const deleteTeacher = (id) => {
    axios
      .delete("http://localhost:3000/admin/teacher/" + id)
      .then(async (error, response) => {
        if (error) return error;
        let data1 = await teachers.filter((e) => e._id != id);
        set(data1);
        console.log("setting")
      });
  };

  return (
    <div style={{justifyContent:"center", alignItems:"center",backgroundColor:"purple", width:"100%"}}>
      <label>Select Teacher To Delete</label>
      <table style={{alignSelf:"center", fontSize: 20, justifyContent:"center", color:"white", width:"100%"}}>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone N0.</th>
          <th>Salary</th>
        <th>Delete</th>
        </tr>
        {teachers ? (
          teachers.map((teacher) => (
            <tr>
              <td>{teacher.name}</td>
              <td>{teacher.gender}</td>
              <td>{teacher.Age}</td>
              <td>{teacher.email}</td>
              <td>{teacher.contact}</td>
              <td>{teacher.salary}</td>
              <td>
                <button style={{elavation :0,color:"white", backgroundColor: "red", borderRadius: 15}} onClick={() => deleteTeacher(teacher._id)}>
                  X
                </button>
              </td>
            </tr>
          ))
        ) : (
          <label style={{alignSelf:"center", alignItems: "center", alignContent:"center", justifyContent:"center"}}>Sorry We are out of teacher!!</label>
        )}
      </table>
    </div>
  );
}
