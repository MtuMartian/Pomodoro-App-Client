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
    if (this.state.isPaused) return;
    if (this.state.remainingTime <= 0) {
      if (this.props.progressState === 1) {
        const breakLength = this.props.onFinishSession();
        this.setState({
          remainingTime: breakLength,
          isPaused: true
        });
      } else if (this.props.progressState === 2) {
        this.props.onFinishBreak();
        this.setState({
          remainingTime: 25 * 60,
          isPaused: true
        })
      }
    }

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
    let resetBtn = null;
    if (this.props.progressState === 1) {
      resetBtn = (
        <div className="icon-btn-container">
          <Button variant="fab" aria-label="Reset" onClick={this.resetTimer.bind(this)}>
            <ReplayIcon />
          </Button>
        </div>
      )
    }
    let playPauseHandler = null;
    if (this.props.progressState === 0) {
      playPauseHandler = (() => {
        this.props.onStartSession();
        this.setState({isPaused: false});
      }).bind(this);
    } else {
      playPauseHandler = this.togglePaused.bind(this, !this.state.isPaused);
    }
    let actionBtns = null;
    if (this.state.isPaused) {
      actionBtns = (
        <div className="timer-actions">
          <div className="icon-btn-container">
            <Button variant="fab" arial-label="Play" onClick={playPauseHandler}>
              <PlayArrowIcon />
            </Button>
          </div>
          {resetBtn}
        </div>
      )
    } else {
      actionBtns = (
        <div className="timer-actions">
          <div className="icon-btn-container">
            <Button variant="fab" arial-label="Pause" onClick={playPauseHandler}>
              <PauseIcon />
            </Button>
          </div>
          {resetBtn}
        </div>
      )
    }

    let timerMessage = "";
    switch(this.props.progressState) {
      case 0:
        timerMessage = "Write down your goals and begin the next session!";
        break;
      case 1:
        timerMessage = "Session is in progress. Stay focused!";
        break;
      case 2:
        timerMessage = "Break in progress. Take some notes about which goals you achieved last session!";
        break;
    }

    return (
      <div className="card">
        <div className="timer">
          {timerStrRep}
        </div>
        <div className="timer-message">
          {timerMessage}
        </div>
        <div className="timer-actions">
          {actionBtns}
        </div>
      </div>
    );
  }

}

export default Timer;
