---
id: user-register
title: User registration
sidebar_label: User registration
---
</br>

>**Important** : 
>Administrator role is required to use this API service

</br>

<span class="badges post">post</span>

To register the user,`POST` 
to the following endpoint with the information on the registration form that we provide

</br> 
</br>

## HTTP request
---

```bash
POST https://api.verdoc.io/user-registration-form/{{name}}/{{phone_number}}/{{pin_code}}
```

</br>


## > Form submit 


</br>

### Request parameters
---
| Parameters                    |  Type  | Required | Package | Description                   |
| :---------------------------- | :----: | :------: | :-----: | ----------------------------- |
| name                          | String |    ✅    |  free   | `name`                        |
| phone_number                  | String |    ✅    |  free   | `phone_number`                |
| pin_code                      | String |    ✅    |  free   | `pin_code`                    |

</br>

### Response
---
Returns the status code 201 and OK message

| Property |  Type       | Description |
| :------- | :---------: | ----------- |
| 201      | Status code | status code |
| message  | String      | `OK-message`|

```json
{
  "message": "OK-message"
}
```
</br>

### Error response
---

| Property |    Type    | Description    |
| :------- | :--------: | ------------   |
| 400      | StatusCode | `Bad request`  |
| error    | Error      | `Error message`|

```json
{
  "error": "Error message"
}
```