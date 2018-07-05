console.log('Hi');

/*var template = (
  <h1>Indecision App</h1>
  <p>Sub title</p>
  <ol>
    <li>Option1</li>
    <li>Option2</li>
  </ol>
);

var template2 = ( 
  <h1>Suchetha</h1>
  <p>Age: 24</p>
  <p>location: Bengalury</p>
);*/

var content1 = {
  heading: "Indecision App",
  subtitle: "Sub title"
};

var user = {
 name: "Suchetha",
 age: 24,
 location: "Bengaluru"
};


var approot = document.getElementById("demo");
ReactDOM.render(template, approot);
