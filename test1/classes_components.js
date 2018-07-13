class IndecisonApp extends React.Component{ 
  constructor(props){
      super(props);
      this.handleDeleteAll = this.handleDeleteAll.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
          options: []
      };
  }

  handleDeleteAll(){
    this.setState((previousState) => {
      return {
        options: []
      };
    })
  }
handlePick(){
	const randNum = Math.floor.(Math.random() * this.state.options.length);
	const option = this.state.options[randNum];
	alert(option);
}
handleAddOption(option){
	//console.log(option);
	if (!option){
		return 'Enter a valid value to be added';
	}else if (this.state.options.indexOf(option) > -1) {
		return 'Value already exist';
	}
	this.setState((prevState) => {
		return {
			options: prevState.options.concat(option)
		};
	})
}

  render(){
   const title = 'Indecision App';
   const subtitle = 'Keep computer at your fingertips'; 
   
   return (
     <div>
       <Header title={title} subtitle={subtitle} />
       <Action 
	hasOption={this.state.options.length > 0} 
      	handlePick={this.handlePick}
        />
       <Options 
          options={this.state.options}
          handleDeleteAll={this.handleDeleteAll}
        />
       <AddOptions
	handleAddOption={this.handleAddOption}
       />
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

/*
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );	
};*/


class Action extends React.Component{
  render(){
    //console.log(this.props.hasOption);
    return (
      <div>
        <button 
          onClick={this.props.handleClick}
          disabled={!this.props.hasOption}
        >Click Me</button>
      </div>
    );
  }
}

/*
const Action = (props) => {
  return (
      <div>
        <button 
          onClick={props.handleClick}
          disabled={!props.hasOption}
        >Click Me</button>
      </div>
    );
}*/


//props is an object
class Options extends React.Component{
 render(){
   return (
    <div>
      <button onClick={this.props.handleDeleteAll}>Remove All</button>
      {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
    </div>
          
   );
 }
}

/*
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteAll}>Remove All</button>
      {props.options.map((option) => <Option key={option} optionText={option}/>)}
    </div>      
   );
};
*/

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

/*
const Option = (props) => {
  return (
   <div>
    <p>{this.props.optionText}</p>
 {/*<ol>
     <li>Option1</li>
     <li>Option2</li>
 </ol>*/}/*
   </div>
   );
};
*/

class AddOptions extends React.Component{
constructor(props) {
	super(props);
	this.handleAddOption = this.handleAddOption.bind(this);
	this.state = {
		error: undefined
	}
}
 handleAddOption(e){
   e.preventDefault();
   const option = e.target.elements.option.value.trim();
   const error = this.props.handleAddOption(option);
   if(error){
	this.setSate(() => {
	return { error }
   })
  }
 }
 render(){
   return (
    <div>
        {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
          {/*<submit type="submit">Submit</submit>*/}
        <button>Add Option</button>      
       </form>   
    </div>
   );
 }
}
ReactDOM.render(<IndecisonApp />, document.getElementById("test"));
