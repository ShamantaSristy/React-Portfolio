import React from 'react';

const ProjectCard = (props) => {
    const { title, description, img, git, live } = props.project;
    return (
        <div >
            <div className="card mb-3" style={{ "max-width": "540px" }}>
                <div className="row gx-5 gy-5">
                    <div className="col-md-3">
                        <img className="img-fluid" src={img} alt="..." />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h2 className="card-title">{title}  </h2>
                            <p className="card-text">{description}</p>
                            <a href={git}> <button class="button button--nina button--text-thick button--text-upper button--size-s" data-text="Source Code">
                                <span>S</span><span>o</span><span>u</span><span>r</span><span>c</span><span>e</span> <span>C</span><span>o</span><span>d</span><span>e</span>
                            </button></a>

                            <a href={live}> <button class="button button--nina button--text-thick button--text-upper button--size-s" data-text="Live-Site">
                                <span>L</span><span>i</span><span>v</span><span>e</span> <span>S</span><span>i</span><span>t</span><span>e</span>
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;