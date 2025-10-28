---
title: 'Personal Shopper Overview'
id: 12dC0UMD0C6x6kw43LF8MH
status: PUBLISHED
createdAt: 2024-11-19T15:03:14.481Z
updatedAt: 2024-11-21T19:19:22.351Z
publishedAt: 2024-11-21T19:19:22.351Z
firstPublishedAt: 2024-11-21T16:43:30.533Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: personal-shopper-overview
legacySlug: personal-shopper-overview
locale: en
subcategoryId: 2vuGumwWQ432unGlyOOXXc
order: 1
---

**Personal Shopper** is an app that allows businesses to host live shopping sessions in the store, enabling real-time interaction with customers. During these sessions, a personal shopper can showcase products, answer questions, and add products to the customer's cart. This interactive shopping experience is designed to engage customers, increase sales, and build brand loyalty.

> ⚠️ Personal Shopper is designed for sellers who want to show new collections to high-value customers or B2B clients. These customized live sessions are intended to provide a more personalized shopping experience than public [Live Shopping](/en/tutorial/live-shopping--1cYWPIbjNMyr072sksHSVL).

The Personal Shopper app is compatible with desktop and mobile devices.

| ![mobile-personalshopper](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/apps/personal-shopper/personal-shopper-overview_1.gif)     | ![desktop-personalshopper](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/apps/personal-shopper/personal-shopper-overview_2.gif)     |
| ---------- | ---------- |
| Personal Shopper on mobile       | Personal Shopper on desktop       |

During a live in the Personal Shopper app, the personal shopper and the customers have access to various features and functionalities. Here are some of the key features and their respective availability for personal shoppers and customers:

| Feature                           | Description                                                                                                                                                                                                             | Advisor | Customer |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| Camera and microphone settings    | Control the camera and microphone settings to turn them on or off during the call.                                                                                                                                      | ✅       | ✅        |
| Share live link                   | Share the live link with others to enable additional participants to join the conversation.                                                                                                                             | ✅       | ✅        |
| Screen sharing                    | Share screens to allow participants to view the entire screen or specific applications.                                                                                                                                 | ✅       | ❌        |
| Chat                              | Communicate through text messages to exchange information and facilitate real-time conversation.                                                                                                                        | ✅       | ✅        |
| File sharing                      | Send files during the call to enable the sharing of relevant documents or images.                                                                                                                                       | ✅       | ✅        |
| Product search and recommendation | Search for specific products and provide recommendations to the customer. This allows the shopper to immediately add the recommended products to the cart and complete the purchase seamlessly within the same process. | ✅       | ❌        |
| Satisfaction survey               | Complete a survey to provide feedback on the call experience, ensuring service quality and gathering valuable insights for improvement.                                                                                 | ❌       | ✅        |
| Product highlight and add to cart | When a advisor sends a product, customers can add it to their cart immediately, selecting any variations within the same modal, with a notification confirming it was added.                                            | ❌       | ✅        |
| Picture in Picture                | When the customer clicks the Picture in Picture icon, the sales associate's image appears in a smaller window. This allows the customer to browse the website while keeping the advisor visible.                        | ❌       | ✅        |

Personal Shopper is available in the following languages: English, Spanish, Portuguese and Catalan. It is currently available in the following countries:

* Argentina
* Australia
* Brazil
* Canada
* Chile
* Colombia
* France
* Germany
* Italy
* Mexico
* Netherlands
* Peru
* Portugal
* Spain
* United Kingdom
* United States

To get started, follow this guide to install the Personal Shopper app in your VTEX environment.

Personal Shopper is a paid app with different subscription plans: **Standard** and **Pro**. The subscription cost depends on your chosen plan, with each providing a specific number of monthly live stream minutes.

To keep track of your plan usage in the Personal Shopper app, go to **Apps > Personal Shopper > Settings**. In the `Management Personal Shop` tab, you will find the **PLAN** section, where you can view your plan usage details. This section provides information about your subscription and usage, helping you to monitor and manage your plan effectively.

