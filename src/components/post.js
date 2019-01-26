import React,{Component} from 'react';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts : []
    }
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({posts : json}))
  }

  render(){
    const items = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
      <h2>POST</h2>
      {items}
      </div>
    )
  }
}

export default Posts;
