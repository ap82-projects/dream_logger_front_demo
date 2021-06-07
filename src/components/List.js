import React, { useState, useEffect } from "react";

export default function List(props) {
  const [dreams, setDreams] = useState([]);
  // const 
  
  async function test() {
    try {
      const response = await fetch("http://localhosthttp:5436/api/test_backend");
      return response;
    } catch(err) {
      return err;
    }
  }
  test()

  // async function loadTasks() {
  //   const response    
  // }


  return (
    <div id="dream-list">
      <h2>This is a list...yay...</h2>
      <p>{String(test())}</p>
      <p>something</p>
    </div>
  )
}