
import React from 'react';
import Hero from '../components/Hero';
import ToolsGrid from '../components/ToolsGrid';

const Home: React.FC = () => {
  return (
    <>
      <Hero onCtaClick={() => {
        window.location.href = '/work';
      }} />
      <div id="tools">
        <ToolsGrid />
      </div>
    </>
  );
};

export default Home;