> ℹ️ For more information about plans and pricing, see the [Personal Shopper page](https://vtex.com/mx-es/vtex-personal-shopper/).

Once you have successfully [installed the Personal Shopper app](https://developers.vtex.com/docs/apps/vtexventures.personal-shopper-free#installation), access the Admin and go to the **Apps** menu. Within the **Personal Shopper** section, you will find the following pages:

* **Calls:** Acts as a central hub for consultants to efficiently manage their customer calls and interactions. It is the page most frequently used by consultants as it provides access to essential functionalities for managing calls and availability, such as:
    * Create personalized calls and share them with customers.
    * Enable or disable their availability to attend calls.
    * View the list of customers who are waiting for a call.
    * Access the list of customers who have scheduled a call.
* **Analytics:** Provides valuable insights and data related to the consultant's performance and customer interactions. Here are the sections and functionalities available on the Analytics page:
    * **General:** Provides access to the overall call history of the store categorized by consultant. This information gives you an overview of the total calls made by each consultant. More details about this can be found in the Personal tab.
    * **Personal**: Allows you to search for specific consultants and dive deeper into their call history. You can view comprehensive details such as the history of calls, products discussed, customer data, added carts, completed purchases, call duration, and even download call recordings. Additionally, you can review the details of the satisfaction survey and identify the device used by the customer to make the call.
    * **Call History:** Provides access to specific details of each call, including the list of all consultants involved. If applicable, you can also download the chat.
* **Settings**: Allows you to add and manage consultants, configure customized messages and notifications addressed to the customer, and set various other configuration options to tailor the app according to your specific needs.

## Configuration

### Creating a Personal Shopper landing page

1. Access the Admin and go to **Storefront > Pages**.
2. Click `Create New` to create a new Personal Shopper landing page.
3. Fill out the following fields based on the instructions below:
    * **Title**: Provide a descriptive title for your landing page (e.g., Personal Shopper)
    * **URL**: Specify the URL path for your landing page (e.g., `personal-shopper`).
    * **Requires authentication**: Determine if authentication is required to access the landing page.
    * **Description**: Add a meta description that describes the page.
    * **Keywords**: Enter relevant keywords to optimize search engine discoverability.
    * **Templates**: Select the appropriate template for the page. For example: `livestreamingdemo.store-theme@1.x:store.custom#ps-call`
4. Click `Save` to create a Personal Shopper landing page.

### Setting the Personal Shopper preferences

To configure your Personal Shopper preferences, follow these steps:

1. Within the Admin, go to **Apps > Personal Shopper > Setting**.
2. Switch to the `Settings` tab.
3. In the **General account** section, fill out the following fields based on the instructions below:
    * **Url client**: enter the URL of the page you created in the [Creating a Personal Shopper landing page](/en/tutorial/visao-geral-do-personal-shopper--12dC0UMD0C6x6kw43LF8MH#creating-a-personal-shopper-landing-page) section. For example: `https://www.mystore.com/personal-shopper`.
    * **Store name**: enter the name of your store. This name will be used in emails sent to customers and personal shoppers.
4. In the **Privacy policy, the terms and conditions** section, configure the appropriate links and text to request user consent for the privacy policy and terms and conditions of data processing.
5. In the **Messages and notifications** section, customize the following messages:
    * **Message to notify the seller**: Enter the message that will be sent to notify the seller about a client request for help.
    * **Message to notify the scheduled customer**: Enter the message that will be sent to the customer once an advisory session is scheduled.
    * **Message to notify the customer when joining a personal shopper**: Enter the message that will be sent to the customer when joining a personal shopper section.
    * **Customer notification message**: Enter the message that will be sent to the customer once the personal shopper is ready.
    * **Cancellation message**: Enter the message that will be sent in case of cancellation.
6. In the **Cart and checkout** section, make the following choices:
    * Choose whether to direct the cart to the minicart or purchase summary.
7. In the **CSS Styles** section, perform the following actions:
    * Copy an email invitation template.
    * Add a link to your CSS stylesheet.
    * Select your store's minicart CSS selector if desired.
8. Click `Save changes` to save your preferences.

In the **CMS Configuration** section, you will also find the Personal Shopper script to add to your template or main page.

### Adding consultants

To effectively manage customer interactions and provide personalized assistance, it is essential to add consultants to the Personal Shopper app. Consultants play a crucial role in attending to customer calls, offering guidance, and recommending products based on their expertise. Follow these steps to add a consultant within the Admin:

1. Within the Admin, go to **Apps > Personal Shopper > Settings**.
2. In the **Management Personal Shop** tab, click `New` to register a new consultant.
3. Fill in the following fields:
    * **Name**: Enter the name of the consultant.
    * **Email**: Enter the email address of the consultant.
    * **Phone**: Enter the phone number of the consultant.
    * **Collection IDs**: Specify the collection IDs associated with the consultant.
    * **Availability Time**: Select the availability time for the consultant.
    * **Repeat Weekly**: Choose whether the availability repeats weekly for the consultant.
4. Click `Create personal` to save the details and add the consultant to the system.

By creating profiles for consultants and assigning them specific working hours and product collections, you can ensure that customers have access to the right consultants at the right times.

### Managing permissions

In this section, you will find guidance on how to create roles and assign exclusive permissions in the Personal Shopper modules. This allows you to limit access to information and actions as desired, ensuring the security and integrity of the Personal Shopper app.

Note that if a user does not have permission to access a specific module, they will see a message indicating the lack of access. If they wish to obtain access to the module, they should reach out to the account administrator.

The following steps must be taken by a user with `Owner` permissions.

#### Creating permission roles

To establish restricted and exclusive permissions in the app, roles must be created. Users can then be assigned to these roles to grant access to specific modules within the app.

1. Access the Admin.
2. Navigate to **Account Settings > User Roles**.
3. Click `New Role` to create a Personal Shopper role.
4. In the **Select role** field, choose the `Custom` option.
5. Enter a name for the role that reflects the desired permissions or profile.
6. In the **Products and Resources** section, expand the dropdown and select `Personal Shopper App`. The following three modules for Personal Shopper will be displayed. Depending on the desired role and permissions, select one, two, or all three modules for user access:
   * **Call**: Enables the user to initiate, receive, and create personalized calls.
   * **Analytics**: Allows visualization of general and individual metrics, as well as call history.
   * **Settings**: Provides control to Personal Shopper settings.
7. After selecting the modules, add the emails of the users who should have access to this role.
8. Click `Save`.

#### Assigning roles to users

Once the appropriate roles have been created, you can assign users to these roles by following these steps:

1. Access the Admin.
2. Navigate to **Account Settings > User**.
3. Click `New` to create a new user if needed or locate the existing user from the list.
4. If creating a new user, enter the email of the user you want to grant access to in the **Email** field. Otherwise, skip to step 5.
5. Click `+ Add Roles`.
6. Select the desired roles from the list by checking their corresponding checkboxes and click `Add Role`.
7. Click `Save` to apply the changes and assign the roles to the user.

### Managing consultants

Within the Admin, go to **Apps > Personal Shopper > Settings**. In the `Management Personal Shop` tab, you can perform the following actions:

* **Search a consultant**: Use the search bar to search for consultants based on their name, phone number, email, or Collection ID. This allows you to quickly find specific consultants in your list.
* **Edit the details of consultant**: Click on the pencil icon next to a consultant to edit their saved options. This allows you to update their details, such as their name, email, phone number, availability time, and collection IDs.
* **Remove a consultant**: Click on the trash can icon next to a consultant to remove them from the system. This action permanently deletes the consultant's profile and associated information.

### Creating a call

As a registered Personal Shopper consultant, you have the ability to create calls with your customers using the Personal Shopper app. Here's how:

1. Access the Admin using the email associated with your Personal Shopper consultant account.
2. Go to **Apps > Personal Shopper > Calls**.
3. Click `Create private call`.
4. Fill out the following fields:
    * **Name:** Enter the name of the customer who will be participating in the call.
    * **Email**: Enter the customer's email address for communication and event-related notifications.
    * **Phone (Optional)**: Enter the customer's phone number to enable additional contact options.
    * **Product (Optional)**: If applicable, specify the product of interest to focus the call discussion.
    * **Select the platform you are on**: VTEX IO or VTEX Portal (a.k.a., VTEX Legacy CMS Portal).
5. Click `Create call`.
6. Choose `Start an instant call` to begin the call with the customer or `Create a call for later` to schedule a call.

![calls-personalshopper](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/apps/personal-shopper/personal-shopper-overview_3.png)

If you choose to start an instant call, click `Start call` to begin the call with the customer. This allows you to engage in real-time interaction and provide personalized assistance. For more information on conducting a call, see the [Conducting a call](/en/tutorial/visao-geral-do-personal-shopper--12dC0UMD0C6x6kw43LF8MH#conducting-a-call) section. In this case, please ensure that you grant your browser the necessary permissions for microphone and camera access to avoid any issues during the call.

If you opt to schedule a call for later, you will be provided with the call link to share with the participants. For more information, see the [Joining a scheduled event](/en/tutorial/visao-geral-do-personal-shopper--12dC0UMD0C6x6kw43LF8MH#joining-a-scheduled-event) section.

### Managing availability

In addition to creating your own calls, customers also have the option to request advisory sessions with Personal Shopper consultants. To ensure that you, as a personal shopper, can be assigned to these sessions, it's important to manage your availability status. Here's what you need to do:

1. Access the Admin using the email associated with your Personal Shopper consultant account.
2. Go to **Apps > Personal Shopper > Calls**.
3. Toggle the `Available/Active` button to change your status based on your availability and willingness to attend advisory sessions. Enable the toggle when you are ready and able to participate in advisory sessions and disable it when you are unable to attend.

By setting your status to available, you indicate to the system that you are open and prepared to assist customers with their inquiries and calls. This increases the likelihood of being assigned to advisory sessions. Remember to regularly update your availability status based on your schedule and availability to provide the best possible service to customers.

### Joining a scheduled event

To join an event requested by a customer or an event that you have previously created, follow these steps:

1. Access the Admin using the email associated with your Personal Shopper consultant account.
2. Go to **Apps > Personal Shopper > Calls**.
3. Find the desired customer in the **Clients waiting for you to attend** section.
4. Click `Join` to join the call with the customer.
5. Click `Start call`.

For more information on conducting a call once you have joined, see the [Conducting a call](/en/tutorial/visao-geral-do-personal-shopper--12dC0UMD0C6x6kw43LF8MH#conducting-a-call) section.

Please ensure that you grant your browser the necessary permissions for microphone and camera access to avoid any issues during the call.

### Conducting a call

When participating in a call as a personal shopper, you will have access to various video conference tools, as presented in the following:

![call-personalshopper](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/apps/personal-shopper/personal-shopper-overview_4.png)

* **I - Microphone:** Allows participants to control their audio by muting or unmuting themselves.
* **II - Camera:** Allows participants to turn their video camera on or off during the video conference.
* **III - More options:** Shows additional options in the following order:
    * **Flip camera:** Allows participants to switch between front or back cameras on their devices.
    * **Screen sharing:** Allows participants to share their entire screen or specific applications with others in the conference.
    * **Call link:** Copies the link that can be shared with others to join the ongoing call.
* **IV - End call:** Allows participants to end the video conference session whenever they need to leave the meeting.
* **VI - See participants:** Allows participants to see a list of attendees present in the video conference.
* **VII - Chat:** Allows participants to exchange text messages and files during the video conference.
* **VIII - Products:** Shows a lateral menu that allows participants to view the products related to the current call, search for other store products, and share them with others.

### Tracking events data

The **Analytics** page provides valuable insights and data related to the performance of your Personal Shopper activities. To access the **Analytics** page, follow these steps within the Admin: go to **Apps > Personal Shopper > Analytics**. Here you will find the following tabs:

* **General**: Provides an overview of the overall performance metrics and statistics related to your Personal Shopper activities.
* **Personal**: Allows you to search and view individual performance metrics for each personal shopper. You can track metrics such as the number of calls, sales generated, sales of the collection's products, and total products sold in the collection for each personal shopper.
* **Call history**: Provides a detailed record of all the items shopped during calls. You can review the history of calls made and the products selected during each call.

#### General

The General section provides an overview of the overall performance metrics and statistics related to your Personal Shopper activities. You can use the following filters to refine your analysis:

* **Search by personal or email**: Search for specific personal shoppers by their names or email addresses. This feature allows you to retrieve individual performance data quickly.
* **Date**: Select the desired date range for which you want to view the analytics data. By default, the current month is selected.

Within the General section, you will have access to the following metrics:

* **Number Of Calls**: Total number of calls made during the selected date range.
* **Sales**: Total revenue generated from sales during the selected date range.
* **Sales of the collection's products**: Total revenue generated from sales of products within the collection.
* **Total products sold in the collection**: Overall number of sold products from the collection.
* **Call duration**: Total duration of all the calls during the selected date range (in minutes).
* **NPS Average**: Measure of customer satisfaction and loyalty. It is calculated based on customer feedback and indicates the percentage of promoters, detractors, and neutrals. You can click `Detail` to see customer feedback and obtain detailed information about the NPS score

You can also find a table containing analytics details for each personal shopper, including the following metrics:

* **Name**: The name of the personal shopper.
* **Number Of Calls**: The total number of calls made by the personal shopper.
* **Sales**: The total revenue generated by the personal shopper through sales.
* **Sales of the collection's products**: The amount of total revenue specifically generated from products within the collection by the personal shopper.
* **Carts**: The number of carts created by the personal shopper.
* **Total products sold in the collection**: The total number of products sold from the collection by the personal shopper.
* **Mobile**: The percentage of sales made on mobile devices by the personal shopper.
* **Desktop**: The percentage of sales made on desktop devices by the personal shopper.
* **NPS Average**: The Net Promoter Score average of the personal shopper.

Finally, you can download the analysis by clicking the `Download` button.

#### Personal

Within the **Personal** section, you can track data of a specific personal shopper. You can use the following filters to refine your analysis:

* **Search by personal or email**: Search for specific personal shoppers by their names or email addresses.
* **Date**: Select the desired date range for which you want to view the analytics data. By default, the current month is selected.
* **Status**: Filter the data by the status of the related event. You can choose from `Cancelled`, `Finalized`, and `Archived` events.

The table in the **Personal** section displays the filtered metrics for the selected personal shopper, including:

* **Creation date**: Date when the event was created.
* **Product**: Product sold during the event.
* **Status**: Status of the event, whether it is Cancelled, Finalized, or Archived.
* **Customer name**: Name of the customer associated with the sale.
* **Carts**: Number of carts created during the event.
* **Total products sold in the collection**: Number of products sold from the collection during the event.
* **Sales**: Total revenue generated from the personal shopper's event.
* **Sales of the collection's products**: Total revenue specifically generated from products within the collection.
* **Call duration**: Duration of the event call.
* **Recording**: Link to the recording of the event. You can click the recording icon to watch the recording, if available.
* **NPS**: NPS of the event. You can click the balloon icon to view detailed customer responses, if applicable.
* **Type of device**: Type of device used during the event, whether it was a mobile device or a desktop.

You also have the option to download the call history data for further analysis and offline access by clicking `Download`.

#### Call history

The Call History section allows you to view and manage the history of calls made during Personal Shopper activities. You can use the following filters to refine your analysis:

* **Search by product, customer, personal, etc.**: Search for specific calls based on product, customer, personal shopper, or other relevant criteria.
* **Date**: Select the desired date range for which you want to view the call history. By default, the current month is selected.

The table on the Call History page presents a comprehensive overview of the call records, displaying the following information:

* **Product**: Image thumbnail of the product associated with the call.
* **ID**: ID of the product associated with the call.
* **Product name**: Name of the product associated with the call.
* **Customer name**: Name of the customer who participated in the call.
* **Customer email**: Email address of the customer who participated in the call.
* **Phone**: Phone number of the customer who participated in the call.
* **Creation date**: Date and time when the call took place.
* **Personal**: Personal shopper who conducted the call.
* **Status**: Status of the call, indicating whether it is canceled, finalized, or archived.
* **Chat**: A link to download the chat history associated with the call, if available.
* **Recording**: A link to the recording of the call, if available
* **NPS**: NPS associated with the call, representing customer satisfaction and loyalty.

You also have the option to download the call history data for further analysis and offline access by clicking `Download`.

### Managing your plan usage

To keep track of your plan usage in the Personal Shopper app, go to **Apps > Personal Shopper > Settings**. In the `Management Personal Shop` tab, you will find the **PLAN** section, where you can view your plan usage details. This section provides information about your subscription and usage, helping you monitor and manage your plan effectively.

