import React from 'react';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import './styles/App.css'
function App() {
	return (
		<div className="App">
			<header>
				<Menu />
			</header>
			<Main />
		</div>
	);
}

export default App;
