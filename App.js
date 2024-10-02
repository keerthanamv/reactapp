const root = ReactDOM.createRoot(document.getElementById('root'));

/* const heading = React.createElement('h1', {id:"heading"}, 'Hello world using React !!!');

console.log(heading);

root.render(heading); */

const parent = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, "Hi"), React.createElement('h1', {}, "Hello")
]), React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "Great to "), React.createElement('h1', {}, "meet you!!")
])]);
root.render(parent);
