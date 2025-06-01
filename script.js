// ===== LOADING ANIMATION =====
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('fade-out');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1000);
});

// ===== MOBILE MENU TOGGLE =====
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("myNavMenu");
  
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
    });
  
    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});

// ===== SCROLL DOWN BUTTON =====
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.querySelector('.scroll-btn');
    const aboutSection = document.querySelector('#about');
    
    // Hide scroll button when user scrolls down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollBtn.classList.add('hidden');
        } else {
            scrollBtn.classList.remove('hidden');
        }
    });
    
    // Smooth scroll to about section when clicked
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// ===== STICKY NAVBAR =====
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.style.backgroundColor = 'rgba(30, 30, 30, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = 'rgba(30, 30, 30, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ===== FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showMessage('Please fill in all fields.', false);
      return;
    }

    showMessage(true);
    contactForm.reset();
  });
}

function showMessage(text, isSuccess) {
  const formMessage = document.getElementById('formMessage');
  formMessage.innerHTML = `
    <div class="${isSuccess ? 'success-message' : 'error-message'}">
      <i class="uil ${isSuccess ? 'uil-check-circle' : 'uil-times-circle'}"></i>
      <span>${text}</span>
    </div>
  `;

  setTimeout(() => {
    formMessage.innerHTML = '';
  }, 4000);
}

// ===== RESUME DOWNLOAD =====
document.addEventListener('DOMContentLoaded', function() {
    function handleResumeDownload(e) {
        e.preventDefault();
        
        // Show download confirmation
        showDownloadToast();
        
        // Simulate download (replace with actual file download)
        setTimeout(() => {
            const link = document.createElement('a');
            link.download = 'jomari/Jomari-Casiño-CV2.docx'; // Path to your CV file
            link.download = 'jomari/Jomari-Casiño-CV2.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 1000);
    }

    function showDownloadToast() {
        const toast = document.createElement('div');
        toast.className = 'download-toast';
        toast.innerHTML = `
            <i class="uil uil-check-circle"></i>
            <span>Resume download started!</span>
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Add event listeners to all download buttons
    const downloadButtons = [
        document.getElementById('downloadCVBtn'),
        document.getElementById('downloadCVBtn2')
    ];

    downloadButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', handleResumeDownload);
        }
    });
});

// ===== HIRE ME BUTTON =====
const hireMeBtn = document.getElementById('hireMeBtn');
if (hireMeBtn) {
    hireMeBtn.addEventListener('click', function() {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// ===== PROJECT MODALS =====
const projects = [
    {
        title: "Offline System",
        description: "A fully responsive invoce and barcode scanner built in C#. IDE that we use Visual Studio 2022.",
        technologies: ["C#"],
        githubUrl: "",
        demoUrl: "#",
        images: [
            "jomari/systems.png"
        ]
    },
    {
        title: "Portfolio Website",
        description: "A responsive personal portfolio website showcasing my skills, projects, and contact information. Built with modern HTML, CSS, and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        githubUrl: "",
        demoUrl: "#",
        images: [
            ""
        ]
    }
];

const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';
const projectModal = document.createElement('div');
projectModal.className = 'project-modal';
const modalClose = document.createElement('button');
modalClose.className = 'modal-close';
modalClose.innerHTML = '&times;';
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
projectModal.appendChild(modalClose);
projectModal.appendChild(modalContent);
modalOverlay.appendChild(projectModal);
document.body.appendChild(modalOverlay);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

document.querySelectorAll('.project').forEach((project, index) => {
    project.addEventListener('click', () => {
        const projectData = projects[index];
        modalContent.innerHTML = '';
        
        const imagesContainer = document.createElement('div');
        imagesContainer.className = 'modal-images';
        projectData.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = projectData.title;
            imagesContainer.appendChild(img);
        });
        
        const infoContainer = document.createElement('div');
        infoContainer.className = 'modal-info';
        const title = document.createElement('h3');
        title.textContent = projectData.title;
        const description = document.createElement('p');
        description.textContent = projectData.description;
        const techTitle = document.createElement('h4');
        techTitle.textContent = 'Technologies Used:';
        const techContainer = document.createElement('div');
        techContainer.className = 'modal-tech';
        
        projectData.technologies.forEach(tech => {
            const techSpan = document.createElement('span');
            techSpan.textContent = tech;
            techContainer.appendChild(techSpan);
        });
        
        const linksContainer = document.createElement('div');
        linksContainer.className = 'modal-links';
        
        if (projectData.githubUrl) {
            const githubLink = document.createElement('a');
            githubLink.href = projectData.githubUrl;
            githubLink.target = '_blank';
            githubLink.className = 'btn';
            githubLink.innerHTML = '<i class="uil uil-github-alt"></i> View Code';
            linksContainer.appendChild(githubLink);
        }
        
        if (projectData.demoUrl && projectData.demoUrl !== '#') {
            const demoLink = document.createElement('a');
            demoLink.href = projectData.demoUrl;
            demoLink.target = '_blank';
            demoLink.className = 'btn blue-btn';
            demoLink.innerHTML = '<i class="uil uil-globe"></i> Live Demo';
            linksContainer.appendChild(demoLink);
        }
        
        infoContainer.appendChild(title);
        infoContainer.appendChild(description);
        infoContainer.appendChild(techTitle);
        infoContainer.appendChild(techContainer);
        infoContainer.appendChild(linksContainer);
        modalContent.appendChild(imagesContainer);
        modalContent.appendChild(infoContainer);
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        const navLink = document.querySelector(nav_menu_list [href*="${sectionId}"]);
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
                const circle = navLink.nextElementSibling;
                if (circle && circle.classList.contains('circle')) {
                    circle.style.opacity = '1';
                }
            } else {
                navLink.classList.remove('active-link');
                const circle = navLink.nextElementSibling;
                if (circle && circle.classList.contains('circle')) {
                    circle.style.opacity = '0';
                }
            }
        }
    });
});

// ===== BACK TO TOP BUTTON =====
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== TYPED.JS INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.typedText')) {
        var typed = new Typed('.typedText', {
            strings: ["IT Student", "Developer", "Programmer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    }
});

// ===== SCROLL REVEAL =====
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.featured-text', { 
            delay: 200,
            origin: 'left',
            distance: '50px'
        });
        ScrollReveal().reveal('.featured-image', { 
            delay: 400,
            origin: 'right',
            distance: '50px'
        });
        ScrollReveal().reveal('.skills-box', { 
            interval: 200,
            origin: 'bottom',
            distance: '30px'
        });
        ScrollReveal().reveal('.project', { 
            interval: 200,
            origin: 'bottom',
            distance: '30px'
        });
        ScrollReveal().reveal('.service-card', { 
            interval: 200,
            origin: 'bottom',
            distance: '30px'
        });
        ScrollReveal().reveal('.hobby', { 
            interval: 200,
            origin: 'bottom',
            distance: '30px'
        });
    }
});

// ===== COPYRIGHT YEAR =====
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = currentYear;
}