const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading one"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "heading two"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
