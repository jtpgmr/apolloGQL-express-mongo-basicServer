### **Create (POST) Message** Mutation
```js
mutation($messageArgs: MessageArgs) {
  createMessage(messageArgs: $messageArgs) {
    text
    createdAt
    createdBy
  }
}
```
### JSON object containing an example inputs for the operation above
```js
{
"messageArgs": {
    "text": "hi",
    "username": "jtp"
  }
}
```

<br>
<br>

### **Update (PUT) Message** Mutation
```js
mutation($id: ID!, $text: String!) {
  updateMessage(ID: $id, text: $text) {
    text
    createdAt
    createdBy
  }
}
```

### JSON object containing an example inputs for the operation above
```js
{
"messageArgs": {
    "text": "hi",
    "username": "jtp"
  }
}
```

<br>
<br>

### **Delete Message** Mutation
```js
mutation($id: ID!) {
  deleteMessage(ID: $id) {
    createdAt
  }
}
```