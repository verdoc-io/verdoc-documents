---
id: get-user-information
title: Get user information
sidebar_label: Get user information
---
</br>

<span class="badges get">get</span>
---
To get specific user information

</br>
​
***Endpoint:***
​
```bash
Method: GET
URL: https://api.verdoc.io/user/{{id}}
```

***Headers:***
​
| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearerToken {{access_token}} | Valid `access_token` |
| ID  | {{id}} | ID that needs to be processed |
​​
​
###***Success Responses:***
​
Status code: `200` HTTP status code and a JSON object with the following information:
​
| Property       |  Type  | Description              |
| :------------- | :----: | ------------------------ |
| id             | string | user's `id`              |
| name           | String | user's `name`            |
| phone_number   | string | user's `phone_number`    |
| admin_id       | string | user's `admin_id` (The admin ID that added this user) |
| create_at      | Int64  | Create time              |
| update_at      | Int64  | Updated time             |
| delete_at      | Int64  | Delete time              |

​
```json
{
    "id": "A1b2C3d4f5B6r7t8",
    "name": "verdoc",
    "phone_number": "0123456789",
    "admin_id": "b1V2F3d5s9c8e4",
    "create_at": 1572045613,
    "update_at": 1572044653,
    "delete_at": 1573045100
}

```
​
​
###***Error Responses:***
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