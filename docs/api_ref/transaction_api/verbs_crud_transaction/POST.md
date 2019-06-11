---
id: crud_transaction_post
title: CRUD transaction [ POST ].
sidebar_label: CRUD transaction [ POST ].
---

  > ```POST``` CRUD transaction. 

**HTTP request**

 ```bash 
  POST https://api.verdoc.io/v1/transaction
 ```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters     |               Type                | Required | Package | Description          |
| :------------- | :-------------------------------: | :------: | :-----: | -------------------- |
| user           |            user_object            | Required |  free   | ```user```           |
| payload        |              String               | Required |  free   | ```payload```        |
| payload_type   | ( json \| xml \| soup \| string ) | Required |  free   | ```payload_type```   |
| docutment_file |              String               | Required |  free   | ```docutment_file``` |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property       |  Type  | Description           |
| :------------- | :----: | --------------------- |
| transaction_id | String | ```transaction_id ``` |

**Example request**

  ~~~bash
  curl https://verdoc.io/
  ~~~