---
title: 'Introduction to VTEX APIs'
id: 3SjAqQ0BeUqu2ge8AiIkmW
status: ARCHIVED
createdAt: 2017-06-08T20:46:13.393Z
updatedAt: 2020-04-08T16:15:23.801Z
publishedAt: 
firstPublishedAt: 2017-06-08T21:03:38.350Z
contentType: tutorial
productTeam: Others
author: authors_24
slugEN: introduction-to-vtex-apis
locale: en
legacySlug: introduction-to-vtex-apis
subcategoryId: 1vwB9FtTSQmcSewQw02QoW
---

An API (Application Programming Interface) is a web-based set of programming routines and standards that enable access to software applications or platforms.
 
VTEX makes available a series of open APIs so that retailers and partners can make highly customizable integrations with our systems. 

If you are not familiar with programming, but intend to deal with this type of integration, you must know the basics of API data exchange.
 
Some programs help us to deal with APIs and build requests quickly.  One of the most known is **Postman**, which we use here as a reference.

However, a public API not requiring authentication can be executed even in your browser, as if it were a common URL.
 
### The concept of API
 
When a website or application needs to communicate with other systems, it usually does it through an API.
 
At VTEX, for example, when your store enters a new shipping amount for a carrier, or when a partner’s system queries the number of products in your inventory, this communication is carried out through an API specific for each of these purposes.
 
For system 1 to communicate with system 2, it must have acess to a code that is made available by system 2. 

Addtionally, if the system intends to use a private API, it will need an **AppKey** and an **AppToken** (which are similar to the password and ID). In the case of public APIs, this is not required. 
 
### Sending requests
 
 **Request** means the requests made by one system to another (“delete this”, “query that” etc.). To know how your store is interacting through the APIs, and the results that are being returned, it is important to know how to simulate a request. This is where  [Postman](https://www.getpostman.com/docs/requests) comes in.
 
The four principal parts of an HTTP request are: 
- URL.
- Method.
- Headers.
- Body.

Let us learn about each one of them. 


****
#### URL

This contains the route that your request must follow to get, publish or delete the desired information.

For example, the URL used for getting information about a given SKU in a VTEX store is: `http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{{skuId}}`

It must contain:
- The store name: `{{AccountName}}`.
- The environment, that is, vtexcommercestable or vtexcommercebeta: `{{environment}}`.
- The SKU ID: `{{skuId}}`.
 
In Postman, the URL must be included in the field informed below:

![APIs1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Projects%20&%20Integrations/Integration%20methods/introduction-to-vtex-apis_1.png)


****

#### Method

In order to interact, the APIs use certain methods that, in the HTTP protocol, work by means of **verbos**. Each one of them determines one type of action. The most common are:
- __GET__: reads or retrieves information.
- __POST__: creates a new resource.
- __PUT__: updates a resource.
- __DELETE__: removes a resource.
 
In the case of the URL above, the verb used is “GET”, since our intention is to read SKU information.
 
But you do not need to come to this conclusion alone.  When making an API available, VTEX informs the method that must be used with it. 
 
In Postman, the method is selected on the left of the URL field.

![APIs2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Projects%20&%20Integrations/Integration%20methods/introduction-to-vtex-apis_2.png)

****

#### Headers
 
Since your store’s information is private, all VTEX's APIs are also private. In order to have access to them and simulate a request, you must have the AppKey and the AppToken.
 
When a new user is created for your store, a specific profile of access to the module is attributed to this user [License Manager](/en/tutorial/overview-of-the-license-manager/). Each of these profiles has access to specific APIs. For example, although a user with a telesales profile has access to the OMS module of your admin, he/she will not be able to access information on your store through the API.
 
In Postman, AppKey and AppToken must be entered in the **Headers** tab. In the first header, enter `X-VTEX-API-AppKey` and then AppKey. In the second line, enter `X-VTEX-API-AppToken` and then your AppToken. To know how to generate your AppKey and your AppToken, read the article [Creating appKeys and appTokens to authenticate integrations](/en/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations).

![APIs3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Projects%20&%20Integrations/Integration%20methods/introduction-to-vtex-apis_3.png)

****

#### Body
 
The Body field will show the body of the response to the request. 
 
In the ‘GET’ example mentioned above, we wanted to get information about a given SKU. This information will probably appear in a JSON with several data, such as SKU name, measures, image etc. These data will appear in the Body of the response.
 
Additionally, some requests (specifically those in which an information is being sent, instead of requested) require the use of a code in the body of the request. 

In this case, you will use the Body not only to read the response, but also as a field where you will enter the data required for the requet. So, this is the Body of the Request.

### Where to find the VTEX APIs
 
VTEX’s APIs are available at our Help Center, in section [Developer Docs](/en/developer-docs).
 
They are divided by module or functionality.  Click on one of them to find the corresponding APIs, as well as indications about their relevant method, URL and Headers. Some APIs also include the code that must be informed in the Body.
 
![APIs4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Projects%20&%20Integrations/Integration%20methods/introduction-to-vtex-apis_4.png)
 
On the right side of these indications, Postman displays one Sample Request for each API. In accordance with the wording selected on the check box placed above it, the Sample Request shows the application of the request in the code.

![sample request](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Projects%20&%20Integrations/Integration%20methods/introduction-to-vtex-apis_5.png)
 
Some APIs also have a Sample Response, which is an example of a response to that request.
 
>⚠️ All content that appears between braces (**{{conteúdo}}**) is a variable, and you must replace it by the correct data before making the request. This is the case, for example, of your store's name, the environment wanted, and the values of AppKey and AppToken.

Check how to create your appKey and appToken in article [Creating appKeys and appTokens to authenticate integrations](/en/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations).
