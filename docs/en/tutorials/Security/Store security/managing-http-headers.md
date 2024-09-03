---
title: 'Managing HTTP headers'
id: 2cCTvwQR3Z4ENVKMJU6NK3
status: PUBLISHED
createdAt: 2024-06-07T17:58:18.041Z
updatedAt: 2024-06-07T18:40:52.927Z
publishedAt: 2024-06-07T18:40:52.927Z
firstPublishedAt: 2024-06-07T18:40:52.927Z
contentType: tutorial
productTeam: Reliability
author: YRJ73j8mt38D5TUleocQB
slug: managing-http-headers
locale: en
legacySlug: managing-http-headers
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

The HTTP (Hypertext Transfer Protocol) is a fundamental communication protocol used to transfer data on the World Wide Web. It operates on the client-server model, where clients such as web browsers request resources like web pages from web servers. These requests are exchanged in message format, following a set of rules and standards defined by the protocol.

Headers play a crucial role in HTTP communication, providing additional information about the ongoing transaction. There are two main types of headers: 

- __Request Headers:__ Sent by the client to the server. They contain information about the request made, such as the type of HTTP method used, the type of accepted content, cookies, among others.
- __Response Headers:__ Sent by the server to the client. They provide information about the sent response, such as the response status, type of returned content, cookies, among others.

>ℹ️ For more information, refer to the [MDN’s HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) guide and related documentation.

In this guide, you will learn how to manage Security Response Headers in your Store Framework store.
## Security Response Headers

In Store Framework stores, if you need to add or change the value of a Security Response Header, open a ticket to [VTEX Support](https://help.vtex.com/en/support).

Below, check the headers that accept editing:

- [**X-Frame-Options**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options): Allows the control of how websites can be incorporated into other ones through the use of frames. This header is a security measure to protect users against [click-jacking](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#click-jacking) attacks, which occur when an attacker tricks users into clicking on something on a web page without their consent.
- [**X-Content-Type-Options**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options): Protects against [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vulnerabilities, which can occur when a website allows users to upload content to a site.
- [**Content-Security-Policy (CSP)**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy): Allows the control the resources the user agent can load in a given page, helping against [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks.
- [**Strict-Transport-Security (HSTS)**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security): Informs browsers that the site should only be accessed using HTTPS.
- [**X-XSS-Protection**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection): Instructs browsers on how to handle cross-site scripting (XSS) attacks, activating the integrated filter to block malicious scripts from executing in the user’s browser.
- [**Referrer-Policy**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy): Determines which origin page information is shared with the destination page in HTTP requests. It is essential to protect user privacy and website security.

## Custom headers

It is possible to configure a custom header, which is a value that is not standardized and is specific to the store's particular requirements or functionalities.

>⚠️ Each account is limited to adding a single custom header.

If you need to configure a custom header, open a ticket to the VTEX Support, providing the keys and values to be set, as you are entirely responsible for this information. To guide you, refer to the MDN’s documentation about [Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers). 

Below, see an example of a custom header:

```json
"customHeader": {
   "key": "Strict-Transport-Security",
   "value": "max-age=31536000; includeSubdomains; preload"
 }
```

The value `max-age=31536000; includeSubdomains` in the context of the Strict-Transport-Security (HSTS) header represents the maximum duration, in seconds, that the HSTS policy should be enforced by the browser for a specified domain and its subdomains.

The `preload` directive indicates that the domain should be included in the HSTS preload list, which ensures that compliant browsers will only connect via HTTPS, even for the initial request.

