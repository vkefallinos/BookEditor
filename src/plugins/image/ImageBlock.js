/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";

import {
  BlockContent,
  BlockData,
  BlockInput,
  BlockAction,
  BlockActionGroup,
  CommonBlock
} from "../../components/plugin";
import MegadraftEditor from '../../components/MegadraftEditor'
import ContentEditable from "react-contenteditable";
import icons from "../../icons";

import ImageBlockStyle from "./ImageBlockStyle";


export default class ImageBlock extends Component {
  constructor(props) {
    super(props);

    this._handleCaptionChange = ::this._handleCaptionChange;
    this._handleRightsHolderChange = ::this._handleRightsHolderChange;
    this._toggleGreyScale = ::this._toggleGreyScale;

    this.actions = [
      {"key": "delete", "icon": icons.DeleteIcon, "action": this.props.container.remove}
    ];
  }
  state = {
    image: {
      display: "inline-block", // Eliminates whitespace between block and data fields block
      maxWidth: "100%",
      verticalAlign: "middle"
    },

  }
  _handleCaptionChange(event) {
    event.stopPropagation();
    this.props.container.updateData({caption: event.target.value});
  }

  _handleRightsHolderChange(event) {
    event.stopPropagation();
    this.props.container.updateData({rightsHolder: event.target.value});
  }
  _toggleGreyScale(event){
    console.log(event)
    event.stopPropagation();
    this.props.container.updateData({filter: "grey"});
    let filter = ''
    if (!this.state.image.WebkitFilter){
      filter = 'grayscale(1)'
    }

    this.setState({
      image: {
        display: "inline-block", // Eliminates whitespace between block and data fields block
        maxWidth: "100%",
        verticalAlign: "middle",
        WebkitFilter: filter,
      }
    })
  }


  render(){
    return (
      <CommonBlock {...this.props} actions={this.actions}
        content={()=>(
          <img style={this.state.image}  src={this.props.data.src} alt=""/>
        )}
        inputs={()=>(
          [<figcaption key={0}>
            {/* <MegadraftEditor /> */}
            <ContentEditable
             onChange={this._handleCaptionChange}
             html={this.props.data.caption}/>
          </figcaption>,
          <cite key={1}>
            <ContentEditable
              html={this.props.data.rightsHolder}
              onChange={this._handleRightsHolderChange} />
          </cite>
            // <BlockInput
            // key={0}
            // placeholder="Caption"
            // value={this.props.data.caption}
            // onChange={this._handleCaptionChange} />
          // ,
          // <BlockInput
          //   key={1}
          //   placeholder="Rights Holder"
          //   value={this.props.data.rightsHolder}
          //   onChange={this._handleRightsHolderChange} />
          ]
        )}
        outputs={()=>(
          [
            <figcaption key={0}>
              {this.props.data.caption}
            </figcaption>,
            <cite key={1}>
              {this.props.data.rightsHolder}
            </cite>
          ]
        )}
        customActions={()=>(
          <ul key={0}  className="block__action-group">
            <li  className="block__action" >
              <button onClick={this._toggleGreyScale}>Grey</button>
            </li>
          </ul>

        )}
      >
        {/* <BlockContent>
        </BlockContent> */}
{/*
        <BlockData>

        </BlockData> */}
      </CommonBlock>
    );
  }
}
