import axios from "axios";
import React, { useEffect, useState } from "react";
export default function ViewAttQuiz() {
  const [classData, setClassData] = useState();

  useEffect(async () => {
    console.log("useeffect called");
    var data = await axios.get("http://localhost:3000/teacher/viewattquiz");
    console.log(typeof data);
    await setClassData(data.data);
    console.log(data.data);
    console.log("useeffect ended");
  }, []);

  useEffect(() => {
    alert(classData);
  }, [classData]);

  return (
    <div style={{ width: "100%", flex: 2 }}>
      {classData
        ? classData.map((e, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: "purple", marginBottom: 12 }}
              >
                <label>{e.name}</label>
                <table style={{ width: "100%" }}>
                  <tr>
                    <th>Quiz#</th>
                    <th>No of Questions</th>
                    <th>No of Att Quiz</th>
                  </tr>
                  {e.quizes.map((i, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{i.question.length}</td>
                        <td>{i.answers.length}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            );
          })
        : null}
    </div>
  );

  // return (
  // <div
  //   style={{
  //     justifyContent: "center",
  //     alignItems: "center",

  //     width: "100%",
  //   }}
  // >
  //   {classData ? classData.map((clas,index) => {
  //     <div key={index}>
  //       <label style={{color:"black"}}>{clas.name}</label>
  {
    /* <table 
            style={{
              alignSelf: "center",
              fontSize: 20,
              justifyContent: "center",
              color: "white",
              width: "100%",
            }}
          >
            <tr>
              <th>Quiz no</th>
              <th>No of Questions</th>
              <th>Attempted Quiz</th>
            </tr>
            {classData ? (
              clas.quizes.map((quiz,index) => (
                <tr key = {index}>
                  <td>{index+1}</td>
                  <td>{quiz.question.length}</td>
                  <td>{quiz.answers.length}</td>
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
                Sorry We are out of teacher!!
              </label>
            )}
          </table>  */
  }
  //       </div>;
  //     }): <label>No Data Yet</label>}
  //   </div>
  // );
}
