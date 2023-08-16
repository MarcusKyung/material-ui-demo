import React from 'react';
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/system';

//Tutorial: https://www.youtube.com/watch?v=Xoz31I1FuiY&ab_channel=JavaScriptMastery
//Updated template w/o makeStyle: https://mui.com/material-ui/getting-started/templates/album/
//Learn more about MUI components under components tab, learn more about props under component API tab
//Typography is a component for text, it is modified by variant prop
//CSS baseline is a fundamental concept in design and typography that defines the imaginary line upon which text and elements sit. It serves as a reference point for aligning different elements to ensure visual consistency and readability.

const MyDiv = styled('div')({
  backgroundColor: 'white',
  padding: "10px 0 20px"
  }
)

const cards = [1,2,3,4,5,6]

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera style={{ marginRight: "10px" }}/>
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <MyDiv>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph> This is a recreation of the Material UI Album Template</Typography>
              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">See My Photos</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">Shop My Photos</Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </MyDiv>
          <Container maxWidth="md">
            <Grid container spacing={4} sx={{ padding: '20px 0'}}>
              {cards.map(() => (
                <Grid xs={12} sm={6} md={4} item>
                  <Card sx={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
                    <CardMedia component="div" sx={{ width: '100%', height: '300px' }}>
                      <img src="https://source.unsplash.com/random" alt="Random from unsplash" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </CardMedia>
                    <CardContent variant="h5" sx={{ flexGrow: '1' }}>
                      <Typography gutterBottom variant="h5">Heading</Typography>
                      <Typography>This is a media card. You can use this section to describe the content.</Typography>
                      <CardActions>
                        <Button size="small" color="primary">View</Button>
                        <Button size="small" color="primary">Edit</Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer>
          <Typography sx={{backgroundColor: '#1875d1', color: 'white'}} variant="h6" align="center">Footer</Typography>
        </footer>
    </React.Fragment>
  );
}

export default App;