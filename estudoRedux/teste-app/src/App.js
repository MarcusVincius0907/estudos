import logo from "./logo.svg";
import "./App.css";
import  React  from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import SelectUser from './SelectUser'; 

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      inputValue: ''
    }
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  } 
  render() {

    console.log(this.props);

    return (

      <div className="App">

        <div className="content">

          <input onChange={this.inputChange} value={this.state.inputValue} type="text" />

          <button onClick={() => this.props.clickButton(this.state.inputValue)}>Click</button>

          <h1>{this.props.newValue}</h1>

        </div>

        <SelectUser teste={this.state.inputValue}></SelectUser>

      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickReducer.newValue
})

const mapDispatchToProps = dispatch => bindActionCreators({clickButton}, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )(App);
