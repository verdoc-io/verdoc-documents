---
id: crud_signature_get
title: CRUD signature [ GET ].
sidebar_label: CRUD signature [ GET ]
---

> `GET` CRUD signature.

**HTTP request**

```bash
 GET https://api.verdoc.io/v1/signature
```

**URL parameters**

| Parameter      | Required | Package | Description    |
| :------------- | :------: | :-----: | :------------- |
| signature_hash | Required |  free   | signature_hash |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property        |  Type  | Description       |
| :-------------- | :----: | ----------------- |
| name_signature  | String | `name_signature`  |
| image_signature | String | `image_signature` |

**Example request**

```bash
curl https://verdoc.io/
```
