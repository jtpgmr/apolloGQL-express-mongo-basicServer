### **Get Single User** Query

```js
query GetUser($getUserId: ID!) {
  getUser(ID: $getUserId) {
    username
    email
  }
}
```
<br>
<br>

### **Get All Users** Query
```js
query GetAllUsers {
  getAllUsers {
    username
    email
    token
  }
}
```