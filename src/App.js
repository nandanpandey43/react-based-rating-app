import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ marginTop: 70 }}>
        <span style={{ color: "blue" }}>Bollwood</span> movies
      </h1>
      <p>checkout few genre of Bollwood movies and it's rating here</p>
      <button style={genreStyle} onClick={actionClicked}>
        Action
      </button>
      <button style={genreStyle} onClick={comedyClicked}>
        Comedy
      </button>
      <button style={genreStyle} onClick={horrorClicked}>
        Horror
      </button>
      <button style={genreStyle} onClick={romanceClicked}>
        Romance
      </button>
      <hr style={{ width: "80%", marginTop: 18 }}></hr>

      <div style={contentStyle}>
        <p id="name1">
          <strong>book no. 2</strong>
        </p>
        <p id="rate1">
          <small>4.5/5</small>
        </p>
      </div>

      <div style={contentStyle}>
        <p id="name2">
          <strong>book no. 2</strong>
        </p>
        <p id="rate2">
          <small>4.5/5</small>
        </p>
      </div>

      <div style={contentStyle}>
        <p id="name3">
          <strong>book no. 2</strong>
        </p>
        <p id="rate3">
          <small>4.5/5</small>
        </p>
      </div>
    </div>
  );
}

function actionClicked() {
  const name1 = "Race 2";
  const name2 = "Vishwaroopam";
  const name3 = "Rowdy Rathore";
  const rate1 = "5.3/10";
  const rate2 = "8.2/10";
  const rate3 = "5.7/10";
  ReactDOM.render(name1, document.getElementById("name1"));
  ReactDOM.render(rate1, document.getElementById("rate1"));
  ReactDOM.render(name2, document.getElementById("name2"));
  ReactDOM.render(rate2, document.getElementById("rate2"));
  ReactDOM.render(name3, document.getElementById("name3"));
  ReactDOM.render(rate3, document.getElementById("rate3"));
}
function comedyClicked() {
  const name1 = "Andaz Apna Apna";
  const name2 = " Hera Pheri";
  const name3 = " Lage Raho Munna Bhai";
  const rate1 = "8.2/10";
  const rate2 = "8.3/10";
  const rate3 = "8.1/10";
  ReactDOM.render(name1, document.getElementById("name1"));
  ReactDOM.render(rate1, document.getElementById("rate1"));
  ReactDOM.render(name2, document.getElementById("name2"));
  ReactDOM.render(rate2, document.getElementById("rate2"));
  ReactDOM.render(name3, document.getElementById("name3"));
  ReactDOM.render(rate3, document.getElementById("rate3"));
}
function horrorClicked() {
  const name1 = " Tumbbad";
  const name2 = "Ravening ";
  const name3 = "Stree";
  const rate1 = "8.3/10";
  const rate2 = "8.1/10";
  const rate3 = "7.6/10";
  ReactDOM.render(name1, document.getElementById("name1"));
  ReactDOM.render(rate1, document.getElementById("rate1"));
  ReactDOM.render(name2, document.getElementById("name2"));
  ReactDOM.render(rate2, document.getElementById("rate2"));
  ReactDOM.render(name3, document.getElementById("name3"));
  ReactDOM.render(rate3, document.getElementById("rate3"));
}
function romanceClicked() {
  const name1 = " Dilwale Dulhania Le Jayenge";
  const name2 = "Kuch Kuch Hota Hai";
  const name3 = " Aashiqui 2";
  const rate1 = "8.1/10";
  const rate2 = "7.6/10";
  const rate3 = "7/10";
  ReactDOM.render(name1, document.getElementById("name1"));
  ReactDOM.render(rate1, document.getElementById("rate1"));
  ReactDOM.render(name2, document.getElementById("name2"));
  ReactDOM.render(rate2, document.getElementById("rate2"));
  ReactDOM.render(name3, document.getElementById("name3"));
  ReactDOM.render(rate3, document.getElementById("rate3"));
}

const contentStyle = {
  color: "black",
  // backgroundColor: "DodgerBlue",
  border: "1px solid gray",
  padding: "10px",
  // paddingLeft: "0px",
  fontFamily: "Arial",
  borderRadius: "10px",
  marginTop: "18px",
  textAlign: "left",
  width: "70%",
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom: "18px"
};

const genreStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  borderRadius: "15px",
  marginRight: "18px",
  cursor: "pointer"
};
