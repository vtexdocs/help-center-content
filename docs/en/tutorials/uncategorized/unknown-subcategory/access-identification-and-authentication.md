---
title: 'Access, identification and authentication'
id: 1b4FKvA5KxN7kwBLfmZbUe
status: DRAFT
createdAt: 2022-05-26T13:40:23.357Z
updatedAt: 2022-05-26T13:42:14.099Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: access-identification-and-authentication
legacySlug: access-identification-and-authentication
locale: en
subcategoryId: 
---

See the complete [security FAQ]()
## Does VTEX have a Logical Access Management policy? Describe in general how your access management processes work.

VTEX constantly controls and monitors access to our production environments. 
This policy is aligned with our practice of the principle of least privilege and separation of duties, in which access is granted based on legitimate need. Besides, we have adopted periodic access and profile review processes. 
Whenever a termination occurs, our revocation process is triggered timely. 

## Does VTEX have a password policy? If yes, what are the criteria considered?

We have implemented secure configurations and a robust password policy to access our systems, such as a minimum number of characters and special characters, periodicity for changing passwords, not using previous passwords, session control and inactivity, as per the following example. 
- Minimum password length of 16 characters;
- Passwords must contain at least 1 uppercase, lowercase, numeric, and special character (%, #, $, @, &, among others);
- It's not allowed to use repeated numbers or letters, be it in an obvious or non-obvious sequence, e.g., "aaaabbbb", "12345678", "asdfghjk";
- Strong encryption must be used to render all authentication credentials unreadable during transmission and storage in all system components;
- The option to change password at first login must be enabled;
- You must not reuse previously used passwords.

## In your corporate environment, how is the granting of access to VTEX's internal systems operationalized?

The Access Management process (from granting to revocation) in the corporate environment is done through a centralized work cell responsible for defining the metrics for granting access. A work cell is composed of groups responsible for each company system. So, when an employee opens a request through our service channel, those responsible will investigate to understand the reason for that request and whether that employee can have the requested access. The process flow goes through several request authentication and validation steps until access is granted. 

## Do you limit access according to the principle of least privilege?

Yes, VTEX provides access to our production environments (code, merge and deploy pipeline, databases and AWS Cloud infrastructure) in line with the Principle of Least Privilege and Segregation of Duties: access is granted and monitored based on legitimate need. In addition, we adopt periodic processes to review accesses and profiles.

## How does the company's password recovery process work?

You can recover passwords using your email or mobile phone number. To ensure that only authorized people have access to their work environment, users have to log in via email, using two-factor authentication (2FA), VPN, and more.

