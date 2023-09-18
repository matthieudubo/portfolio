import restau from "../assets/wild-restau.webp";
import heroes from "../assets/wild-heroes.webp";
import lunetic from "../assets/lunetic.webp";
import rzo from "../assets/rzo.webp";
import img3ifa from "../assets/3ifa.webp";
import ohmyfood from "../assets/ohmyfood.webp";
import panthere from "../assets/panthere.webp";

const Projects = () => {
  const projects = [
    {
      title: "The Wild Restau",
      link: "https://matthieudubo.github.io/The-Wild-restau/",
      description:
        "Il s'agit d'un projet fictif pour un restaurant. Il a été réalisé en deux semaines uniquement avec HTML, SCSS et JavaScript Vanilla.",
      img: {
        link: restau,
        alt: "wild-restau",
      },
    },
    {
      title: "Wild Heroes",
      link: "https://matthieudubo.github.io/wild-heroes/#/",
      description:
        "Projet réalisé en un mois avec React, CSS et deux API. Vous pouvez trouver des informations sur les héros et il y a deux quiz à jouer.",
      img: {
        link: heroes,
        alt: "wild-heroes",
      },
    },
    {
      title: "Lunetic",
      link: "https://lunetic.fr/",
      description:
        "Projet réalisé avec un réel client, en 2 mois. Il s'agit d'un projet fullstack. Nous avons utilisé React pour le front-end, ExpressJs pour le back-end, et MySQL pour la base de données.",
      img: {
        link: lunetic,
        alt: "site lunetic",
      },
    },
    {
      title: "Ohmyfood!",
      link: "https://matthieudubo.github.io/ohmyfood/",
      description:
        "Site réalisé dans le cadre de la formation d'OpenClassRooms. Site réalisé uniquement à l'aide de HTML et SCSS",
      img: {
        link: ohmyfood,
        alt: "Site Ohmyfood!",
      },
    },
    {
      title: "La Panthère",
      link: "https://matthieudubo.github.io/la-panthere/index.html",
      description:
        "Site réalisé dans le cadre de la formation d'OpenClassRooms. Récupération un site déjà fait et afin d'améliorer le SEO, la performance et l'accessibilité de ce site.",
      img: {
        link: panthere,
        alt: "Site la Panthère",
      },
    },
    {
      title: "Rezonova",
      link: "https://www.rezonova.fr",
      description:
        "Site vitrine de l'entreprise Rezonova. Projet réalisé avec NuxtJS ainsi que Directus.",
      img: {
        link: rzo,
        alt: "Site Rezonova",
      },
    },
    {
      title: "3ifa",
      link: "https://www.3ifa.fr/",
      description:
        "Site réalisé pour le centre de formation du 3ifa. Projet réalisé avec NuxtJS pour la partie front-end et Drupal pour le back-end",
      img: {
        link: img3ifa,
        alt: "Site du 3ifa",
      },
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="title">Mes Projets</h2>
      <div className="projects__container">
        {projects.map((project, id) => {
          return (
            <a key={id} href={project.link} target="_blank" rel="noreferrer">
              <div className="projects__container-card">
                <div className="projects__container-card-recto">
                  <img src={project.img.link} alt={project.img.alt} />
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
