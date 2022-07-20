import "../../../node_modules/react-vis/dist/style.css";
import "./Chart.scss";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

const Chart = () => {
  var width = window.innerWidth;
  var height = window.innerHeight;
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
    { x: 10, y: 4 },
    { x: 11, y: 5 },
    { x: 12, y: 4 },
    { x: 13, y: 9 },
    { x: 14, y: 1 },
    { x: 15, y: 7 },
    { x: 16, y: 6 },
    { x: 17, y: 3 },
    { x: 18, y: 2 },
    { x: 19, y: 0 },
  ];

  return (
    <div style={{ marginTop: "15px" }}>
      <XYPlot width={width / 2} height={height / 3}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="green" />
        <LineSeries data={data} color="yellow" />
        <LineSeries data={data} color="red" />
      </XYPlot>
    </div>
  );
};

export default Chart;
