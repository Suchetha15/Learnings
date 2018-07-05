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
  subtitle: "Sub title",
  options: ["one", "two"]
};

var user = {
 name: "Suchetha",
 age: 24,
 location: "Bengaluru"
};
/*var template = (
  <h1>{content1.heading}</h1>
  <p>{content1.subtitle}</p>
  <ol>
    <li>Option1</li>
    <li>Option2</li>
  </ol>
);

var template2 = ( 
  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>location: {user.location}</p>
);*/


//////
function setLocation(location){
//return <p>Location: {location || "Anonymous"}</p>
  if(location){
   return <p>Location: {location}</p>
  }
}
var template2 = ( 
  <h1>{user.name}</h1>
  //{(user.age >=18) ? <p>Age: {user.age}</p>}
  //{(user.age >=18) && <p>Age: {user.age}</p>}
  {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
  {setLocation(user.location)}
);*/

var template = {
  <h1>{content1.heading}</h1>
  {content1.subtitle && <p>{content1.Subtitle}</p>}
  <p>{options.length = 0 ? "No options to display" : "Here are your options"
  <ol>
    <li>Option1</li>
    <li>Option2</li>
  </ol>
   }</p>
};

var approot = document.getElementById("demo");
ReactDOM.render(template, approot);
