---
id: signature-information
title: Signature Information
sidebar_label: Signature Information
---
<br/>
  หลังจากเปิดtransaction ระบบจะทำการ generate signature และ qr code อัตโนมัติ 

<br/>

## Request parameter

---

| Parameters      |    Type     | Required | Package | Description       |
| :-------------- | :---------: | :------: | :-----: | ----------------- |
| name            |   String    |    ✅    |  free   | `name`            |
| phone_number    |   String    |    ✅    |  free   | `phone_number`    |
| pin_code        |   String    |    ✅    |  free   | `pin_code`        |

<br/>

## Example : 
---

```bash
POST https://api.verdoc.io/sending-signature/john/01234567/******
```
</br>

## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property          |  Type       | Description         |
| :---------------- | :---------: | ------------------- |
| 200               | Status code |     status code     |
| signature_digital | String      | `signature_digital` |

<br/>

## Error response

---
- Returns the status code 400 and a JSON object with the following information.

| Property |    Type     | Description     |
| :------- | :---------: | --------------- |
| 400      | Status code | `Bad requested` |
| error    |   Error     | `Error message` |

</br>

```json
{
  "error": "Error message"
}
```

</br>

- Returns the status code 404 and a JSON object with the following information.

| Property |    Type     | Description    |
| :------- | :---------: | -------------- |
| 404      | Status code | `Not Fund`     |
| error    |   Error     | `Error message`|

<br/>

```json
{
  "error": "Error message"
}
```
