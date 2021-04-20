import React from 'react';
import Grid from '@material-ui/core/Grid';

import ProfileCard from '@design//ProfileCard';
import ConcertSlide from '@design//ConcertSlide';
import ImageWall from '@design//ImageWall';
import { Paper } from '@material-ui/core';

export default function AmyIntro({ isMobile }) {
  return (
    <div>
      {isMobile ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12}>
            <ConcertSlide />
          </Grid>
          <Grid item xs={12}>
            <ImageWall isMobile={isMobile} />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <Grid container item xs={4} spacing={3}>
            <Grid container item>
              <ProfileCard />
            </Grid>
            <Grid container item>
              <Paper style={{ height: '50%', background: '' }}>
                <ConcertSlide />
              </Paper>
            </Grid>
          </Grid>
          <Grid container item xs={8}>
            <Paper>
              <ImageWall />
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
