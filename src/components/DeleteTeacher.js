import axios from "axios";
import React, { useEffect } from 'react';
export default function DeleteTeacher (props) {
    const getTeachers = async () => {
        var data = await axios.get("http://localhost:3000/admin/teachers")
        console.log(data)
    };
    useEffect(()=>
    {
      console.log("useeffect called")
      getTeachers();
      console.log("useeffect ended")
    },[])
  return (
    <div>
      <label>Hello There</label>
    </div>
  );
}
