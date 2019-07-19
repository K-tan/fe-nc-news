import React, { Component } from "react";
import * as api from "../utils/api";
import "../css/Vote.css";

class Vote extends Component {
  //created a vote class which has been sent through to the articleCard
  state = {
    voteChange: 0,
    err: null
  };

  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <div>
        <button onClick={() => this.vote(1)} disabled={voteChange === 1}>
          +
        </button>
        <p>votes:{votes + voteChange}</p>
        <button onClick={() => this.vote(-1)} disabled={voteChange === -1}>
          -
        </button>
      </div>
    );
  }

  vote = increment => {
    const { id, section } = this.props;
    api.vote(id, increment, section).catch(err => {
      this.setState(state => ({
        voteChange: state.voteChange - increment
      }));
    });
    this.setState(state => ({
      voteChange: state.voteChange + increment
    }));
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.votes !== this.props.votes) {
      this.setState({ voteChange: 0 });
    }
  };
}

export default Vote;
