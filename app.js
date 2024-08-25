const {parse, stringify} = require('svgson')
require("dotenv").config();
const fs = require('fs');

const currentPath = process.env.CURRENT_PATH

// Read SVG Data from file path


// ----------------------------
// Convert SVG to JSON AST
// ----------------------------

// #region convert svg to json
// parse(currentPath).then((json) => {
//     console.log(JSON.stringify(json, null, 2))
   
//     // Convert JSON AST back to SVG
//     const mysvg = stringify(json)
//     /* returns the SVG as string */
// })
// #endregion

// #region example code
  parse(`
    <svg>
      <line
        stroke= "#bada55"
        stroke-width= "2"
        stroke-linecap= "round"
        x1= "70"
        y1= "80"
        x2= "250"
        y2= "150">
      </line>
    </svg>`).then((json) => {
    console.log(JSON.stringify(json, null, 2))
    /*
      {
        name: 'svg',
        type: 'element',
        value: '',
        attributes: {},
        parent: null,
        children: [
          {
            name: 'line',
            type: 'element',
            value: '',
            attributes: {
              stroke: '#bada55',
              'stroke-width': '2',
              'stroke-linecap': 'round',
              x1: '70',
              y1: '80',
              x2: '250',
              y2: '150'
            },
            parent: null,
            children: []
          }
        ]
      }
    */
  
    // -------------------------------
    // Convert JSON AST back to SVG
    // -------------------------------
    const mysvg = stringify(json)
    /* returns the SVG as string */
  })
//   #endregion
