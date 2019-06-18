---
id: get_list_of_user_profile
title: Get list of user profile
sidebar_label: Get list of user profile
---

<span class="badges get">get</span>
<br/>
<br/>

## HTTP request

---

```bash
GET https://api.verdoc.io/v1/users
```

<br/>
## URL parameters

---

None.
<br/>
## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property      |  Type  | Description     |
| :------------ | :----: | --------------- |
| list of users | String | `list of users` |

<br/>
## Error response

---

| Property |    Type     | Description   |
| :------- | :---------: | ------------- |
| 400      | Status code | Bad requested |
| Message  |   String    | Error message |
<br/>
```json
{
  "message": "Error message"
}
```

