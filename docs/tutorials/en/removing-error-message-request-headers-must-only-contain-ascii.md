---
title: 'How to remove the error message "Request headers must only contain ASCII characters"'
id: 19psKZvLXrBqqK1bPaTIHG
status: PUBLISHED
createdAt: 2024-07-25T16:54:41.663Z
updatedAt: 2024-07-25T21:25:10.665Z
publishedAt: 2024-07-25T21:25:10.665Z
firstPublishedAt: 2024-07-25T21:21:03.197Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slug: removing-error-message-request-headers-must-only-contain-ascii
locale: en
legacySlug: removing-error-message-request-headers-must-only-contain-ascii
subcategory: 2Q0IQjRcOqSgJTh6wRHVMB
---

__Tags/Palavras-chave__: *request headers, ascii, special characters, devtools, headers, utm, custom javascript, script.*

The message "__Request headers must contain only ASCII characters__" can be displayed in the user's browser when they navigate the store and try to access a new page or perform an action on the site, such as adding items to the shopping cart.

This scenario occurs if the requested page or feature contains a cookie with special characters (non-ASCII).

![ascii_1](https://images.ctfassets.net/alneenqid6w5/geQO7G0cIDk7FmSjC9ZmQ/d2137c6c3021d640daf3631e02f941a8/ascii_1.png)

Per [IETF](https://www.ietf.org/) (Internet Engineering Task Force) standards, the institution that documents the standards used on the internet, cookies should not contain special characters (non-ASCII). For more information on the characters accepted in cookies and headers, see [IETF - Request for Comments 7230 - Section 3.2.6 - Field Value Components](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6).

## Solutions

To remove the error message and allow the page or feature to be accessed again, you need to do the following:

- [Identify cookies with special characters](#identifying-cookies-with-special-characters)
- [Disable cookies with special characters](#disabling-cookies-with-special-characters)
- [Creating a script to remove cookies](#creating-a-script-to-remove-cookies)

### Identifying cookies with special characters

On the page where the message "__Request headers must contain only ASCII characters__" is displayed, follow the steps below to identify which cookie contains special characters:

<blockquote><ui>1. Access <a href="https://help.vtex.com/pt/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By">DevTools</a> in your browser by pressing <b>F12</b> or by right-clicking and choosing the <b>Inspect</b> option.</ui>

  <blockquote><ui>2. In the top bar of the screen, go to the <b>Network</b> tab and sort the requests by clicking <b>Status</b>. The <b>400</b> information in the status indicates that a request has not been processed correctly, and there may be incorrect cookies among the possible errors.</ui>  

![ascii 2](https://images.ctfassets.net/alneenqid6w5/KAwQG2JiXozFU5Pjgjv3Z/eb74d2c115b78d65dd60b70da67bfd5b/ascii_2.png)

<blockquote><ui>3. Click a request and then the <b>Preview</b> tab to identify whether the error found refers to the message "<b>Request headers must contain only ASCII characters</b>".</ui>

![ascii 3](https://images.ctfassets.net/alneenqid6w5/16XPfE6SIwVO8SkTxl9yuR/2151b1260e9f10a1327b5b6f4441ef23/ascii_3.png)

<blockquote><ui>4. Click the <b>Headers</b> tab and copy the cookie details.</ui>

![ascii 4](https://images.ctfassets.net/alneenqid6w5/1CwUNkSO895RfPCTTaO29l/305a23cbb5b90bfde1ca139c83978a92/ascii_4.png) 

<blockquote><ui>5. Go to <a href="https://pages.cs.wisc.edu/~markm/ascii.html">online ASCII character validator</a> and enter the cookie information. If one or more special characters are identified, the types and positions will be displayed at the bottom of the character validator.</ui>     

![ascii 5](https://images.ctfassets.net/alneenqid6w5/2xwztAmvtrxpJQeusgwlpH/917872a195c9cce233a183a4f44b4677/ascii_5.png)  

<blockquote><ui>6. Repeat steps 3 to 5 with all the requests that have errors to identify which of them contain cookies with special characters.</ui>      

### Disabling cookies with special characters

Once cookies containing special characters have been identified, their origin must be verified so that they can be removed from the page. The most common sources of incorrect cookies are:

- [UTMs](https://help.vtex.com/pt/tutorial/o-que-sao-as-utms-internas-utmi-cp-utmi-pc-e-utmi-p--5Pvo8ufYWs00AUeCCEY68a) created in your store or in advertising campaigns on Google, Meta, or others with special characters. Example of UTM used on a holiday date in Spanish: `www.site.com?utm_source=mothers-day`.
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

>⚠️ Deleting cookies via script is not a permanent solution. As described in the **Disabling cookies with special characters** section, you must identify the source and stop sending cookies with special characters.
