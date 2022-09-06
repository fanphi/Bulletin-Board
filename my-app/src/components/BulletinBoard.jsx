import { useState } from 'react';
import ReactPost from './ReactPost';

const BulletinBoard = () => {

    let boardPosts = [
        {question: "Vad är tre fördelar med att använda React?",
        answer: "React är lätt att använda och att lära sig. Med React kan du enkelt skapa olika komponenter som går att återanvända. React har även ett starkt community som är hjälpsamma.",
        liked: false,
        id: 1},
        {question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
        answer: "Lorem Ipsum",
        liked: false,
        id: 2},
        {question: "Nämn tre skillnader mellan React och Angular.",
        answer: "Lorem Ipsum",
        liked: false,
        id: 3},
      ]
    
      const [posts, setPosts] = useState(boardPosts);
    
      let likePost = (id) => {
        
        let allPosts = [...posts];
        allPosts[id].liked = true;
        
        setPosts([...allPosts])
        console.log("test");
      }
    return (
      <main>
        
        {posts.map((post, i) => <ReactPost question={post.question} answer={post.answer} liked={post.liked} likePost={likePost} id={i}/>)}
          
      </main>
    )
    }

      
  export default BulletinBoard
