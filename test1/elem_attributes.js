let count = 0;
const plusOne = () => {
	count++;
	setCountVal();
	//console.log('plusOne')
}
const minusOne = () => {
	count--;
	setCountVal();
	//console.log('plusOne')
}
const refresh = () => {
	count = 0;
	setCountVal();
	//console.log('plusOne')
}
approot = document.getElementById("test");
const setCountVal = () => {
const template = (
  <div>
	<h1>Count: {count}</h1>
	<button onClick = {plusOne}>+1</button> 
	<button onClick = {minusOne}>+1</button> 
	<button onClick = {refresh}>+1</button> 
</div>
  );
//approot = document.getElementById("test");
ReactDOM.render(template, approot);
}
setCountVal();

//////////
const content1 = {
  heading: "Indecision App",
  subtitle: "Sub title",
  options: []
};
const handleClickEvent = (e) {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if(option){
	conten1.options.push(option)	;
	//e.target.elements.option.value = '';
	//render();
	}
	render();
};
const onRemoveAll = () => {
	content1.options = [];
	render();
};

approot = document.getElementById("test");
cont render = () => {
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
    <p>Length of options: {content1.options.length}</p>
       <form onSubmit={handleClickEvent}>
	<input type="text" name="option">
	//<submit type="submit">Submit</submit>
	<input type="submit" value="submit">
       </form>
       <button onClick = {onRemoveAll}>Remove All</button>
    </div>
);
ReactDOM.render(template, approot)
};
render();

//////////
//arrow functions
const user = {
 name: "Suchetha",
 age: 19,
 location: ["Bengaluru","Mysuru"],
placesLived() {
return this.location.map((city) => this.name + 'lived in' + city);
}
};
console.log(user.placesLived());

const multiplier = {
	num: 3,
	numArr: [10, 20, 30],
	multiplyNum(){
		return this.numArr.map((n) => n * this.num);
	}	
};
console.log(multiplier.multiplyNum());

/*<ol>
        {
	content1.options.map((op) => {
		return <li key={op}>{op}</li>;
	});
       }
        </ol>
*/
