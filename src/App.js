import React from "react";
import "./App.css";
import CardList from "./contents/components/CardList/CardList";
import Form from "./contents/components/Form/Form";
const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];
class App extends React.Component {
  //class field syntax
  state = {
    profiles: testData,
  };
  addNewProfile = (newProfile) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, newProfile],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
