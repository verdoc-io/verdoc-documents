---
id: crud_user
title: CRUD user.
sidebar_label: CRUD user
---

CRUD user.

**HTTP request**

```bash
[POST | GET | DELETE | PUT] https://api.verdoc.io/v1/transaction
```

| METHOD | ENDPOINT           |   USAGE   | RETURNS       |
| :----- | :----------------- | :-------: | :------------ |
| POST   | `/v1/users/add`    | something | user_id       |
| GET    | `/v1/users`        | something | list of users |
| DELETE | `/v1/users/delete` | something | status code   |
| PUT    | `/v1/users`        | something | status code   |
