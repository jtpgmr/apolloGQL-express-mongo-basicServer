### **Create/Register new User** Query

```js
mutation ($registerUserArgs: RegisterUserArgs) {
  registerUser(registerUserArgs: $registerUserArgs) {
    username
    email
    password
    token
    createdAt
  }
}
```
<br>
<br>

### **Get All Users** Query
```js
mutation LoginUser($loginUserArgs: LoginUserArgs) {
  loginUser(loginUserArgs: $loginUserArgs) {
    username
    token
  }
}
```