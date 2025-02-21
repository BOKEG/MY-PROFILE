import React, { Component } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Rose Gati",
        bio: "A passionate software developer.",
        imgSrc: "https://th.bing.com/th/id/OIP.ctaQqcGYXzcVqaR6KXU0qgHaFj?rs=1&pid=ImgDetMain",
        profession: "Software Engineer",
      },
      shows: false,
      timeElapsed: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timeElapsed: prevState.timeElapsed + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>Profession: {person.profession}</h3>
          </div>
        )}
        <p>Time since mount: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
