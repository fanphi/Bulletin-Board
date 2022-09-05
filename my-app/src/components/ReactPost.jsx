import PostLiked from "./PostLiked"
import { FaHeart } from "react-icons/fa";
const ReactPost = (props) => {


    return (
      <div className="post">
          <h3>Fråga: {props.question}</h3>
         
          <p>Svar: {props.answer}</p>
            {props.liked ? <PostLiked /> : <button onClick={() => {props.likePost(props.id)}}>Like Post<br></br><FaHeart className="heart"/></button>  }
      </div>
    )
  }
  
  export default ReactPost