import React,{Component} from "react"

import './../../Main/Sidebar/SubscrForm/subscrform.css'
import './subscrfooter.css'

class FooterSubscr extends Component {

    state = {
        getValue: '',
        showForm: true,
        } 
        
    handleChange = ((event) => {
        this.setState({getValue: event.target.value});
        }
    )
    handleSubscribe = ((event) =>  {
    this.setState({showForm: false});
    event.preventDefault();
        }
    )

    render() {
        return (
            <div>
                {
                    this.state.showForm ? 
                        <div className="subscr-form footer-subscr">
                            <form method="" action="" onSubmit={this.handleSubscribe}>
                                <label>
                                    <input type="Email" name="user-email" title="Enter Your Email ..." 
                                    placeholder="Enter Your Email ..."
                                    value={this.state.getValue} onChange={this.handleChange}/>
                                </label>
                                <button type="submit" value="Subscribe!">
                                    Subscribe!
                                </button>
                            </form>
                        </div> 
                    : 
                        <div className="subscr-accept footer-subscr">
                            <p>Please, check your inbox {this.state.getValue} to confirm your subscription.</p>
                        </div>
                }
            </div>

          );
    }
}

export default FooterSubscr