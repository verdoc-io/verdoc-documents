---
id: revoke-access-token
title: Revoke access token.
sidebar_label: Revoke access token
---

<span class="badges post">post</span>
<br/>
<br/>

## HTTP request

---

```bash
POST https://api.verdoc.io/v1/auth/revoke
```

<br/>
## Request header

---

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

<br/>
## Request body

---

| Parameters    |  Type  | Required | Package | Description     |
| :------------ | :----: | :------: | :-----: | --------------- |
| refresh_token | String |    ✅     |  free   | `refresh_token` |

<br/>
## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property |  Type  | Description    |
| :------- | :----: | -------------- |
| 200      | String | `access_token` |

<br/>
## Example request

---

```bash
curl https://verdoc.io/
```
