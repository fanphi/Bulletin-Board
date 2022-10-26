import { useState } from "react";
import ReactPost from "./ReactPost";

const BulletinBoard = () => {
  let boardPosts = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer:
        "React är lätt att använda och att lära sig. Med React kan du enkelt skapa olika komponenter som går att återanvända. React har även ett starkt community som är hjälpsamma.",
      liked: false,
      id: 1,
    },
    {
      question:
        "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer:
        "När du går in på en vanlig webbplats och klickar på en länk som tar dig till en ny sida, så behöver den sidan laddas om. Med en Single Page Application betyder det att själva sidan endast laddas en gång och bara nödvändig ny information behöver ändras. Detta gör en Single Page Application snabbare än en vanlig hemsida.",
      liked: false,
      id: 2,
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer:
        "React är ett JavaScript-bibliotek och Angular är ett ramverk. React använder sig av en virtuell DOM och Angular använder sig av en riktig DOM. Det betyder att med Angular så påverkas hela strukturen om endast en liten ändring görs, men med React så går det att göra ändringar utan att hela DOMen behöver uppdateras. Angular är skrivet i Typescript och React är skrivet i JavaScript.",
      liked: false,
      id: 3,
    },
  ];

  const [posts, setPosts] = useState(boardPosts);

  let likePost = (id) => {
    let allPosts = [...posts];
    allPosts[id].liked = true;

    setPosts([...allPosts]);
  };
  return (
    <main>
      {posts.map((post, i) => (
        <ReactPost
          question={post.question}
          answer={post.answer}
          liked={post.liked}
          likePost={likePost}
          id={i}
        />
      ))}
    </main>
  );
};

export default BulletinBoard;
