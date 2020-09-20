/** @format */

import React from 'react';
import styled from 'styled-components';
import Display from './container/display';
import Hero from './container/hero';
import Navbar from './container/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './container/search';
function App() {
	const Wrapper = styled.div`
		position: relative;
		margin: auto;
		width: 80vw;
		top: 10vh;
		box-shadow: 0 0 15px black;
	`;
	return (
		<>
			<Wrapper>
				<Navbar />
				<Hero />
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Display} />
						<Route exact path='/new/:id' component={Display} />
						<Route exact path='/search/:id' component={Search} />
					</Switch>
				</BrowserRouter>
			</Wrapper>
		</>
	);
}

export default App;
