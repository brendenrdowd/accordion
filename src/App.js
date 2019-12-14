import React from 'react';
import Accordion from './state-drills/Accordion/Accordion'

function App(props) {

  const sections = [
    {
      title: 'Section 1',
      content: 'This is the first section. It has a lot to say about being number 1.',
    },
    {
      title: 'Section 2',
      content: 'This is the second section. It has many things to say about the advantages of being a number 2.',
    },
    {
      title: 'Section 3',
      content: 'This is the third section. Hey, still a podium!',
    },
  ]

  return (
    <main className='App'>
      <header className="App-header"><h1>Playground</h1></header>
      <Accordion sections={sections} />
    </main>
  );
}

export default App;