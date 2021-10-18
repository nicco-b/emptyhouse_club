export const Arrow = ({ length, height, transform, stroke, clas }) => {
	return (
		<>
			<svg
				className={clas}
				length={length ? length : '24'}
				height={height ? height : '24'}
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M19 12H5'
					stroke='black'
					strokeOpacity='0.61'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12 19L5 12L12 5'
					stroke='black'
					strokeOpacity='0.64'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</>
	)
}
