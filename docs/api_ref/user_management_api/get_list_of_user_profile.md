---
id: get_all_user_information
title: Get all user information
sidebar_label: Get all user information
---
</br>

<span class="badges get">get</span> 
---
To get all user information


***Endpoint:***
​
```bash
Method: GET
URL: https://api.verdoc.io/users
```

​
***Headers:***
​
| Key | Value | Description |
| --- | ------|-------------|
| Authorization | {{access_token}} | Valid `access_token` |


​
###***Success Responses:***
​
Status code: `200` HTTP status code and a JSON object with the following information:
​
| Property       |  Type  | Description              |
| :------------- | :----: | ------------------------ |
| name           | String | user's `name`            |
| id             | Long   | user's `id`              |
| phone          | string | user's `phone_number`    |
| create_at      | int64  | The time when this user was created |
| update_at      | int64  | The time when this user was updated |
| delete_at      | int64  | The time when this user was deleted |
| admin_id       | string | user's `admin_id` (The admin ID that added this user) |​

```json
[
  {
    "name": "verdoc",
    "id": "A1b2C3d4f5B6r7t8",
    "phone": "0123456789",
    "create_at": "1000000",
    "update_at": "1010000",
    "delete_at": "1100000",
    "admin_id": "b1V2F3d5s9c8e4"
  },
  {...}
]
```

### ***Error Responses:***
​
Status code: `400` HTTP status code and a JSON object with the following information:
​
| Status Code |     error_message   |
| :-------    | :---------          | 
| 400    |  Appears when calling an API that you do not have permission to use. |
​
​
```json
{
  "message": "{error_message}"
}
```