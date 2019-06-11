---
id: revoke-access-token
title: Revoke access token.
sidebar_label: Revoke access token
---

  Revoke access token.

**HTTP request**

 ```bash 
  POST https://api.verdoc.io/v1/auth/revoke
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

| Property |  Type  | Description         |
| :------- | :----: | ------------------- |
| 200      | String | ```access_token ``` |

**Example request**

  ~~~bash
  curl https://verdoc.io/
  ~~~