/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

export default {
  image: {
    display: "inline-block", // Eliminates whitespace between block and data fields block
    maxWidth: "100%",
    verticalAlign: "middle"
  },
  "img.grayscale": {
      '-webkit-filter': 'grayscale(1)',

      /* this is for Firefox 3.5+, Firefox mobile */
      filter: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'gs\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#gs")',

      /* for IE6+ */
      // filter: 'gray'
  }
};
