import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    if (likes < 10) {
      setLikes(likes + 1);
    }
  };

  return (
    <div>
      <p>Likes: {likes}</p>

      <button
        onClick={handleClick}
        disabled={likes >= 10}
      >
        Like ❤️
      </button>

      {likes >= 10 && <p>Limit reached 🚫</p>}
    </div>
  );
}

export default LikeButton;
