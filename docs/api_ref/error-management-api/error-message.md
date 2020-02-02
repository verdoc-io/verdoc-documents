---
id: error-management-api
title: Error response
sidebar_label: Error message api
---


<br/>

# Errors

---
</br>
## Status codes
​
The following HTTP status codes are returned after an API call.
​
| Code     | Status                |     error_message     |
| :------- | :-------------------: |---------------------- |
| 200      | OK                    | Request successful|
| 400      |  Bad requested        | Problem with the request. Check the request parameters and JSON format. |
| 401      |  Unauthorized         | Check that the authorization header is correct. |
| 403      |  Forbidden            | Not authorized to use the API. Confirm that your account or plan is authorized to use the API. |
| 429      |  Too Many Requests    | Make sure that you are within the rate limits for requests. |
| 500	   | Internal Server Error | Temporary error on the API server.|
​
​
```js
{
  "message": "{error_message}"
}
```
