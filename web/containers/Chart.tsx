import {
    // Card,
    // CardHeader,
    // CardBody,
    // CardFooter,
    // CardTitle,
    Row,
    Col
} from "reactstrap";

import LineChart from '../components/LineChart'
const data = [
    {
      "id": "japan",
      "color": "hsl(154, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 209
        },
        {
          "x": "helicopter",
          "y": 186
        },
        {
          "x": "boat",
          "y": 272
        },
        {
          "x": "train",
          "y": 174
        },
        {
          "x": "subway",
          "y": 161
        },
        {
          "x": "bus",
          "y": 167
        },
        {
          "x": "car",
          "y": 296
        },
        {
          "x": "moto",
          "y": 44
        },
        {
          "x": "bicycle",
          "y": 101
        },
        {
          "x": "horse",
          "y": 272
        },
        {
          "x": "skateboard",
          "y": 148
        },
        {
          "x": "others",
          "y": 220
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(32, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 175
        },
        {
          "x": "helicopter",
          "y": 270
        },
        {
          "x": "boat",
          "y": 20
        },
        {
          "x": "train",
          "y": 115
        },
        {
          "x": "subway",
          "y": 208
        },
        {
          "x": "bus",
          "y": 142
        },
        {
          "x": "car",
          "y": 83
        },
        {
          "x": "moto",
          "y": 1
        },
        {
          "x": "bicycle",
          "y": 192
        },
        {
          "x": "horse",
          "y": 241
        },
        {
          "x": "skateboard",
          "y": 94
        },
        {
          "x": "others",
          "y": 118
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(179, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 41
        },
        {
          "x": "helicopter",
          "y": 190
        },
        {
          "x": "boat",
          "y": 75
        },
        {
          "x": "train",
          "y": 62
        },
        {
          "x": "subway",
          "y": 113
        },
        {
          "x": "bus",
          "y": 96
        },
        {
          "x": "car",
          "y": 247
        },
        {
          "x": "moto",
          "y": 294
        },
        {
          "x": "bicycle",
          "y": 115
        },
        {
          "x": "horse",
          "y": 269
        },
        {
          "x": "skateboard",
          "y": 97
        },
        {
          "x": "others",
          "y": 139
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(255, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 56
        },
        {
          "x": "helicopter",
          "y": 199
        },
        {
          "x": "boat",
          "y": 49
        },
        {
          "x": "train",
          "y": 189
        },
        {
          "x": "subway",
          "y": 243
        },
        {
          "x": "bus",
          "y": 238
        },
        {
          "x": "car",
          "y": 161
        },
        {
          "x": "moto",
          "y": 38
        },
        {
          "x": "bicycle",
          "y": 1
        },
        {
          "x": "horse",
          "y": 231
        },
        {
          "x": "skateboard",
          "y": 252
        },
        {
          "x": "others",
          "y": 4
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(246, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 178
        },
        {
          "x": "helicopter",
          "y": 153
        },
        {
          "x": "boat",
          "y": 50
        },
        {
          "x": "train",
          "y": 280
        },
        {
          "x": "subway",
          "y": 37
        },
        {
          "x": "bus",
          "y": 261
        },
        {
          "x": "car",
          "y": 194
        },
        {
          "x": "moto",
          "y": 202
        },
        {
          "x": "bicycle",
          "y": 190
        },
        {
          "x": "horse",
          "y": 282
        },
        {
          "x": "skateboard",
          "y": 151
        },
        {
          "x": "others",
          "y": 120
        }
      ]
    }
  ]
function SummaryChart() {
    return (

            <Row>
                <Col md={12}>
                    <LineChart data={data}></LineChart>
                </Col>
                <Col md={12}>
                    {"{{Graph2}}"}
                </Col>
            </Row>

    )
}

export default SummaryChart 