// FILE PATH: ./NSS-Bought-Sold/src/services/commentService.js

export const getCommentsForArticle = (articleId) => {
    return fetch(`http://localhost:8088/comments?articleId=${articleId}`).then((res) => res.json())}

export const addNewComment = (commentData) => {
    return fetch(`http://localhost:8088/comments`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',

    },
    body: JSON.stringify(commentData)
    }).then((res) => res.json())
}

// export const getAllCommentsFromArticle

// export const getAllCommentsFromUserId