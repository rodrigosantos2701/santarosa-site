import React from 'react';
import styled from 'styled-components';
import { ContainerServices, TitleServices, TitleCommentServices, TextServices } from './styled'
import HorizontalLine from '../simpleHorizontalLine'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        padding: 20,
        margin: 10,
        textAlign: 'center',
        background: '#336933',
        color: '#fff',
    },
});

const Service = (props) => {
    const { classes } = props;
    const { content } = props
    return (
        <div>
            <ContainerServices>
                <HorizontalLine text={content.title}></HorizontalLine>
                <Paper className={classes.root}>
                    <TitleCommentServices dangerouslySetInnerHTML={{ __html: content.comment }}></TitleCommentServices>
                </Paper>
            </ContainerServices>
            <ContainerServices>
                <img src={content.icon} alt='logo' style={{width: '50%', height: '25%'}} />
                <TextServices dangerouslySetInnerHTML={{ __html: content.text }}></TextServices>
            </ContainerServices>
            <ContainerServices>
                {content.values ?

                    <Grid container >
                        <HorizontalLine text={'Tarifário'}></HorizontalLine>
                        {content.values.map((item, index) => (

                            <Grid item sx={4} >
                                <Paper key={index} className={classes.root}  >
                                    <div style={{ lineHeight: '25px' }}>
                                        <div>{item.local}</div>
                                        <div>{item.price}</div>
                                    </div>
                                </Paper>
                            </Grid>

                        ))}
                        <ContainerServices>
                            <a href={content.contract} download>Termos de uso do serviço</a>
                        </ContainerServices>
                    </Grid>
                    : ''}
            </ContainerServices>

        </div>
    )
}

Service.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Service);
