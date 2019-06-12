---
id: crud_transaction_get
title: CRUD transaction [ GET ].
sidebar_label: CRUD transaction [ GET ].
---

> `GET` CRUD transaction.

**HTTP request**

```bash
 GET https://api.verdoc.io/v1/transaction
```

**URL parameters**

| Parameter      | Required | Package | Description    |
| :------------- | :------: | :-----: | :------------- |
| transaction_id |    ✅    |  free   | transaction_id |

**Response**

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

**Example request**

```bash
curl https://verdoc.io/
```
