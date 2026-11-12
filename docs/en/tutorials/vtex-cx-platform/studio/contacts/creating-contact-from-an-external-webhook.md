---
title: "Creating contact from an external webhook"
id: 2uiciJ2WsW6G9tfSDpvE12
status: PUBLISHED
createdAt: 2025-09-12T16:55:38.856Z
updatedAt: 2025-10-03T14:21:49.419Z
publishedAt: 2025-10-03T14:21:49.419Z
firstPublishedAt: 2025-10-03T14:21:49.419Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: creating-contact-from-an-external-webhook
legacySlug: creating-contact-from-an-external-webhook
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

In this article we will show you in a simple way how to bring contacts from your external platform to our flow platform.

The flow platform has dozens of [APIs](https://dash.weni.ai/api/flows/api/v2/explorer) that can be consumed for several other features, in this article we will focus strictly on contact integration to automate your communication.

Contacts are the records of each person within a given communication channel, so in it can be saved default fields such as Name, Email, Phone and WhatsApp, as well as several custom fields can be created and used freely within the communication.

Webhooks are typically triggered from a particular event within the partner software, such as:

Contacts are the records of each person within a given communication channel, so in it can be saved default fields such as Name, Email, Phone and WhatsApp, as well as several custom fields can be created and used freely within the communication.

Webhooks are typically triggered from a particular event within the partner software, such as:

- When you create, update, and delete a Customer record;- By changing the status of a Lead record on a CRM platform;When such events are called, requests must be fired for the flow platform to update contact records, thus allowing all communication automation to be modified in real time.

## Adding contacts

You can add a new contact by sending a POST request to that URL with the following data:

- **Name** - the full name of the contact (string, optional)
- **Language** - the preferred contact language (3-digit ISO Code, optional)
- **Urns** - a list of URNs that you want to associate with this contact (array of up to 100 strings, optional). Within the URNs is used a prefix with the channel in which communication with this contact can be initiated, here are some examples below:- tel: Phone for SMS and Calls shipments;- whatsapp: WhatsApp phone for communication by this channel, see that in this case should be used 8 or 9 digits for the phone, depending on how this number is on WhatsApp;- mailto: E-mail is not a communication channel for receiving, only for sending;
- **Ext** - External identifier that can be used for the external channel or to facilitate the search for a contact through any identifier.
- **Groups** - a list of UUIDs of groups that this contact is part of, groups are explained below (array of up to 100 strings, optional)
- **Fields** - the contact fields that you want to configure or update for this contact, the fields need to be previously created (dictionary with up to 100 items, optional)Example:

```
POST /api/v2/contacts.json
​{​
​""name""​:​ ​""John Cordeiro""​,​
​""language""​:​ ​""por""​,​
​""urns""​:​ ​[
""tel:+558299331122""​,​
""whatsapp:​558299331122""​,
""mailto:​john.dalton@ilhasoft.com.br​"",
""ext:123456""
],​
​""groups""​:​ ​[​""6685e933-26e1-4363-a468-8f7268ab63a9""​],​
​""fields""​:​ ​{​
​""nickname""​:​ ​""Macklemore""​,​
​""side_kick""​:​ ​""Ryan Lewis""​
​}
}
```

### Updating contacts

A **POST** request can also be used to update an existing contact if you specify by URL both your UUID and one of its URNs. Only those fields included in the body will be updated in the contact, the remaining ones will remain intact.

If you are passing an URN in the URL, then do not include it in the body. Also note that we will create a new contact if there is none with this URN, you will receive a 201 response if this happens.

Example:

```
​POST ​/​api​/​v2​/​contacts​.​json​?​uuid​=​09d23a05​-​47fe​-​11e4​-​bfe9​-​b8f6b119e9ab
​{​
​""name""​:​ ​""John Cordeiro""​,​
​""language""​:​ ​""por""​,​
​""urns""​:​ ​[​""tel:+558299331122""​,​ ​""whatsapp:558299331122""​],​
​""groups""​:​ ​[
{​
""name""​:​ ​""Devs""​,​
​ ""uuid""​:​ ​""6685e933-26e1-4363-a468-8f7268ab63a9""​
}
],​
​""fields""​:​ ​{}​
}​

POST ​/​api​/​v2​/​contacts​.​json​?​urn​=​tel​%​3A​%​2B250783835665​
{​
​""fields""​:​ ​{​""nickname""​:​ ​""Ben""​}​
}
```

### Delete contacts

A DELETE request can also be used to delete an existing contact if you specify in the URL both your UUID and one of your URNs.

Example:

```
DELETE /api/v2/contacts.json?uuid=27fb583b-3087-4778-a2b3-8af489bf4a93

DELETE /api/v2/contacts.json?urn=tel%3A%2B250783835665
```

You will receive a 204 response if your contact is deleted, or a 404 response if no contact is found with the passed parameters.

### Adding custom fields

A POST request can be used to create a new contact field. You don't need to specify a key, we'll generate one for you.

- **abel -** The display label (string)
- **value_type -** one of the accepted data types (string)
- **text:** Text-type fields
- **datetime:** Fields with date and time information (format example: 2020-01-31T09:27:39.071299-03:00)
- **numeric:** Numeric fieldsExample:

```
​POST ​/​api​/​v2​/​fields​.​json
​{​
​""label""​:​ ​""Nick name""​,​
​""value_type""​:​ ​""text""
}
```

You will receive an object (with the new field key) if the response is successful:

```
​{​
​""key""​:​ ​""nick_name""​,​
​""label""​:​ ​""Nick name""​,​
​""value_type""​:​ ​""text""
}
```

### Adding a contact group

A **POST** request can be used to create a new contact group. Do not specify a UUID, we will generate one for you.

name - the name of the group (string)

Example:

```
POST /api/v2/groups.json
​{​
​""name""​:​ ​""""​
}
```

You will receive a group object if the response is successful:

```
{​
​""uuid""​:​ ​""5f05311e-8f81-4a67-a5b5-1501b6d6496a""​,​
​""name""​:​ ​""Reporters""​,​
​""count""​:​ ​0​,​
​""query""​:​ ​null
}
```

### Updating a group

A **POST** request can be used to update an existing contact group if you specify your UUID in the URL.

Example:

```
​POST ​/​api​/​v2​/​groups​.​json​?​uuid​=​5f05311e-8f81​-​4a67​-​a5b5​-​1501b6d6496a​
{​
​""name""​:​ ​""Checked""​
}
```

You will receive an updated group object if the response is successful:

```
​{​
​""uuid""​:​ ​""5f05311e-8f81-4a67-a5b5-1501b6d6496a""​,​
​""name""​:​ ​""Checked""​,​
​""count""​:​ ​0​,​
​""query""​:​ ​null
}
```

### Deleting a group

A DELETE request can be used to delete a contact group if you specify your UUID in the URL.

Notes: - You can't delete groups that are associated with campaigns, streams, or triggers. You must first delete related objects through the web interface.

Example:

```
​DELETE ​/​api​/​v2​/​groups​.​json​?​uuid​=​5f05311e-8f81​-​4a67​-​a5b5​-​1501b6d6496a
```

You will receive a 204 response if the group is deleted, or a 404 response if no group is found.

### Conclusion

In the end, your platform will be able to synchronize data in real time with our flow platform, thus allowing the user to use the power of automations and Artificial Intelligence to communicate more closely and continuously with their audience.
