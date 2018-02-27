
const React = require('react');
const Router = require('react-router');

const { DefaultRoute, Route, NotFoundRoute } = Router;

const routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/>
        <NotFoundRoute handler={require('./components/common/notFoundPage')}/>
    </Route>
);

module.exports = routes;