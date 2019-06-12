---
id: crud_signature
title: CRUD signature.
sidebar_label: CRUD signature
---

CRUD signature.

**HTTP request**

```bash
[POST | GET | DELETE] https://api.verdoc.io/v1/signature
```

| METHOD | ENDPOINT        |   USAGE   | RETURNS                               |
| :----- | :-------------- | :-------: | :------------------------------------ |
| POST   | `/v1/signature` | something | signature_hash                        |
| GET    | `/v1/signature` | something | name_signature, image_signature (url) |
| DELETE | `/v1/signature` | something | status code                           |
