---
id: about-QR-code
title: About QR code
sidebar_label: About QR code
---
<br/>
There are 2 types of QR codes, The first is the QR code for recipients, And the second is the QR code for sender
</br>

## > QR code for sender

### Response

---
It will change the status of the transaction to `shipping` and returns the status code 200 and a JSON object with the following information.

| Property       |  Type  | Description      |
| :------------- | :----: | ---------------- |
| 200            | Status |  status code     |
| message        | String |  `ok message`    |

<br/>

### Error response

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
<br/>
<br/>

## > QR code for recipients

### Response

---
It will change the status of the transaction to `finish` and returns the status code 200 and a JSON object with the following information.

| Property       |  Type  | Description      |
| :------------- | :----: | ---------------- |
| 200            | Status |  status code     |
| message        | String |  `ok message`    |

<br/>

### Error response

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

