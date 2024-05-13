import { useState, useEffect } from 'react';
import { getCommentsForArticle, addNewComment } from '../../services/commentService.js';
import { getUserById } from '../../services/UserService.js';

export const CommentSection = ({ articleId, currentUser }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [users, setUsers] = useState({});

    useEffect(() => {
        getCommentsForArticle(articleId).then(setComments);
    }, [articleId]);

    

    const handlePostComment = () => {
        const commentData = {
            articleId,
            userId: currentUser.id,  
            text: newComment,
            timestamp: new Date().toISOString()
        };

        addNewComment(commentData)
            .then(addedComment => {
                setComments(comments.concat(addedComment));
                setNewComment('');  
                console.log(currentUser)
            });
    };

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id} style={{ marginBottom: '10px' }}>
                    <img src={comment.user.profilePicture} 
                        alt={`${comment.user.name}'s profile`} 
                        style={{ width: '50px', height: '50px' }} />
                    <div>
                        <strong>{comment.user.name}</strong>
                        <p>{comment.text}</p>
                    </div>
                </div>
            ))}
            <textarea
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                placeholder="Write a comment..."
                style={{ width: '100%', height: '100px' }}
            />
            <button onClick={handlePostComment}>Post Comment</button>
        </div>
    );
}


