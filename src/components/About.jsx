const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__presentation">
        <h2 className="about__title">&Agrave; propos</h2>
        <p className="about__firstparagraph">
          Bonjour, je m'appelle Matthieu Dubo, j'ai 25 ans. Mon parcours dans le
          domaine des nouvelles technologies a débuté lorsque j'étais
          adolescent, et depuis lors, je n'ai cessé de me passionner pour ce
          domaine en constante évolution. En 2021, j'ai décidé de franchir une
          étape importante en apprenant à coder. J'ai entamé cette aventure en
          rejoignant la Wild Code School pour une formation initiale. Par la
          suite, j'ai consolidé mes compétences en informatique en intégrant un
          programme d'alternance avec OpenClassRooms. Cette expérience m'a
          permis d'approfondir mes connaissances tout en étant pleinement
          immergé dans le monde du travail.
        </p>
        <p>
          En ce qui concerne mes compétences techniques, je travaille avec des
          technologies telles que{" "}
          <span className="purple-text">
            ReactJS, NodeJS, NuxtJS, Typescript, TailwindCSS
          </span>
          , et bien d'autres. Mon objectif est de continuer à évoluer dans le
          domaine du développement Web et de contribuer à des projets
          passionnants.
        </p>
      </div>
      <div className="about__portrait" />
    </section>
  );
};

export default About;
