---
id: cancel-transaction
title: Cancel transaction
sidebar_label: Cancel transaction
---

<span class="badges delete">delete</span>
<br/>
<br/>

To delete specific transaction, make an HTTP `DELETE` to the following endpoint with the information

</br>

## HTTP request

---

```bash
DELETE https://api.verdoc.io/transaction/{{id}}
```

<br/>


<br/>

## Request parameters

---

| Parameters     |  Type   | Required | Package | Description      |
| :------------- | :-----: | :------: | :-----: | ---------------- |
| id             | String  |    ✅    |  free   | `transaction_id` |

<br/>

## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property |    Type     | Description |
| :------- | :---------: | ----------- |
| 200      | Status code | Status code |

<br/>

## Error response

---

| Property |    Type     | Description   |
| :------- | :---------: | ------------- |
| 400      | Status code | Bad requested |
| error    |   Error     | Error message |
<br/>

```json
{
  "error": "Error message"
}
```

