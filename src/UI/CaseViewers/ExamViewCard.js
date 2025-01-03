import React from "react";

import questions from "../../../res/json/questions.json";

function ExamDataViewCard({ dateString, data }) {
  // const dataObj=JSON.parse(data)

  const newDate = dateString;
  let newDateString = "";
  for (let i = 0; i < 4; i++) {
    newDateString += newDate[i];
  }
  newDateString += "-";
  for (let i = 4; i < 6; i++) {
    newDateString += newDate[i];
  }
  newDateString += "-";
  for (let i = 6; i < 8; i++) {
    newDateString += newDate[i];
  }

  console.log(data.quesions);

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h4>{newDateString}</h4>
        <p>
          <ol>
            <li>
              {questions.depress.select[data.quesions.p1[0]]}：{data.answers[0]}
              /4
            </li>
            <li>
              {questions.depress.select[data.quesions.p1[1]]}：{data.answers[1]}
              /4
            </li>
            <li>
              {questions.depress.yn[data.quesions.p2[0]]}：
              {data.answers[2] == 4 ? "是" : "否"}
            </li>
            <li>
              {questions.depress.yn[data.quesions.p2[1]]}：
              {data.answers[3] == 4 ? "是" : "否"}
            </li>
            <li>
              {questions.pressure.yn[data.quesions.p3[0]]}：
              {data.answers[4] == 4 ? "是" : "否"}
            </li>
            <li>
              {questions.pressure.yn[data.quesions.p3[1]]}：
              {data.answers[5] == 4 ? "是" : "否"}
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default ExamDataViewCard;
