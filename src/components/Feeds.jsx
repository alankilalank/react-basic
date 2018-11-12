import React from 'react';
import List from './List';
import './List.css';

const Feeds = () => {
  return (
    <div className="feeds">
      <h3 className="heading-primary">Javascript Expression in JSX</h3>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        itaque unde provident, repellat autem quia rem eligendi ut maiores, iure
        at quis excepturi, fugiat facere in reprehenderit quas fuga aliquam?
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        itaque unde provident, repellat autem quia rem eligendi ut maiores, iure
        at quis excepturi, fugiat facere in reprehenderit quas fuga aliquam?
      </p>
      <List />
    </div>
  );
};

export default Feeds;
