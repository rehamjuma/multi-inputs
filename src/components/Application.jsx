import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField';

class Application extends Component {
    constructor(from) {
        super(from);
        this.state = {
            showItems : false,
            items : [{
                "id":0,
                "value":"",
                "isEditable":true
            }]

        }
    }
    handleFieldChange = (id , value) => {
        const tempItems = this.state.items.slice();
        var prevValue = "";
        if(id > 0)
            prevValue = this.state.items[id - 1].value;
        if(id > 0 && !value.includes(prevValue)) {
            tempItems[id].value = this.state.items[id - 1].value + value;
        }else {
            tempItems[id].value = value;
        }
        if(id != this.state.items.length - 1)
            tempItems[id + 1].isEditable = true;

        this.setState({ items: tempItems });
    }
    handleClick = ()=>{
        var rand =  Math.floor(Math.random() * 10) + 1 ;
        this.setState({showItems: true});
        for (let i = 1; i < rand ; i++) {
            this.setState(prevState => ({
                items: [...prevState.items, { id: i, value: "" ,"isEditable":false }]
            }));
        };
    }


    render(){
        return(
            <>
                <div>
                    <Button onClick={this.handleClick} ></Button>
                <br/>
                    { this.state.showItems ?
                        <div>
                            {this.state.items.map((item, i) => (
                                <InputField
                                    key={i}
                                    listId = {i}
                                    type="input"
                                    value={item.value}
                                    isEditable={i==0 ?true: this.state.items[i].isEditable }
                                    callbackFunction={this.handleFieldChange}
                                />
                            ))}
                        </div>: ""}
                </div>

            </>
        )
    }
}
    const Button = ({ onClick }) => (
        <button onClick={onClick} type="button">
            Click me !
        </button>
    );
export default Application;