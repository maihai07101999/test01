var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'hello các bạn'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Chào bạn hải'
    },
    {
        id: 3,
        user_id: 1,
        content: 'hi thắm'
    },
]
 var users = [
     {
         id: 1,
         name: 'Mai Hải'
     },
     {
        id: 2,
        name: 'Mộng Thắm'
    },
 ]
function GetComment(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000);
    });
} 
function GetUser(userId){
    return new Promise(function(resolve){
            var result = users.filter(function(user){
                return userId.includes(user.id) // la những thằng user.id có user id = 1 và 2
            })
            setTimeout(function(){
            resolve(result);
             }, 1000);
    })
} 
GetComment()
    .then(function(comments){
        var userId = comments.map(function(comment){
            return comment.user_id;
        })
       return GetUser(userId)
        .then(function(users){
           return {
               users: users, comments: comments
           }
        })
    })
    .then(function(data){
       var commentt = document.getElementById('comment-box');
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user){
                 return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentt.innerHTML = html;
    });
// GetUser([1])
//     .then(function(users){
//         console.log(users);
//     })

