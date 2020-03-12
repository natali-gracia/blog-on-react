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
        if(window.pageYOffset > 150) {
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

	return (
        <div>
            {
                this.state.showNavBar ? <NavBar/> : null
            }
        </div>
	);
}}

export default FixedNav