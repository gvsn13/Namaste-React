const parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id : "child1"}, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ]),
    React.createElement("div", {id : "child2"}, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);