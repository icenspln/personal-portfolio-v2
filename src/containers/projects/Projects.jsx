import "./projects.css";

import { Header, Project } from "../../components";

import web from "../../data/web";

function Projects() {
  return (
    <>
      <Header header="Projects" />
      <p className="header-p">Projects i have worked on...</p>
      <main className="projects" id="projects">
        <div className="projects--web">
          {web.map((item, index) => (
            <Project
              key={item.id}
              img={item.imageUrl}
              desc={item.description}
              seeMore={item.seeMore}
              hostUrl={item.hostUrl}
              hosted={item.hosted}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Projects;
