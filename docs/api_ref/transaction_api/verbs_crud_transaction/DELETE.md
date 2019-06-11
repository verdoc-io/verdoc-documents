---
id: crud_transaction_delete
title: CRUD transaction [ DELETE ].
sidebar_label: CRUD transaction [ DELETE ].
---

  > ```DELETE``` CRUD transaction. 

**HTTP request**

 ```bash 
  DELETE https://api.verdoc.io/v1/transaction
 ```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters     |  Type   | Required | Package | Description          |
| :------------- | :-----: | :------: | :-----: | -------------------- |
| transaction_id | String  | Required |  free   | ```transaction_id``` |
| force          | Boolean | Required |  free   | ```force```          |


**Response**

Returns the status code 200 and a JSON object with the following information.

| Property |    Type     | Description |
| :------- | :---------: | ----------- |
| 200      | Status code | Status code |

**Example request**

  ~~~bash
    curl https://verdoc.io/
  ~~~