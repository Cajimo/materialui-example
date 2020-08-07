import React, { Fragment } from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import Header from './Header';

// CSS STYLES
const useStyles = makeStyles({
  particlesCanva: {
    position: 'absolute',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },

            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'tomato',
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </Fragment>
  );
};

export default Home;
