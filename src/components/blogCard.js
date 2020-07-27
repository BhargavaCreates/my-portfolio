import React from "react"

function card(props) {
  const { cardTitle, cardContent, link } = props
  return (
    <div className="col-lg-6">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <h2 className="card-title" id='title'>{cardTitle}</h2>
          <p className="card-text" id='content'>{cardContent}</p>
          <a href={link} className="card-link">
            Read
          </a>
        </div>
      </div>
    </div>
  )
}

export default card

