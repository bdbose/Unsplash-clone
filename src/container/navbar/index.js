/** @format */

import React from 'react';
import styled from 'styled-components';
import Camera from '../../assets/camera.svg';
import Bell from '../../assets/bell.svg';
import More from '../../assets/more.svg';
import ProfileImg from '../../assets/bidiptobose.png';
const Navbar = () => {
	const Navbar = styled.div`
		background: white;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	`;

	const Navobj = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`;
	const Item = styled.div`
		display: flex;
		align-items: center;
		div {
			margin: 10px;
		}
	`;
	return (
		<Navbar>
			<Navobj>
				<div style={{ width: '30px', margin: '10px' }}>
					<img src={Camera} alt='camera' />
				</div>
				<Item>
					<div>Home</div>
					<div>Collection</div>
					<div>Explore</div>
					<div>
						<img src={More} alt='more' width='30px' />
					</div>

					<div
						style={{
							borderRadius: '5px',
							padding: '5px',
							border: 'solid 2px lightgrey',
						}}>
						Submit a photo
					</div>
					<div style={{ width: '20px' }}>
						<img src={Bell} alt='bell' />
					</div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<img src={ProfileImg} width='30px' alt='bidipto' />
					</div>
				</Item>
			</Navobj>
		</Navbar>
	);
};

export default Navbar;
