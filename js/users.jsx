import React from 'react';

/* Component that download data from server and render Users names + gives onClick to get theirs id's*/

class Users extends React.Component {



    constructor(props){

        super(props);

        this.state = {

            users: [], /* an array of users */

        }

    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users') /* fetch which delivers data which is pushed into state array*/

            .then(data=> data.json())

            .then (data=>{

                console.log(data)

                this.setState({

                    users: data

                })

            }).catch(error=>{

            console.log("Connection error: ", error)

        })

    }

    handleClick = (recived) =>{ /* method that transfer id to the main.jsx*/

        if(typeof this.props.click == 'function'){

            this.props.click(recived)

        }



    }

    render (){

        return <div>

            <ul>

                {this.state.users.map((e,i)=>{

                    return <li key={i} onClick={()=> {

                        this.handleClick(e.id)

                    }}> {e.name}</li>

                })}

            </ul>

        </div>

    }

}

export default (Users)