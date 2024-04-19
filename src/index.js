import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import NewvsReturnVisitors from "./newvsreturnvisitors";
import ReactDOM from "react-dom";
import "./styles/styles.css";

const e = React.createElement;
const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const layout = {
    xs: [{ i: "1", x: 0, y: 0, w: 2, h: 1, minW: 2, minH: 1 }],
    md: [{ i: "2", x: 10, y: 0, w: 2, h: 1, minW: 2, minH: 1 }]
  };

  const removeStyle = {
    position: "absolute",
    left: "11px",
    top: 0,
    cursor: "pointer"
  };

  return (
    <ResponsiveGridLayout layouts={layout}>
      <div key="1">
        <NewvsReturnVisitors />
        <span className="remove" style={removeStyle}>
          x
        </span>
      </div>
    </ResponsiveGridLayout>
  );
}

ReactDOM.render(e(App), document.getElementById("root"));
