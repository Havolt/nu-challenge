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

 function createTicketRow(iconInHL, className, apnd, dataInfoTitle, amtSold, amtTime, evenDiv){
     creEl('div', [className, 'ticketSection'], apnd, 0);
     creEl('div', ['ticketSectionIcon', className + 'ticketSectionIcon'], className, 0, '', iconInHL);
     creEl('div', ['ticketsSectionData', className + 'ticketSectionData'], className, 0);
     creEl('div', ['ticketsSectionDataInfo', className + 'ticketsSectionDataInfo'], className + 'ticketSectionData', 0);
     creEl('div', ['ticketsSectionDataInfoTitle'], className + 'ticketsSectionDataInfo', 0, '', dataInfoTitle );
     creEl('div', ['ticketsSectionDataInfoButtons', className + 'ticketsSectionDataInfoButtons' ],  className + 'ticketsSectionDataInfo', 0)
     creEl('div', ['ticketsSectionDataInfoEditButton', 'ticketsSectionDataInfoButton'], className + 'ticketsSectionDataInfoButtons', 0, '', 'Edit');
     creEl('div', ['ticketsSectionDataInfoViewButton' , 'ticketsSectionDataInfoButton'], className + 'ticketsSectionDataInfoButtons', 0, '', 'View');
     creEl('div', ['ticketsSectionDatesInfo', className + 'ticketsSectionDatesInfo'], className + 'ticketSectionData', 0);
     creEl('div', ['ticketsSectionDatesInfoSold', className + 'ticketsSectionDatesInfoSold'], className + 'ticketsSectionDatesInfo', 0, '', amtSold);
     creEl('div', ['ticketsSectionDatesInfoTime', className + 'ticketsSectionDatesInfoTime'], className + 'ticketsSectionDatesInfo', 0, '', amtTime);
     if(evenDiv){document.getElementsByClassName(className)[0].classList.add('ticketSectionGrey')}
 }

 function createSettingsRow(className, apnd, title, desc){
    creEl('div', [className, 'settingsSection'], apnd, 0);
    creEl('div', ['settingsCheckSection', className + 'settingsCheckSection'], className, 0);
    creEl('input', ['settingsCheckBox', className + 'settingsCheckBox' ], className + 'settingsCheckSection', 0)
    document.getElementsByClassName(className + 'settingsCheckBox')[0].type="checkbox";
    creEl('div', 'settingsCheckTitle', className + 'settingsCheckSection', 0, '', title );
    creEl('div', 'settingsDescription', className, 0, '', desc );
 }

 function createSettingsBottom(num, leftInfo, rightInfo){
    creEl('tr', ['settingsBottomTableRow'+num, 'settingsBottomTableRow'], 'settingsBottomTable', 0);
    creEl('td', 'settingsBottomTableLeftVal', 'settingsBottomTableRow'+num, 0, '', leftInfo);
    creEl('td', 'settingsBottomTableLeftVal', 'settingsBottomTableRow'+num, 0, '', rightInfo);
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
    createTicketRow('<i class="fa fa-arrow-up"></i>+%', 'adultTicketSection', 'bestTixContain', 'Adult - General', '50 sold since Jan 17', '20% more sold than last period');
    createTicketRow('<i class="fa fa-arrow-down"></i>-%', 'childTicketSection', 'bestTixContain', 'Child Ticket - General', '12 sold since Jan 17', '20% less sold than last period', true);
    createTicketRow('<i class="fa fa-eye-slash"></i>', 'childTicketHiddenSection', 'bestTixContain', 'Child Ticket - General - Hidden', '3 sold since Jan 17', '20% more than last period');
    createTicketRow('<i class="fa fa-times"></i>', 'childTicketNoSaleSection', 'bestTixContain', 'Child Ticket - General', 'Not on Sale', 'Ticket is out of stock', true);
    createTicketRow('<i class="fa fa-calendar"></i>', 'childTicketUpcoming', 'bestTixContain', 'Child Ticket - General', 'Upcoming Sale', 'Ticket is on sale from tomorrow');
    creEl('div', ['sectionContain','quickSettingsContain'], 'statLeft', 0);
    createSecHeader('Quick Settings', 'quickSettingsHead', 'quickSettingsContain')
    createSettingsRow('settingsSec1', 'quickSettingsContain', 'Lorem ipsum dolor sit amet', 'Vestibulum quis nulla dui. Donec dapibus, neque ac pulvinar fringilla');
    createSettingsRow('settingSec2', 'quickSettingsContain', 'Duis rhoncus leo diam', 'Pellentesque a fringilla nisi. Aliquam bibendum nisi est' );
    createSettingsRow('settingSec3', 'quickSettingsContain', 'Caributur sed tincidunt lorem', 'Suspendisse auctor arcu ul leo venenatis, eget dignissum nunc luctus');
    creEl('div', 'settingsBottom', 'quickSettingsContain', 0);
    creEl('table', 'settingsBottomTable', 'settingsBottom', 0 );
    createSettingsBottom(0, 'PurchaserData', 'Optional');
    createSettingsBottom(1, 'Shared Data', 'Optional');
    createSettingsBottom(2, 'Sharing Options', 'Sharing not required');
    createSettingsBottom(3, 'Purchase Limit', 'No limit (per purchaser)');
}

//Initializes page
(function initPage(){
    makeElList()
})()