---
id: crud_user_post
title: CRUD user [ POST ].
sidebar_label: CRUD user [ POST ].
---

  > ```POST``` CRUD user. 

**HTTP request**

 ```bash 
  POST https://api.verdoc.io/v1/users
 ```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters    |  Type  | Required | Package | Description         |
| :------------ | :----: | :------: | :-----: | ------------------- |
| name          | String | Required |  free   | ```name```          |
| email         | String | Required |  free   | ```email```         |
| mobile_number | String | Required |  free   | ```mobile_number``` |
| company_name  | String | Required |  free   | ```company_name```  |
| time_stamp    | String | Required |  free   | ```time_stamp```    |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property |  Type  | Description    |
| :------- | :----: | -------------- |
| user_id  | String | ```user_id ``` |

**Example request**

  ~~~bash
  curl https://verdoc.io/
  ~~~