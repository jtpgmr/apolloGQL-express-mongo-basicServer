### **Get Single Message** Query
```js
query message($id: ID!) {
  getMessage(ID: $id) {
     createdBy
     text
     createdAt
  }
}
```

### **Get All Messages** Query
```js
query {
  getAllMessages{
    text
    createdAt
    createdBy
  }
}
```
