---
id: about-access-token
title: About access token
sidebar_label: About access token
---

The `Access Token API` lets you manage and keep your users’ access tokens valid. After a user logs in to your app and you have retrieved a token, you can verify and refresh the token.

Once a user has been authenticated, an access token is returned which can be used to call the `Access Token API`. Access tokens are valid for 30 days after being issued. The time of expiry in seconds is returned in the `expires_in` field in the response with the access token.

### Refresh tokens
When an access token expires, you can use a refresh token to get a new access token. 

>**Note**: that refresh tokens are valid up until 10 days after the access token expires. If the refresh token expires, you must prompt the user to log in again to generate a new access token.





