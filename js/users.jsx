import React from 'react';

class Users extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        baza: [],
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data=> data.json())
            .then (data=>{
            console.log(data)
                this.setState({
                    baza: data
                })
            }).catch(error=>{
                console.log("Connection error: ", error)
        })
    }
    handleClick = (recived) =>{
        if(typeof this.props.click == 'function'){
            this.props.click(recived)
        }

    }
    render (){
        return <div>
            <ul>
                {this.state.baza.map((e,i)=>{
                    return <li key={i} onClick={()=> {
                        this.handleClick(e.id)
                    }}> {e.name}</li>
                })}
            </ul>
        </div>
    }
}
export default (Users)