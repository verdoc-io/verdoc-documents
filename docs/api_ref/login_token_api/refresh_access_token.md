---
id: refresh-access-token
title: Refresh access token.
sidebar_label: Refresh access token
---

  Refresh access token.

**HTTP request**

 ```bash 
  POST https://api.verdoc.io/v1/auth/refresh
 ```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters    |  Type  | Required | Package | Description         |
| :------------ | :----: | :------: | :-----: | ------------------- |
| refresh_token | String | Required |  free   | ```refresh_token``` |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property      |    Type    | Description          |
| :------------ | :--------: | -------------------- |
| access_token  |   String   | ```access_token ```  |
| expires_in    | Unix times | ```expires_in ```    |
| refresh_token |   String   | ```refresh_token ``` |

**Example request**

  ~~~bash
  curl https://verdoc.io/
  ~~~