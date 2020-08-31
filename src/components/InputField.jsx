import React,{ Component } from 'react';

class InputField extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.value || "",
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.value != prevProps.value) {
            this.setState({ text: this.props.value });
        }
    }
    render(){
        return (
            <>
                <input placeholder=""
                       type="text"
                       value={this.state.text}
                       onChange={(e) => this.props.callbackFunction(this.props.listId, e.target.value)}
                       disabled ={!this.props.isEditable}
                 />
                <br/>
            </>
        )
    }
}

export default InputField;