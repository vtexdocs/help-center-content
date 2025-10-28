---
title: 'How to remove the error message "Request headers must only contain ASCII characters"'
id: 19psKZvLXrBqqK1bPaTIHG
status: PUBLISHED
createdAt: 2024-07-25T16:54:41.663Z
updatedAt: 2025-08-14T22:48:13.680Z
publishedAt: 2025-08-14T22:48:13.680Z
firstPublishedAt: 2024-07-25T21:21:03.197Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: removing-error-message-request-headers-must-only-contain-ascii
legacySlug: removing-error-message-request-headers-must-only-contain-ascii
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Request headers
  - UTM
  - Custom javascript
---

The message "__Request headers must contain only ASCII characters__" can be displayed in the user's browser when they navigate the store and try to access a new page or perform an action on the site, such as adding items to the shopping cart.

This scenario occurs if the requested page or feature contains a cookie with special characters (non-ASCII).

![ascii_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/removing-error-message-request-headers-must-only-contain-ascii_1.png)

Per [IETF](https://www.ietf.org/) (Internet Engineering Task Force) standards, the institution that documents the standards used on the internet, cookies should not contain special characters (non-ASCII). For more information on the characters accepted in cookies and headers, see [IETF - Request for Comments 7230 - Section 3.2.6 - Field Value Components](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6).

## Solutions

To remove the error message and allow the page or feature to be accessed again, you need to do the following:

- [Identify cookies with special characters](#identifying-cookies-with-special-characters)
- [Disable cookies with special characters](#disabling-cookies-with-special-characters)
- [Creating a script to remove cookies](#creating-a-script-to-remove-cookies)

### Identifying cookies with special characters

On the page where the message "__Request headers must contain only ASCII characters__" is displayed, follow the steps below to identify which cookie contains special characters:

1. Access [DevTools](/en/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By) in your browser by pressing **F12** or by right-clicking and choosing the **Inspect** option.

  2. In the top bar of the screen, go to the **Network** tab and sort the requests by clicking **Status**. The **400** information in the status indicates that a request has not been processed correctly, and there may be incorrect cookies among the possible errors. 

![ascii 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/removing-error-message-request-headers-must-only-contain-ascii_2.png)

3. Click a request and then the **Preview** tab to identify whether the error found refers to the message "**Request headers must contain only ASCII characters**".

![ascii 3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/removing-error-message-request-headers-must-only-contain-ascii_3.png)

4. Click the **Headers** tab and copy the cookie details.

![ascii 4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/removing-error-message-request-headers-must-only-contain-ascii_4.png) 

5. Go to [online ASCII character validator](https://pages.cs.wisc.edu/~markm/ascii.html) and enter the cookie information. If one or more special characters are identified, the types and positions will be displayed at the bottom of the character validator.    

![ascii 5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/removing-error-message-request-headers-must-only-contain-ascii_5.png)  

6. Repeat steps 3 to 5 with all the requests that have errors to identify which of them contain cookies with special characters.     

### Disabling cookies with special characters

Once cookies containing special characters have been identified, their origin must be verified so that they can be removed from the page. The most common sources of incorrect cookies are:

- [UTMs](/en/tutorial/o-que-sao-as-utms-internas-utmi-cp-utmi-pc-e-utmi-p--5Pvo8ufYWs00AUeCCEY68a) created in your store or in advertising campaigns on Google, Meta, or others with special characters. Example of UTM used on a holiday date in Spanish: `www.site.com?utm_source=mothers-day`.
- Custom Javascript, where frontend implementations are used to store data or other types of functions, may contain special characters.
- Scripts from partner clients that create cookies with special characters.

Once you have located the source of the cookie, carry out the necessary procedures to remove it from the page or ask the partner client to stop sending the cookie to your store.

### Creating a script to remove cookies

When you remove the cookie with special characters, the page or feature should go back to normal, and the message "__Request headers must contain only ASCII characters__" will no longer be displayed. However, this will only work for new users, i.e., customers who have not accessed the page when the incorrect cookie was enabled.

Users who visited the page or feature while the incorrect cookie was enabled will continue to see the error message "Request headers must contain only ASCII characters" in their browser. This is because the cookie has been stored in the user's browser cache.

To solve this problem and allow all users to have the correct access to the store, you must create a script on the page to be executed in the user's browser (client-side) to expire the incorrect cookie.

The script must set the cookie to expire on an old date (a date before the script was created). See the example below:

`document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"`  

If you want, you can also include the following functions in the script:
- Intercept cookie values upon page request
- Validate ASCII characters in cookies
- Automatically expire cookies containing special characters
- Trigger page reload using the function `window.location.reload()`  

> ⚠️ Deleting cookies via script is not a permanent solution. As described in the **Disabling cookies with special characters** section, you must identify the source and stop sending cookies with special characters.
