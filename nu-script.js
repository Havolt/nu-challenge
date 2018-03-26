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

 function createSecHeader(title, className, apnd){
    creEl('div', [className, 'sectionHead'], apnd, 0);
    creEl('div', 'sectionHeadTitle', className, 0, '', title);
    creEl('img', 'sectionHeadImg', className, 0, 'imgs/nu-section-header-img.png');
 }

 function createTicketRow(iconInHL, className, apnd){
     creEl('div', [className, 'ticketSection'], apnd, 0);
     creEl('div', 'ticketSectionIcon', className, 0, '', iconInHL);
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
    creEl('table', 'festivalDataInfo', 'festivalData', 0);
    creEl('tr', 'festivalInfoTopRow', 'festivalDataInfo', 0);
    creEl('td', 'festivalInfoLeftVal', 'festivalInfoTopRow', 0, '', 'When');
    creEl('td', 'festivalInfoRightVal', 'festivalInfoTopRow', 0, '', '29 July 2016')
    creEl('td', 'festivalInfoLeftVal', 'festivalInfoTopRow', 0, '', 'Tickets sold');
    creEl('td', 'festivalInfoRightVal', 'festivalInfoTopRow', 0, '', '12,642')
    creEl('tr', 'festivalInfoBottomRow', 'festivalDataInfo', 0);
    creEl('td', 'festivalInfoLeftVal', 'festivalInfoBottomRow', 0, '', 'Where');
    creEl('td', 'festivalInfoRightVal', 'festivalInfoBottomRow', 0, '', 'Hypo Expo Manchester')
    creEl('td', 'festivalInfoLeftVal', 'festivalInfoBottomRow', 0, '', 'Subscribed to list');
    creEl('td', 'festivalInfoRightVal', 'festivalInfoBottomRow', 0, '', '648')
    //Make Statistics Section
    creEl('div', 'statisticsSection', 'content', 0);
    creEl('div', ['statLeft', 'statBox'], 'statisticsSection', 0);
    creEl('div', ['statRight', 'statBox'], 'statisticsSection', 0);
    //Make Left Hand Stats Section Contents
    creEl('div', ['sectionContain','bestTixContain'], 'statLeft', 0);
    createSecHeader('Best Selling Tickets', 'bestTixHead', 'bestTixContain')
    createTicketRow('<i class="fa fa-arrow-up"></i>+%', 'adultTicketSection', 'bestTixContain');
 }

//Initializes page
(function initPage(){
    makeElList()
})()