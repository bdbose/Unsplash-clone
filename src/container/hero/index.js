/** @format */

import React from 'react';
import styled from 'styled-components';
import Search from '../../assets/search.svg';
const Hero = () => {
	const HeroWrapper = styled.div`
		background-image: url('/background.png');
		background-size: 100% 100%;
		height: 100%;
	`;
	const Text = styled.div`
		margin: auto;
		display: flex;
		width: 60%;
		flex-direction: column;
		color: white;
		padding: 70px 50px;
		h1 {
			font-size: 46px;
			font-weight: 700;
		}
		span {
			font-size: 18px;
		}
		h5 {
			margin: 10px 0;
			font-weight: 300;
		}
	`;
	const TextInput = styled.div`
		background: white;
		border-radius: 3px;
		display: flex;
		padding: 5px 10px;
		margin-top: 10px;
		align-items: center;
		input {
			border: 0;
			flex-grow: 3;
			outline: none;
		}
		img {
			margin-right: 5px;
		}
		button {
			border: solid 2px grey;
			padding: 5px 10px;
			border-radius: 3px;
			color: grey;
			background: none;
		}
	`;
	return (
		<HeroWrapper>
			<Text>
				<h1>Unsplash</h1>
				<span>Beautiful,free photos.</span>{' '}
				<span>
					Gifted by the world's most generous community of photographers.
				</span>
				<TextInput>
					<img src={Search} width='25px' alt='search' />
					<input type='text' placeholder='Search free high-resolution photos' />
					<button>Search</button>
				</TextInput>
				<h5>Trending searches: business, computer, nature, love, house</h5>
			</Text>
		</HeroWrapper>
	);
};
export default Hero;
