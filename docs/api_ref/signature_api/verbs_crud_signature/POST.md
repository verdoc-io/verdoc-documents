---
id: crud_signature_post
title: CRUD signature [ POST ].
sidebar_label: CRUD signature [ POST ]
---

> `POST` CRUD signature.

**HTTP request**

```bash
 POST https://api.verdoc.io/v1/signature
```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters      |    Type     | Required | Package | Description       |
| :-------------- | :---------: | :------: | :-----: | ----------------- |
| image_signature |   String    | Required |  free   | `image_signature` |
| user            | user_object | Optional |  free   | `user`            |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property       |  Type  | Description      |
| :------------- | :----: | ---------------- |
| signature_hash | String | `signature_hash` |

**Example request**

```bash
curl https://verdoc.io/
```
