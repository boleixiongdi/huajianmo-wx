import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from './containers/App'
import Home from './containers/Home/Home'
import Package from './containers/Package/Package'
import CategoryRoute from './containers/Category/CategoryRoute'
import Category from './containers/Category/Category'
import Categories from './containers/Category/Categories'
import Cart from './containers/Cart/Cart'
import My from './containers/My/My'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/package/:id/:name" component={Package}/>
    <Route path="/category" component={Categories}>
      <Route path=":id" component={Category}/>
    </Route>

    <Route path="/cart" component={Cart}/>
    <Route path="/my" component={My}/>
  </Route>
)

export default routes
