import React from "react";
import Users from './users.jsx'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: [],
            posts:[],
        }
}
handleClick = (givenElem) => {
        this.setState ({
            posts: this.posts.id[givenElem],
        })

}
componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(data=>data.json())
            .then(data =>{
                console.log(data)
                this.setState({
                    posts: data
                })
            })
}
    render (){

        return <main className="container">
            {this.state.page}
            {/*<div> {this.state.posts.map((e,i)=>{*/}
                {/*return <div key={i}>{e.`{this.state.page}`}</div>*/}
                {/*}*/}
            {/*)}</div>*/}
            <section className="row">
            <Users click={this.handleClick}/>
            </section>
        </main>
    }
}
export {Main}