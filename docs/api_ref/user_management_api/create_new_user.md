---
id: create_new_user
title: Create new user.
sidebar_label: Create new user
---

<span class="badges post">post</span>

**HTTP request**

```bash
POST https://api.verdoc.io/v1/users
```

**Request header**

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

**Request body**

| Parameters    |  Type  | Required | Package | Description     |
| :------------ | :----: | :------: | :-----: | --------------- |
| name          | String |    ✅    |  free   | `name`          |
| email         | String |    ✅    |  free   | `email`         |
| mobile_number | String |    ✅    |  free   | `mobile_number` |
| company_name  | String |    ✅    |  free   | `company_name`  |
| time_stamp    | String |    ✅    |  free   | `time_stamp`    |

**Response**

Returns the status code 200 and a JSON object with the following information.

| Property |  Type  | Description |
| :------- | :----: | ----------- |
| user_id  | String | `user_id`   |

**Example request**

```bash
curl https://verdoc.io/
```
