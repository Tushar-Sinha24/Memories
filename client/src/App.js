import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Posts from './component/Posts/Posts';
import Form from './component/Form/Form';
import useStyle from './style'

import memories from './images/memories.png'

function App() {
  const classes=useStyle();

  return (
    
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position="static" color='inherit'>
        <Typography className={classes.heading} variant="h2" align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height='60' />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='strech' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Form/>
            <Grid item xs={12} sm={7}>
              
            </Grid>

          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;
