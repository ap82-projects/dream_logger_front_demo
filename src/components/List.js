import React, { useState } from "react";
import Api from "../services/api";

export default function List(props) {
  const [dreams, setDreams] = useState([]);
    
  async function getAllDreams() {
    const response = await Api.get("/api/dreams");
    setDreams(response.data); 
  };

  async function getDreamByDate(date) {
    const response = await Api.get(`/api/dreams/date/${date}`);
    setDreams(response.data);
  }

  async function getLucid() {
    const response = await Api.get("/api/dreams/lucid/true");
    setDreams(response.data);
  }

  async function getNonLucid() {
    const response = await Api.get("/api/dreams/lucid/false");
    setDreams(response.data);
  }

  async function getNightmares() {
    const response = await Api.get("/api/dreams/nightmare/true");
    setDreams(response.data);
  }

  async function getGoodDreams() {
    const response = await Api.get("/api/dreams/nightmare/false");
    setDreams(response.data);
  }

  async function searchSummary(word) {
    const response = await Api.get(`/api/dreams/summary/${word}`);
    setDreams(response.data);    
  }

  async function searchDescription(word) {
    const response = await Api.get(`/api/dreams/description/${word}`);
    setDreams(response.data);
  }

  async function searchMeals(meal) {
    const response = await Api.get(`/api/dreams/meal/${meal}`);
    setDreams(response.data);
  }

  async function searchActivities(activity) {
    const response = await Api.get(`/api/dreams/activity/${activity}`);
    setDreams(response.data);
  }

  async function searchForKeyword(keyword) {
    const response = await Api.get(`/api/dreams/keyword/${keyword}`);
    setDreams(response.data);
  }

  async function logDream(dream) {
    const response = await Api.post(`/api/dreams`, dream);
    getAllDreams();
  }

  async function editDream(id, edits) {
    const response = await Api.put(`/api/dreams/${id}`, edits);
    getAllDreams();
  }

  async function deleteDream(id) {
    const response = await Api.delete(`/api/dreams/${id}`);
    getAllDreams();
  }

  return (
    <div id="dream-list">
      <h2>Dreams</h2>
      <button onClick={() => getAllDreams()}>All Dreams</button>
      <button onClick={() => getNightmares()}>Nightmares</button>
      <button onClick={() => getGoodDreams()}>Good Dreams</button>
      <button onClick={() => getLucid()}>Lucid</button>
      <button onClick={() => getNonLucid()}>Not Lucid</button>
      <button onClick={() => getDreamByDate("2021-06-02")}>Find June 2, 2021</button>
      <button onClick={() => searchSummary("dragon")}>Find dragon in summary</button>
      <button onClick={() => searchDescription("desert")}>Find desert in description</button>
      <button onClick={() => searchMeals("Butter")}>Find Butter in meals</button>
      <button onClick={() => searchActivities("Studying")}>Find Studying in activities</button>
      <button onClick={() => searchForKeyword("instead")}>Find instead in all text fields</button>
      
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Nightmare?</th>
            <th>Lucid?</th>
            <th>Summary</th>
            <th>Description</th>
            <th>Last Meal Before Bed</th>
            <th>Last Activity Before Bed</th>
          </tr>
        </thead>
        <tbody>
          {
            dreams ? dreams.map(dream => {
              return (
                <tr key={dream.id}>
                  <td>{dream.date}</td>
                  <td>{dream.was_nightmare ? 'Nightmare' : 'Good Dream'}</td>
                  <td>{dream.was_lucid ? 'Lucid' : 'Not Lucid'}</td>
                  <td>{dream.summary}</td>
                  <td>{dream.description}</td>
                  <td>{dream.last_meal_before_bed}</td>
                  <td>{dream.last_activity_before_bed}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => deleteDream(dream.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
              : ''
          }
        </tbody>
      </table>
      <button onClick={() => logDream({
        "was_lucid": false,
        "was_nightmare": true,
        "summary": "so...many...clowns...",
        "description": "There are clowns everywhere...they're coming after me...NOOOOOOOOOOOOOOoooooooooooooooooo........",
        "last_meal_before_bed": "Cream Pie",
        "last_activity_before_bed": "Juggling",
        "date": "2021-06-07"
      })}>Add New Dream</button>
    </div>
  )
}