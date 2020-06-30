# Node.js Back-End API for Summer 2020 Project

### https://summer-2020-project.herokuapp.com/

## Schema

#### Users

---

```js
{
  id: INTEGER; // assigned by database, auto increments
  username: STRING; // not nullable, unique - 128 chars max
  password: STRING; // not nullable
  email: STRING; // not nullable, unique - 128 chars max
  created_at: TIMESTAMP; // defaults to now, server will handle this
  updated_at: TIMESTAMP; // defaults to now, server will handle this
}
```

## Endpoints

#### Auth

- No Authentication required
---

| Method | Endpoint         | Description                                              |
| ------ | ---------------- | -------------------------------------------------------- |
| POST   | `api/register`   | User registration. Returns newly created user            |
| POST   | `api/login`      | User login. If successful returns a JSON Web Token (JWT) |

## Seed Data

#### Users

---

```js
[
  {
    username: 'sentinel',
    password: 'password',
    email: 'mail@trashcan.com'
  },
  {
    username: 'ravenLOL',
    password: 'meowmeow',
    email: 'pretty.kitty@cats.org'
  },
  {
    username: 'gabicorn11',
    password: 'unicorn11',
    email: 'gabby@rainbow.net'
  }
];
```