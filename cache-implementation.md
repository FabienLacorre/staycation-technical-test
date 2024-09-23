# Cache implementation

there are several ways to implement a cache system in a react app.

## tanStack

The simplest is to use an external library like tanStack with useQuery.
This can be used to manage requests, status and anything else that has anything to do with the call API.
It includes a high-performance cache management system.

https://tanstack.com/query/latest

## redux toolkit

You can also use the redux toolkit, which does more or less the same thing as useQuery via the create API

https://redux-toolkit.js.org/rtk-query/api/createApi

## Custom

Home-made cache management is also possible
By using redux stores, certain patterns make cache management.

That's why the hotel slice has this shape, as it's the beginning of a custom cache implementation.
By managing a listId, it's possible to update only certain data in the store, and fully manage the cache. And if the selectors are used correctly, it's possible to render only the parts concerned.
