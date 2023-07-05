import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';

const About = () => {
  const { update, state } = useContext(NoteContext);


  return (
    <div>
      <h1>this is about page</h1>
    </div>
  );
};

export default About;
