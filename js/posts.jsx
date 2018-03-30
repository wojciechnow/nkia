import React from 'react';


class Posts extends React.Component {
    render (){
        return  <div> {this.props.posts.filter((e)=>{ return e.userId === this.props.userId}).map((e,i)=>{

                return <div className='posts' key={i}>{e.body}</div>

            }

        )}</div>
    }
}

export default (Posts)