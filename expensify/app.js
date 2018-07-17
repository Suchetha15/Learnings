//app.js
Import {BrowserRouter, Route} from ‘react-route-dom’;
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
const EditExpensePage = () => (
	<div>
	This is EditExpensePage
</div>
);

const HelpPage = () => (
	<div>
	This is HelpPage
</div>
);

const NotFoundPage = () => (
	<div>
	404!
</div>
);




const routes = (
  <BrowserRouter>
    <Switch>
<div>
  <Route path=”/” component={ExpenseDashboardPage}  exact={true}/>
  <Route path=”/create” component={AddExpensePage} />
  <Route path=”/edit” component={EditExpensePage} />
  <Route path=”/help” component={HelpPage} />
  <Route component={NotFoundPage } />
</div>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById(‘test’));

//webpack to make page route in client side routing
devServer: {
  historyApiFallback: true;
}
