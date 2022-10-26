import PostLiked from "./PostLiked";
import { FaHeart } from "react-icons/fa";
const ReactPost = (props) => {
  return (
    <div className="post">
      <h3>{props.question}</h3>

      <p>{props.answer}</p>
      {/* {props.liked ? <PostLiked /> : <button onClick={() => {props.likePost(props.id)}}>Like Post<br></br><FaHeart className="heart"/></button>  } */}
      {!props.liked && (
        <button
          onClick={() => {
            props.likePost(props.id);
          }}
        >
          Like <FaHeart className="heart" />
        </button>
      )}
      {props.liked && <PostLiked />}
    </div>
  );
};

export default ReactPost;
