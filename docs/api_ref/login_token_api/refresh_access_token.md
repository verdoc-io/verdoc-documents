---
id: refresh-access-token
title: Refresh access token.
sidebar_label: Refresh access token
---

<span class="badges post">post</span>
<br/>

**HTTP request**

---

```bash
POST https://api.verdoc.io/v1/auth/refresh
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

| Parameters    |  Type  | Required | Package | Description     |
| :------------ | :----: | :------: | :-----: | --------------- |
| refresh_token | String |    ✅    |  free   | `refresh_token` |

<br/>
**Response**

---

Returns the status code 200 and a JSON object with the following information.

| Property      |    Type    | Description     |
| :------------ | :--------: | --------------- |
| access_token  |   String   | `access_token`  |
| expires_in    | Unix times | `expires_in`    |
| refresh_token |   String   | `refresh_token` |

<br/>
**Example request**

---

```bash
curl https://verdoc.io/
```
