// Project data
const projects = [
  {
    title: "META/VR Website",
    description: "Modern VR experience showcase website",
    technologies: ["React.js", "Tailwind", "React Icons", "AOS"],
    image: "assets/img/project-img13.png",
    githubLink: "https://github.com/G3RGES/metaverse-web",
    liveLink: "https://metaverse-web-pi.vercel.app/",
  },
  {
    title: "Shopsy",
    description: "E-commerce store using React.js and Tailwind CSS",
    technologies: ["React.js", "Tailwind", "React Icons", "AOS"],
    image: "assets/img/project-img11.png",
    githubLink: "https://github.com/G3RGES/eccomerce-website",
    liveLink: "https://shopsy-delta.vercel.app/",
  },
  {
    title: "Space Website",
    description: "Interactive space exploration website",
    technologies: ["React.js", "Tailwind", "React Icons", "AOS"],
    image: "assets/img/project-img12.png",
    githubLink: "https://github.com/G3RGES/space_website",
    liveLink: "https://space-website-g3rges.vercel.app/",
  },
  {
    title: "YouTube Clone",
    description: "Advanced YouTube clone with API integration",
    technologies: ["React.js", "Material UI", "RapidAPI", "React Router"],
    image: "assets/img/project-img10.png",
    githubLink: "https://github.com/G3RGES/youtube_clone",
    liveLink: "https://youtube-clone-g3rges.netlify.app/",
  },
  {
    title: "FOODIE Website",
    description: "Restaurant website with modern design",
    technologies: ["React.js", "Tailwind", "React Icons", "AOS"],
    image: "assets/img/project-img17.jpg",
    githubLink: "https://github.com/G3RGES/tasty-react",
    liveLink: "https://tasty-react-beta.vercel.app/",
  },
  {
    title: "Games Website",
    description: "Gaming showcase platform with modern UI",
    technologies: ["React.js", "Tailwind", "React Icons", "AOS"],
    image: "assets/img/project-img16.jpg",
    githubLink: "https://github.com/G3RGES/gaming-website",
    liveLink: "https://gaming-website-omega.vercel.app/",
  },
];

// Function to create project cards
function createProjectCard(project) {
  return `
        <div class="project-card animate-on-scroll">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
                <div class="project-links">
                    <a href="${
                      project.liveLink
                    }" target="_blank" class="btn primary">Live Demo</a>
                    <a href="${
                      project.githubLink
                    }" target="_blank" class="btn secondary">GitHub</a>
                </div>
            </div>
        </div>
    `;
}

// Populate projects section
document.addEventListener("DOMContentLoaded", () => {
  const projectGrid = document.querySelector(".project-grid");

  projects.forEach((project) => {
    projectGrid.innerHTML += createProjectCard(project);
  });

  // Add animation classes to project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.classList.add("hover-lift");
    observer.observe(card);
  });
});
