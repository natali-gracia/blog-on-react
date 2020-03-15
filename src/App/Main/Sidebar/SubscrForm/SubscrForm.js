import React,{Component} from "react"

import './subscrform.css'

class SubscrForm extends Component {

    state = {
		value: '',
        } 
        
    handleChange = ((event) => {
        this.setState({value: event.target.value});
        }
    )
    handleSubscribe = ((event) =>  {
    alert('Please, check your inbox now to confirm your subscription.');
    event.preventDefault();
        }
    )

    render() {
        return (
            <div className="subscr-form">
                <form onSubmit={this.handleSubscribe}>
                <label>
                    <input type="text" name="user-email" title="Enter Your Email ..." 
                    placeholder="Enter Your Email ..."
                    value={this.state.value} onChange={this.handleChange} />
                </label>
                <button type="submit" value="Subscribe!">Subscribe!</button>
                </form>
            </div>

          );
    }
}

export default SubscrForm