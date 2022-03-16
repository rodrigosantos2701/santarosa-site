import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { QuestCard } from './styled'
import { withStyles, MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#336933'
        },
        secondary: {
            main: '#fff',
        },
    },
});



function Questions(props) {
    const { classes } = props;
    const { DataQuestions } = props;
    const [arrayItems, setArrayItems] = useState([])
    const [changeState, setChangeState] = useState(false)

    useEffect(() => {
        setArrayItems(DataQuestions)
    }, [])

    const handleclick = (index) => {
        let newArray = [...DataQuestions]
        setChangeState(!changeState)
        newArray[index].close = changeState
        setArrayItems(newArray)
    }

    return (
        arrayItems.map((item, index) => (

            <div style={{ padding: '5px' }}>
                <Paper key={index} className={classes.card}>
                    <>
                        <QuestCard>
                            <Grid container>
                                <Grid item xs={10} >
                                    <Typography >
                                        {item.question}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <MuiThemeProvider theme={theme}>
                                        <Fab size='small' color='primary' className={classes.fab} onClick={(e) => handleclick(index)}>
                                            <AddIcon color='secondary' />
                                        </Fab>
                                    </MuiThemeProvider>
                                </Grid>
                            </Grid>
                            {item.close === false ?
                                <Typography component="p">
                                    {item.answer}
                                </Typography>
                                : ''}
                        </QuestCard>
                    </>
                </Paper>
            </div>
        ))
    )
}

Questions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Questions);
