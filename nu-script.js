 //Function used to create elements
 function creEl(el, className, apndClassName, apndClassNum, src, inHTML, id){
     const newEl = document.createElement(el);
     if(typeof(className) == 'string'){newEl.classList.add(className)}
     else{
         for(i = 0; i < className.length; i++){
             newEl.classList.add(className[i]);
         }
    }
    if(src){newEl.src = src};
    if(id){newEl.id = id};
    if(inHTML){newEl.innerHTML = inHTML}
    document.getElementsByClassName(apndClassName)[apndClassNum].appendChild(newEl);
 }

 //List of elements to be created
 function makeElList(){
    creEl('div', 'site', 'app', 0);
    //Create NavBar
    creEl('img', 'navbar', 'site', 0, 'imgs/nu-nav.png');
    //Create Main Section
    creEl('div', 'main', 'site', 0);
    //Create SideBar Section 
    creEl('div', 'sidebar', 'main', 0)
    creEl('img', 'sidebarImg', 'sidebar', 0, 'imgs/nu-side.png');
    //Create Content Section
    creEl('div', 'content', 'main', 0);
    creEl('img', 'header', 'content', 0, 'imgs/nu-header.png');
    //Create Festival Section
    creEl('div', 'festivalContain', 'content', 0);
    creEl('img', 'festivalImg', 'festivalContain', 0, 'imgs/nu-festival-img.png');
    creEl('div', 'festivalData', 'festivalContain', 0);
    creEl('div', 'festivalTitleContain', 'festivalData', 0)
    creEl('div', 'festivalTitle', 'festivalTitleContain', 0, '', 'HYPER Festival LAUNCH PARTY');
    creEl('div', 'festivalDialog', 'festivalTitleContain', 0, '', '<i class="fa fa-eye"></i> Open Dialog');
 }

//Initializes page
(function initPage(){
    makeElList()
})()