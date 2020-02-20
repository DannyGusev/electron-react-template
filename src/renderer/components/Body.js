import React from 'react';

import './Body.less';

export class Body extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      countr:0
    }
    this.handleInc =this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }
  handleInc(){
    let tempCounter = this.state.countr;
    tempCounter = tempCounter + 1;
    this.setState({
      countr: tempCounter
    })
  }
  handleDec(){
    //console.log('dec')
    let tempCounter = this.state.countr;
    tempCounter = tempCounter - 1;
    this.setState({
      countr:tempCounter
    })
  }
  render() {
    return (
      <div className={'body-container'}>
        <img className={'author-head-img'} src={require('../assets/images/head.jpg')}/>
        <p className={'content-text'}>
          Hello, if you want to learn more, click <a className={'href-text'} href={'https://github.com/SmallStoneSK/electron-react-template'} target={'blank'}>here</a>.
        </p>
        <div>
          <label>{this.state.countr}</label>
          <div onClick={this.handleInc}>inc</div>
          <div onClick={this.handleDec}>dec</div>
        </div>
      </div>
    );
  }
}