import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Resort activities",
        info:
          "provides alot of entertainment activities for guests including both youngers and old ones",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          " A long walk or vigorous walk  especially for pleasue or exercise or for some peace",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "provies a transport service for some short distances",
      },
      {
        icon: <FaBeer />,
        title: "free drinks",
        info:
          " Provides an free drinks at the late nights irrespective of premises",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}