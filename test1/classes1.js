class IndecisonApp extends React.Component{ 
   render(){
    const title = 'Indecision App';
    const subtitle = 'Keep computer at your fingertips'; 
    const options = ['op1', 'op2'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
  return (
    <div>
      <h1>{this.props.title}</h1>
      <p>{this.props.subtitle}</p>
    </div>
  );
  }
}

class Action extends React.Component{
handlePick(){
	alert('Pick Me');
}
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>Click Me</button>
      </div>
    );
  }
}
//props is an object
class Options extends React.Component{
constructor(props){
super(props);
this.handleRemoveAll = this.handleRemoveAll.bind(this);
}
  handleRemoveAll() {
     console.log(this.props.options);
    // alert('Remove All items');
  }
  render(){
    return (
     <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
       {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
     </div>
           
    );
  }
}

class Option extends React.Component{
  render(){
    return (
    <div>
     <p>{this.props.optionText}</p>
  {/*<ol>
      <li>Option1</li>
      <li>Option2</li>
  </ol>*/}
    </div>
    );
  }
}

class AddOptions extends React.Component{
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option) {
    	alert('Add Option');
    }
  }
  render(){
    return (
      <div>
          <form onSubmit={this.handleAddOption}>
	<input type="text" name="option">
	//<submit type="submit">Submit</submit>
	<button>Add Option</button>      
        </form>   
   </div>
    );
  }
}
ReactDOM.render(<IndecisonApp />, document.getElementById("test"));

////counter example re-written using component state
class Counter extends React.Component{
  constructor(props){
	super(props);
	this.plusOne = this.plusOne.bind(this);
	this.minusOne = this.minusOne.bind(this);
	this.refresh = this.refresh.bind(this);
	this.state = {
		count: 0
	`};
  }
  plusOne() {
	this.setState((previousState) => {
		return {
			count: previousState.count + 1;
		};	
	});
  	//console.log('plusOne');
  }
  minusOne() {
	this.setState((previousState) => {
		return {
			count: previousState.count - 1;
		};	
	});
  	//console.log('minusOne');
  }
  refresh() {
	this.setState(() => {
		return {
			count: 0;
		};	
	});
  	//console.log('refresh');
  }
  render(){
     <div>
	<h1>Count: {this.state.count}</h1>
	<button onClick = {this.plusOne}>+1</button> 
	<button onClick = {this.minusOne}>-1</button> 
	<button onClick = {this.refresh}>refresh</button> 
    </div>
  }
}

ReactDOM.render(<IndecisonApp />, document.getElementById("test"));

///visibility toggle
class VisibilityToggle extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			visibility: false,
			visibleText: 'Some Text'
		};
	}
	handleClick(){
		this.setState((previousState) => {
			visibility: !previousState.visibility;
		});
	}
	render(){
   	  <div>
		<h1>Visibility Toggle</h1>
		<button onClick = {this.handleClick}>{this.state.visibility}</button> 
		<p>{this.state.visibleText}</p>
   	 </div>
  	}
}
