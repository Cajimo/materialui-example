import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '-0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    color: 'white',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: 'white',
    padding: 0,
    textTransform: 'uppercase',
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          working experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2010
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              web design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: 'tan' }}
            >
              Lorem20 ipsum hasta completar veinte palabras que ya no sé cuántas
              van así que me vale gorro lo demás y hasta aquí.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2011
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              web development
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: 'tan' }}
            >
              Lorem20 ipsum hasta completar veinte palabras que ya no sé cuántas
              van así que me vale gorro lo demás y hasta aquí.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2012
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Ilustración
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: 'tan' }}
            >
              Lorem20 ipsum hasta completar veinte palabras que ya no sé cuántas
              van así que me vale gorro lo demás y hasta aquí.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2013
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              react | redux
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: 'tan' }}
            >
              Lorem20 ipsum hasta completar veinte palabras que ya no sé cuántas
              van así que me vale gorro lo demás y hasta aquí.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Resume;
