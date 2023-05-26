import "./project.css";

function Project({ img, desc, hostUrl, seeMore, hosted }) {
  return (
    <>
      <article className="project">
        <div className="project--image">
          <img src={img} alt="" />
        </div>
        <div className="project--info">
          <h4>{desc}</h4>
          <div className="project--buttons">
            <a href={seeMore} target="blank">
              <button>See Code</button>
            </a>
            <a href={hostUrl} target="blank">
              <button>See Live</button>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default Project;
