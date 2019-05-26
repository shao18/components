import React, {Component} from "react";
import BoardAlpha from "BoardAlpha";
import BoardRow from "BoardRow";
import BoardCell from "BoardCell";
import "Board/css/index.css";
import {block} from "bem-cn";
export default class Board extends Component{
  render(){
      const res = [];
      res.push(<BoardAlpha col={this.props.col} key={0} reverse={true}/>);
      for(let i = this.props.row; i>0; i--){
	const cols=[];
	for(let j = 1; j<=this.props.col; j++){
           cols.push(<BoardCell color={((i+j)%2==0)?"black":"white"}/>)
	}
        res.push(<BoardRow row={i} key={i}>{cols}</BoardRow>)
      }
      res.push(<BoardAlpha col={this.props.col}  key={this.props.row+1}/>);
      return <table className={block("board")({reverse:this.props.reverse})}>{res}</table>;
  }
}
