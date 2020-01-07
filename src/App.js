import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types'
import IndexPage from './pages/index'
import LoginPage from './pages/login'
import { getUserName, setUserName } from './store/user/action'

class App extends React.Component {
  static propTypes = {
    userName: PropTypes.string
  }
  componentDidMount() {}

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />
            }}
          />
          <Route path="/home" component={IndexPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    )
  }
}
function mapStateToProps(state) {
  return {
    userName: state.userReducer.userName
  }
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ setUserName, getUserName }, dispatch)
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
