---
id: admin-register
title: Admin registration
sidebar_label: Admin registration
---

<span class="badges post">post</span>
<br/>
<br/>

To register the admin, make an HTTP `POST`
to the following endpoint with the information on the registration form that we provide

</br> 

## HTTP request
---

```bash
POST https://verdoc-register-page.firebaseapp.com/
```

</br>

>**Note** : There are two parts you need to do, The first is `Form Submit` and the second is `Form Upload Image`.

</br>


## > Form submit 


### Request header
---
| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | application/json                 |

</br>

### Request body
---
| Parameters                    |  Type  | Required | Package | Description                   |
| :---------------------------- | :----: | :------: | :-----: | ----------------------------- |
| name                          | String |    ✅    |  free   | `name`                        |
| email                         | String |    ✅    |  free   | `email`                       |
| password                      | String |    ✅    |  free   | `password`                    |
| gender                        | String |    ✅    |  free   | `gender`                      |
| birthday                      | Int64  |    ✅    |  free   | `birthday`                    |
| national_id                   | String |    ✅    |  free   | `national_id`                 |
| passport_number               | String |    ✅    |  free   | `passport_number`             |
| phone_number                  | String |    ✅    |  free   | `phone_number`                |
| company_name                  | String |    ✅    |  free   | `name`                        |
| country                       | String |    ✅    |  free   | `country`                     |

</br>

### Response
---
Returns the status code 201 and a JSON object with the following information.

| Property |  Type  | Description |
| :------- | :----: | ----------- |
| 201      | String | status code |
| adm_id   | String | `admin_id`  |


```json
{
  "adm_id": "admin_id"
}
```
</br>

### Error response
---

| Property |  Type      | Description    |
| :------- | :--------: | ------------   |
| 400      | StatusCode | `Bad request`  |
| error    | Error      | `Error message`|

```json
{
  "message": "Error message"
}
```

</br>
</br>

## >> Form upload image

### Request header
---
| Request header | Description                      |
| :------------- | :------------------------------- |
| Content-Type   | multipart/form-data              |

</br>

### Request body
---
| Parameters                    |  Type     | Required | Package | Description                   |
| :---------------------------- | :-------: | :------: | :-----: | ----------------------------- |
| pictureProfile                | File      |    ✅    |  free   | `profile-picture`             |
| picturePassport               | File      |    ✅    |  free   | `passport-picture`            |
| pictureNation                 | File      |    ✅    |  free   | `nation-picture`              |

</br>

### Response
---

Returns the status code 200 and JSON object with the following information.

| Property |  Type  |             Description              |
| :------- | :----: | ------------------------------------ |
| message  | String | `Successfully message`               |

</br>

### Error response

| Property |  Type      | Description    |
| :------- | :--------: | ------------   |
| 400      | StatusCode | `Bad request`  |
| error    | Error      | `Error message`|

```json
{
  "error": "Error message"
}
```