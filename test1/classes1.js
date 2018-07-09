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
  render(){
    return (
      <div>
        <button>Click Me</button>
      </div>
    );
  }
}

class Options extends React.Component{
  render(){
    return (
     <div>
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
  render(){
    return (
      <div>
        <button>Add Options</button>
      </div>
    );
  }
}





ReactDOM.render(<IndecisonApp />, document.getElementById("test"));
