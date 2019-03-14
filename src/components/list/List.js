import React, { Component } from 'react';
import Sale from "./Sale";
import KindProducts from "./KindProducts";
import TagProducts from "./TagProducts";

export default class List extends Component {
  render() {
    return (
      <div>
       <Sale/>
       <KindProducts/>
         
      </div>
    );
  }
}
