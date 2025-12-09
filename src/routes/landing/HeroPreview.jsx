import { Link } from "react-router-dom";

export const HeroPreview = () => {
  return (
    <section className="landing__hero">
      <h1 className="hero-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Saranya Maghendran</em>
        <br></br>AI-Engineer & 
        <br></br> Data Analyst
      </h1>
      <p className="gray-text p-tag">
        I'm a AI-Engineer & Data Analyst with a passion for creating
        innovative solutions.
      </p>
      <Link className="pink-text" to="/portfolio">
        Check my work
      </Link>
    </section>
  );
};
