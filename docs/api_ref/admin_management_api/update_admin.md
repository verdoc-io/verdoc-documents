---
id: update-admin-information
title: Update admin information
sidebar_label: Update admin information
---
</br>

<span class="badges put">put</span>
---

To update admin information

***Endpoint:***

```bash
Method: PUT
URL: https://api.verdoc.io/admin
```



***Headers:***
​
| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearerToken {{access_token}} | Valid `access_token` |
| ID  | {{id}} | ID that you want to refer to |


### ***Success Responses:***
​
Status code: `200` HTTP status code and a JSON object with the following information:
​
| Property       |  Type  | Description              |
| :------------- | :----: | ------------------------ |
| id             | Long   | admin's `id`              |
| company_id     | String | admin's `company_id`      |
| name           | String | admin's `name`            |
| email          | String | admin's `email`           |
| email_ver      | Boolean| email confirmation status |
| gender         | String | admin's `gender`          |
| phone_number   | String | admin's `phone_number`    |
| birthday       | Int64  | admin's `birthday`        |
| national_id    | String | admin's `national_id`     |
| passport_number   | String | admin's `passport_number` |
| company_name   | String | admin's `company_name`    |
|  country       | String | country                   |
| passport_img   | String | url of the passport image |
| profile_img    | String | url of the profile image  |
| national_id_img| String | url of the national ID image |
| create_at      | Int64  | created time              |
| update_at      | Int64  | updated time              |
| delete_at      | Int64  | delete time               |
| status         | Boolean| admin's `status`          |

>**Note** : Updating data will update time into the `update_at`


```json
{
    "id": "XoPsG6dZAzwhSLvdK798ggztV4",
    "company_id": "SkcsG6dSig8fdLvdKSlfoz1U3",
    "name": "existing",
    "email": "contact@existing.co",
    "email_ver": true,
    "gender":"male",
    "phone_number":"02-664-3364",
    "birthday": 1578045613,
    "national_id":"1234567890123456",
    "passport_number":"1234567890123456",
    "company_name":"The existing company",
    "country":"Thailand",
    "national_id_img":"https://exmaple/national-id.jpeg",
    "passport_img":"https://exmaple/passport.jpeg",
    "profile_img":"https://exmaple/profile.jpeg",
    "create_at": 1572045613,
    "update_at": 1578011613,
    "delete_at": 0,
    "status": true
}
```

### ***Error Responses:***
​
Status code: `400` HTTP status code and a JSON object with the following information:
​
| Status Code |     error_message   |
| :------- | :--------- | 
| 400    |  The JSON in the request body could not be parsed. The specific line and column are displayed. |
| 400    |  Appears when calling an API that you do not have permission to use. |
​
​
```json
{
  "message": "{error_message}"
}
```

<!-- <br/>
## Example request

---

```bash
curl https://verdoc.io/
``` -->
