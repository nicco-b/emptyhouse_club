import styled from 'styled-components'

export const FooterBox = styled.div`
	position: absolute;
	display: grid;
	/* border: 1px solid red; */
	max-width: 100vw;
	height: 1em;
	grid-template-rows: 1fr 1fr;
`
export const FooterField = styled.div`
	display: grid;
	max-width: 100vw;
	/* position: absolute; */
	/* height: 100px; */
`
export const FieldSpots = styled.div`
	display: grid;
	/* position: absolute;
	top: -50px; */
	grid-template-columns: repeat(8, 1fr);
`
export const FooterSocial = styled.div`
	display: grid;
	/* padding-top: 1em; */
	/* width: fit-content;*/
	justify-items: center;
	grid-template-columns: 1fr 1fr 1fr;
`
export const FooterSocialGrid = styled.div`
	display: grid;
	grid-column: 2;
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;
	align-items: center;
	gap: 1em;
	> img {
		width: 40px;
		height: auto;
	}
`
export const FooterImg = styled.img.attrs(props => ({
	src: props.src,
	key: props.i,
}))`
	pointer-events: none;
	/* position: absolute; */

	/* min-height: -webkit-fill-available; */
	/* &::-webkit-scrollbar {
		visibility: hidden;
		width: 40px;
	}
	&::-webkit-scrollbar-thumb {
		visibility: hidden;
	} */
	overflow: hidden;
	/* animation: fadeIn 5s; */
	background-color: ${props => (props.theme.wallpaperBg ? props.theme.wallpaperBg : 'black')};
	object-fit: cover;
	/* height: 100px;
	left: 0; */
	width: 100vw;
	/* bottom: 0; */
	/* position: fixed; */
	/* background-color: #5a6865 */
	transition: background-color 1s;
	height: 100px;
	/* min-height: 100%; */
	z-index: -1;
`
