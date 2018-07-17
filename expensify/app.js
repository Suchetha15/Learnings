//app.js
Import {BrowserRouter, Route, Switch, Link, NavLink} from “react-route-dom”;
const ExpenseDashboardPage = () => (
	<div>
	This is ExpenseDashboardPage
</div>
);
const AddExpensePage = () => (
	<div>
	This is AddExpensePage
</div>
);
const EditExpensePage = (props) => {
  console.log(props);
  return (
	<div>
		This is EditExpensePage
	//This is EditExpensePage with id {props.match.params.id}
</div>
  );
}

const HelpPage = () => (
	<div>
	This is HelpPage
</div>
);
//a tag used instead of <Link> causes full page refresh when navigated
const NotFoundPage = () => (
	<div>
	404! - <Link to=“/”></Link>
</div>
);
const Header = () => (
	<header>
	  <h1>Expensify</h1>
  <NavLink to =“/” activeClassName=”is-active” exact={true}>Home Page</NavLink >
	  <NavLink to =“/create” activeClassName=”is-active”>Create Page</NavLink >
  //<NavLink to =“/edit/:id” activeClassName=”is-active”>Edit Page</NavLink >
  <NavLink to =“/edit” activeClassName=”is-active”>Edit Page</NavLink >
  <NavLink to =“/help” activeClassName=”is-active”>Help Page</NavLink >
</header>
);

const routes = (
  <BrowserRouter>
    <div>
	<Header />
<Switch>
  <Route path=”/” component={ExpenseDashboardPage}  exact={true}/>
  <Route path=”/create” component={AddExpensePage} />
  <Route path=”/edit” component={EditExpensePage} />
  <Route path=”/help” component={HelpPage} />
  <Route component={NotFoundPage } />
</Switch>
    </div >
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById(“test”));

//webpack to make page route in client side routing
devServer: {
  historyApiFallback: true;
}

//scss
/*.is-active {
Font-weight: bold;
}

Create new /router/AppRouter.js
Move code to the new path
Modify the import statements as required
Breakup individual components as well setting up import and exports
*/
