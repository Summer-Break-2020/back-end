# Node.js Back-End API for Summer 2020 Project

### https://summer-2020-project.herokuapp.com/

## Schema

#### Users

---

```js
{
  id: INTEGER; // assigned by database, auto increments
  email: STRING; // not nullable, unique - 128 chars max
  password: STRING; // not nullable
  f_name: STRING; // not nullable - 128 chars max
  l_name: STRING; // not nullable - 128 chars max
  location: STRING; // not nullable - 128 chars max
  avatar: STRING; // nullable
  hourly_rate: DECIMAL; // defaults to 0
  role_id: INTEGER; // not nullable, references roles table
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

#### Users

- Authentication required to access these resources
---

| Method | Endpoint         | Description                                              |
| ------ | ---------------- | -------------------------------------------------------- |
| GET    | `api/users`      | Returns a list of all users                              |
| GET    | `api/users/:id`  | Returns the specified user                               |

## Seed Data

#### Users

---

```js
[
  {

    email: 'mail@trashcan.com',
    password: 'password',
    f_name: 'Jesse',
    l_name: 'Marek',
    location: 'Hemet, CA',
    avatar: '',
    role_id: 1
  },
  {
    email: 'pretty.kitty@cats.org',
    password: 'meowmeow',
    f_name: 'Catherine',
    l_name: 'Joy',
    location: 'Hemet, CA',
    avatar: '',
    hourly_rate: 12.5,
    role_id: 2
  },
  {
    email: 'gabby@unicornlover.net',
    password: 'unicorn11',
    f_name: 'Gabriella',
    l_name: 'Rose',
    location: 'Hemet, CA',
    avatar: '',
    role_id: 3
  }
];
```