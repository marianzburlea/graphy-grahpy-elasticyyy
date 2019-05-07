RESTFul API

GET /posts -> list

GET /posts/3 -> one from the list with id 3
`http://localhost:7788/names/${id}`


POST /posts -> create a new one
`http://localhost:7788/names`

PUT /posts -> update one
PATCH /posts -> partially update one
DELETE /posts -> remove one from the collection

OPTIONS /posts -> give you the allowed actions

/posts/3/users/3/123
/posts_users/

list something
/posts?action=list

// update something
/posts?action=update&list=3&id=763&flag=true