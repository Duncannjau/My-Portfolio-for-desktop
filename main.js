const btn = document.querySelector('#btn-menu');

function displayMobileMenu() {
  document.querySelector('#overlay').style.display = 'block';
}

btn.addEventListener('click', displayMobileMenu);

const closeMenu = document.querySelectorAll('.close-menu');
function closeMobileMenu() {
  document.querySelector('#overlay').style.display = 'none';
}
for (let i = 0; i < closeMenu.length; i += 1) {
  closeMenu[i].addEventListener('click', closeMobileMenu);
}

const projectInfo = [
  {
    id: 1,
    mImg: 'img/mobile-cards-img/Snapshoot-Portfolio-card-1.png',
    dImg: 'img/desktop-version/Portoflio-Card/Snapshoot-Portfolio-desktop-01.png',
    orderA: 0,
    orderB: 1,
    title1: 'Tonic',
    title2: 'Tonic',
    client1: 'CANOPY',
    client2: 'CANOPY',
    position1: 'Back End Dev',
    position2: 'Back End Dev',
    year1: '2015',
    year2: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    p4: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
    releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took
    a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it
    1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the relea`,
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    github: 'github',
    ruby: 'ruby',
    bootstraps: 'Bootstrap',
    modal1: '#',
    onOff: 'closePopUp()',
  },
  {
    id: 2,
    mImg: 'img/mobile-cards-img/Snapshoot-Portfolio-card-2.png',
    dImg: 'img/desktop-version/Portoflio-Card/Snapshoot-Portfolio-desktop-02.png',
    orderA: 1,
    orderB: 0,
    title1: 'Multi-Post<br>Stories',
    title2: 'Multi-Post Stories',
    client1: 'CANOPY',
    client2: 'FACEBOOK',
    position1: 'Back End Dev',
    position2: 'Full Stack Dev',
    year1: '2015',
    year2: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    p3: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining essent`,
    p4: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
    releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took
    a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it
    1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the relea`,
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    github: 'github',
    ruby: 'ruby',
    bootstraps: 'Bootstrap',
    modal1: '#',
    onOff: 'closePopUp()',
  },
  {
]