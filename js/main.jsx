import React from "react";

import Users from './users.jsx'

import Posts from './posts.jsx'
/* Main section of App, hold array of posts data and usersId from users.jsx*/

class Main extends React.Component {

    constructor(props){

        super(props);

        this.state = {

            posts:[],

            userId: null

        }

    }

    handleClick = (givenElem) => {

        this.setState ({

            userId: givenElem

        })





    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/posts')

            .then(data=>data.json())

            .then(data =>{

                console.log(data);

                this.setState({

                    posts: data

                })

            })

    }

    render (){



        return <main className="container">


            <section className="row">

                <Users click={this.handleClick}/>

            </section>

           <Posts posts={this.state.posts} userId={this.state.userId}/>
        </main>

    }

}

export {Main}