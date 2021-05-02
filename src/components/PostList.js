import React, { Component } from 'react'
import axios from 'axios'


class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             erroMessage : []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({erroMessage: 'Error Retreiving Data'})
        })
    }


    render() {
        const { posts, erroMessage} = this.state
        return (
            <div>
                List of Post
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>
                        {post.title}
                        </div>): null
                }
                {
                    erroMessage ? <div>{erroMessage}</div>
                    : null
                }
            </div>
        )
    }
}

export default PostList
