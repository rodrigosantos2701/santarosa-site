import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Imagem1 from '../../images/image1.jpeg';
import Imagem2 from '../../images/image2.jpeg';
import Imagem3 from '../../images/image3.jpeg';
import Imagem4 from '../../images/image4.jpeg';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const isMobile = window.screen.width < 1024


const tutorialSteps = [
  {
    // label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      `${Imagem1}`,
  },
  {
    // label: 'Bird',
    imgPath:
    `${Imagem2}`,
  },
  //Need change phone number on image
  // {
  //   // label: 'Bali, Indonesia',
  //   imgPath:
  //   `${Imagem3}`,
  // },
  {
    // label: 'Bali, Indonesia',
    imgPath:
    `${Imagem4}`
  },

];

const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 400,
    flexGrow: 1,
    paddingLeft: isMobile? '10%' :'25%' ,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    width: isMobile? '90%' :'60%',
    // backgroundColor: theme.palette.background.default,
  },
  img: {
    height: isMobile? 300 : 500,
    display: 'block',
    // maxWidth: 400,
    overflow: 'hidden',
    width: isMobile? '90%' :'60%',
    
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div style={{display: 'flex', width: isMobile?'80%' :'60%', justifyContent: 'center'}}>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={classes.mobileStepper}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;