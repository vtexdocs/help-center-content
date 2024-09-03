---
title: 'How to make transfers using VTEX Payment?'
id: 38GkneYnX8DlGH3tzjweEY
status: ARCHIVED
createdAt: 2020-03-09T21:46:51.182Z
updatedAt: 2020-03-09T22:30:44.204Z
publishedAt: 
firstPublishedAt: 
contentType: trackArticle
productTeam: unknown
slug: how-to-make-transfers-using-vtex-payment
locale: en
trackId: 
trackSlugEN: untitled-track
---

VTEX Payment’s transfers are similar to the process that takes place in an ATM.

The required data is:

- Banking institution;
- Bank branch code
- Bank account

If the account has other titularity, you will also need to inform the beneficiary’s name and CPF/CNPJ (individual taxpayer registration number/company registration number).

In those cases, VTEX Payment uses Two Factor - an authentication system in which a code is sent by SMS to the account holder’s phone number (the one that has been added during VTEX Payment’s registration).

It works as follows: when you click on the “Confirm Transfer” button, you will receive an identification code via SMS that must be entered in the pop-up window that will appear on the screen. This way, the transfer will be made.

This is because the account holder is the responsible for authorizing transactions for other titularities. If you want, you can ask VTEX to register a dependent to the account holder. 

That said, proceed with the step by step for a transfer to other titularity:

1. Access the __VTEX Admin__;
2. On the left side of the screen, click on the __VTEX Payment__ module;
3. Click on __Account Overview__;
4. Click on the __Transfer__ button;
5. In the __Beneficiary__ box, select the __“Other Titularity”__ option;
6. Fill in the __“Name”__ and __“CPF/CNPJ”__ fields;
7. Then fill in the fields under __Bank Data__;
8. In the bottom right corner of the screen, click on the __“Continue”__ button;
9. In the __Value__ field, enter the amount that will be transferred;
10. Make sure that the __data__ provided is __correct__;
11. In the bottom right corner of the screen, click on the __Confirm Transfer__ button;
12. Insert the __code__ sent by SMS in the __pop-up window__ that will appear on the screen;
13. In the lower right corner of the pop-up, click on __Validate__.

The process for making a transfer to the same titularity is even simpler:

1. Access the __VTEX Admin__;
2. On the left side of the screen, click on the __VTEX Payment__ module;
3. Click on __Account Overview__;
4. Click on the __Transfer__ button;
5. In the __Beneficiary__ box, select the __“Same Titularity”__ option;
6. Fill in the fields under __Bank Data__;
7. In the bottom right corner of the screen, click on the __“Continue”__ button;
8. In the __Value__ field, enter the amount that will be transferred;
9. Make sure that the __data__ provided is __correct__;
10. Click on the __Confirm Transfer__ button.

In both cases, the system sends a message to the account owner's email. In the same way as the cell phone number used in Two Factor, the email in question will be the one added during the VTEX Payment registration.

The message informs you of the status - whether it was completed successfully or if an error occurred - and the transfer’s description. The retailer can check the information regarding the transaction, such as amount, checking account, bank branch and the beneficiary’s data.

However, this is not the only way to check this information. If necessary, the retailer can also consult them in the __Statements__ module. In the __"Statements"__ tab, just select the desired statement to view its details.

<div class=”alert alert-info”>
As with bank transactions, the requested transfer may be denied if the retailer reaches his account limit. If necessary, a limit increase can be requested through a ticket on VTEX’s customer care platform.
</div>
