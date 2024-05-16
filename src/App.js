import "./App.css"
import {Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Common/header/Header"
import About from "./components/About/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/Blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/Common/Footer/Footer"
import Home from "./components/Home/Home"

function App() {
  return (
    <Router>
   
     
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />

          
           
        </Switch>
        <Footer />
     
   
    </Router>
  )
}

export default App