---
id: get-transaction-information
title: Get transaction information
sidebar_label: Get transaction information
---

<span class="badges get">get</span>
<br/>
<br/>

To transaction informations, make an HTTP `GET` to the following endpoint with the information

</br>

## HTTP request

---

```bash
GET https://api.verdoc.io/transactions
```

<br/>

## Response

---

Returns the status code 200 and a JSON object with the following information.


| Property          |  Type          | Description                                    |
| :---------------- | :------------: | ---------------------------------------------- |
| 200               | Status code    | status code                                    |
| id                | String(hashed) | `id`                                           |
| open_id           | String         | `open_id`                                      |
| finish_id         | String         | `finish_id`                                    |
| payload_string    | String         | `payload_string`                               |
| payload_file_url  | String         | `payload_file_url`                             |
| status            | String         | `status`( pending, finish, cancel )            |
| create_at         | Int64          | `create_at`                                    |
| update_at         | Int64          | `update_at`                                    |
| delete_at         | Int64          | `delete_at`                                    |

```json
{
  "id": "$2a$04$2rqnluQAp5MHHj4iaSPD4OW",
  "open_id": "4537fadca86ad9a99782b57a3209d1b2a38e6cfc41f55",
  "finish_id": "9a99782b57a329a99782b57a3209d1b2a38e6cfc41f55",
  "payload_string": "your note text.",
  
}
```

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
</br>

| Property |    Type     | Description   |
| :------- | :---------: | ------------- |
| 404      | Status code | Not Found     |
| error    |   Error     | Error message |


```json
{
  "error": "Error message"
}
```