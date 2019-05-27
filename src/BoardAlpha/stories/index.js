import {storiesOf} from '@storybook/react';
import React from "react";
import BoardAlpha from "BoardAlpha";

export default storiesOf("BoardAlpha", module)
  .addDecorator(fn => (
    <table
      style={{
        borderCollapse: "collapse",
      border: "1px solid red",
      height: "100px",
    }}>
      <tbody>{fn()}</tbody>
    </table>
  ))
  .add("default", () => <BoardAlpha col={5}/>)
  .add("reverse", () => <BoardAlpha col={5} reverse={true}/>);
  

