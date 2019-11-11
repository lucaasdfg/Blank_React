import React, { Component } from 'react'
import { placeholderContent } from './PlaceHolder'
export default class Content extends Component {
  render() {
    return <div
      className="content-container"
      dangerouslySetInnerHTML={{__html: placeholderContent}}
    />
  }
}