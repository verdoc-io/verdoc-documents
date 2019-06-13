---
id: delete_signature
title: Delete signature.
sidebar_label: Delete signature
---

<span class="badges delete">delete</span>

**HTTP request**

```bash
DELETE https://api.verdoc.io/v1/signature
```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters     |  Type  | Required | Package | Description      |
| :------------- | :----: | :------: | :-----: | ---------------- |
| signature_hash | String |    ✅    |  free   | `signature_hash` |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property |    Type     | Description |
| :------- | :---------: | ----------- |
| 200      | Status code | Status code |

**Example request**

```bash
curl https://verdoc.io/
```