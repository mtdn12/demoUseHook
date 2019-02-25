import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import styles from './styles.module.scss'
import * as Routes from '../../../constant/routes'

import { checkMenuActive } from '../../../ultils/helper'
import UseLocalStorage from '../../organisms/UseLocalStorage'
import UseHover from '../../organisms/UseHover'
import UseWindowSize from '../../organisms/UseWindowSize'
import UseAnimation from '../../organisms/UseAnimation'

const Home = ({ match, history }) => {
  return (
    <Grid id={styles.main}>
      <Grid.Column width={12}>
        <Switch>
          <Route
            exact
            path={Routes.USE_LOCAL_STORATE}
            component={UseLocalStorage}
          />
          <Route exact path={Routes.USE_HOVER} component={UseHover} />
          <Route
            exact
            path={Routes.USE_WINDOW_SIZE}
            component={UseWindowSize}
          />
          <Route exact path={Routes.USE_ANIMATION} component={UseAnimation} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <Menu fluid vertical tabular="right">
          <Menu.Item
            as={Link}
            to={Routes.USE_LOCAL_STORATE}
            active={checkMenuActive(
              history.location,
              Routes.USE_LOCAL_STORATE
            )}>
            useLocalStorage
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={Routes.USE_HOVER}
            active={checkMenuActive(history.location, Routes.USE_HOVER)}>
            useHover
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={Routes.USE_WINDOW_SIZE}
            active={checkMenuActive(history.location, Routes.USE_WINDOW_SIZE)}>
            useWindowSize
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={Routes.USE_ANIMATION}
            active={checkMenuActive(history.location, Routes.USE_ANIMATION)}>
            useAnimation
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  )
}

export default Home
