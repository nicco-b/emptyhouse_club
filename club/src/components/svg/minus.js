export const Minus = ({ length, height, transform, stroke, clas }) => {
	return (
		<>
			<svg
				className={clas}
				length={length ? length : '16'}
				height={height ? height : '16'}
				viewBox='0 0 22 22'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M4.58203 11H17.4154'
					stroke={stroke ? stroke : 'var(--active-nav-text)'}
					strokeOpacity='0.45'
					strokeWidth='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</>
	)
}
