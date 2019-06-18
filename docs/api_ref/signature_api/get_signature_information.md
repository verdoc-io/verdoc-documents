---
id: get_signature_information
title: Get signature information
sidebar_label: Get signature information
---

<span class="badges get">get</span>
<br/>
<br/>

## HTTP request

---

```bash
GET https://api.verdoc.io/v1/signature
```

<br/>
## URL parameters

---

| Parameter      | Required | Package | Description    |
| :------------- | :------: | :-----: | :------------- |
| signature_hash |    ✅     |  free   | signature_hash |

<br/>
## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property        |  Type  | Description       |
| :-------------- | :----: | ----------------- |
| name_signature  | String | `name_signature`  |
| image_signature | String | `image_signature` |

<br/>
## Error response

---

| Property |    Type     | Description   |
| :------- | :---------: | ------------- |
| 400      | Status code | Bad requested |
| Message  |   String    | Error message |
<br/>
```json
{
  "message": "Error message"
}
```

