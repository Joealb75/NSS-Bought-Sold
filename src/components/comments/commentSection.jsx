import { useState, useEffect } from 'react';
import { getCommentsForArticle, addNewComment } from '../../services/commentService.js';
import { getUserById } from '../../services/UserService.js';
import './comments.css'; 

export const CommentSection = ({ articleId, currentUser }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        getCommentsForArticle(articleId).then(async (comments) => {
            // Promise.all handles multiple async 
            const commentsWithUserDetails = await Promise.all(comments.map(async (comment) => {
                const user = await getUserById(comment.userId);
                return { ...comment, user };
            }));
            setComments(commentsWithUserDetails);
        });
    }, [articleId]);

    const handlePostComment = () => {
        const commentData = {
            articleId,
            userId: currentUser.id,
            text: newComment,
            timestamp: new Date().toLocaleDateString('en-US')
        };

        addNewComment(commentData)
            .then(async (addedComment) => {
                const user = await getUserById(addedComment.userId);
                addedComment.user = user;
                setComments([...comments, addedComment]);
                setNewComment('');  
            });
    };

    return (
        <>
        <div className='orange-divider'></div>

        <div className="comment-section">
            <h2 className='comment-h2'>Comments</h2>
            {comments.map(comment => (
                <div key={comment.id} className="comment">

                    <img src={comment.user.userImg} 
                        alt={`User Image`} 
                        className="comment-user-img" />
                    <strong className="comment-user-name">{comment.user.fullName} :

                        <div className='comment-timeStamp'>
                            <p className='comment-timeStamp'>Posted: {comment.timestamp}</p>
                        </div>
                    </strong>
                    
                    <div className="comment-content">
                        <p className="comment-text">{comment.text}</p>
                    </div>

                </div>
            ))}
            <textarea
                className="comment-input"
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                placeholder="Write a comment..."
            />
            <button className="comment-button" onClick={handlePostComment}>Post Comment</button>
        </div>
    </>
    );
}
