---
id: verify_transaction
title: Verify transaction.
sidebar_label: Verify transaction
---

<span class="badges post">post</span>
<br/>

**HTTP request**

---

```bash
POST https://api.verdoc.io/v1/transaction/verify
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

| Parameters     |  Type  | Required | Package | Description      |
| :------------- | :----: | :------: | :-----: | ---------------- |
| transaction_id | String |    ✅    |  free   | `transaction_id` |
| mobile_number  | String |    ✅    |  free   | `mobile_number`  |
| payload        | String |    ✅    |  free   | `payload`        |
| code           | String |    ✅    |  free   | `code`           |
| signature_hash | String |    ✅    |  free   | `signature_hash` |

<br/>
**Response**

---

Returns the status code 200 and a JSON object with the following information.

| Property |    Type     | Description |
| :------- | :---------: | ----------- |
| 200      | Status code | Status code |

<br/>
**Example request**

---

```bash
curl https://verdoc.io/
```
