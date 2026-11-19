---
title: 'Managing HTTP headers'
id: 2cCTvwQR3Z4ENVKMJU6NK3
status: PUBLISHED
createdAt: 2024-06-07T17:58:18.041Z
updatedAt: 2026-10-21T17:00:00.000Z
publishedAt: 2024-06-07T18:40:52.927Z
firstPublishedAt: 2024-06-07T18:40:52.927Z
contentType: tutorial
productTeam: Reliability
author: YRJ73j8mt38D5TUleocQB
slugEN: managing-http-headers
legacySlug: managing-http-headers
locale: en
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

The Hypertext Transfer Protocol (HTTP) is a fundamental communication protocol used to transfer data on the World Wide Web (WWW). It operates on the client-server model, where clients such as web browsers request resources like web pages from web servers. These requests are exchanged in message format, following a set of rules and standards defined by the protocol.

Headers play a crucial role in HTTP communication, providing additional information about the ongoing transaction. There are two main types of headers:

- **Request headers:** Sent by the client to the server. They contain information about the request, such as the HTTP method used, the accepted content types, cookies, and more.
- **Response headers:** Sent by the server to the client. They provide information about the sent response, such as the response status, type of returned content, cookies, among others.

> ℹ️ For more information, see the MDN [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) guide and related documentation.

This guide explains how to manage security response headers in your Store Framework store.

## Security response headers

In Store Framework stores, you can add or change the value of a security response header directly in the VTEX Admin. The following headers can be edited:

- [**X-Frame-Options**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options): Allows you to control how websites can be embedded in other websites using frames. This header is a security measure to protect users against [clickjacking](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#click-jacking) attacks, which occur when an attacker tricks users into clicking something on a web page without realizing it.
- [**X-Content-Type-Options**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options): Protects against [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vulnerabilities, which can occur when a website allows users to upload content.
- [**Content-Security-Policy (CSP)**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy): Allows you to control the resources the user agent can load on a given page, preventing [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks.
- [**Strict-Transport-Security (HSTS)**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security): Informs browsers that the site should only be accessed using HTTPS.
- [**X-XSS-Protection**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection): Instructs browsers on how to handle cross-site scripting (XSS) attacks, activating the built-in filter to block malicious scripts from running in the user's browser.
- [**Referrer-Policy**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy): Determines which information about the origin page is shared with the destination page in HTTP requests. This is essential for protecting user privacy and website security.

## Custom headers

You can configure custom headers, which are non-standard values specific to the store requirements or features. You can add more than one custom header to your account.

> ℹ️ The information in custom headers is your responsibility. Use the MDN documentation on [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) as a guide.

To configure a custom header, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Store**.
2. Click the **Advanced** tab.
3. Scroll down to the **Custom Headers** section.
4. Click `Add`.
5. Complete the **Header ID**, **Header key**, and **Header value** fields, following HTTP standards.
6. Click `Apply`.

> ℹ️ The update can take up to one day to reflect in the store due to caching.

For more details, see the developer guide [Adding custom headers to your Store Framework store](https://developers.vtex.com/docs/guides/vtex-io-documentation-adding-custom-headers-to-your-store-framework-store).

Here's an example of a custom header:

```json
"customHeader": {
   "key": "Strict-Transport-Security",
   "value": "max-age=31536000; includeSubdomains; preload"
 }
```

The value `max-age=31536000; includeSubdomains` in the context of the Strict-Transport-Security (HSTS) header represents the maximum duration, in seconds, that the browser should apply the HSTS policy to a specific domain and its subdomains.

The `preload` directive indicates that the domain should be included in the HSTS preload list, ensuring that compliant browsers connect only via HTTPS, even for the initial request.
