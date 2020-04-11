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
        if(window.pageYOffset > 300) {
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
      changeBrowsingCategory,
      favoritesButtonState,
    } = this.props;

    return (
          <div>
              <NavBar
              changeBrowsingCategory={changeBrowsingCategory}
              showNavBar={this.state.showNavBar}
              favoritesButtonState={favoritesButtonState}
              />
          </div>
    );
}}

export default FixedNav