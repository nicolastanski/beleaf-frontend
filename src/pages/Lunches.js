import React, { Component } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

import "./Lunches.css";

export default class Lunches extends Component {
  state = {
    lunches: [],
    currentPage: 1,
    totalPages: 1
  };

  async componentDidMount() {
    const response = await api.get("/lunches");

    this.setState({
      lunches: response.data.lunches,
      totalPages: response.data.total_pages
    });
  }

  prevPage = async () => {
    let page = this.state.currentPage;
    page--;

    const response = await api.get(`/lunches?page=${page}`);

    this.setState({
      lunches: response.data.lunches,
      currentPage: page
    });
  };

  nextPage = async () => {
    let page = this.state.currentPage;
    page++;

    const response = await api.get(`/lunches?page=${page}`);

    this.setState({
      lunches: response.data.lunches,
      currentPage: page
    });
  };

  render() {
    const { currentPage, totalPages } = this.state;

    return (
      <div id="lunches">
        <ul>
          {this.state.lunches.map(lunch => (
            <Link to={`/lunches/${lunch.id}`} key={lunch.id}>
              <li>
                <img src={lunch.url} alt={lunch.name} width="100px" />
                <h2>{lunch.name}</h2>
                <p>
                  <strong>Price: </strong>
                  {lunch.price}
                  <br />
                </p>
              </li>
            </Link>
          ))}
        </ul>

        <div id="pagination">
          <button
            onClick={this.prevPage}
            disabled={currentPage === 1 ? "disabled" : ""}
          >
            Prev
          </button>
          <button
            onClick={this.nextPage}
            disabled={currentPage === totalPages ? "disabled" : ""}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
