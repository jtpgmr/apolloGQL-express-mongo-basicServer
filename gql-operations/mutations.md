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

### **Delete Message** Mutation
```js
mutation($id: ID!) {
  deleteMessage(ID: $id) {
    createdAt
  }
}
```