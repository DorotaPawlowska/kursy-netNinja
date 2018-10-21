import React from 'react'

const ProjectDetails = (props) => {
  // console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Titile - {id}
          </span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laborum, vel minima culpa velit cumque dolores in repudiandae odit veritatis asperiores ducimus aut excepturi quis, ipsum quae aperiam tempore quisquam!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the net ninja</div>
          <div>2ns sep, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
