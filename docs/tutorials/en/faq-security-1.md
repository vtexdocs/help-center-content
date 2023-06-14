---
title: 'FAQ - Security 1'
id: 7AmPOGXykmE9SYyYDzdAZ4
status: DRAFT
createdAt: 2022-05-26T00:09:53.997Z
updatedAt: 2022-08-22T12:22:09.869Z
publishedAt: 
firstPublishedAt: 2022-06-02T18:56:44.116Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: faq-security-1
legacySlug: faq-security-1
subcategory: 
---

# FAQ - Security 1

Topics:
- [Security policy & organization](#security-policy-organization)
- [Risk management](#risk-management)
- [Access, identification and authentication](#access-identification-and-authentication)
- [Security education and awareness](#security-education-and-awareness)
- [Asset management](#asset-management)
- [Privacy and data](#privacy-and-data)
- [Platform security](#platform-security)
- [Log auditing](#log-auditing)
- [Secure development](#secure-development)
- [Data security](#data-security)

See more topics in the part 2 of this FAQ. Insert your [VTEX account name](https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC) below to access the documentation.
<iframe src="https://help.vtex.com/insertaccountname?id=1ayXEtqawI9yuxFXutiITh" title="Insert your account name and click the button." frameBorder="0" width="400" height="50"></iframe>

## Security policy & organization

### Does VTEX have an information security policy? If yes, how often is it reviewed? Has the policy been distributed and communicated to the entire company?

VTEX has an information security policy that has been communicated to the entire company through our internal communication channels. The policy is reviewed annually within our document management process. Our Information Security policy complies with the ISO IEC 27001 standard, industry-recognized and best-practice security frameworks, data protection laws, and other requirements applicable to the VTEX context. Our clients can access our public version via the store Administration Portal. 

### Do third-party companies audit VTEX's information security controls?  What certifications does VTEX have?

VTEX has a compliance program to manage and maintain security controls periodically audited by external companies. We currently hold the following certifications: 

SOC 1 - Type 2: A report on internal controls over financial reporting systems.
SOC 2 - Type 2: A report covering Security, Availability, Integrity, Confidentiality, and Privacy.
SOC 3 - A public report on Security, Availability, Integrity, Confidentiality, and Privacy Controls.
PCI DSS - A validation of controls over cardholder data to reduce credit card fraud.

All these certifications are available in the Compliance section in the [VTEX Trust Hub](https://vtex.com/us-en/trust/). And for customers it is possible to extract the certificate through the Admin portal. 

### Does VTEX have an information security program? If yes, what are the standards and guidelines followed to maintain the program?

VTEX has a compliance program to manage information security properly. As part of this program, we maintain a roadmap for continuous implementation and improvement of security controls, encompassing the platform and infrastructure environments hosting the platform. In summary, our prioritization criteria are constantly aligned with the VTEX needs to further enhance the security of our products. 

### Who is responsible for managing the information security program?

At VTEX, the executive leadership is responsible for the Information Security program and a DPO is responsible for coordinating the Privacy program. Teams of specialized information security engineers and analysts are structured and dedicated to supporting key security processes. 

### Are information security policies critically analyzed and maintained to enforce compliance with applicable legal, regulatory, or contractual cybersecurity requirements? How often are they reviewed?

Our corporate security policies and procedures were developed based on market best practices and guidelines, such as ISO IEC 27001:2013 and series. We manage these instruments using VTEX's internal tools. They are reviewed on an annual basis and maintained at every review period. 

### Is the VTEX platform verified through continuous external audits? What do these audits cover, and how often do they occur?

VTEX is periodically audited to renew our SOC 1, 2 and 3 and PCI-DSS certifications. These certification audits take place annually and cover a broad Security scope. PCI-DSS certification makes it possible for us to have an adequate level and robust processes for protecting shoppers' payment card data and SOC certification (SOC 1,2 and 3) is a control-based assurance covering all five criteria. of trusted service for security, availability, processing integrity, confidentiality and privacy. In addition, VTEX as a company with capital is obliged to comply with the requirements of the SOX (Sarbanes-Oxley) law, in this way we are implementing all the necessary controls. 

### How is VTEX's audit and certification schedule managed?

Our audits take place annually and certify we are compliant with the scope of SOC 1, SOC 2, SOC 3, and PCI - DSS certifications. Our renewals usually take place in the first quarter of the current year. In 2022, we will also conduct a SOX Compliance audit cycle. 

### How many people make up the Information Security team?

VTEX has a team of managers, engineers and analysts specialized in information security. Our team is structured and committed to supporting key security processes.  The security team works on a 24/7 schedule with personnel in different time zones to ensure coverage outside business hours.

In addition to the Information Security team, the company has several engineers focused on and working on security processes in other departments.  

## Risk management
### How does VTEX manage cybersecurity risks on the platform and its internal infrastructure? 

VTEX conducts regular threat and vulnerability analyses of the platform, operational processes, and the business. Identifying risks allows us to improve our monitoring and notification systems to deal with their eventual materialization. This can be done by notifying the people in charge of handling risks or triggering automated actions to mitigate or eliminate these risks. 

### Are information security policies and controls contractually applied to third-party providers?

VTEX ensures that its outsourced providers respect and follow the same security policies offered by VTEX. Here is a [list of all of our third-party infrastructure providers](https://vtex.com/us-en/privacy-and-agreements/subprocessors/) 

### Do you have a vendor risk management program?

VTEX has an established Information Security risk analysis process for critical suppliers, responsible for handling sensitive data. 
We assess these vendors' maturity and security posture to understand the possible risks and gaps and address these issues to make the appropriate internal decisions. In addition, all suppliers go through the risk assessment flow for compliance with data protection laws and business risk analysis. After all the necessary assessments and with an adequate level of maturity, we proceed with the hiring.  

## Access, identification and authentication
### Does VTEX have a Logical Access Management policy? Describe in general how your access management processes work.

VTEX constantly controls and monitors access to our production environments. 
This policy is aligned with our practice of the principle of least privilege and separation of duties, in which access is granted based on legitimate need. Besides, we have adopted periodic access and profile review processes. 
Whenever a termination occurs, our revocation process is triggered timely.  

### Does VTEX have a password policy? If yes, what are the criteria considered?

We have implemented secure configurations and a robust password policy to access our systems, such as a minimum number of characters and special characters, periodicity for changing passwords, not using previous passwords, session control and inactivity, as per the following example. 
- Minimum password length of 16 characters;
- Passwords must contain at least 1 uppercase, lowercase, numeric, and special character (%, #, $, @, &, among others);
- It's not allowed to use repeated numbers or letters, be it in an obvious or non-obvious sequence, e.g., "aaaabbbb", "12345678", "asdfghjk";
- Strong encryption must be used to render all authentication credentials unreadable during transmission and storage in all system components;
- The option to change password at first login must be enabled;
- You must not reuse previously used passwords. 

### In your corporate environment, how is the granting of access to VTEX's internal systems operationalized?

The Access Management process (from granting to revocation) in the corporate environment is done through a centralized work cell responsible for defining the metrics for granting access. A work cell is composed of groups responsible for each company system. So, when an employee opens a request through our service channel, those responsible will investigate to understand the reason for that request and whether that employee can have the requested access. The process flow goes through several request authentication and validation steps until access is granted.  

### Do you limit access according to the principle of least privilege?

Yes, VTEX provides access to our production environments (code, merge and deploy pipeline, databases and AWS Cloud infrastructure) in line with the Principle of Least Privilege and Segregation of Duties: access is granted and monitored based on legitimate need. In addition, we adopt periodic processes to review accesses and profiles. 

### How does the company's password recovery process work?

You can recover passwords using your email or mobile phone number. To ensure that only authorized people have access to their work environment, users have to log in via email, using two-factor authentication (2FA), VPN, and more. 

## Security education and awareness
### Does VTEX have processes and procedures for information security awareness? It describes in general how this process works today.

Our comprehensive programs include new employee integration and annual safety training.
We train employees to identify frequently used attack vectors, such as phishing emails, and how to report them. This applies to all employees, and we measure the effectiveness of security awareness programs through KPIs.
Every year we establish a schedule for the awareness program. In addition, we constantly review our content, considering the latest scenarios and attack vectors and vulnerabilities. 

### Is there technical training for the Security team? 

VTEX offers internal programs and training to increase our engineers' seniority levels. These include mechanisms for secure development and other training that address security and privacy's technical context. 

### Does VTEX adopt an awareness program focused on malware mitigation and protection, are employees educated on this topic?

The company has in-house programs to raise awareness of malware and the issues arising from it. All VTEX employees are regularly informed through internal communications and training about the risks associated with malware, how malware can install itself on a device, and the most familiar symptoms of a machine that has been infected with malware. Within the mentioned training, users will be: Instructed to perform manual scans with the tools provided by the company. In case of suspicion or malware infection, it is necessary to contact the responsible team to solve the problems related to this infection.
Additionally, malware protection is supported by constant monitoring through our security technologies.

Malware in production environments is actively monitored by anti-malware software installed on instances. If malware is detected, the affected instance is terminated so that the autoscaling processes create a clean instance from scratch. 

## Asset management
### How do you prioritize your organization's most critical assets?

Assets are centrally managed through an inventory management system that stores and tracks the owner, location, status, maintenance, and descriptive information for AWS-owned assets. Once acquired, we check and track all assets and inspect and monitor assets under maintenance for ownership, status, and resolution. 

### How would you create the assets within the company?

VTEX operates as a 100% cloud company and is the largest AWS partner in Latin America. Thus, there is no need for physical asset inventory. For software inventory, we use the AWS Systems Manager, which provides visibility into our AWS computing environment. In the corporate scenario, we use a solution to manage endpoints and enforce security rules.  

### How does VTEX carry out the destruction and disposal of assets (removable media, USB memory, etc.)?

Multimedia storage devices used to store customer data are classified as critical and are treated appropriately, as high impact, throughout their life cycle. There are strict rules on how to install, maintain, and eventually destroy devices when they are no longer useful. When a storage device reaches the end of its useful life, it is deactivated using the techniques detailed in NIST 800-88. 

## Privacy and data
### Does the company have a privacy and data policy? If yes, how often is it reviewed? Has the policy been distributed and communicated to the entire company?

Yes, VTEX has a privacy and data policy that is reviewed annually. The policy was distributed and communicated to the entire company through our internal announcement channel. The policy is also maintained in our internal corporate documents tool. 

### Does the organization have a Chief Privacy Officer (DPO) or similar role with the authority, mission, responsibility, and resources to coordinate, develop, and implement applicable privacy requirements and manage privacy risks through the privacy program?

VTEX has a DPO responsible for coordinating the privacy program.  

### What kind of personal data does VTEX handle on behalf of its customers?

VTEX handles personal information on behalf of its customers, such as name, postal address, telephone or mobile number, email address, address, and other information that the customer may deem necessary. See our Data Processing Addendum (ATD) for more information: https://vtex.com/us-en/data-processing-addendum/.  

### How does VTEX comply with LGPD (the Brazilian legislation) and GDPR (the European legislation)?

VTEX is fully committed to complying with data protection regulations. We are creating a space in which we can disclose the measures we have already taken to deal with this very important issue. You can read more about our commitment to controllers (you, our customer) and the principles of both LGPD and GDPR in "What is LGPD?" and "What is GDPR?" respectively in VTEX's Commitment section at https://vtex.com/us-en/trust/. Currently, the tools provided by VTEX, through our GUI and our APIs, enable our tenants to be GDPR compliant. This means that we also have methods to comply with requests from personal data subjects, and that our product follows the standards set by European legislation.

Our contracts, policies, and notifications are already compliant with LGPD and GDPR, as you can see in VTEX Trust Hub, available at
https://vtex.com/us-en/trust/. We also invite you to view our Data Handling Processing Addendum to understand how we handle customer data at https://vtex.com/us-en/data-processing-addendum/. 

### What rights of the titleholders are guaranteed by the VTEX platform?

In the majority of cases, VTEX acts as a data operator in relation to the shopper data handled by its customers. Thus, VTEX must fulfill the rights of data subjects only under direct orders from its customers, the data controllers. For more details, please see the Data Subject Rights clause of the VTEX DPA, available at: https://vtex.com/us-en/privacy-and-agreements/data-processing-addendum/. 

### Does VTEX have an information classification policy? 

VTEX has an information classification policy that aims to advise our employees and service providers on how to classify information with the proper level according to its criticality, establishing clear rules and avoiding risks of undue modification or unauthorized disclosure that may result in losses and damages to VTEX.  

### Explain what encryption methods are used in processing PII (Personally Identifiable Information).

We perform encryption in accordance with the legislative requirements of data protection laws and with powerful, approved encryption methods, thus reinforcing our commitment to security, standards, and regulations. 

### Explain the protection mechanisms for data, whether at rest or in transit.

VTEX does not transfer data via servers: all our data is transferred via HTTPS via port 443. All sensitive data is stored with encryption. Data in transit is encrypted with TLS 1.2 or higher and data at rest is encrypted with AES-256 or RSA algorithms using keys of at least 2048 bits.

### Which processes does VTEX adopt as measures for data leak prevention?

VTEX invests in preventive measures and methods that increase the security of the platform and the infrastructure that supports it. In addition, we constantly reinforce the importance of managing access to systems, especially those with sensitive data, and of offering the least possible privileges. Also, there are general guidelines that must be followed when operating in a regulated environment, such as with payment card data (PCI-DSS), applicable data protection laws, and other business-critical ones. 
We analyze the way information is handled from one environment to another, whether internal or external, always focusing on preventing people who do not need to know some information from remaining unaware of it, thus reducing the security perimeter. Other very present actions in our attempt to prevent data leaks are: 
- We always make sure our professionals are aware of the best practices regarding information security, with constant training and education; 
- We always try to automate process controls, as computers are much better at maintaining consistency than people; 
- Finally, we consider the process to prevent data leakage as a living organism. It is continuously updated as new risks, technological or strategic demands arise. 

### Please provide technical details about the authentication and identity management architecture available in the VTEX platform.

The VTEX platform has an out-of-the-box identity solution, called VTEX ID. We also support identity provider integration for SSO in the administrator portal and the ecommerce platform. Our Admin relies on SAML 2.0 as an authentication protocol, where VTEX customers can integrate an existing identity provider into VTEX admin using this standard. VTEX Storefront relies on OAuth 2.0 and likewise would allow merchants to leverage an existing identity provider to provide an authentication option for users via this protocol.We have an in-place process for access management, which includes access to production and related environments. Other security baselines, such as segregation of environments and double factor authentication are part of some systems and are being rolled out to all VTEX systems. Next we will provide links to more in-depth technical content about our authentication controls: 
- [Login integration guide](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide)
- [SAML 2.0 integration](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide-admin-saml2)
- [OAUTH 2.0 integration](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide-webstore-oauth2) 

### Please explain how data may come into contact with third parties or outsourced or subcontracted work, and how these interactions are protected and monitored.

VTEX relies exclusively on third parties for infrastructure provisioning and, therefore, tenant data is never available to third parties. The complete list of VTEX partners and affiliates is available at https://vtex.com/us-en/privacy-and-agreements/subprocessors/

If the tenant wishes to allow their own third-party partner to access their data, this can be done via our API integration and role-based access control system (which is managed by the tenant). 

## Platform security
### What relevant authentication and identity management security features are available on the platform, such as password complexity, password reuse, session timeout, account lockout, password reset, and multi-factor authentication. 

Passwords in VTEX ID have the following requirements:
Minimum length of 8 + 6 digit MFA token.
Minimum of one uppercase character
Minimum of one digit
Minimum of one special character
Customers cannot repeat the last four used passwords

Customers using an external identity provider through integration will be responsible for setting their own password policy. Furthermore password expiration every 90 days is provided for in the VTEX ID solution.

The passwords in the storefront follow the same rules, except for the MFA (Multiple Authentication Factor) requirement, which is optional. Customers have the ability to set password expiration and ensure that old passwords are not reused, both in the administrative environment and in the store. Customers can also configure the session timeout. 

Account lockouts happen when multiple attempts are made with the wrong password. This ensures that even weak passwords cannot be exploited with brute force. When an account is locked, the legitimate user can still login using a login method other than username and password, for example by receiving a token in their email or using an integrated social login (Google, AppleID, etc.). 

### How the platform stores and maintains the user base and how user credentials are stored and protected.

Passwords on the VTEX platform use a combination of hash and salt - we currently support SHA1 and PBKDF2 hash algorithms and will use a pre or post salt for an additional layer of security. Users' emails are stored and logically separated based on a given store account, and cannot be cross-accessed, even by VTEX employees. The databases containing the e-mails and hashes are fully encrypted with AES-256. 

### Does the VTEX platform offer Single Sign-on (SSO)?

VTEX offers Single Sign-on (SSO), available in the store management portal and in-store customer authentication as an additional security resource.
The Security Assertion Markup Language (SAML) is a standard for exchanging authentication and authorization data between domains. SAML 2.0 is an XML-based protocol that enables Single Sign-on (SSO) web browser login between web-based domains. It uses secure, digitally signed tokens and encrypted messages to transmit data between trusted parties. SAML 2.0 is an open standard, a product of the OASIS Security Services Technical Committee, and is supported by leading vendors in the industry. You can get more technical details by going here:  

### Does the platform use SSL (Secure Sockets Layer) certificates?

SSL (Secure Socket Layer) is a protocol designed to increase the security of data transmitted over the internet. It is no longer necessary to order the SSL certificate (previously provided by Digicert), it is now issued via Let's Encrypt and its creation has become VTEX's responsibility. It is is automatically created at the moment the store is implemented. The VTEX platform works with the secure HTTPS protocol, and this protocol ensures that communication between system components remains protected and data is transported through a secure tunnel. 

### Does the platform have identification, access control, and segregation of customer data through physical or logical controls?

VTEX maintains the segregation of customer data through logical controls. All our applications are multi-tenant and can identify, in each request, the store of origin, and all information for each store is kept on record with the store's own store identifier. Thus, our entire server infrastructure is shared by all our customers. This allows us to be more agile with enhancements and bug fixes, in addition to being efficiently scalable and being able to meet one-off needs, such as promotions and large-scale events, with security and resilience. There is no integrated method of access, which means that each customer only has access to their own information. VTEX primarily uses the following data regions within AWS for each respective purpose:
- AWS Northern Virginia: primary data storage
- AWS Northern California: backup location 

### Provide details on how user access is managed on the platform, including moving, adding, changing, and deleting accounts.

When an environment account is created, a master user, chosen by the tenant, is assigned. This master user is used by the tenant to delegate rights granted by means of roles also created by them. Learn more about [Master users](https://help.vtex.com/tutorial/what-is-the-master-user--3oPr7YuIkeyqUGmEqIMSEy) 

User accounts can be managed directly in the VTEX Admin. Admin users are assigned a role, which can have one or several permissions assigned to it, defined by the master user or a user with permissions to delegate responsibilities. When user accounts are modified or deleted, the data is immediately replicated across all nodes that support that account's data. After deletion, the data is removed from all nodes, although it continues to reside in the corresponding backup for its duration (usually 7 days). Learn more about [How user management works](https://help.vtex.com/en/tutorial/managing-users--tutorials_512 

### Does the platform have features to manage, organize, and customize management permissions in the stores? 

The VTEX Admin contains the License Manager module, which allows for user management. To organize the permissions of users who have access to the administrative environment of the VTEX store, the License Manager provides roles. 
The roles define which features each user can view and/or modify within each module of the platform. You can use one of several policies (set of roles / permissions) or create custom policies according to the needs of each area. Using the License Manager API library, you can develop an integration that allows access, renewal, and revocation of users. Learn more about the [License Manager](https://help.vtex.com/pt/tutorial/visao-geral-do-modulo-license-manager/) 

### Explain the security patch management process.

Our platform retailers are not responsible for any patches, as we have a management process that ensures that all business users are using the same version of the software. Operating system and application components, such as libraries, are updated frequently. VTEX manages software releases in major, minor, and patch updates. Patch updates and minor updates do not violate API contracts and therefore can typically be released to all VTEX customers without affecting features. Major updates are typically executed on a 1:1 basis using workspaces in VTEX IO, allowing retailers and our customer success team to work together to ensure that all changes are fully tested in a replicated environment. 

### Does the platform offer access blocking after denied access attempts?

Yes, account lockouts occur when multiple wrong attempts are made with the wrong password. This ensures that even weak passwords cannot be cracked by brute force. When an account is locked, the legitimate user can still log in using a login method other than username and password, for example by receiving a token in their email or using an integrated social login (Google, AppleID, etc.).

### Does the platform log off sessions due to inactivity?

The VTEX platform has an inactivity logout mechanism: a customer is logged out of the checkout environment automatically after 15 minutes of inactivity.
However, retailers can enable and configure these settings in the administrative portal.

### Is the platform monitored for performance evaluation? Which variables define the scalability of the platform?

The VTEX Platform is a SaaS (Software as a Service) solution and can be accessed using a standard web browser. VTEX is responsible for providing and periodicqally updating the solution with new features and fully monitoring its operation. In addition, there is a specialized team that ensures the potential scaling of the solution in seasonal or surge actions, and constant in-store performance monitoring based on proprietary heuristics.

### Does the platform restrict access to public internet IPs?

Access to the store administration portal (ADMIN) can be blocked to specific IPs if desired. The ecommerce store, meanwhile, is always open to the general public. 

### Does the solution work with secure protocol (HTTPS)?

The VTEX platform works with the secure HTTPS protocol. The protocol ensures that communication between system components remains protected and data is transported through a secure tunnel. 

### Does the solution use WAF?

Yes, the web front-end is protected by the WAF solution for tier 1 tenants (can be negotiated for smaller tenants). The rules are applied in blocking/registration mode. WAF is a service provided by CDN, CloudFront, and Azion. However, for the most crucial services, we have internal redundancy: anti-throttling code injection (JS, SQL, etc.) and session control. 

### Does the platform allow simultaneous user connection from different devices?

As VTEX is a SaaS (Software as a Service) platform with web browser access, it does not limit simultaneous connection on multiple devices, since the user may need to open the same page on more than one device at the same time for configuration and testing purposes. 

### Does the VTEX platform use the API First (Application Programming Interface) concept?

VTEX prioritizes API-first development, where all data transacted within the platform can be manipulated through APIs that follow the REST standard. Learn more about [VTEX APIs](https://developers.vtex. com/vtex-developer-docs/reference/get-to-know-vtex-apis).
VTEX not only follows best practices, but also has very well separated layers of back-end, APIs, front-end, and APP components. This ensures that each responsible part interacts only with its own layer, thus guaranteeing simplicity and agility, both in development and in evolution. Support documentation for the developer and the IT team can be accessed at our [Developer Portal](https://developers.vtex.com/) 

### Does the solution provide anomaly detections, i.e. has the ability to detect unusual behavior and possible malicious traffic, in addition to user account behavior? 

The availability of the platform is constantly monitored by our monitoring system. Our set of monitoring controls covers the entire platform and is connected 100% of the time to the systems to identify the most diverse types of anomalies. Monitoring is a gradual and constant job, so our monitoring team is always working to include new rules and new alerts. Some of these alerts are sent to our internal teams, some are sent directly to the store managers, and some are only registered and do not need to trigger an alert. Here is an example: 
- Failed login attempts are limited and logged, but no alerts are issued.
- The account owner receives an email when a user modifies administrator credentials. 

### Which tools are used to monitor the VTEX platform?

Internally, VTEX uses several tools to monitor all of its components, including Splunk, Honeycomb, AWS Cloudwatch, Grafana, and others. For external monitoring, we make available the status.vtex.com page. 

### Describe how the platform is monitored for performance evaluation and which variables define its scalability. 

We have several platform performance indicators that tell us when something might be wrong. Some examples are: measurement of CPU and server, response time of each request, and average sales volume. 

We constantly monitor these and several other indicators, and we have an artificial intelligence based on a proprietary heuristic that identifies and notifies our team whenever there is a deviation from the pattern.

To address these alerts, we have a team of engineers on call 24 hours a day, and they are called whenever a technical incident occurs. 

### Does the platform collect the users' geolocation? If yes, how?

VTEX does not natively track the location of the origin of purchases. The information collected is related to the address from which the orders are shipped and also the IP from which the request originates. 

### Does the platform provide segregation of environments for testing, development, or homologation, for example? Can it be used to manage the implementation of improvements to the solution?

To control the flow of content updates, VTEX offers the concept of workspaces. A workspace is almost a "staging" environment for the production environment. It is possible to create as many workspaces as needed to meet our customers' deploys. 
In addition, environments can be combined and set up A/B tests can be created natively in the platform. Learn more about [Creating a development workspace](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-development-workspace)
This service is only available for customers who have migrated to VTEX IO. For the older version we have the possibility to create a new test store environment. 

### Are the system logs protected against alteration, falsification, or improper access?

Our logs are collected and analyzed using a SIEM (Security Information and Event Management). Our applications have audit logs and collect relevant logs to be stored and correlated. These logs are maintained according to our standards and applicable laws. 
Platform events and authentication (login failures, successes, and lockouts) are logged according to regulatory, security, and privacy regulations, and for our internal analysis. 

## Log auditing
###  What is the minimum content of the logs that are recorded by the platform? 

All sensitive operations that take place on the platform have automatic logging and it is not possible to disable this feature. VTEX stores all error logs of the VTEX platform in SIEM (Security Information and Event Management) software, whose data is accessible by the VTEX team for analysis and product improvement purposes. In addition, VTEX monitors certain patterns in the application and infrastructure logs that indicate potential risk to system security, and alerts or even automatic countermeasures are issued when risk is identified. 

###  What is the minimum content of the logs that are recorded (date, time and time zone, user, IP address, etc.)?

All sensitive operations have automatic log generation and it is not possible to disable this functionality. VTEX stores all error logs of the VTEX platform in different auditing solutions, whose data is accessible by the VTEX team for analysis and product improvement purposes. VTEX has the possibility of extracting security report. The Security Report is where the changes (log) that affect the product master record are recorded. Its main function is to provide the shopkeeper with the possibility to check the author for certain changes in a specific period of time. VTEX maintains monitors for certain patterns in the application and infrastructure logs that indicate potential security risk to the system, issuing alerts or even automatic countermeasures when they are identified. 

### Explain which actions and events that occur on the platform are recorded via logs.

Each module of the platform has a dedicated development team that analyzes and decides what information is important enough to be recorded. This includes important or sensitive events, such as purchases made at the storefront, actions taken by the shoppers, changes to profile information, etc. 

### Please provide technical details on how VTEX customers can get real-time access to all platform logs. 

VTEX does not provide access to internal systems in order to protect the privacy and security of its customers and to maintain compliance with current regulations and legislation. 
However, our customers can request logs for specific events on a case-by-case basis or they can also implement a reverse proxy layer before VTEX to get more visibility into the requests that are coming into their environment. 

### In the event of an incident or security breach in the solution, what is the best method or point of contact for reporting and gathering information about the incident? 

VTEX system logs are not directly accessible to tenants in order to ensure the privacy and security of all tenants. In the event of a security incident, all relevant logs are manually collected and filtered, and then shared with the affected tenants. Logs can also be requested by tenants on a case-by-case basis.
If a tenant wants a more practical approach to security, they can implement the reverse proxy, which will give them direct access to the connection logs in their environment. 

## Secure development
### What are the best security practices for development used by the company? 

The software life cycle is supported by highly automated processes. Whenever a development team considers that it has a ready version of a component for which it is responsible, this version is marked with a TAG in the version control system (git). This triggers an automated deployment process, either to the BETA environment, where the next versions are tested, or to the STABLE environment, which is the actual production environment. In addition to BETA testing, which is performed by QA teams, but can also be performed by tenants, automated tests are updated to suit new features or situations. These tests are used to monitor possible regressions in the production environment by a new version or by possible infrastructure problems. 

### Are the development, staging/QA, and production environments fully segregated? Do in-house developers not have access to the production environment?

Yes, all environments are fully segregated. The production environment can only be deployed through the change management process, which is automated. 

### Are there security coding guidelines and standards used for application development? If yes, please describe them.

Yes, developers follow OWASP principles; and mandatory peer review ensures code quality and security. In addition, each production code is approved by at least two developers who have security expertise.  Therefore, VTEX engineers develop following OWASP Top 10 methods in order to prevent any malicious code. VTEX has a code scanning system in the repository. For more details about the process, please request the Platform Security Framework document 

### Does the company perform vulnerability analysis in libraries and software packages?

VTEX uses GitHub as source control system. The repositories are private. Adding and removing users from the organization is part of the hiring and firing processes of the programmers. Only VTEX developers have access to the code repositories. We use Git for source code control purposes and information about libraries and software packages. We also have static code scanning. 

## Data security
### Does the organization process personally identifiable information (PII)?

Yes, we process PII data. We currently perform encryption according to the requirements of privacy and compliance regulations related to PII and payment card data, which reinforces our commitment to GDPR compliance. 

### How is the traffic data protected? And at rest?

The credentials are stored in a one-way encryption format (commonly called hashes). We use a vector-based method called PBKDF2 based on SHA-256 to ensure that brute-force cracking is virtually impossible, as well as to ensure compatibility with any credential format that a tenant wants to import. The database containing the hashes is also encrypted with AES-256 and backed up daily to ensure integrity and availability. In transit, credentials are protected by industry-standard TLS 1.2 and connection with older, insecure encryption methods is denied. To keep sensitive data secure and meet certifications already made (e.g: PCI, SOC 2), VTEX stores and transports tenant data in an encrypted form at all times. All relevant systems perform automatic backups (daily by default, but can be more frequent depending on the system) to ensure data integrity and availability. Data in transit is secured using industry standard TLS 1.2, and data at rest is encrypted using AES-256 or RSA with keys 2048 or greater, depending on the criticality of the data.

### Please provide technical details about which ports and protocols the solution uses to transfer data and how each is secured.

VTEX does not transfer data via servers, so all our data is transferred via HTTPS over port 443. All sensitive data is stored with encryption. Data in transit is encrypted with TLS 1.2 and data at rest with AES-256 or RSA algorithm using keys of at least 2048 bits. 

### What are the capabilities of the solution for preventing data leakage?

We invest in preventive measures and methods that increase the security of our platform and the infrastructure that supports it. In addition, we constantly strengthen the management of accesses to the systems, especially to those that have sensitive data, and always adopt the least privilege possible. In addition, there are general guidelines that must be followed when operating in a regulated environment, such as with payment card data (PCI-DSS) and those to which data protection laws apply, and so on.
We analyze how information is handled from one environment to another, whether internal or external, and we always prevent people who do not need to know some information from having access to it, thus reducing the security perimeter. Other very present actions in our attempt to prevent data leaks are: we always make our professionals aware of good practices regarding information security, with constant training and education. We always try to automate process controls, as computers are much better at maintaining uniformity than people; Finally, we consider the process against data leakage as a living organism, which must be continuously updated as new risks or technological or strategic demands of the business arise. 

### Can you ensure that data does not migrate beyond a defined geographical region?

Currently, most of the data stored by VTEX is based on AWS us-east-1. This means that the customer cannot set the geographic region, but it also means that unless authorized by the customer, VTEX will not migrate the data outside of that region. It is also worth mentioning that we have recently implemented a second region in Europe to hosst data, not for all modules, but for the main ones that work with PII data.

Through a configuration in the store, we will know in which region the store data should be hosted.

