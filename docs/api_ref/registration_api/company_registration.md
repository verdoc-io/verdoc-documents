---
id: company_register
title: Company registration
sidebar_label: Company registration
---

<span class="badges post">post</span>
<br/>
<br/>

To register the company, make an HTTP `POST`
to the following endpoint with the information on the registration form that we provide

</br> 

## HTTP request
---

```bash
POST https://verdoc-register-page.firebaseapp.com/
```

</br>

>**Note**: There are two parts you need to do, The first is `Form Submit` and the second is `Form Upload Image`.

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
| company_registration_number   | String |    ✅    |  free   | `company_registration_number` |
| company_registration_date     | int64  |    ✅    |  free   | `company_registration_date`   |
| email                         | String |    ✅    |  free   | `email`                       |
| password                      | String |    ✅    |  free   | `password`                    |
| phone_number                  | String |    ✅    |  free   | `phone_number`                |
| country                       | String |    ✅    |  free   | `country`                     |

</br>

### Response
---
Returns the status code 201 and a JSON object with the following information.

| Property |  Type  | Description |
| :------- | :----: | ----------- |
| comp_id  | String | `company_id`   |


```json
{
  "comp_id": "company_id"
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
| company-registration-img      | form-data |    ✅    |  free   | `company-registration-img`    |

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