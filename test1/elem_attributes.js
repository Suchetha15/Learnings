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
const setCountVal = () => {
  const template = (
    <div>
    <h1>Count: {count}</h1>
    <button onclick = {plusOne}>+1</button> 
    <button onclick = {minusOne}>+1</button> 
    <button onclick = {refresh}>+1</button> 
  </div>
   );
  approot = document.getElementById("test");
  ReactDOM.render(template, approot);
}
setCountVal();
