---
id: get-signature-information
title: Get signature information
sidebar_label: Get signature information
---

<span class="badges get">get</span>
<br/>
<br/>

To get specific the signature data, make an HTTP `GET` to the following endpoint with the information

## HTTP request

---

```bash
GET https://api.verdoc.io/signature/{{name}}/{{phone_number}}
```

<br/>

## Request parameter

---

| Parameters      |    Type     | Required | Package | Description       |
| :-------------- | :---------: | :------: | :-----: | ----------------- |
| name            |   String    |    ✅    |  free   | `name`            |
| phone_number    |   String    |    ✅    |  free   | `phone_number`    |

<br/>

## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property          |  Type  | Description           |
| :---------------- | :----: | --------------------- |
| sig_id            | String | `signature_id`        |
| use_id            | String | `user_id`             |
| sig_digital       | String | `signature_digital`   |
| sig_img           | String | `signature_image`     |
| sig_status        | String | `signature_status`    |
| sig_create_at     | Int64  | `signature_create_at` |
| sig_update_at     | Int64  | `signature_update_at` |
| sig_delete_at     | Int64  | `signature_delete_at` |

</br>

```json
{
   "sig_id"       : "signature_id",
   "use_id"       : "user_id",
   "sig_digital"  : "signature_digital",
   "sig_img"      : "signature_image",
   "sig_status"   : "signature_status",
   "sig_create_at": "signature_create_at",
   "sig_update_at": "signature_update_at",
   "sig_delete_at": "signature_delete_at"
 }

```
</br>

## Error response

---
- Returns the status code 400 and a JSON object with the following information.

| Property |    Type     | Description     |
| :------- | :---------: | --------------- |
| 400      | Status code | `Bad requested` |
| error    |   Error     | `Error message` |

</br>

```json
{
  "error": "Error message"
}
```

</br>

- Returns the status code 404 and a JSON object with the following information.

| Property |    Type     | Description    |
| :------- | :---------: | -------------- |
| 404      | Status code | `Not Fund`     |
| error    |   Error     | `Error message`|

<br/>

```json
{
  "error": "Error message"
}
```
