import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      remainingTime: 25 * 60
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.isPaused || this.state.remainingTime <= 0) return;

    this.setState({
      remainingTime: this.state.remainingTime - 1
    });
  }

  togglePaused(newVal) {
    this.setState({
      isPaused: newVal
    });
  }

  resetTimer() {
    this.setState({
      isPaused: true,
      remainingTime: 25 * 60
    });
  }

  render() {
    // Determine timer representation
    const mins = Math.trunc(this.state.remainingTime / 60);
    let secs = this.state.remainingTime % 60;
    if (secs < 10) secs = '0' + secs;
    const timerStrRep = mins + ':' + secs;

    // Determine buttons to be displayed
    let actionBtns = null;
    if (this.state.isPaused) {
      actionBtns = (
        <div className="timer-actions">
          <div className="icon-btn-container">
            <Button variant="fab" arial-label="Play" onClick={this.togglePaused.bind(this, false)}>
              <PlayArrowIcon />
            </Button>
          </div>
          <div className="icon-btn-container">
            <Button variant="fab" aria-label="Reset" onClick={this.resetTimer.bind(this)}>
              <ReplayIcon />
            </Button>
          </div>
        </div>
      )
    } else {
      actionBtns = (
        <div className="timer-actions">
          <div className="icon-btn-container">
            <Button variant="fab" arial-label="Pause" onClick={this.togglePaused.bind(this, true)}>
              <PauseIcon />
            </Button>
          </div>
          <div className="icon-btn-container">
            <Button variant="fab" aria-label="Reset" onClick={this.resetTimer.bind(this)}>
              <ReplayIcon />
            </Button>
          </div>
        </div>
      )
    }
    return (
      <div className="card">
        <div className="timer">
          {timerStrRep}
        </div>
        <div className="timer-message">
          Session is in progress! You will be notified when the session ends
        </div>
        <div className="timer-actions">
          {actionBtns}
        </div>
      </div>
    );
  }

}

export default Timer;
