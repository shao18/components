import { configure } from '@storybook/react';

/*
 *  function executed in browser
 */
function loadStories() {
  require("../../stories/index.js");
}

configure(loadStories, module);
