import React, { Component } from "react"
import {loadableP5 as P5Wrapper} from './loadable.js';
import Letters from './Letters.js';

export default class P5 extends Component{

  render() {
    return <P5Wrapper sketch={Letters} />
  }
}