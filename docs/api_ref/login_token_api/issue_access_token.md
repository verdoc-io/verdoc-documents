---
id: issue-access-token
title: Issue access token.
sidebar_label: Issue access token
---

  Issue access token.

**HTTP request**

 ```bash 
  POST https://api.verdoc.io/v1/auth/token
 ```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters |  Type  | Required | Package | Description    |
| :--------- | :----: | :------: | :-----: | -------------- |
| api_code   | String | Required |  free   | ```api_code``` |
| username   | String | Required |  free   | ```username``` |
| password   | String | Required |  free   | ```password``` |

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