/** @format */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
const Display = (props) => {
	const DisplayWrapper = styled.div`
		background: white;
	`;
	const Nav = styled.div`
		display: flex;
		div {
			margin: 20px;
			cursor: pointer;
			a {
				text-decoration: none;
				color: black;
			}
		}
		div:focus {
			transform: scale(1.2);
		}
		div:hover {
			transform: scale(1.2);
		}
	`;
	const Show = styled.div``;
	const ImageGrid = styled.div`
		display: grid;
		grid-gap: 10px;
		grid-template-columns: auto auto auto;
		margin-top: 30px;
		.image-item:nth-child(5n) {
			grid-column-end: span 2;
		}

		img {
			display: flex;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 10px;
		}
	`;
	const Loading = styled.div`
		overflow: hidden;
		display: flex;
		justify-content: center;
		img {
			overflow: hidden;
			animation: rotate 2s infinite;
		}
		@keyframes rotate {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}
	`;
	const ImgWrapper = styled.div``;
	const [images, setImages] = React.useState([]);
	const [loaded, setIsLoaded] = React.useState(false);
	const [page, setpage] = useState(1);
	const col = props.match.params.id || 1580860;
	const ClientId = 'YaWIUSH8VteV3mFPmKskfQnNLTTAMsHNByEuHa7uZU8';
	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const getData = async () => {
		Axios.get(
			`https://api.unsplash.com/collections/${col}/photos/?client_id=${ClientId}&page=${page}`
		)
			.then((res) => {
				setImages([...images, ...res.data]);
				setIsLoaded(true);
			})
			.catch((err) => {
				alert('Rate Limit Exceeded Please Try Later!');
				window.location.href = '/';
			});
	};
	return (
		<DisplayWrapper>
			<Nav>
				<div>
					<a href='/'>Trending</a>
				</div>
				<div>
					<a href={`/new/${139386}`}>New</a>
				</div>
			</Nav>
			<Show>
				<InfiniteScroll
					dataLength={images}
					next={() => {
						getData();
						setpage(page + 1);
					}}
					style={{ margin: '10px' }}
					hasMore={true}
					loader={
						<Loading>
							<img
								src={
									'https://www.flaticon.com/svg/static/icons/svg/189/189792.svg'
								}
								alt='loading'
								width='50px'
								height='auto'
							/>
						</Loading>
					}>
					<ImageGrid>
						{loaded
							? images.map((image, index) => (
									<ImgWrapper key={index}>
										<img src={image.urls.regular} alt={image.urls.regular} />
									</ImgWrapper>
							  ))
							: ''}
					</ImageGrid>
				</InfiniteScroll>
			</Show>
		</DisplayWrapper>
	);
};
export default Display;
