---
title: 'Risk Assessment'
id: 4K97IpqkpCpDYsZOSxtfkX
status: PUBLISHED
createdAt: 2022-05-26T13:08:53.479Z
updatedAt: 2025-10-24T23:03:49.398Z
publishedAt: 2025-10-24T23:03:49.398Z
firstPublishedAt: 2022-05-26T13:17:48.374Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: risk-assessment
legacySlug: the-risk-assessment-process
locale: en
subcategoryId: vONCJSxwN5qZiElOEtKkH
---

Risk assessment is critical for a vendor risk management program that works. The process consists of third-party risk assessment questionnaires that aim to help an organization identify potential risks among third-party providers and partners.

The questionnaires are submitted to VTEX in order to:

* Check whether VTEX meets the security requirements set by the client.
* Share technical details about the security architecture.
* Assess potential platform risks.

To support risk assessments conducted by clients, VTEX provides FAQ pages answering the most frequent questions about platform structure and security.

Click the points below to go to the related FAQ:

* [Policies and compliance](#policies-and-compliance)
* [Security education and awareness](#security-education-and-awareness)
* [Asset management](#asset-management)
* [Data and privacy](#data-and-privacy)
* [Encryption](#encryption)
* [Access control, identification, and authentication](#access-control-identification-and-authentication)
* [Platform security](#platform-security)
* [Log auditing](#log-auditing)
* [Secure development](#secure-development)
* [Physical security and data centers](#physical-security-and-data-centers)
* [Vulnerability management](#vulnerability-management)
* [Incident response and mitigation](#incident-response-and-mitigation)
* [Disaster recovery and business continuity](#disaster-recovery-and-business-continuity)

Some security information is restricted to VTEX Admin users, and it's not available in the VTEX Help Center. To access the restricted information, enter your VTEX account name below:

<iframe src="https://vtexhelp.myvtex.com/insertaccountname?id=7AmPOGXykmE9SYyYDzdAZ4" title="Enter your account name and click the button." frameBorder="0" width="400" height="50"></iframe>

> ⚠️ If you are having dificulty accessing the FAQs, try installing the latest version of the app `vtex.admin-docs` using [VTEX CLI](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) and repeating the process.

## FAQ - Security

### Policies and compliance

#### Does VTEX have an information security policy? If yes, how often is it reviewed? Has the policy been distributed and communicated to the entire company?

VTEX takes a rigorous approach to information security, and through a document management process, the information security policy is reviewed annually. All employees formally accept the policy, which is communicated to the entire company through our internal channels. The policy follows security best practices that are aligned with the ISO/IEC 27001 standard and industry-recognized frameworks. It also meets the requirements of data protection laws and other VTEX obligations.

#### Are VTEX information security controls audited by third-party companies? What certifications does VTEX have?

VTEX, committed to transparency and excellence, regularly submits its information security controls to be audited by third-party professionals. Auditors are impartial and objective, which ensures a rigorous and unbiased assessment of the measures implemented by VTEX. This is important because it provides external validation for policies and procedures, ensuring they align with security standards, frameworks, and best practices. Third-party audits build trust with clients, partners, and other stakeholders and demonstrates the commitment VTEX has to upholding high information security standards. We currently hold the following certifications:

* SOC 1 Type 2: A report that that covers internal controls over financial reporting systems.
* SOC 2 Type 2: A report covering security, availability, integrity, confidentiality, and privacy.
* PCI DSS: A control validation of cardholder data to reduce credit card fraud.

These certifications are available on the [Compliance](https://vtex.com/us-en/compliance/) page of the [VTEX Trust Hub](https://vtex.com/us-en/trust/).

In addition, as a publicly traded company, VTEX is SOX (Sarbanes-Oxley Act) compliant.

#### Who is responsible for managing the VTEX information security program?

Our organization has executive leaders that oversee the information security program, as well as a data protection officer (DPO) who coordinates the privacy program. The teams, which include engineers and highly specialized information security analysts, are structured specifically to support the main security processes.

#### Are information security polices critically analyzed and maintained to comply with legal, regulatory, or contractual cybersecurity obligations? How often are they reviewed?

Our information security policies and procedures were designed based on industry best practices and guidelines, such as the ISO/IEC 27001 standard. We manage these resources through internal VTEX tools. Leaders and security experts review them annually.

#### How is the VTEX audit and certification calendar managed?

VTEX has a specialized security team dedicated to managing certifications to guarantee compliance with all necessary requirements. This team works to ensure that all applicable certifications are obtained and renewed in a timely manner, reinforcing our commitment with the highest security standards.

#### How many members does the information security team have?

The VTEX team includes managers, engineers, and analysts who are highly specialized in information security. Our team is structured and dedicated to supporting the main security processes. It's ready 24/7 and spread over different time zones, ensuring constant coverage beyond business hours.

In addition to the information security team, other VTEX teams have dedicated members who take part in the security processes, demonstrating the global commitment of our organization to data protection and integrity.

#### Are information security policies and controls contractually applied to third-party providers?

All providers and partners involved in processing our data, and that of our clients, are subject to contractual agreements that include security clauses. The agreements establish specific guidelines and requirements to guarantee appropriate data protection and ensure that all parties are committed to the highest information security standards.

Learn more about our [third-party infrastructure providers](https://vtex.com/us-en/privacy-and-agreements/subprocessors/).

### Security education and awareness

#### Does VTEX have processes and guidelines for information security awareness?

VTEX has different recurring information security trainings:

* Security onboarding for all new employees, covering topics such as security team structure, communication channels, guideline documents, policies, approved tools, and external obligations; as well as security best practices, secure passwords, social engineering, and document management.
* Monthly training on security best practices and tips for day-to-day activities.
* Monthly global meetings to discuss new information security topics, security control details and updates, and best practices.
* Periodic phishing tests, phishing reporting tool, and additional training for users who click the phishing simulations.
* In-person initiatives during events that cover security best practices and physical and technical controls.

We also have an information security and awareness guideline document that describes the initiatives mentioned above.

#### Is there technical training available for the security team?

There are internal training sessions related to secure development practices, information security controls, incident response, and other training opportunities that cover the technical context of security and privacy.

#### Does VTEX have an awareness program focused on malware protection and mitigation? Are employees trained on this subject?

The company has internal programs to raise awareness about malware and its potential consequences. Through internal communications and training, all VTEX employees are regularly informed about malware risks, how it can be installed on a device, and signs that a device is infected. If the presence of malware is suspected, employees are instructed to contact the appropriate team.

Additionally, protection is implemented through security tools that continuously monitor for malware.

In production environments, malware is actively monitored by anti-malware software installed in the instances. If malware is detected, the affected instance is terminated so that the automatic scaling processes can create a clean instance from scratch.

### Asset management

#### How does VTEX manage the most critical assets of the organization?

Assets are centrally managed through an inventory management system that stores and tracks owner, location, status, maintenance, and descriptive information for AWS-owned assets. Following procurement, assets are scanned and tracked, and assets undergoing maintenance are checked and monitored for ownership, status, and resolution.

#### How does VTEX manage asset inventory within the company?

VTEX is 100% cloud-based and is the largest AWS partner in Latin America. Therefore, it doesn't need to keep a physical asset inventory. For software inventory, we use AWS Systems Manager, which provides visibility into our AWS computing environment. At the corporate level, we use a dedicated solution to manage endpoints and apply security rules.

#### How does VTEX handle asset destruction and disposal (removable media, USB flash drives, etc.)?

Media storage devices used to store customer data are classified as critical and of high impact and are handled accordingly throughout their lifecycles. We have strict standards for installing, maintaining, and eventually destroying devices when they are no longer useful. When a storage device reaches the end of its useful life, it is decommissioned using techniques detailed in NIST 800-88.

### Data and privacy

#### Does the company have a data protection and privacy policy? If yes, how often is it reviewed? Has the policy been distributed and communicated to the entire company?

Yes, VTEX has data protection and privacy policies, which are reviewed annually. The internal and external privacy policies were distributed and communicated to the entire company through our internal announcements channel. The internal privacy policy is kept in our internal corporate document tool to facilitate open access by employees. Our [External Privacy Notice](https://vtex.com/us-en/privacy-and-agreements/external-notice/) can be found on the VTEX website.

#### Does the organization have a data protection officer (DPO) with the authority, mission, responsibility, and resources to coordinate, develop, and implement applicable privacy requirements and manage privacy risks through a privacy program?

Yes, VTEX has a DPO that coordinates the privacy program: Angela Fonseca (dpo@vtex.com).

#### What type of personal data does VTEX process on behalf of its clients?

As a data processor, VTEX processes personal data from shoppers only when necessary, in accordance with the requirements of each platform module in order to carry out ecommerce operations. The following list includes the personal data that VTEX may process:

* Name
* Email
* IP address
* Browsing data ([cookies](https://vtex.com/us-en/privacy-and-agreements/vtex-platform-cookies-information/))
* Cart details
* Order details and history
* Shipping address
* ID number (when required by the country where the store operates)
* Gift card history
* Abandoned cart
* [Conversation Tracker](/en/tutorial/conversation-tracker) chat
* Session passwords (encrypted)
* Generated tokens

The data list above is described in the [Data Processing Addendum (DPA)](/en/tracks/data-and-privacy--4Lc0i0an0DgnEtB0AUwlcq/5f8hTEw3xOALgqzus9VXKd#data-processing-addendum-dpa).

#### How does VTEX ensure compliance with the General Data Protection Regulation (GDPR) or the Brazilian General Data Protection Law (LGPD)?

VTEX is committed to be compliant with all applicable data protection regulations, including GDPR and LGPD. You can read more about our data protection policies, agreements, and compliance commitment on the [Privacy & Agreements](https://vtex.com/us-en/privacy-and-agreements/) page of our website.

Check our [Data Processing Addendum (DPA)](https://vtex.com/us-en/privacy-and-agreements/data-processing-addendum/) to learn how personal data is processed by VTEX.

#### What data subject rights does the VTEX platform guarantee?

VTEX acts as a data processor of end consumer data that is processed by our clients (merchants). Therefore, VTEX cannot handle data subject requests directly. If a data subject (or their representative) submits a request, VTEX will notify the merchant as indicated by the data subject.

As the controller, the merchant defines the legal basis and purpose of data processing. If you are unable to handle a request due to technical, contractual, or legal reasons, you can justify the reason for refusal.

If you would like help in exercising the data subject rights of one of your store customers, check [Erasing customer data](/en/tutorial/exclusao-de-dados-de-clientes--1R9Fn7A06Ifj4R9YD4JTKU).

#### Does VTEX have a data classification policy?

VTEX established a data classification policy to guide employees in correctly categorizing data based on sensitivity level. This policy aims to ensure data security, integrity, and confidentiality on VTEX, as well as help manage appropriate access to the data.

Our policy establishes the classification levels as public, internal, and confidential, and it specifies the security measures associated with each category.

#### How may data come into contact with third parties and outsourced or subcontracted projects? How are these interactions protected and monitored?

The VTEX infrastructure is completely reliant on third-party providers, which ensures external partners do not have access to tenant data. See the full list of subprocessors at [VTEX Subprocessors](https://vtex.com/us-en/privacy-and-agreements/subprocessors/).

Secure data processing and transmission to third parties is a key priority for VTEX. We use a comprehensive approach that combines advanced technology, rigorous security processes, and continuous employee training. Technical measures, such as robust encryption, are used to protect data during transmission and processing. Also, we have implemented strict information security processes and access controls to ensure that only authorized individuals have access to the data. Among other measures, we constantly invest in updates and improvements to ensure effective protection for the data that is shared with external partners. You can learn more about our current security measures in[ Security Practices](https://vtex.com/us-en/security/security-practices/).

#### Can you guarantee that data does not migrate beyond a defined geographical region?

Currently, most of the data stored by VTEX is based on AWS us-east-1. This means that the client can't define the geographical region. On the other hand, it also means that VTEX won't migrate the data outside that region unless it's authorized by the client.

#### Does VTEX use data anonymization?

VTEX has been using tokenization to anonymize data. This mechanism replaces any sensitive piece of data with a different value, ensuring the original data is completely unrecoverable.

#### What ports and protocols does VTEX use to transfer data? How are they protected?

VTEX doesn't transfer data through servers. All our data is transferred using HTTPS over port 443. All sensitive data is stored with encryption. Data in transit is encrypted with TLS 1.2; data at rest is encrypted using the AES-256 or RSA algorithms with keys of at least 2048 bits.

### Encryption

#### What are the encryption options in transit and at rest?

VTEX has defined encryption standards that apply to all clients for data at rest and data in transit. To meet the requirements of certifications such as PCI and SOC 2, VTEX keeps user data encrypted at all times, both in storage and in transit.

Data in transit is protected by the TLS 1.2 security standard. Connections that use older and less secure encryption methods are denied.

When working with storage or data at rest, VTEX can use one of the following algorithms to support applications that need to encrypt data:

* Two-way encryption
    * RSA with keys of 2048 bits or more
    * AES-256
* One-way encryption
    * PBKDF2 based on SHA-256

All relevant systems make automatic backups at a daily frequency by default, but this can be adjusted as necessary to ensure data integrity and availability.

#### Are the encryption keys stored in a secure place?

To guarantee a high level of security, the encryption keys are provided by the AWS service, which is recognized for its reliability and robustness in terms of security. Moreover, access keys are stored in a separate environment with adequate encryption to guarantee data confidentiality and integrity.

Login passwords are a good example: before being stored, passwords are hashed using PBKDF2 based on SHA-256. During this process, only the resulting hash value is stored, ensuring that the original passwords remain secure and are not directly accessible. These additional security measures guarantee sensitive data is protected and give users peace of mind about the confidentiality of their information.

### Access control, identification, and authentication

#### Does VTEX have a logical access management policy? Provide an overview of how your access management controls work.

VTEX manages logical access efficiently to guarantee adequate control and monitoring of access permissions to systems and data.

Our practices ensure compliance with security policies and include measures such as the principle of least privilege and segregation of duties, which means that users will only have access to the information they need in order to fulfill their specific responsibilities based on legitimate needs.

Our access revocation procedure is triggered immediately, with the direct involvement of the VTEX Security team.

In the corporate environment, we have an access management policy that was developed based on industry best practices, including implementing two-factor authentication to access our servers and VPN, when necessary.

#### How is access provisioning managed in VTEX internal systems?

In the corporate environment, a centralized team handles access management, from granting to revoking access. This team establishes metrics and executes the procedures.

Specific groups within this team are assigned to manage the critical systems of the company. When an employee needs access, they start the process through our centralized and automated digital service channel.

The request is then evaluated to make sure that the employee needs and should receive the requested access, going through several authentication, validation, and formal approval stages before being granted.

#### Does VTEX restrict access based on the principle of least privilege?

VTEX restricts access based on the principle of least privilege. This means that users are given only the [access permissions](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) that are strictly required to fulfill their responsibilities, minimizing undue risk of sensitive information and increasing the security of our systems and data.

#### What is the authentication and identity management architecture available on the VTEX platform like?

The VTEX platform has a ready-to-use identity solution called VTEX ID. We also support the integration of [external SSO identity providers](https://developers.vtex.com/docs/guides/login-integration-guide) in the Admin and on the store website.

The Admin uses [SAML 2.0](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2) as authentication protocol, which allows VTEX clients to integrate an existing identity provider using that standard. The store website can be integrated with external identity providers through the[ OAuth 2.0](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2) protocol.

We have an [access control](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) process that includes access to production environments and other related environments.

Below, we include links to more detailed technical content about our authentication controls:

* [Login integration guide](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide)
* [SAML 2 integration](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide-admin-saml2)
* [OAuth 2.0 integration](https://developers.vtex.com/vtex-rest-api/docs/login-integration-guide-webstore-oauth2)

#### What relevant authentication and identity management security resources are available on the platform? For example, password complexity, password reuse, session timeout, account blocking, password reset, and multi-factor authentication.

Passwords under VTEX ID have the following requirements:

* Minimum length of 8 characters + MFA token of 6 digits.
* Minimum of 1 upper case character.
* Minimum of 1 numeric character.
* Minimum of 1 special character.
* Must not match the last 4 previous passwords.

Merchants can choose to [enable password expiration](/en/tutorial/autenticacao--21CkKHLKP1o41lUpGhuRUs#aplicar-expiracao-de-senha) after a specific period of time for Admin users, which may be 15, 30, or 90 days.

Another option for merchants is to integrate an external identity provider, which would allow them to define their own custom password policies. Check[ Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) for more information.

If an account is blocked due to several incorrect password attempts (security measure), the legitimate user can still log in through other methods, such as an email token or [integrated social login](/en/tutorial/configurar-login-com-facebook-e-google--tutorials_513) (Google or Facebook), which prevents potential brute force attacks from exploiting weak passwords.

#### Does the VTEX platform offer single sign-on (SSO)?

As an additional layer of security, we offer the single sign-on (SSO) resource, available both on the store's VTEX Admin (admin environment) and on the actual storefront for customers.

Security Assertion Markup Language (SAML) has been adopted as the standard for exchanging authentication and authorization between domains. SAML 2.0, an XML-based protocol, facilitates SSO in web browsers. This protocol uses secure, digitally signed tokens, and encrypted messages to transmit data between trusted parties.

For more detailed information, see the [SAML 2 integration guide](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2).

#### Does the platform implement identification, access control, and segregation for client data through physical or logical controls?

VTEX keeps client data segregated through robust logical controls. All our applications are multitenant and require identifying the origin store in each request, recording all the specific information of each store with the corresponding ID. This allows us to have a server infrastructure that is completely shared between all our clients.

It's important to note that there is no integrated access method. Each client only has access to their own data, which ensures data security and privacy.

This approach allows a fast implementation of improvements and bug fixes and efficient scalability to meet the specific needs of each client while always maintaining security and resilience.

#### How is user access managed on the platform, including moving, adding, editing, and deleting accounts?

Admin users are managed directly in the VTEX Admin. They are assigned roles that can contain one or more [permissions](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3), which are established by the account's [sponsor user](/en/tutorial/what-is-the-sponsor-user--3oPr7YuIkEYqUGmEqIMSEy) or by users that have the [User Administrator - RESTRICTED](/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) role or a customized role containing the Save User [resource](/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3). Learn more in the article [How to manage users](/en/tutorial/managing-users--tutorials_512).

#### Does the platform have features for managing, organizing, and customizing store management permissions?

Every action on VTEX, such as accessing a page in the Admin or making an API call, is made through a request to our infrastructure. To ensure the security of these operations, we have a system, **License Manager**, that checks whether a user has the right permissions to perform an action. License Manager is based on resources and roles to simplify permission management.

A resource is an entity associated with an action or information within our infrastructure. For example, the Product management resource allows a user to access and edit product information in **Catalog**. For a detailed description of each available resource, see [License Manager resources](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

A [role](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) determines the set of resources accessible to a group of users on VTEX. Each administrative user can be associated with one or more roles. When creating a new role, you can use one of the [predefined roles](/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) provided by VTEX or [create a custom role](/en/tutorial/roles--jGDurZKJHvHJS13LnO7Dy), selecting each required resource.

### Platform security

#### Does the platform use Secure Sockets Layer (SSL) certificates?

Secure Sockets Layer (SSL) is a protocol developed to increase the security of data transmitted over the internet. SSL connections are particularly recommended for sending information such as credit card numbers, passwords, and any other sensitive data over the internet.

A merchant doesn't need to buy an SSL certificate. VTEX generate an SSL certificate for your store and guarantees its automatic renewal. The certificate is issued through Let's Encrypt and VTEX is responsible for creating it at the store's go-live. Learn more in[ Security certificate (SSL)](/en/tutorial/certificado-de-seguranca-ssl--tutorials_1308).

#### How are security patches managed?

Our clients are not responsible for applying patches. VTEX has a patch management process that ensures all tenants use the same software version.

VTEX manages software releases as major, minor, and patch updates. Patches and minor updates don't impact API contracts and can be released to all customers without affecting store operation.

Operating system and application components, such as libraries, are regularly updated and undergo rigorous security checks.

#### Is the platform monitored in terms of performance evaluation? Which variables define platform scalability?

The VTEX platform is a SaaS (Software as a Service) solution and can be accessed using any web browser. VTEX launches and updates the solution regularly with new features and fully monitors system health. In addition, specialized teams ensure platform scalability by constantly monitoring the performance of each store.

#### Does the platform restrict access to public internet IPs?

Blocking access to the store administrative environment (VTEX Admin) for specific IPs is possible. However, the store website is always open to the general public. To request specific blocking, please contact [Support](/en/support).

#### Does the solution use a secure protocol (HTTPS)?

The VTEX platform uses the secure HTTPS protocol, which ensures that communication between the system components is protected and that data is transmitted securely.

#### Does the solution use a Web Application Firewall (WAF)?

We offer a [WAF](/en/tutorial/web-application-firewall-waf--6BZYLlU03ws72iqIFF6jdn) solution as part of the [VTEX Shield](/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) add-on product. To learn more, check the WAF documentation.

#### Does the VTEX platform use an API-first approach?

VTEX prioritizes API-first development, and all data exchanged within the platform can be manipulated using APIs. Learn more about [VTEX APIs](https://developers.vtex.com/docs/api-reference).

VTEX segregates the backend, API, frontend, and component layers to ensure all interactions stay within their relevant layer. Developer support documentation is available on the [Developer Portal](https://developers.vtex.com/).

#### Does the solution provide anomaly detection, that is, does it have the ability to detect unusual behavior and potentially malicious traffic, as well as user account behavior?

The VTEX platform is constantly monitored by a monitoring system that is managed by the VTEX Security team. We have a comprehensive set of controls that covers the entire platform and is constantly connected to the systems to detect a wide range of anomalies. Monitoring is an ongoing and gradual effort, and the designated team is constantly working to add new rules and alerts.

Some of these alerts are forwarded to our internal teams, while others are directly sent to store administrators. Yet, other alerts are only logged and do not trigger notifications. For example, failed login attempts are limited and logged but don't trigger alerts. However, the account owner will receive an email if a user tries to modify administrative credentials.

The [VTEX Shield](/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) add-on product triggers additional alerts to increase security and allow more autonomy for merchants to set up their own monitoring.

#### How is the platform monitored in terms of performance evaluation? Which variables define platform scalability?

Our platform is equipped with various performance indicators that alert us to potential problems. Indicators include CPU and server memory metrics, request response time, and average volume of sales. We constantly monitor a number of indicators, including the ones mentioned above, with the help of proprietary artificial intelligence (AI)-based heuristics. The AI identifies and notifies our team if there is a deviation from the expected standard.

We have an engineering team available 24/7 to handle these alerts. The team is always on call and ready to act when technical issues arise, thus ensuring the stability and healthy operation of our platform.

### Log auditing

#### What is the minimum content of log entries recorded by the platform?

All sensitive operations on the platform are automatically logged, with no option to disable this feature. VTEX stores all platform error logs in a security information and event management (SIEM) system, which the VTEX team can access for analyzing and improving the product. In addition, VTEX monitors certain patterns in the application and infrastructure logs that may indicate a potential security risk in the system, triggering alerts or even automatic countermeasures when such patterns are identified.

Also, VTEX logs various operations, including author and timestamp, in[ Audit](/en/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA) — a module available in the VTEX Admin that allows searching and investigating log history using filters. Every platform module has a dedicated development team that analyzes and determines the information logged for it. Check the list of[ events available in Audit](/en/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ).

#### How can VTEX clients get real-time access to all platform logs?

VTEX doesn't grant access to its internal systems to protect the privacy and security of our clients, as well as to ensure compliance with applicable laws and regulations.

However, we provide logs containing different[ events](/en/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ) in[ Audit](/en/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA) and clients can request logs for specific events via[ Support](/en/support). Clients also have the option of implementing a reverse proxy layer before VTEX that would allow them greater visibility over the requests that reach their environment. This approach gives clients a more detailed and customized control over the data flow in their infrastructure, while maintaining privacy and security as required.

### Secure development

#### What secure development best practices does the company use?

The software development process goes through automated steps to ensure efficiency. When a development team completes a portion of software, it gets tagged in the version control system. This automatically triggers deployment in a test environment called `BETA` or in the real production environment, known as `STABLE`.

In addition to the tests experts or clients themselves run in `BETA`, automatic tests are updated to adapt to new changes in the software or infrastructure. These tests are key to detect problems that may arise in a new version or due to technical issues. This approach ensures the stability and quality of the software throughout its lifecycle.

#### Are the development, staging/QA, and production environments fully segregated? Are company developers excluded from access to the production environment?

Yes, all environments are fully segregated. Deployments to the production environment can only be made through the change management process, which is automated.

#### Are there secure coding guidelines and standards used for application development?

VTEX developers follow OWASP principles to ensure code quality and security. Peer review is mandatory, which adds another layer of quality assurance and security. Moreover, all production code has to be approved by at least two developers with security expertise.

VTEX engineers use the methods outlined in OWASP Top 10 to prevent malicious code insertion. To further increase security, VTEX has implemented a code scanning system in the repository, which is reviewed by dedicated security experts.

All team members are trained in secure development. Their knowledge is continually updated through periodic training and tests.

#### Does the company run vulnerability analysis in libraries and software packages?

Yes, VTEX has in place a vulnerability analysis process in libraries and software packages as part of its security practices. The analysis is run regularly to identify any vulnerabilities or security flaws in the libraries and packages used for software development. This proactive approach helps ensure that only secure components with no vulnerabilities are integrated into company systems, increasing the security of our solutions and protecting the data of our clients.

### Physical security and data centers

#### Does VTEX have security measures in place for the physical protection of devices and network equipment?

The VTEX platform is a SaaS (Software as a Service) solution hosted in a highly controlled and secure environment. As part of our risk management policy, the security practices and compliance of providers is periodically reevaluated. It's important to note that VTEX is a 100% cloud commerce solution, operating exclusively on Amazon Web Services (AWS) infrastructure. We don't have our own physical servers to provide services.

All data, our own and that of our clients, is hosted on AWS, one of the world's main infrastructure service providers on a public cloud. We have agreements with AWS to guarantee a baseline of physical security and environmental protection for the execution of our services. We recommend clients check the [physical security controls provided by AWS](https://aws.amazon.com/compliance/data-center/controls/?nc1=h_ls) as part of their due diligence when assessing data security on the VTEX platform.

#### How does VTEX apply physical security measures for data center protection?

VTEX is a company entirely based on cloud commerce, using Amazon Web Services (AWS) as our data center provider. AWS operates its data centers in compliance with [Tier III+ guidelines](https://aws.amazon.com/compliance/uptimeinstitute/?nc1=h_ls), ensuring a high standard of reliability and security.

Regarding office security, VTEX has offices in several parts of the world and applies strict physical security control in all facilities. This includes monitoring and access control in all offices, supervised by a professional security team. Physical access is strictly controlled at the building entrance through surveillance systems, such as turnstiles and other electronic devices. All authorized accesses are logged to ensure complete control over entries and exits.

In addition, our offices are equipped with closed-circuit television (CCTV) systems to ensure continuous surveillance and image recording in accordance with legal and compliance requirements. We also have advanced power controls and a fire suppression system installed that meet industry best practices to prevent power failures and surges, ensuring the safety and integrity of our physical facilities.

#### In which countries and locations are the data centers located?

VTEX mainly uses the following AWS data regions for the described purposes:

* AWS Northern Virginia: Primary data storage.
* AWS Northern California: Backup site.

### Vulnerability management

#### What is the frequency of the vulnerability scans run by VTEX?

Vulnerability checks are continually run. Each check has to be run again until it's approved with no issues found. An auditor will accept them during recertification periods.

#### Could product customizations or configurations made by clients introduce security vulnerabilities to the platform? If yes, how would such event be handled?

Merchants and any implementation agency hired by them can create customizations within their own environment. If a vulnerability is detected in the VTEX system, our security and development team will quickly take action to address the issue. Due to the customizable nature of the platform, the merchant and the implementation agency are responsible for handling vulnerabilities that may arise from customizations during development. For more information, check[ Responsibilities within the VTEX ecosystem](/en/tutorial/responsibilities-in-the-vtex-ecosystem--3vL9aWICDr3WR64DYi1fJ3#implementation-agencies).

### Incident response and mitigation

#### Do you have a formal incident response plan?

Yes, VTEX has a formal security incident response protocol that covers the key phases of the process: preparation, incident detection, containment, eradication, recovery, and post-incident activity. This procedure also includes an integrated communication plan that is applied during all phases of the response. Moreover, we have detailed playbooks to guide the service team. We also run gray box intrusion tests annually to continually assess and increase our security measures.

#### Does the company have a pentest calendar? What is the frequency of tests?

Pentests are conducted every six months at VTEX. We share the **Attestation of Penetration Testing** report for the latest penetration tests performed on our behalf by an independent, reputable and technically competent third-party security consultancy.

This is provided upon request, free of charge, by [opening a ticket to VTEX support](/en/tutorial/opening-tickets-to-vtex-support--16yOEqpO32UQYygSmMSSAM).

#### Does VTEX have an incident response procedure for data breaches that complies with personal data protection laws?

Yes, the VTEX security incident response plan covers incidents related to data breach and complies with personal data protection laws. It includes guidelines for the key phases of the process: preparation, incident detection, containment, eradication, recovery, post-incident activity. This procedure also includes an integrated communication plan that is applied during all phases of the response.

#### What controls does VTEX use to mitigate ransomware attacks?

VTEX takes a comprehensive approach to mitigate ransomware attacks through the use of advanced antivirus systems, firewalls, and content filters to block malware. In addition, we keep regular backups of critical data to allow recovery without complying with attacker demands. We prioritize security updates and employee awareness training, alongside constantly monitoring activities to detect suspicious behavior. All these measures combined create a robust defense against the growing threat of ransomware.

### Disaster recovery and business continuity

#### Does VTEX have a business continuity plan?

VTEX has a carefully designed business continuity plan to deal with the challenges that arise in emergencies. This plan establishes a solid foundation for quickly and effectively resuming normal operations, regardless of the nature of the emergency, ensuring a smooth transition and minimizing potential impacts.

#### Does VTEX have a disaster recovery plan?

VTEX has a disaster recovery plan focused on ensuring operational continuity and availability of critical resources during emergency situations. The plan covers detailed guidelines about how to act during unplanned incidents, classified as crises, which may arise from natural disasters, cyberattacks, or other disruptive events. It incorporates key recovery phases, including the definition of a recovery point objective (RPO) and a recovery time objective (RTO), as well as backup testing to ensure the plan is efficient and ready for real-life scenarios.

#### Does VTEX periodically test the disaster recovery plan?

The disaster recovery plan is tested at least once a year to ensure its effectiveness. We don't test the entire plan in a single event. Different components or processes that have independent lifecycles are tested based on their relevance and required frequency. However, all parts undergo an annual test.

If any part of the plan is deemed ineffective, a new version of the process is developed to address the problem. Traditionally, the events that precede Black Friday and Cyber Monday give us the ideal opportunity for conducting disaster recovery tests.
