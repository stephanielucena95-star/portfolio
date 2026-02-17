import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ToolsGrid from '../components/ToolsGrid';
import { useSEO } from '../hooks/useSEO';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useSEO({
    description: "Portfolio of Stephanie Lucena, a Senior Growth Marketer specializing in Paid Media, Performance Strategy, and E-commerce growth for global brands.",
  });

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
