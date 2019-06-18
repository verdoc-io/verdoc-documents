---
id: refresh-access-token
title: Refresh access token
sidebar_label: Refresh access token
---

<span class="badges post">post</span>
<br/>

To refresh an access token, make an HTTP `POST` request to the following endpoint with the refresh token in the request body.

<br/>

## HTTP request

---

```bash
POST https://api.verdoc.io/v1/auth/refresh
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

If the call is successful, a new access token and refresh token are returned.

| Property      |    Type    | Description     |
| :------------ | :--------: | --------------- |
| access_token  |   String   | `access_token`  |
| expires_in    | Unix times | `expires_in`    |
| refresh_token |   String   | `refresh_token` |

<br/>
## Error response

---

If the refresh token has expired or invalid, a 400 Bad Request status code is returned with the following JSON object.
<br/>

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

<br/>
## Example request

---

```bash
curl -v -X POST https://api.verdoc.io/v1/auth/refresh \
-H 'Content-Type: application/json' \
-d 'refresh_token={refresh_token}'
```
