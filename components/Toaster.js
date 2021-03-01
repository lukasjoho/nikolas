import React from 'react';
import { Toaster as ToasterDev } from 'react-hot-toast';
const Toaster = ({ position, icon }) => {
	return (
		<ToasterDev
			position={position}
			toastOptions={{
				// Define default options
				className: '',
				style: {
					margin: '40px',
					background: 'linear-gradient(259.25deg, #C7F1FD 0%, #DEF8FF 100%)',
					color: '#020817',
					zIndex: 999,
					boxShadow: '0 0 5px 0px #C7F1FD',
				},
				duration: 1500,
				icon: icon,
			}}
		/>
	);
};
export default Toaster;
