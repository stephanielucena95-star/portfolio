import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ToolsGrid from '../components/ToolsGrid';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero onCtaClick={() => navigate('/work')} />
      <div id="tools">
        <ToolsGrid />
      </div>
    </>
  );
};

export default Home;
