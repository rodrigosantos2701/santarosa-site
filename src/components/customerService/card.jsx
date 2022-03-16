import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardTab } from './styled'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const styles = {
    card: {
        textAlign: 'center',
        paddingBottom: '30px',
    }
};

function MediaCard(props) {
    const { classes } = props;
    const { cards } = props;

    return (
        cards.map((item, index) => (

            <div style={{ padding: '5px' }}>
                <Paper key={index} className={classes.card}>
                    <>
                        <CardTab>
                            {item.icon}
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography dangerouslySetInnerHTML={{ __html: item.text }} />
                        </CardTab>
                    </>
                </Paper>
            </div>
        ))
    )
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
