import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.bg ? props.theme.bg : 'black')};
	
	/* transition: background-color 2s; */

  }
`
export const Button = styled.button`
	height: fit-content;
	width: fit-content;
	padding: 0.5em 2em;
	cursor: pointer;
	background-color: white;
	border: none;
	text-transform: uppercase;
	font-weight: 500;
	border-radius: 0.3rem;
	color: #020202;
	&:hover {
		background-color: transparent;
		transition: background-color 0.5s;
		outline: 1px solid #e7ddb4;
	}
`
export const Main = styled.main`
	/* display: grid; */
	color: ${props => (props.theme.mainFont ? props.theme.mainFont : '#868184')};
	position: relative;
	min-height: 100%;
	/* min-height: -webkit-fill-available; */
	width: 100%;
	/* background-color: red;s */
	overflow: hidden;

	/* padding: 2px; */
`
export const NavBox = styled.nav`
	display: grid;
	text-align: center;
	font-size: 2.2em;
	height: fit-content;
	background-color: ${props => (props.theme.bg ? props.theme.bg : 'white')};
	/* transition: background-color s; */
	/* justify-content: center; */
	/* padding: 0.4em 0.5em 0.3em 0.5em; */
	grid-template-columns: auto 1fr 1fr;
	gap: 2em;

	align-items: center;
	z-index: 1000;
	opacity: 1;
	@media (max-width: 725px) {
		font-size: 1.8em;
	}
	@media (max-width: 425px) {
		font-size: 1.4em;
	}
	transition: background-color 2s;
`

export const BaseGrid = styled.div`
	min-height: 100vh;
	grid-template-rows: 2em 1fr;
	display: grid;
	position: relative;
	overflow: hidden;
	grid-template-areas:
		'top'
		'bottom';
	gap: 1em;
	/* padding: 1em; */
`
export const Grid = styled.div`
	/* height: 100%; */
	grid-template-rows: 1fr;
	display: grid;
	/* position: relative; */
	/* justify-content: center; */
	/* max-width: 1900px;  */
	justify-self: center;

	grid-template-areas: 'village';
	/* padding: 1em; */
`
export const Rox = styled.div`
	display: flex;
	justify-content: center;

	align-items: center;
`
export const Padding = styled.div`
	padding: ${props => props.padding || null};
`

export const H1 = styled.h1`
	color: ${props => props.fontColor || null};
	/* display: grid; */
	text-align: center;
	font-size: 40px;
	height: 100%;
	opacity: 100%;
	z-index: 1;
	@media (max-width: 425px) {
		font-size: 20px;
	}
`
export const Wallpaper = styled.img.attrs(props => ({
	src: props.wallpaper,
	key: props.i,
}))`
	pointer-events: none;
	position: absolute;
	width: 100vw;
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

	/* background-color: #5a6865 */
	transition: background-color 1s;
	min-height: 100vh;
	z-index: -1;
`
