---
id: issue-access-token
title: Issue access token
sidebar_label: Issue access token
---

<span class="badges post">post</span>
<br/>
<br/>

## HTTP request

---

```bash
POST https://api.verdoc.io/v1/auth/token
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

| Parameters |  Type  | Required | Package | Description |
| :--------- | :----: | :------: | :-----: | ----------- |
| api_code   | String |    ✅     |  free   | `api_code`  |
| username   | String |    ✅     |  free   | `username`  |
| password   | String |    ✅     |  free   | `password`  |

<br/>
## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property      |    Type    | Description     |
| :------------ | :--------: | --------------- |
| access_token  |   String   | `access_token`  |
| expires_in    | Unix times | `expires_in`    |
| refresh_token |   String   | `refresh_token` |

<br/>
## Example request

---

```bash
curl https://verdoc.io/
```
