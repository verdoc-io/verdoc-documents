---
id: request_confirmation_code
title: Request confirmation code.
sidebar_label: Request confirmation code
---

<span class="badges post">post</span>
<br/>

**HTTP request**

---

```bash
POST https://api.verdoc.io/v1/transaction/code
```

<br/>
**Request header**

---

| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/x-www-form-urlencode |

<br/>
**Request body**

---

| Parameters     |  Type  | Required | Package | Description             |
| :------------- | :----: | :------: | :-----: | ----------------------- |
| channel        | String | Optional | premium | `channel` mobile, email |
| mobile_number  | String | Optional | premium | `mobile_number`         |
| email          | String | Optional | premium | `email`                 |
| transaction_id | String |    ✅    |  free   | `transaction_id`        |
| payload        | String |    ✅    |  free   | `payload`               |

<br/>
**Response**

---

Returns the status code 200 and a JSON object with the following information.

| Property |  Type  | Description |
| :------- | :----: | ----------- |
| code     | String | `code`      |

<br/>
**Example request**

---

```bash
curl https://verdoc.io/
```
