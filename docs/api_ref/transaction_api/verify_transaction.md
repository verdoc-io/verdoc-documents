---
id: verify_transaction.
title: Verify transaction.
sidebar_label: Verify transaction.
---

  Verify transaction.

**HTTP request**

 ```bash 
  POST https://api.verdoc.io/v1/transaction/verify
 ```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters     |  Type  | Required | Package | Description          |
| :------------- | :----: | :------: | :-----: | -------------------- |
| transaction_id | String | Required |  free   | ```transaction_id``` |
| mobile_number  | String | Required |  free   | ```mobile_number```  |
| payload        | String | Required |  free   | ```payload```        |
| code           | String | Required |  free   | ```code```           |
| signature_hash | String | Required |  free   | ```signature_hash``` |


**Response**

Returns the status code 200 and a JSON object with the following information.

| Property |    Type     | Description |
| :------- | :---------: | ----------- |
| 200      | Status code | Status code |

**Example request**

  ~~~bash
  curl https://verdoc.io/
  ~~~