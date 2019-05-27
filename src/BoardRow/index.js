import React from "react";
import assignPropTypes from 'assign-prop-types';
import PropTypes from 'prop-types';
import {block} from 'bem-cn';

import BoardTh from "BoardTh";

export default assignPropTypes({
  row: PropTypes.number,
})( ({row, children}) => <tr className={block('board')('row')} >
	{ [<BoardTh row={row} />,...children,<BoardTh row={row} reverse={true}/>]}
	</tr>);


