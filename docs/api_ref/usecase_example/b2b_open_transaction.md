---
id: b2b-example
title: [B2B] Open transaction
sidebar_label: [B2B] Open transaction
---
<br/>

<span class="badges post">post</span>

To create new `[B2B]` transaction.

</br>
​
***Endpoint:***
​
```bash
Method: POST
URL: https://api.verdoc.io/transaction
```

​
***Headers:***
​
| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | Data type |
| Authorization | bearerToken {{access_token}} | Valid `access_token` |
| Key | {{secret_key}} | The key for `encrypt` your data |
| ID | {{admin_id}} | `admin_id` |


​
***Body:***


| Parameters     |  Type  | Required | Description              |
| :------------- | :----: |:-------: | :----------------------- |
| s_name         | String | ✅  |Supplier name must be a string (`string`)  |
| s_phone_number | String | ✅  | Supplier `phone_number` must be a string (`string`)  |
| r_name         | String | ✅  |Tailer name must be a string (`string`)  |
| r_phone_number | String | ✅  | Tailer `phone_number` must be a string (`string`)  |
| previous_id    | String | ❎  | Optional for chain the transaction must be a string (`string`)  |
| type           | String | ✅  | Type `B2B` and must be a string (`string`)  |

>**Note** : Specefic `type` to `B2B`.
​
### ***Success Responses:***
​
Status code: `200` HTTP status code and a JSON object with the following information:
​
| Property       |  Type  | Description              |
| :------------- | :----: | ------------------------ |
| trans_id       | LongString | ID of the transaction    |
| open_id        | LongString | Supplier's `signature_digital` |
| finish_id      | LongString | Tailer's `signature_digital` |
| previous_id    | LongString | Previous `transaction_id` (Optional for chain the transaction) |
| payload_string | String | Text note |
| payload_file_url | String | File storage |
| status         | String | Transportation status         |
| create_at      | Int64  | Created time |

​
```json
{
    "trans_id": "VBEXcc77bc84d5da34648094c45qhqgwiqbwnfdhhwrf01myoonpqtmgfapqbmwskes585s2s2w",
    "open_id": "d8b0ebae77cc12ba4ff3ef2c46c957f4c4f02f007fc96df863a6a81564c85507fc1dfb342d1c89bd3d984073681db082e57613dcf663fd2b3be00a74f0d7866cb2d55d63d4b91f7c65ed1b86a54570327bf11c2f48b0f6f18a25adaad3c1cf756388a96ab9a14b7508b13792f6fcd904e6562ef4d73dffb4f063c2780c90fbc132b9537eec9abbf6d1e5295f0764",
    "finish_id": "43f1b4b0ec0b460eac59b423f6cfca123575a1b58aa8e7dec0a42cf5a4e21e533043a8a1a6a6159d9fa2d1155a5408b22fc97729611d14280a824f89d02161ed5a15ca03bd08e4ca199a3fd4b020d565002d640b28977f9310345592e4a15e773f545cf2a086373b0b",
    "previous_id": "VBEXcB4sds4fc84d9094209a36aabbd3ef3663fdyxgp5yb1ryqdbwml49thrhfoo8usstoso20",
    "payload_string": "Your note",
    "payload_file_url":"Your file url",
    "status":"pending",
    "create_at": "1583685390"
}
```
​
### ***Error Responses:***
​
Status code: `400` HTTP status code and a JSON object with the following information:
​
| Status Code |     error_message   |
| :-------    | :---------          | 
| 400    |  The JSON in the request body could not be parsed. The specific line and column are displayed. |
| 400    |  Appears when calling an API that you do not have permission to use. |
​
​
```js
{
  "message": "{error_message}"
}
```