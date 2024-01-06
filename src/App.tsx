import React from 'react';
import Container from './components/containers/MainCotainer';
import Icon from './components/system/Icon';

const App: React.FC = () => {
    
  const technologies: Array<string> = [
    'React',
    'Typescript',
    'SCSS',
    'Prettier',
    'ESLint',
    'Mui Icons',
  ];

  const children: JSX.Element = (
    <div>
      <Icon name={'lightMode'} color={'yellow'} size={'huge'} animate />
      <h1>Empty Repo</h1>
      <p>Michael Venetz 2024</p>
      <p>Used:</p>
      <ul>
        {technologies.map((obj: string, i: number) => (
          <li key={i} children={obj} />
        ))}
      </ul>
    </div>
  );

  return <Container children={children} />;
};

export default App;
