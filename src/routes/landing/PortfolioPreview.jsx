import { ProjectsPreview } from "./ProjectsPreview";

export const PortfolioPreview = () => {
  return (
    <div className="landing__portfolio">
      <section className="portfolio-content">
        <h2 className="title-font pink-text h2-tag">Portfolio</h2>
        <p className="white-text p-tag">
          I've dedicated significant effort to various projects, including the Hexaware Maverics Hackathon, Nyaya AI, and a Generative AI-Powered SQL Querying System. I thoroughly enjoy building things from the ground up and mastering new technologies. Feel free to explore these and other endeavors on my{" "}
          <span>
            <a
              href="https://github.com/Saranyamagi"
              className="pink-text"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </span>
        </p>
      </section>
      <ProjectsPreview />
    </div>
  );
};
