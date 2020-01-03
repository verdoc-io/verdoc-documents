---
id: revoke-access-token
title: Revoke access token
sidebar_label: Revoke access token
---

<span class="badges post">post</span>
<br/>

To revoke an access token, make an HTTP `POST` request to the following endpoint with information that we 

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
## Error response

---

If the access token has expired or invalid, a 400 Bad Request status code is returned with the following JSON object.
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
curl -v -X POST https://api.verdoc.io/v1/auth/revoke \
-H 'Content-Type: application/json' \
-d 'access_token={access_token}'
```
