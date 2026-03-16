 export function changelanguage()
{
 let languageBox=document.querySelector('.language-box');
 let flag=document.querySelector('.indian-flag');
 if(languageBox.value==="En")
 {
    flag.src="pictures/usa-flag.png";
 }
 else if(languageBox.value==="Chi")
 {
    flag.src="pictures/china-flag.png";
 }
 else{
    flag.src="pictures/indian-flag.png";
 }
}
