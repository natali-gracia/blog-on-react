import React,{Component} from "react"

import NavBar from './NavBar'

class FixedNav extends Component {

    state = {
        showNavBar: false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }

    handleScroll = () => {
        if(window.pageYOffset > 200) {
            this.setState({
              showNavBar: true,
            });
          } else {
            this.setState({
              showNavBar: false,
            });
          }
        }


    render() {

    const {
      changeBrowsingCategory
    } = this.props;

    return (
          <div>
              {
                  this.state.showNavBar ? <NavBar changeBrowsingCategory={changeBrowsingCategory}/> : null
              }
          </div>
    );
}}

export default FixedNav