class IndecisonApp extends React.Component{ 
  constructor(props){
      super(props);
      this.handleDeleteAll = this.handleDeleteAll.bind(this);
      this.state = {
          options: ['op1', 'op2']
      };
  }

  handleDeleteAll(){
    this.setState((previousState) => {
      return {
        options: []
      };
    })
  }

  render(){
   const title = 'Indecision App';
   const subtitle = 'Keep computer at your fingertips'; 
   
   return (
     <div>
       <Header title={title} subtitle={subtitle} />
       <Action hasOption={this.state.options.length > 0} />
       <Options 
          options={this.state.options}
          handleDeleteAll={this.handleDeleteAll}
        />
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
  handleClick() {
    alert('pick me');
  }
  render(){
    //console.log(this.props.hasOption);
    return (
      <div>
        <button 
          onClick={this.handleClick}
          disabled={!this.props.hasOption}
        >Click Me</button>
      </div>
    );
  }
}


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
        <input type="text" name="option" />
          {/*<submit type="submit">Submit</submit>*/}
        <button>Add Option</button>      
       </form>   
    </div>
   );
 }
}
ReactDOM.render(<IndecisonApp />, document.getElementById("test"));
