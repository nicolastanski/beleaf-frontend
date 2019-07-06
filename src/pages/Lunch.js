import React, { Component } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import "./Lunch.css";

export default class Lunch extends Component {
  state = {
    lunch: ""
  };

  async componentDidMount() {
    const response = await api.get(`/lunches/${this.props.match.params.id}`);

    console.log(response);
    this.setState({
      lunch: response.data
    });
  }

  render() {
    const lunch = this.state.lunch;

    return (
      <div className="container">
        <Link to="/"> Back</Link>

        <div id="lunch">
          <img src={lunch.url} alt={lunch.name} width="400px" />
          <h2>{lunch.name}</h2>
          <p>{lunch.description}</p>

          <p className="ingredients">
            <strong>Ingredients: </strong>
            {lunch.ingredients}
          </p>
          <p className="amount">
            <strong>Amount: </strong>
            {lunch.amount}
          </p>
          <p className="prince">
            <strong>Price: </strong>
            {lunch.price}
          </p>
        </div>
      </div>
    );
  }
}
