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
                            <h5 className="card-title">{title}  </h5>
                            <p className="card-text">{description}</p>
                            <a href={git} class="card-link">Source Code</a>
                            <a href={live} class="card-link">Live-Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;