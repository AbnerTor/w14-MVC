
const { Post } = require('../models');

const postdata =
    [
        {
            "postTitle": "I want to play guitar",
            "postContent": "I'm spending a lot of time playing guitar now",
            "userId": 1
        },
        {
            "postTitle": "Fields",
            "postContent": "I just passed a tobacco field",
            "userId": 2
        },
        {
            "postTitle": "I like pizza",
            "postContent": "It's in the title, I really like pizza",
            "userId": 3
        }
    ];

const userPosts = () => Post.bulkCreate(postdata);

module.exports = userPosts;