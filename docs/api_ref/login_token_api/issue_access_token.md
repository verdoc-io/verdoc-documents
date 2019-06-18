---
id: issue-access-token
title: Issue access token
sidebar_label: Issue access token
---

<span class="badges post">post</span>
<br/>

To issue an access token, make an HTTP `POST` request to the following endpoint with the refresh token in the request body.

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
## Error response

---

If the call is not successful, a 400 Bad Request status code is returned with the following JSON object.

| Property |  Type  | Description   |
| :------- | :----: | ------------- |
| 400      | status | Bad requested |
| message  | string | Error message |
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
curl -v -X POST https://api.verdoc.io/v1/auth/token \
-H 'Content-Type: application/json' \
-d 'api_code={api_code}&email={email}&password={password}'
```
