---
id: crud_transaction
title: CRUD transaction.
sidebar_label: CRUD transaction.
---

  CRUD transaction.

**HTTP request**

 ```bash 
[POST | GET | DELETE] https://api.verdoc.io/v1/transaction
 ```

| METHOD | ENDPOINT              |   USAGE   | RETURNS                                                                   |
| :----- | :-------------------- | :-------: | :------------------------------------------------------------------------ |
| POST   | ```/v1/transaction``` | something | transaction_id                                                            |
| GET    | ```/v1/transaction``` | something | status, name, mobile_number, email, payload, payload_type, docutment_file |
| DELETE | ```/v1/transaction``` | something | status code                                                               |





