---
title: 'How to create and edit transactional email templates'
id: 335JZKUYgvYlGOJgvJYxRO
status: PUBLISHED
createdAt: 2020-01-10T13:13:48.069Z
updatedAt: 2021-02-11T13:19:34.511Z
publishedAt: 2021-02-11T13:19:34.511Z
firstPublishedAt: 2020-01-13T14:38:32.506Z
contentType: trackArticle
productTeam: Post-purchase
slug: how-to-create-and-edit-transactional-email-templates
locale: en
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugEN: transactional-emails
---

### Editing an email template

To edit a transactional email template, follow the steps below.

1. In Admin's side menu, go to Message Center and click on __Templates__.
2. Search for the desired template and click on the corresponding card.
3. Change the e-mail title and the recipient (values bounded by double braces are variable; in the next article we will learn how to handle them). You can add recipients on Carbon Copy (`CC`) and Blind Carbon Copy (`CCO`).  
4. Check the box __Use default sender__ to use the registered email address as default, as explained in the previous article on this track.

In the __HTML__ field you will find the template's HTML code. You can edit the code in the field itself or copy it to an editor of your choice, edit it and then paste it back into the template field.

The __preview__ rendered by this code is shown in the box below the HTML field. You can choose between three different screen sizes to test code responsiveness.

The __JSON Data__ field shows a JSON object *example* that contains information regarding the subject of the email. This object's braces can be used as variables in the template's HTML code. We will learn how to do this in the next article.

<div class="alert alert-warning">
Warning: To customize the email layout, you must enter <strong>inline CSS code</strong>. <u>Don't</u> insert CSS into the head of the template, because emails don't handle it well.
</div>

At the end, click on the __Save__ button.

### Creating an email template

The method for creating a transactional email template is similar to the one used to edit a template. Just follow the steps below:

1. In Admin's side menu, go to Message Center and click on __Templates__.
2. Click on the __New template__ button.
3. Check the __Enable e-mail sending __ box.
4. Fill in E-mail Title, Sender and Recipient ("To") data.
5. Enter the template code in the __HTML__ field.
6. Test it on __preview__.
7. Click on __Save__.
