import React from "react";
import assignPropTypes from 'assign-prop-types';
import PropTypes from 'prop-types';
import {block} from 'bem-cn';
import "BoardTh/css/index.css";

export default assignPropTypes({
  row: PropTypes.number,
  reverse: PropTypes.bool,	
},{
  reverse: false,
})( ({row, reverse}) => <th className={block('board')('th',{reverse})}>{row}</th>);


