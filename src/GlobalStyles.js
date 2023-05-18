import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
    border: none;
}
* {
    margin: 0;
    padding: 0;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}
input, button, textarea, select {
    font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}
#root, #__next {
    width: 100%;
    height: 100%;
    isolation: isolate;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html, body {
    height: 100vh;
    font-size: 62.5%;
}
body {
	line-height: 1;
    font-family: 'Kumbh Sans';
    font-style: normal;
    background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
    padding: 148px 24px 0 24px;
}
ol, ul {
	list-style: none;
}
`
export default GlobalStyles;