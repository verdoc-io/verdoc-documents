---
id: admin-generate-new-API-Key
title: API Key Generator
sidebar_label: API Key Generator
---
</br>

<span class="badges post">post</span>
---
 To generate new API Key



***Endpoint:***

```bash
Method: POST
URL: https://api.verdoc.io/apikey
```


***Headers:***
​
| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearerToken {{access_token}} | Valid `access_token` |

***Body:***
​
| Parameters     |  Type  | Required | Description              |
| :------------- | :----: |:----: | :------------------------ |
| email          | String | ✅    |The email must be a string (`string`)            |
| phone          | String | ✅    | password           |

### ***Success Responses:***
​
Status code: `200` HTTP status code and a JSON object with the following information:
​
| Property       |  Type  | Description              |
| :------------- | :----: | ------------------------ |
| id             | String | API Key's `id`           |
| key            | Long   | API Key                  |
| level          | String | `level` of this API Key  |
| status         | Boolean | Status of the API Key   |
| create_at      | Int64  | 
| site_admin     | Bool   | user's `permission`      |

```json
{
  "id": "id",
  "comp_id": "company_id",
  "key": "api key",
  "level": "your level",
  "status": "true or false",
  "create_at": "unix time",
  "update_at": "unix time",
  "delete_at":"unix time"
}
```

### ***Error Responses:***
​
Status code: `400` HTTP status code and a JSON object with the following information:
​
| Status Code |     error_message   |
| :-------    | :---------          | 
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
