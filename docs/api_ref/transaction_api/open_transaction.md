---
id: opening-transaction
title: Opening transaction
sidebar_label: Opening transaction
---

<span class="badges post">post</span>
<br/>
<br/>

To open transaction, make an HTTP `POST` to the following endpoint with the information

</br>

## HTTP request

---

```bash
POST https://api.verdoc.io/opening-transaction/{{adm_id}}/{{secret_key}}

```

<br/>

## Request body

---

| Parameters            |            Type             | Required | Package | Description            |
| :-------------------- | :-------------------------: | :------: | :-----: | ---------------------- |
| s_name                |           String            | ✅       |  free   | `sender_name`          |
| s_phone_number        |           String            | ✅       |  free   | `sender_phone_number`  |
| r_name                |           String            | ✅       |  free   | `receiver_name`        |
| r_phone_number        |           String            | ✅       |  free   | `receiver_phone_number`|

<br/>

## Request url parameters
---

| Parameters           |            Type             | Required | Package | Description  |
| :------------------- | :-------------------------: | :------: | :-----: | ------------ |
| id                   |           String            |    ✅    |  free   | `admin_id`   |
| key                  |           String            |    ✅    |  free   | `secret_key` |

</br>

## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property       |  Type  | Description      |
| :------------- | :----: | ---------------- |
| 200            | Status |  status code     |
| trans_id       | String | `transaction_id` |
| open_id        | String | `open_id`        |
| finish_id      | String | `finish_id`      |
| status         | String | `status`         |

```json
{
  "trans_id": "$2a$04$2rqnluQAp5MHHj",
  "open_id": "ac62d7bd79a2df797535cf959dad6fdbdf6386ae842731836df5c8e77789156b94d699dc4f0",
  "finish_id": "ac4ab0206f3aeb4659e305f40194bbd5646119e7aec9b10c475e4b8185c8e77786386ae84",
  "status": "pending"
}
```

<br/>

>**Note** : After opening transaction, the system will automatically generate the `signature` and `QR code`.

<br/>

## Error response

---

| Property |    Type     | Description   |
| :------- | :---------: | ------------- |
| 400      | Status code | Bad requested |
| error    |   Error     | Error message |

<br/>

```json
{
  "error": "Error message"
}
```

