import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import styles from './styles.module.scss'
import * as Routes from '../../../constant/routes'

import { checkMenuActive } from '../../../ultils/helper'
import UseLocalStorage from '../../organisms/UseLocalStorage'

const Home = ({ match, history }) => {
  console.log(history)
  return (
    <Grid id={styles.main}>
      <Grid.Column width={12}>
        <Switch>
          <Route
            exact
            path={Routes.USE_LOCAL_STORATE}
            component={UseLocalStorage}
          />
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
          <Menu.Item>Hook2</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  )
}

export default Home
