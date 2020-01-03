---
id: deletion-signature
title: Deletion signature
sidebar_label: Deletion signature
---

<span class="badges delete">delete</span>
<br/>
<br/>

To delete specific the signature data, make an HTTP `DELETE` to the following endpoint with the information

</br>

## HTTP request

---

```bash
DELETE https://api.verdoc.io/deletion-signature/{{sig-id}}
```

<br/>

## Request parameter

---

| Parameters    |  Type  | Required | Package | Description     |
| :------------ | :----: | :------: | :-----: | --------------- |
| sig_id        | String |    ✅    |  free   | `signature_id`  |

</br>

## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property          |  Type  | Description         |
| :---------------- | :----: | ------------------- |
| message           | String | `deleted sig_id` |

</br>

```json
{
  "message": "deleted : sig_id"
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
| 404      | Status code | `Not Found`    |
| error    |   Error     | `Error message`|

<br/>

```json
{
  "error": "Error message"
}
```
