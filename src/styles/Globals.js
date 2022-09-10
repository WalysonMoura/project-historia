import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
:root{
   --preto: #0e0e0e;
   --branco: #f8f8f8;
  --preto-suave: #222;
  --cinza: #435d6b;
  --cinza-chubo: #e0e0e0;
  --vermelho: #c8161d;
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
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

 *{
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    -webkit-font-smoothing: antialisead;
    -moz-osx-font-smoothing: grayscale;
 }
 html {
  scroll-behavior: smooth;
}
body{
	background-color: #12162d;
	font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}
.cicle1,
  .cicle2,
  .cicle3, .cicle4 {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    z-index: -2;
  }
  .cicle1,.cicle4 {
    width: 150px;
    height: 150px;
    background-color: #3d6cfa;
    top: -2.5rem;
    left: -1.5rem;
  }
  .cicle4{
    top: 35rem;
    left: -8.5rem;
  }
  .cicle2,
  .cicle3 {
    width: 250px;
    height: 250px;
  }
  .cicle2 {
    background-color:#3d6cfa;
    top: 16rem;
    right: -6.5rem;
  }
  .cicle3 {
    background-color:#3d6cfa;
    right: -10.5rem;
    bottom: -38rem;
  }
`;
