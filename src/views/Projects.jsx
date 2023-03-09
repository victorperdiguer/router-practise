import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
      <ul>
        <NavLink to="/projects/games">See games</NavLink>
        <NavLink to="/projects/apps">See apps</NavLink>
      </ul>
      <Outlet/>
    </div>
  )
}
