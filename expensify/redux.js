//Redux create file redux101

import { createStore } from ‘redux’;
const store =createStore((state = { count: 0 }, action) => {
  switch (action.type) {
	case ‘INCREMENT’:
	  const incrementBy = typeof action.incrementBy === ‘number’ ? action.incrementBy : 1;
  return {
   count: state.count + incrementBy;
  }
case ‘DECREMENT’:
  return {
   count: state.count - 1;
  }
case ‘RESET’:
  return {
   count: 0;
  }
default:
  return state;  
  } 	
});

//console.log(store.getState());
const unsubscribe = store.subscribe(() => {
	console.log(store.getstate());
});
store.dispatch({
	type: ‘INCREMENT’,
	incrementBy: 5
});
//unsubscribe();
store.dispatch({
	type: ‘DECREMENT’,
decrementBy: 5
});
store.dispatch({
	type: ‘RESET’
});
//console.log(store.getState());
