import React from 'react'

const Card = () => {
  return (
  <div className="card" style="width: 18rem;">
    <img src="{thumbnail}" className="card-img-top" alt="not found" />
    <div className="card-body" />
    <h5 className="card-title">Card title</h5>
    <p className="card-text">{description}</p>
  </div>
  <ul class="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
</ul>
  )
}

export default Card;