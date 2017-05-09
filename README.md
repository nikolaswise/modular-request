# req

Small server-side/client-side agnostic async request module

```sh
$ npm install
$ npm test
$ npm start
```

## API

### `req.encodeForm`

Form encode object for requests.

**Params:**

| Param          | Type         | Default                 |
| -------------- | ------------ | ----------------------- |
| Object         | Object       | {}                      |

**Returns**
Form encoded string.

---

### `req.call`

Wrapper function for Isomorphic Fetch.

**Params:**

| Param          | Type         | Default                 |
| -------------- | ------------ | ----------------------- |
| url            | String       | none                    |
| form           | Object       | none                    |
| method         | String       | none                    |


**Returns:**
Promise that resolves to an error or the response from the call.

---

### `req.get`

Shorthand helper for `request.call(url, form, 'GET').

**Params:**

| Param          | Type         | Default                 |
| -------------- | ------------ | ----------------------- |
| url            | String       | none                    |
| form           | Object       | none                    |

**Returns:**
Promise that resolves to an error or the response from the call.

---

### `req.put`

**Params:**

Shorthand helper for `request.call(url, form, 'PUT').

**Params:**

| Param          | Type         | Default                 |
| -------------- | ------------ | ----------------------- |
| url            | String       | none                    |
| form           | Object       | none                    |


**Returns:**
Promise that resolves to an error or the response from the call.

---

### `req.delete`

Shorthand helper for `request.call(url, form, 'DELETE').

**Params:**

| Param          | Type         | Default                 |
| -------------- | ------------ | ----------------------- |
| url            | String       | none                    |
| form           | Object       | none                    |

**Returns:**
Promise that resolves to an error or the response from the call.

---

### `req.post`

Shorthand helper for `request.call(url, form, 'POST').

**Params:**

| Param          | Type         | Default                 |
| -------------- | ------------ | ----------------------- |
| url            | String       | none                    |
| form           | Object       | none                    |

**Returns:**
Promise that resolves to an error or the response from the call.
