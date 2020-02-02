---
id: get-user-example
title: Get User Example
sidebar_label: Get User Example
---
<br/>

<span class="badges get">get</span> ***example*** user information

</br>
​
***Endpoint:***
​
```bash
Method: GET
URL: https://api.verdoc.io/user/{{id}}
```

​
***Headers:***
​
| Key | Value | Description |
| --- | ------|-------------|
| Authorization | {{access_token}} | Valid `access_token` |
​
​
***Query params:***
​
| Key | Value | Description |
| --- | ------|-------------|
| id  | {{user_id}} | user_id must be string (`string`) |

​
<br/>
​
### ***Success Responses:***
​
Status code: `200` HTTP status code and a JSON object with the following information:
​
| Property       |  Type  | Description              |
| :------------- | :----: | ------------------------ |
| name           | String | user's `name`            |
| id             | Long   | user's `id`              |
| phone          | string | user's `phone_number`    |
| type           | String | user's `type`            |
| admin_id       | string | user's `admin_id` (The admin ID that added this user) |
| site_admin     | Bool   | user's `permission`      |
​
```js
{
    "name": "verdoc",
    "id": "A1b2C3d4f5B6r7t8",
    "phone": "0123456789"
    "type": "User",
    "admin_id": "b1V2F3d5s9c8e4"
    "site_admin": false
}
```
​
<br/>
​
### ***Error Responses:***
​
Status code: `400` HTTP status code and a JSON object with the following information:
​
| Status Code |     error_message   |
| :-------    | :---------          | 
| 400    |  The JSON in the request body could not be parsed. The specific line and column are displayed. |
| 400    |  Appears when calling an API that you do not have permission to use. |
​
​
```js
{
  "message": "{error_message}"
}
```