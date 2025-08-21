// Background cursor effect

const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (e)=>{
    let x = e.clientX
    let y = e.clientY

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

// hovering effect on experience

const diploma = document.querySelector('.diploma');
const freelance = document.querySelector('.offline-freelancing');

diploma.addEventListener('mouseenter', ()=>{
    freelance.style.opacity = 0.4;
});


freelance.addEventListener('mouseenter', ()=>{
    diploma.style.opacity = 0.4;
});


diploma.addEventListener('mouseleave', ()=>{
    freelance.style.opacity = 1;
});


freelance.addEventListener('mouseleave', ()=>{
    diploma.style.opacity = 1;
});

//smooth slide-changing between sections

 const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links");

  const scroll = () => {
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
navLinks.forEach(link => {
  link.classList.remove('active');
  if (link.querySelector("a").getAttribute("href") === `#${current}`) {
    link.classList.add("active");
  }
});
  });
}

  let intro = document.querySelector('#introduction');
  let workshop = document.querySelector('#workshop');
  let projects = document.querySelector('#myProjects');



const highlight = () =>{
window.addEventListener('scroll', () =>{
intro.addEventListener('mouseover', () =>{
  navLinks[0].classList.add('active');
})
});

window.addEventListener('scroll', () =>{
workshop.addEventListener('mouseover', () =>{
  navLinks[1].classList.add('active');
})
});

window.addEventListener('scroll', () =>{
projects.addEventListener('mouseover', () =>{
  navLinks[2].classList.add('active');
}) 
});


intro.addEventListener('mouseout', () =>{
  navLinks[0].classList.remove('active');
});

workshop.addEventListener('mouseout', () =>{
  navLinks[1].classList.remove('active');
});

projects.addEventListener('mouseout', () =>{
  navLinks[2].classList.remove('active');
})
}

highlight();

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove active from all
    navLinks.forEach(l => l.classList.remove("active"));
    
    // add active to clicked one
    link.classList.add("active");
  });
});

scroll();


// hovering effect on projects

const works = document.querySelectorAll('.work');

works.forEach(workItem => {
  workItem.addEventListener('mouseover', () => {
    works.forEach(other => {
      other.style.opacity = (other === workItem) ? 1 : 0.4;
    });
  });
  workItem.addEventListener('mouseout', () => {
    works.forEach(other => {
      other.style.opacity = 1;
    });
  });
});

// Dark mode toggle

const switchToggle = document.querySelector('.switch input');


// Apply saved mode or system preference on load
const savedMode = localStorage.getItem('theme');
if (savedMode) {
  if (savedMode === 'light') {
    switchToggle.checked = true;
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  } else {
    switchToggle.checked = false;
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  }
} else {
  // No saved mode, use system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    switchToggle.checked = false;
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    switchToggle.checked = true;
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  }
}

// Save mode on toggle
switchToggle.addEventListener('change', () => {
  if (switchToggle.checked) {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }
});


