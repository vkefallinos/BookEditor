/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";


export default class BlockWrapper extends Component {
  render() {
    return (
      <div className={this.props.size + " " + this.props.position} >
      {this.props.children}

      </div>
    );
  }
}
