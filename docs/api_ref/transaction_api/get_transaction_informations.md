---
id: get_transaction_informations
title: Get transaction informations
sidebar_label: Get transaction informations
---

<span class="badges get">get</span>
<br/>
<br/>

## HTTP request

---

```bash
GET https://api.verdoc.io/v1/transaction
```

<br/>
## URL parameters

---

| Parameter      | Required | Package | Description    |
| :------------- | :------: | :-----: | :------------- |
| transaction_id |    ✅     |  free   | transaction_id |

<br/>
## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property       |  Type  | Description                                 |
| :------------- | :----: | ------------------------------------------- |
| status         | String | `status` ( created, code_issued, verified ) |
| name           | String | `name`                                      |
| mobile_number  | String | `mobile_number`                             |
| email          | String | `email`                                     |
| payload        | String | `payload`                                   |
| payload_type   | String | `payload_type` ( json, xml, soup, string )  |
| docutment_file | String | `docutment_file` (url)                      |

<br/>
## Example request

---

```bash
curl https://verdoc.io/
```
