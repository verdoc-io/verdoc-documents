---
id: admin-generate-new-API-Key
title: Admin's API Key generator
sidebar_label: Admin's API Key generator
---

<span class="badges post">post</span>
<br/>
<br/>

To generate new API Key, make an HTTP `POST` to the following endpoint with the information

</br>

## HTTP request

---

```bash
POST https://api.verdoc.io/apikey-generator
```

</br>

## Request body
---

| Parameters      |  Type  | Required | Package | Description       |
| :-------------- | :----: | :------: | :-----: | ----------------- |
| email           | String |    ✅    |  free   | `email`           |
| password        | String |    ✅    |  free   | `password`        |

</br>

## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property |  Type       | Description |
| :------- | :---------: | ----------- |
| 200      | Status code | status code |
| ID       | String      | `id`        |
| comp_id  | String      | `comp_id`   |
| key      | String      | `key`       |
| level    | String      | `level`     |
| status   | Boolean     | `status`    |
| create_at| int64       | `create_at` |
| update_at| int64       | `update_at` |
| delete_at| int64       | `delete_at` |

```json
{
  "id": "id",
  "comp_id": "company_id",
  "key": "api key",
  "level": "your level",
  "status": "true or false",
  "create_at": "unix time",
  "update_at": "unix time",
  "delete_at":"unix time"
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

<!-- <br/>
## Example request

---

```bash
curl https://verdoc.io/
``` -->
