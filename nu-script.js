 //Function used to create elements
 function creEl(el, className, apndClassName, apndClassNum, src, id){
     const newEl = document.createElement(el);
     if(typeof(className) == 'string'){newEl.classList.add(className)}
     else{
         for(i = 0; i < className.length; i++){
             newEl.classList.add(className[i]);
         }
    }
    if(src){newEl.src = src};
    if(id){newEl.id = id};
    document.getElementsByClassName(apndClassName)[apndClassNum].appendChild(newEl);
 }

 //List of elements to be created
 function makeElList(){
    creEl('div', 'site', 'app', 0);
    //CreateNavBar
    creEl('img', 'navbar', 'site', 0, 'imgs/nu-nav.png');
    //CreateMainSection
    creEl('div', 'main', 'site', 0);
    //CreateSideBar
    creEl('div', 'sidebar', 'main', 0)
    creEl('img', 'sidebarImg', 'sidebar', 0, 'imgs/nu-side.png');
    //CreateContent
    creEl('div', 'content', 'main', 0);
    creEl('img', 'header', 'content', 0, 'imgs/nu-header.png');
 }

//Initializes page
(function initPage(){
    makeElList()
})()