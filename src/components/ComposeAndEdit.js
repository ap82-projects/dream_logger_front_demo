import React, { useState } from "react";
import Api from "../services/api";

export default function ComposeAndEdit(props) {
  const [submitted, setSubmitted] = useState(false);

  async function logDream(dream) {
    const response = await Api.post(`/api/dreams`, dream);
    setSubmitted(!submitted);
    // getAllDreams();
  }
    
  async function editDream(id, edits) {
    const response = await Api.put(`/api/dreams/${id}`, edits);
    // getAllDreams();
  }
  const newUser = {}

  return (
    <div id="compose-and-edit">
      <input id="id" type="text" placeholder="ID"></input>
      <input id="date" type="text" placeholder="Date" ref={input => newUser.date = input.value}></input> 
      <input id="nightmare" type="text" placeholder="Nightmare?" ref={input => newUser.was_nightmare = input.value === "true" ? true : false}></input> 
      <input id="lucid" type="text" placeholder="Lucid?" ref={input => newUser.was_lucid = input.value === "true" ? true : false}></input> 
      <input id="summary" type="text" placeholder="Summary" ref={input => newUser.summary = input.value}></input> 
      <input id="description" type="text" placeholder="Description" ref={input => newUser.description = input.value}></input> 
      <input id="meal" type="text" placeholder="Last Meal" ref={input => newUser.last_meal_before_bed = input.value}></input> 
      <input id="activity" type="text" placeholder="Last Activity" ref={input => newUser.last_activity_before_bed = input.value}></input>
      {/* <button onClick={() => logDream(newUser)}>Submit</button> */}
      <button onClick={() => console.log(newUser)}>Submit</button>
    </div>
  )
}