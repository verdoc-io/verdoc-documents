---
id: delete_user
title: Delete user.
sidebar_label: Delete user
---

<span class="badges delete">delete</span>
<br/>

**HTTP request**

---

```bash
DELETE https://api.verdoc.io/v1/users/profile
```

<br/>
**Request header**

---

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

<br/>
**Request body**

---

| Parameters |  Type   | Required | Package | Description |
| :--------- | :-----: | :------: | :-----: | ----------- |
| user_id    | String  |    ✅    |  free   | `user_id`   |
| force      | Boolean |    ✅    |  free   | `force`     |

<br/>
**Response**

---

Returns the status code 200 and a JSON object with the following information.

| Property |    Type     | Description |
| :------- | :---------: | ----------- |
| 200      | Status code | Status code |

<br/>
**Example request**

---

```bash
curl https://verdoc.io/
```
