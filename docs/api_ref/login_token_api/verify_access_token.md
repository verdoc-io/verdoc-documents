---
id: verify-access-token
title: Verify access token
sidebar_label: Verify access token
---

<span class="badges get">get</span>
<br/>


To verify whether an access token is valid, send an HTTP `GET` request to the following endpoint with the access token in the query string.

<br/>

## HTTP request

---

```bash
GET https://api.verdoc.io/v1/auth/verify
```

<br/>
## URL parameters

---

| Parameter    | Required | Package | Description  |
| :----------- | :------: | :-----: | :----------- |
| access_token |    ✅     |  free   | Access token |

<br/>
## Response

---
If the access token is valid, a JSON response is returned the status code 200.

| Property |    Type     | Description               |
| :------- | :---------: | ------------------------- |
| 200      | Status code | Access to token is valid. |

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
curl -v -X GET 'https://api.verdoc.io/v1/auth/verify/access_token?access_token={your_token}'
```
