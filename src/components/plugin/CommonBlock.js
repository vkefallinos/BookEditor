/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";

import Dropdown from "../../components/Dropdown";
import {
  BlockActionGroup,
  BlockControls,
  BlockWrapper,
  BlockData,
  BlockContent
} from "../../components/plugin";
import {
  DEFAULT_SIZE_OPTIONS,
  DEFAULT_POSITION_OPTIONS,
  DEFAULT_SIZE_KEY,
  DEFAULT_POSITION_KEY,
} from "../../components/plugin/defaults";


export default class CommonBlock extends Component {
  constructor(props) {
    super(props);

    this._handlePositionChange = ::this._handlePositionChange;
    this._handleSizeChange = ::this._handleSizeChange;
    this._onMouseEnter = ::this._onMouseEnter;
    this._onMouseLeave = ::this._onMouseLeave;

  }
  state = {
    size: "block__medium",
    position: "block__center",
    hovered: {
      display: ''
    }
  }
  _handleSizeChange(newValue, width=null, height=null) {
    this.props.container.updateData({size: newValue});
    switch(newValue){
      case "small":
        this.setState({size:"block__small"})
        break;
      case "medium":
        this.setState({size: "block__medium"})
        break;
      case "big":
        this.setState({size: "block__big"})
        break;
      case "custom":
        this.setState({blockStyle: { width, height }, size:null })
    }
  }
  _handlePositionChange(newValue) {
    this.props.container.updateData({position: newValue});
    switch(newValue){
      case "left":
        this.setState({position:"block__left"})
        break;
      case "center":
        this.setState({size: "block__center"})
        break;
      case "right":
        this.setState({position: "block__right"})
        break;
      case "custom":
        this.setState({blockStyle: { width, height }, position:null })
    }
  }
  _onMouseEnter(event){
    console.log("onMouseEnter")
    this.setState({
      hovered: true
    })
  }
  _onMouseLeave(event){
    console.log("onMouseLeave")
    this.setState({
      hovered: false

    })
  }

  render(){
    const data = this.props.data;
    const content = this.props.content;
    const inputs = this.props.inputs;
    const outputs = this.props.outputs;
    const customActions = this.props.customActions;

    const defaults = {
      defaultSize: DEFAULT_SIZE_KEY,
      defaultPosition: DEFAULT_POSITION_KEY,
      sizeOptions: DEFAULT_SIZE_OPTIONS,
      positionOptions: DEFAULT_POSITION_OPTIONS
    };
    let options = this.props.blockProps.plugin.options || {};
    options = {...defaults, ...options};

    return (
      <BlockWrapper  size={this.state.size} position={this.state.position} style={this.state.blockStyle}>
        <div onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
          <div style={this.state.hovered?{'display':''}:{'display':'none'}}>
            <BlockControls>
              <Dropdown
                items={options.sizeOptions}
                selected={data.size || options.defaultSize}
                onChange={this._handleSizeChange} />
              {customActions()}
              <Dropdown
              items={options.positionOptions}
              selected={data.position || options.defaultPosition}
              onChange={this._handlePositionChange} />
              <BlockActionGroup items={this.props.actions} />
            </BlockControls>
          </div>
          <BlockContent>
            {content()}
          </BlockContent>
          <div  style={this.state.hovered ? {'display':''}:{'display':'none'}}>
            <BlockData>
              {inputs()}
            </BlockData>
          </div>
          <div  style={this.state.hovered ? {'display':'none'}:{'display':''}}>
            <BlockData>
              {outputs()}
            </BlockData>
          </div>
        </div>
      </BlockWrapper>
    );
  }
}
