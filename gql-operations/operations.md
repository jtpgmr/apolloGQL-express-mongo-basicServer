### Structure of a GraphQL Operations (Query/Mutation)
- ####  **Operation**: Declares if the operation is a query or mutation
  - #### Queries are analagous to HTTP **GET** requests
  - #### Mutations are analagous to and encompass HTTP **POST**, **PUT** and **DELETE** requests

<br />

- #### **Operation Type Input Params/Args**: A field in which an input parameter, along with its type, are passed into the operation before it executes
  - #### The **$** symbol signifies a dynamic variable
  - #### The **!** symbol signifies a *non-nullable* object
    - #### If **!** is declared within an input parameter, it means that this param is required for the operation to execute
    - #### If **!** is declared within the output, it means that the operation must output a particular type of data upon execution
  - #### These props are declared when defining types for each operation
  - #### Apply params specify specific actions clients can execute to interact with the DB

- #### **operationName**: The name of each operation is declared when creating type definitions and its corresponding resolver function
- #### **Resolver Parmas/Args**: Once an input param is given the appropriate input arguments(s) (with the correct type(s)), they are passed to the resolver function
- #### **Output**: The typeDef is also where the the output of the query is defined
  - #### By combining all the output fields desired within a **Type**, you are able to choose which specific fields within this preset type can be output

```js
operation params($id: ID!) {
  operationName resolverParams(ID: $id) {
     outputFields
  }
}
```