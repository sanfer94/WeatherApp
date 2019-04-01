import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import './App.css';

const cities = [
  'Montevideo,uy',
  'Artigas,uy',
  'Toluca, mx',
  'Madrid,es',
  'Lima,pe',

];




class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log("handle etc");
    this.props.dispatchSetCity(city);
  }
  render() {

    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="details">
                {city &&
                  <ForecastExtended city={city}>

                  </ForecastExtended>
                }

              </div>
            </Paper>

          </Col>
        </Row>

      </Grid>
    );
  }
}

App.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired,
}
const mapDispatchToProps = dispatch => (
  {
    dispatchSetCity: value => dispatch(setCity(value))
  }
);

export default connect(null, mapDispatchToProps)(App);
