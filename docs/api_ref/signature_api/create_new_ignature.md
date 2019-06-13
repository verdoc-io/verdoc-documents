---
id: create_new_ignature
title: Create new signature.
sidebar_label: Create new signature
---

<span class="badges post">post</span>

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
| image_signature |   String    |    ✅    |  free   | `image_signature` |
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