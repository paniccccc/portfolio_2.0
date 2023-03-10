import React from 'react';

function Footer() {
	return (
		<div className="py-5 text-center">
			<p className="text-sm mt-2 bg-white text-rose-700">
				&copy; {new Date().getFullYear()} Ronit Mohanty. All rights reserved.
			</p>
		</div>
	);
}

export default Footer;