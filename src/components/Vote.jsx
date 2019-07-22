import React, { Component } from "react";
import * as api from "../utils/api";
import "../css/Vote.css";
import voteUp from "../img/voteup.svg";
import voteDown from "../img/votedown.svg";

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
      <div className="voting">
        <button
          className="voteBtn"
          onClick={() => this.vote(1)}
          disabled={voteChange === 1}
        >
          <img width="25" height="25" src={voteUp} alt="voteup" />
        </button>
        <p>votes: {votes + voteChange}</p>
        <button
          className="voteBtn"
          onClick={() => this.vote(-1)}
          disabled={voteChange === -1}
        >
          <img width="25" height="25" src={voteDown} alt="votedown" />
        </button>
        {/* <button onClick={() => this.vote(-1)} disabled={voteChange === -1}>
          <img src={voteDown} />
        </button> */}
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
