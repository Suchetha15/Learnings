console.log('Hi');

/*const template = (
<div>
  <h1>Indecision App</h1>
  <p>Sub title</p>
  <ol>
    <li>Option1</li>
    <li>Option2</li>
  </ol>
</div>
);
const template2 = ( 
<div>
  <h1>Suchetha</h1>
  <p>Age: 24</p>
  <p>location: Bengalury</p>
</div>
);*/

const content1 = {
  heading: "Indecision App",
  subtitle: "Sub title",
  options: ["sadf"]
};

const user = {
 name: "Suchetha",
 age: 19,
 //location: "Bengaluru"
};
/*
const template = (
<div>
  <h1>{content1.heading}</h1>
  <p>{content1.subtitle}</p>
  <ol>
    <li>Option1</li>
    <li>Option2</li>
  </ol>
  </div>
);
const template2 = ( 
    <div>
  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>location: {user.location}</p>
  </div>
);*/



function setLocation(location){
return <p>Location: {location || "Anonymous"}</p>
  /*if(location){
   return <p>Location: {location}</p>
  }*/
}
const template2 = ( 
  <div>
    <h1>{user.name}</h1>
    {(user.age && user.age >=18) ? <p>Age: {user.age}</p>: null}
    {setLocation(user.location)}
  </div>
);

const template = (
    <div>
        <h1>{content1.heading}</h1>
        {content1.subtitle && <p>{content1.subtitle}</p>}
        
        <p>{content1.options.length == 0 ? "No options to display" : 
        <p>Here are your options:
        <ol>
            <li>Option1</li>
            <li>Option2</li>
        </ol>
        </p>
        }
        </p>
    </div>
);

const approot = document.getElementById("test");
const approot1 = document.getElementById("test1");
ReactDOM.render(template, approot);
ReactDOM.render(template2, approot1);
