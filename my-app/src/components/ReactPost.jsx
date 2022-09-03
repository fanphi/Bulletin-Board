import PostLiked from "./PostLiked"
const ReactPost = (props) => {


    return (
      <div className="post">
          <h3>Fråga: {props.question}</h3>
         
          <p>Svar: {props.answer}</p>
            {props.liked ? <PostLiked /> : <button onClick={() => {props.likePost(props.id)}}>Like Post</button>  }
      </div>
    )
  }
  
  export default ReactPost