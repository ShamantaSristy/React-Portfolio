import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import knot from '../../assets/the-knot_opt.png';
import bloom from '../../assets/bloomit.png';
import cityTransfer from '../../assets/city-transfer.png';
import alphaSports from '../../assets/alpha-sports_opt.png';
import knowCountries from '../../assets/know-countries_opt.png';
import portfolio from '../../assets/portfolio.png';
import fancy from '../../assets/fancy1.png';
import trip from '../../assets/dream-trip_opt.png';
import aboutMe from '../../assets/about-me_opt.png';
import ProjectCard from './ProjectCard';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';
// import ProjectCard from './ProjectCard';


const projectData = [
  {
    title: 'The Knot',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    img: knot,
    git: 'https://github.com/ShamantaSristy/The-Knot-Client',
    live: 'https://the-knot-1.web.app/'
  },
  {
    title: 'BloomIt',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    img: bloom,
    git: 'https://github.com/ShamantaSristy/Bloom-It-Client',
    live: 'https://bloomit-72292.web.app/'
  },
  {
    title: 'City Transfer',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    img: cityTransfer,
    git: 'https://github.com/ShamantaSristy/City-Transfer',
    live: 'https://city-transfer-5231c.web.app/'
  },
  {
    title: 'Alpha Sports League',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    img: alphaSports,
    git: 'https://github.com/ShamantaSristy/Alpha-Sports',
    live: 'https://clever-jones-de8866.netlify.app/'
  },
  {
    title: 'Know Countries',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    img: knowCountries,
    git: 'https://github.com/ShamantaSristy/know-countries',
    live: 'https://frosty-curie-08e48c.netlify.app/'
  },
  {
    title: 'Portfolio',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    img: portfolio,
    git: 'https://github.com/ShamantaSristy/React-Portfolio',
    live: 'https://objective-archimedes-bf1821.netlify.app/'
  },
  {
    title: 'Fancy Slider',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    img: fancy,
    git: 'https://github.com/ShamantaSristy/Fancy-slider',
    live: 'https://shamantasristy.github.io/Fancy-slider/'
  },
  {
    title: 'Dream Trip',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    img: trip,
    git: 'https://github.com/ShamantaSristy/DreamTrip',
    live: 'https://shamantasristy.github.io/DreamTrip/'
  },
  {
    title: 'About Me',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    img: aboutMe,
    git: 'https://github.com/ShamantaSristy/About-Me',
    live: 'https://shamantasristy.github.io/About-Me/'
  },
]


const Projects = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={{ backgroundColor: '#1a1a2e' }}>
      <h1 style={{ color: "aliceblue" }} className="text-center mb-5 pt-5 pb-5">Some of my projects</h1>
      <Container>
        <CardDeck className="pl-10">
          {
            projectData.map(project => <ProjectCard project={project} key={project.title}></ProjectCard>)
          }
        </CardDeck>
      </Container>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Projects;