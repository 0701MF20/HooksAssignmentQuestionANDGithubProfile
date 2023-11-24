// import logo from './logo.svg';
// import './App.css';
// import Counter from './Component/Counter';
// import MasterPage from './Component/MasterPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import FakeStore from './Component/FakeStore';
// import UseRefs from './Component/UseRefs';
// import Timers from './Component/Timers';
// // import Factorial from './Component/Factorial';
// import Factorials from './Component/Factorials';

// function App() {
//   return (
//     <div className="App">
//       <MasterPage>
//         {/* <Counter/> */}
//         {/* <FakeStore /> */}
// {/* <UseRefs/>     */}
// {/* <Timers/> */}
// {/* <Factorial/> */}
// <Factorials/>
//   </MasterPage>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import "./index.css";
// import { Axios } from 'axios';
// import React from 'react';

// const testData = [
//   { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
//   { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
//   { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
// ];
// const CardList = (props) =>
// (
//   <div>
//     {props.profiles.map(profile => <Card {...profile} />)}
//   </div>
// );

// class Card extends React.Component {
//   render() {
//     const profile = this.props;
//     return (
//       <div className="github-profile">
//         <img src={profile.avatar_url} />
//         <div className='info'>
//           <div className='name'>{profile.name}</div>
//           <div className='company'>{profile.company}</div>

//         </div>
//       </div>
//     );
//   }
// }
// class Form extends React.Component {
//   state={userName:''}
// handleSubmit=(event)=>
// {
//   event.preventDefault();
//   console.log(this.state.userName)
// }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//         value={this.state.userName}
//         onChange={(event)=>this.setState({userName:event.target.value})}
//          type='text' 
//          placeholder='Github username'
//          required
//           />
//         <button>Add card</button>
//       </form>
//     );
//   }
// }
// class App extends React.Component {
//   state = {
//     profiles: testData,
//   }
//   render() {
//     return (
//       <div>
//         <div className='header'>{this.props.title}</div>
//         <Form/>
//         <CardList profiles={this.state.profiles} />
//       </div>
//     );
//   }
// }
// export default App;




import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Axios from "axios";
// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
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