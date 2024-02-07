// const fpath = "./data/2.js";

import { arr_VLspec } from './data/outfile_vlspec.js';

// const vLspec = require('./data/1.json')
// let vLspec = [];

const vLspec = arr_VLspec[ind];
console.log('vlspec:', vLspec);
console.log("ind", ind);

/*
var yourVlSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple bar chart with embedded data.',
    "data": {
        values: [
            {a: 'A', b: 28},
            {a: 'B', b: 55},
            {a: 'C', b: 43},
            {a: 'D', b: 91},
            {a: 'E', b: 81},
            {a: 'F', b: 53},
            {a: 'G', b: 19},
            {a: 'H', b: 87},
            {a: 'I', b: 52}
        ]
    },
    mark: 'bar',
    encoding: {
        x: {field: 'a', type: 'ordinal'},
        y: {field: 'b', type: 'quantitative'}
    }
};
*/

vegaEmbed('#vis', vLspec);