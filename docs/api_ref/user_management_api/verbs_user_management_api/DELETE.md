---
id: crud_user_delete
title: CRUD user [ DELETE ].
sidebar_label: CRUD user [ DELETE ].
---

  > ```DELETE``` CRUD user. 

**HTTP request**

 ```bash 
  DELETE https://api.verdoc.io/v1/users
 ```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters |  Type   | Required | Package | Description   |
| :--------- | :-----: | :------: | :-----: | ------------- |
| user_id    | String  | Required |  free   | ```user_id``` |
| force      | Boolean | Required |  free   | ```force```   |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property |    Type     | Description |
| :------- | :---------: | ----------- |
| 200      | Status code | Status code |

**Example request**

  ~~~bash
    curl https://verdoc.io/
  ~~~