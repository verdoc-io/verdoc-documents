---
id: get-list-of-user
title: Get list of user
sidebar_label: Get list of user
---

<span class="badges get">get</span>
<br/>
<br/>

To get list of the user, make an HTTP `GET` to the following endpoint with the information

## HTTP request

---

```bash
GET https://api.verdoc.io/users
```

<br/>

## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property      |  Type  | Description     |
| :------------ | :----: | --------------- |
| list of users | String | `list of users` |

</br>

```json
[
  {
    "user001"
  },
  {
    "user002"
  },
  {
    "user..."
  }

]
```

<br/>

## Error response

---

| Property |    Type     | Description   |
| :------- | :---------: | ------------- |
| 400      | Status code | Bad requested |
| error    |   Error     | Error message |

<br/>

```json
{
  "error": "Error message"
}
```

