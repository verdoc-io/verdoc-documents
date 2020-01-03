---
id: get-specific-user
title: Get specific user
sidebar_label: Get specific user
---

<span class="badges get">get</span>
<br/>
<br/>

To get list of the user, make an HTTP `GET` to the following endpoint with the information

</br>

## HTTP request

---

```bash
GET https://api.verdoc.io/user/{{id}}
```

<br/>

## Request parameters

---

| Parameter |    Type  | Required | Package | Description |
| :-------- | :------: | :------: | :-----: | :---------- |
| id        |  String  | optional |  free   | `user_id`   |

<br/>

## Response

---

Returns the status code 200 and a JSON object with the following information.

| Property      |  Type  | Description     |
| :------------ | :----: | --------------- |
|  user         | String | `user`          |

<br/>

## Error response

---

| Property |    Type     | Description   |
| :------- | :---------: | ------------- |
| 400      | Status code | Bad requested |
| Message  |   String    | Error message |
<br/>
```json
{
  "message": "Error message"    
}
```

