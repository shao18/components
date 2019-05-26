import "./index.css";
import { Button } from "@storybook/react/demo";
import { storiesOf } from "@storybook/react";
import React from "react";
import boardCell from "BoardCell/stories";
import boardTh from "BoardTh/stories";
import boardRow from "BoardRow/stories";
import boardAlpha from "BoardAlpha/stories";
import board from "Board/stories";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
