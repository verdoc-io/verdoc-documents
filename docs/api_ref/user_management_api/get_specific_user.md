---
id: get_specific_user
title: Get specific user
sidebar_label: Get specific user
---

<span class="badges get">get</span>
<br/>
<br/>

## HTTP request

---

```bash
GET https://api.verdoc.io/v1/users/profile
```

<br/>
## URL parameters

---

| Parameter | Required | Package | Description |
| :-------- | :------: | :-----: | :---------- |
| user_id   | optional |  free   | user_id     |

<br/>
## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property      |  Type  | Description     |
| :------------ | :----: | --------------- |
| list of users | String | `list of users` |

<br/>
## Example request

---

```bash
curl https://verdoc.io/
```
