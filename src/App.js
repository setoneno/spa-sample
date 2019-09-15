import React, { Component } from 'react';

function ChangeButton(props) {
  return (
    <a href={props.link} onClick={() => props.onClick()}>
      {props.value}
    </a>
  );
}

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { value: <div>main</div> };
  }

  showPage1() {
    this.setState({ value: (<div>page1 <img src={`${process.env.PUBLIC_URL}/img/aaa.pdf`}/></div>) });
  }

  showPage2() {
    this.setState({ value: (<div>page2 <img src={`${process.env.PUBLIC_URL}/img/bbb.pdf`}/></div>) });
  }

  showPage3() {
    this.setState({ value: (<div>page3 <img src={`${process.env.PUBLIC_URL}/img/ccc.pdf`}/></div>) });
  }
  

  render() {
    return (
      <div>
        <ul>
          <li>
            <ChangeButton link="/" value="main" onClick={() => this.state()} />
          </li>
          <li>
            <ChangeButton link="#1" value="page1" onClick={() => this.showPage1()} />
          </li>
          <li>
            <ChangeButton link="#2" value="page2" onClick={() => this.showPage2()} />
          </li>
          <li>
            <ChangeButton link="#3" value="page3" onClick={() => this.showPage3()} />
          </li>
        </ul>
        {this.state.value}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Body />
      </div>
    );
  }
}

export default App;