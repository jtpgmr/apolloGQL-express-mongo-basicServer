### **Get Single Message** Query
### The **first line** is where *input props/arguments* are passed
### The input props are then passed into their corresponding fields when executing the operation
```js
query getMessage($id: ID!) {
  getMessage(ID: $id) {
     createdBy
     text
     createdAt
  }
}
```
### JSON object containing an example inputs for the operation above
```js
{
  "id": "Mongo ObjectID string HERE",
}
```

<br>
<br>

### **Get All Messages** Query
### **Note**: The name of the query (or mutation) is not needed in the first line
```js
query {
  getAllMessages{
    text
    createdAt
    createdBy
  }
}
```
