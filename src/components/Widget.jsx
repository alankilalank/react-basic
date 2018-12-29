import React from 'react';
import './widget.css';

const Widget = props => {
  return (
    <figure className="widget">
      <blockquote className="widget-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex.
      </blockquote>
      <figcaption className="widget-user">
        <img
          src="https://picsum.photos/200"
          alt="Widget user"
          className="widget-photo"
        />
        <div className="widget-user-box">
          <p className="widget-user-name">Adam Smith</p>
          <p className="widget-user-date">Nov 13rd, 2019</p>
        </div>
        <div className="widget-rating">{props.score}</div>
      </figcaption>
    </figure>
  );
};

export default Widget;
