---
id: get_specific_user
title: Get specific user.
sidebar_label: Get specific user
---

<span class="badges get">get</span>

**HTTP request**

```bash
GET https://api.verdoc.io/v1/users/profile
```

**URL parameters**

| Parameter | Required | Package | Description |
| :-------- | :------: | :-----: | :---------- |
| user_id   | optional |  free   | user_id     |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property      |  Type  | Description     |
| :------------ | :----: | --------------- |
| list of users | String | `list of users` |

**Example request**

```bash
curl https://verdoc.io/
```
