---
id: verify-access-token
title: Verify access token.
sidebar_label: Verify access token
---

<span class="badges get">get</span>

**HTTP request**

```bash
GET https://api.verdoc.io/v1/auth/verify
```

**URL parameters**

| Parameter    | Required | Package | Description  |
| :----------- | :------: | :-----: | :----------- |
| access_token |    ✅    |  free   | Access token |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property |    Type     | Description    |
| :------- | :---------: | -------------- |
| 200      | Status code | `access_token` |

**Example request**

```bash
curl https://verdoc.io/
```
