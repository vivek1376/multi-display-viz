export var vLspec = {
  "data": {
    "values": [
      {
        "a": "C",
        "b": 2
      },
      {
        "a": "C",
        "b": 7
      },
      {
        "a": "C",
        "b": 4
      },
      {
        "a": "D",
        "b": 1
      },
      {
        "a": "D",
        "b": 2
      },
      {
        "a": "D",
        "b": 6
      },
      {
        "a": "E",
        "b": 8
      },
      {
        "a": "E",
        "b": 4
      },
      {
        "a": "E",
        "b": 7
      }
    ]
  },
  "display": "2",
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "a",
      "type": "nominal"
    },
    "x": {
      "aggregate": "max",
      "field": "b",
      "type": "quantitative",
      "axis": {
        "title": "Max"
      }
    }
  }
}
