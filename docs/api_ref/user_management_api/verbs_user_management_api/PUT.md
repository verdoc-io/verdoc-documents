---
id: crud_user_put
title: CRUD user [ PUT ].
sidebar_label: CRUD user [ PUT ].
---

  > ```PUT``` CRUD user. 

**HTTP request**

 ```bash 
  PUT https://api.verdoc.io/v1/users
 ```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters    |  Type  | Required | Package | Description         |
| :------------ | :----: | :------: | :-----: | ------------------- |
| user_id       | String | Required |  free   | ```user_id```       |
| name          | String | Required |  free   | ```name```          |
| email         | String | Required |  free   | ```email```         |
| mobile_number | String | Required |  free   | ```mobile_number``` |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property |    Type     | Description |
| :------- | :---------: | ----------- |
| 200      | Status code | Status code |

**Example request**

  ~~~bash
    curl https://verdoc.io/
  ~~~