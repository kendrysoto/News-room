import React from 'react';
import { Switch, Route } from "react-router-dom";
import Politics from './Politics';
import Home from './Home';
import International from './International';
import Technology from './Technology';
import Show from './Show';
import Sport from './Sport';

const News = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/politics" component={Politics} />
        <Route path="/International" component={International} />
        <Route path="/Technology" component={Technology} />
        <Route path="/Show" component={Show} />
        <Route path="/Sport" component={Sport} />
      </Switch>
    </div>
  );
};


export default News;










