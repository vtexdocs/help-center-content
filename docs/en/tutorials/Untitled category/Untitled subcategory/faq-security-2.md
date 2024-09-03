---
title: 'FAQ - Security 2'
id: 1ayXEtqawI9yuxFXutiITh
status: ARCHIVED
createdAt: 2022-05-26T13:33:48.633Z
updatedAt: 2024-05-28T16:48:10.138Z
publishedAt: 
firstPublishedAt: 2022-06-09T22:09:20.893Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: faq-security-2
locale: en
legacySlug: faq-security-2
subcategoryId: unknown-subcategory
---

# FAQ - Security 2

Tópicos:
- [Cryptographic controls](#cryptographic-controls)
- [Environment segregation](#environment-segregation)
- [Data classification and protection](#data-classification-and-protection)
- [Network security](#network-security)
- [Security architecture](#security-architecture)
- [Physical security and data center](#physical-security-and-data-center)
- [Vulnerability management](#vulnerability-management)
- [Security monitoring](#security-monitoring)
- [Incident response and mitigation](#incident-response-and-mitigation)
- [Disaster recovery and business continuity](#disaster-recovery-and-business-continuity)

See more topics in the part 1 of this FAQ. Insert your [VTEX account name](https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC) below to access the documentation.
<iframe src="https://help.vtex.com/insertaccountname?id=7AmPOGXykmE9SYyYDzdAZ4" title="Insert your account name and click the button." frameBorder="0" width="400" height="50"></iframe>

## Cryptographic controls
### Please provide a list of all configurable encryption options and the encryption levels allowed by the solution.

VTEX has encryption standards for all its customers for both data at rest and data in transit. Data in transit requires TLS 1.2 or higher to ensure that only secure encryption methods are used. This channel is the best option to protect this type of information, as this approach simplifies implementation by not placing too much responsibility on customers who may vary from heavy ​server-side services to lightweight browser JavaScript applications. When working with storage or data at rest, VTEX may use one of the following algorithms to support applications that need to encrypt data:
- Bidirectional encryption
RSA with 2048-bit keys
AES-256

- One-way encryption
PBKDF2 based on SHA-256 

### Are the encryption keys stored in a secure place? 

Encryption keys are provided by the AWS service. Access keys are stored in a segregated environment with proper cryptographic protection. For example, login passwords have their hash calculated (PBKDF2 algorithm based on SHA-256) and only this value is stored. 

## Environment segregation
### Is there segregation of environments within the company? 

Our environment is a multi-tenant cloud environment that serves different features and modules of our platform. The platform implements a high-level process and architecture for logical segregation, which means that, under common circumstances, software, information, and data provided by the customer are not shared with each other. In terms of production x stage x pre-production and/or other environments, applied to different stages of our DLC, we maintain segregated environments at the account level. In addition, VTEX operates 100% on the AWS cloud. Our infrastructure is segmented through VPC (Amazon Virtual Private Cloud) subnets, Security Groups, and ACLs. Furthermore, any access to the production environment is done through a VPN (Virtual Private Network). 

## Data classification and protection
### Does VTEX use data anonymization? 

Regarding data anonymization, VTEX has been using tokenization as a mechanism to replace any sensitive data for another value. Basically, the original data is completely unrecoverable. 

## Network security
### Are internal production networks segregated in any way, for example by restricting and/or filtering traffic between networks? If yes, please explain.

Production networks are completely isolated from external networks. VTEX employees responsible for operating production environments may require a VPN (Virtual Private Network) connection to access the production network. External access load balancers are the only objects accessed through the DMZ and the platform and database layers reside on subnets separate from the DMZ and have layers of protection. 

### Does VTEX use network access protection through implemented firewalls? 

Yes, in addition to the local operating system firewalls on the servers, we rely on AWS Security Groups, ELB configuration, and VPC routing to achieve firewall functionality. As the deployment of our applications is done automatically and all logs are collected and concentrated, even our staff does not need daily access to our servers. Regular access to the production environment occurs via the AWS console or our own web applications and APIs. For this reason, our security groups and ELBs are configured to only allow HTTP and HTTPS access for ELBs that expose any published resources. When additional access is eventually required, it can be requested and made temporarily available for the specific purpose. 

### Please define the controls used by VTEX to mitigate DDoS (Distributed Denial of Service) attacks.

The defense against DDoS and brute force attack happens in two layers. It consists of a CDN-level layer and an adaptive limiting rule that is implemented in the front proxy in front of each of the VTEX microservices. DDoS attacks are also mitigated by AWS shield. 

### Does the solution have IDS and IPS? If yes, how often are the IDS/IPS rules reviewed?

We use the Lacework tool as our IDS/IPS solution. The tool is not rule-based, but performs intrusion detectionusing machine learning. Lacework's approach is based on generating templates based on common access (which occur on a daily basis) and notifying in case of "different" accesses. Thanks to this, we do not need to create rules: they are created automatically given the use of the platform. 

### How does the hardening process work? 

VTEX always builds its environments using the latest AMI (Amazon Machine Image) provided by AWS for each deployment service, whether Elastic Beanstalk, OpsWorks or simply Cloud Formation. In doing so, we leverage the security protection AWS provides for instances deployed by its services and complement the security configurations with our asset-specific hardening processes. 

## Security architecture 
### Please provide technical details on the security resources of the infrastructure hosting the platform. 

The VTEX platform is a SaaS (Software as a Service) solution and is hosted in a controlled environment with regulated security controls, which include: nettwork protection (inbound and outbound traffic filtering and protection, WAF, automated real-time monitoring and environment alerting), baseline, asset hardening, physical and logical access controls, and all others required to ensure that the platform is increasingly secure and compliant.  

### Please explain how the initial security configuration of the solution works.

By default, the environment and deployed instances that will receive tenant requests will already be protected because they are shared among all tenants and deployed according to our automated process.
The configuration of the tenant's environment can also affect security, and documentation is available to ensure that the proper settings are applied at our [Help Center](https://help.vtex.com/).  

### Does VTEX have security measures in place for the physical protection of network devices and equipment? 

VTEX is a 100% cloud commerce company (AWS) and does not have physical servers/machines to provide services.
Our data and that of customers is hosted on Amazon (Amazon Web Services), a public cloud infrastructure service provider. VTEX has agreements with these providers to ensure a baseline of physical security and environmental protection to run our services. You can view all of the physical security controls offered by AWS at the [AWS data center control portal](https://aws.amazon.com/pt/compliance/data-center/controls/). 

## Physical security and data center
### How does VTEX apply physical security measures for data center protection?

VTEX is a 100% cloud commerce company that uses AWS as its data center provider. AWS operates its datacenters in accordance with Tier III+ guidelines (https://aws.amazon.com/pt/compliance/uptimeinstitute/). About office security: VTEX has offices all over the world. We have physical security control, such as monitoring and access control at all VTEX offices. Physical access is controlled at building entry points by professional security equipment using surveillance systems, such as access turnstiles and other electronic means. This equipment registers the exits and entrances of authorized persons through logs.

Our offices have closed-circuit television (CCTV) cameras. Images are kept following legal and compliance requirements. We also have power and fire suppression controls aligned with industry-leading measures to help prevent outages and power surges. 

### In which countries and locations are the data centers located?

VTEX primarily uses the following data regions within AWS for each respective purpose:
 - AWS Northern Virginia: primary data storage.
 - AWS Northern California: backup location. 

## Vulnerability management
### Does VTEX allow customers to perform vulnerability checks through independent scans, scans, and pentests pre-arranged by independent consultants?

Because VTEX instances are hosted on the AWS infrastructure, it is not possible to personally audit the systems. AWS has several [compliance programs](https://aws.amazon.com/compliance/programs/) that ensure instances are kept in a secure environment. VTEX does not allow access to facilities and files for the purpose of conducting audits of internal systems and procedures. VTEX relies on reports prepared by an independent audit company. To demonstrate the company's compliance and commitment to privacy, security, compliance, and governance, documents, policies, and certifications are available at: https://vtex.com/us-en/trust/. In addition, reinforcing its commitment to ensure a secure infrastructure for its customers, VTEX is always seeking new certifications.

Regarding vulnerability scans, the customers can perform such tests in their environment at any time, as long as two conditions are met:
- The customer cannot use real attacks to attempt to take down production systems;
- The tenant may not attempt to access data that does not belong to them. 

### VTEX regularly performs vulnerability scans. How often are they performed?

Vulnerability checks are performed regularly. Each one must be repeated until they are approved with no problems in order to be accepted by the auditor during our recertification periods. 

### Please explain the process for disclosing platform vulnerabilities to customers, in particular how and when customers are notified and what information is shared.

VTEX has a documented vulnerability management plan that includes automated alerts and on-call engineers to mitigate any issues that arise. In addition to immediate mitigation, all details related to an incident will be collected and shared with affected tenants as soon as possible, including a timeline of events, actions taken, and potential risks. 

### What is the vulnerability remediation timeframe?

Our vulnerability management procedure establishes a remediation timeframe that varies according to the criticality of the vulnerability. 

### How is vulnerability management carried out? Is the process documented? To what extent are the identified vulnerabilities managed and corrected? 

Vulnerability scans are performed regularly, restricted to an authorized number of people, and use approved, dedicated systems. System and software vulnerabilities are fixed using a patch management process. The team ensures coordination between all developers involved and helps to reproduce and, if necessary, develop a security patch. After implementation, another test is performed to ensure that the fix is effective. If positive results are obtained, the case is closed and, if necessary, an analysis is created similar to the problem management phase. In addition, our customers can perform vulnerability scans whenever they deem necessary and share the result with VTEX to help mitigate the vulnerabilities found. The exact time required varies according to the vulnerability. Some sensitive systems also have IDS and antivirus for incident detection and management. Many retailers also order their own penetration tests regularly, which means that the VTEX platform is thoroughly tested several times a month. After pentesting, we carry out action plans to mitigate any issues. 

### Please explain the vulnerability disclosure process of this solution for customers, in particular how/when are customers notified and what information will be shared?

VTEX has a documented vulnerability management plan that includes automatic alerts and on-call engineers to mitigate any issues that arise. In addition to immediate mitigation, all details related to an incident are collected and shared with the affected tenants as soon as possible, including a timeline of events, actions taken, and potential risks. 

### Could customizations or product configurations performed by customers introduce security vulnerabilities into the platform? If yes, how are these eventualities managed?

Customers can perform any type of customization and/or adaptation of the platform in their environment. 
Vulnerabilities involving VTEX systems are handled in an agile manner by our security and development team. It is worth mentioning that, since the platform is customizable, vulnerabilities involving customizations made during platform development are the responsibility of the customer. 

### Does VTEX have a business continuity plan? 

VTEX has a business continuity plan designed to prepare the company to deal with the effects of an emergency. The goal is that this document will provide the basis for a relatively quick and easy return to the ordinary operation of our business, regardless of the cause. 

## Security monitoring 
### Does the company keep logs of access requests?

All changes to the production environment are authenticated, logged, and audited via AWS Cloudtrail. We have an access management process that includes access to production and related environments. Other security baselines, such as segregation of environments and two-factor authentication are part of some systems and are being extended to all VTEX systems.

### Does the company record security events?

We use a tool to centralize logs, and also as a way to implement SIEM features. Logs are usually kept for 18 months. We use both in-house and AWS solutions as tools for continuous security analysis and vulnerability analysis in the cloud. When not continuous, the use of these tools takes place at least quarterly. VTEX is responsible for providing and regularly updating the solution with new features and fully monitoring its operation. In addition, there is a specialized team that ensures the potential scaling of the solution in seasonal or surge actions, and constant in-store performance monitoring based on proprietary heuristics. 

### Is the mail server protected against spoofing?

VTEX uses Google Workspace as a communication tool. To protect our mail server from spoofing, we configured both SPF, which specifies the servers and domains that are authorized to send emails on behalf of our organization, and DKIM, which adds a digital signature to every message sent. In this way, the destination servers can confirm that the message came from our organization. 

### Is antivirus used in the corporate environment?

Yes, we have antivirus technology and it is required on all endpoints and servers in order to ensure our security and that of our customers.  

### Is there a formal incident response plan?

Yes, VTEX has a documented security incident response procedure that covers the main stages of the process: preparation, incident identification, containment, eradication, recovery, and post-incident. The procedure also provides for a communication plan that applies to all response stages. We also have assistance playbooks and annual intrusion testing (gray box).

## Incident response and mitigation
### Does the incident response plan require that third party be notified when unauthorized access to the systems and data with scope is confirmed?

Yes, we have a 24-hour notice period to notify customers affected by security incidents. 

### Does the company have a penetration testing schedule? How often is testing carried out?

Pentests are performed on an annual basis within the company. In addition, customers have the right to perform penetration tests and vulnerability scans in their environment whenever they wish, provided that this is notified in advance. You can then share the results with VTEX so that we can address any potential issues. For security reasons we do not share the results of our pentests.  

### Does VTEX have an incident response procedure related to data leakage that complies with personal data protection laws?

 VTEX has an internal personal data incident response procedure implemented. It determines the rules for the detection, verification, investigation, classification, notification, and remediation of such incidents. 

### Please define the controls used by the company to mitigate ransomware attacks

We use several monitoring solutions that generate alerts that are monitored 24 hours a day by a qualified and trained team so that any necessary mitigation can be executed at the very moment a suspicion is identified. In addition, we perform vulnerability scans in our environment on a quarterly basis and commission an annual penetration test witih the goal of mitigating vulnerabilities. For ransomware, specifically, we also employ security backup strategies. 

### What measures are taken in the event of a customer's credentials being stolen (detection, revocation, evidence to act)?

As soon as we detect a potential incident, we have professionals who are always ready to assist the customer who has been harmed by the incident, and we promptly implement internal actions related to the type of incident (incident classification, response plan, communication plan, etc.). This is possible because we have an on-call security team available 24 hours a day in different time zones. 

### How are incidents handled in terms of communication with customers (email, phone, web portal)?

We have an incident response procedure. We act quickly and effectively so that our customers' services are not unavailable. We inform our customers through the VTEX portal and, in exceptional cases of greater attention, by means of a post-incident statement. 

## Disaster recovery and business continuity
### Does VTEX have a disaster recovery plan?

VTEX has a Disaster Recovery plan focused on ensuring continuity of operations and availability of critical resources in the event of a disaster. 
Our plan contains instructions on what actions to take and how to respond to unplanned incidents characterized as a crisis. These incidents can be related to natural disasters, cyber attacks, and any other disruptive events. Our plan has important recovery steps such as defining RPO and RTO indicators and backup testing. 

### What are the RTO (Recovery Time Objective) and RPO (Recovery Point Objective) for disaster recovery?

RPO is the maximum age of backup data before it is no longer useful. It is directly related to the backup retention policy. The reference RPO for VTEX is 24 hours. However, this timeframe is the general RPO for the platform and refers to the frequency of product catalog backups. Transactional systems, such as Checkout, use approaches that can take the recovery point to the last saved transaction. RTO is the maximum time that must elapse for normal services to resume. Service downtime can be related to application outage, data corruption or loss, data server failure, or disruption of the AWS availability zone or region. The baseline RTO for VTEX is:
- Application outage: 10 minutes.
- Data corruption / data loss: 30 minutes.
- Data server failure: 1 hour.
- AWS availability zone outage: 4 hours.
- AWS region outage: 24 hours. 

### What are the technologies used in VTEX for proper monitoring and alerts in case of an unavailability in the platform?

We are a 100% cloud trading platform hosted on AWS. In our disaster recovery architecture, we have established a dependency relationship with the cloud provider. To support us in the DR process, we have VTEX Healthcheck, a bot that acts as a store customer, browsing and shopping through different usage scenarios. Therefore, our monitoring technology with VTEX Healthcheck helps us identify potential failures and unavailability. If more than three consecutive failures occur, our alerts are triggered and the responsible teams act to verify and identify the cause.
Besides, we have an additional layer, VTEX Store Dash, which monitors the actual browsing and order data collected from all stores served by VTEX. A sudden drop in the orders per second counter indicates a possible problem with the platform and alerts are triggered for the teams in charge to perform a verification. 

### Does VTEX periodically test the disaster recovery plan? 

The disaster recovery plan is tested at least once a year so that it is effective when needed. It is not necessary to test the entire plan in a single event. Different components or processes with independent life cycles can be tested according to their relevance and necessary recurrence. However, each of these parts should be tested at the required annual frequency. If any part of the plan proves ineffective, a new version of the process should be developed to fix the problem. THe events leading up to Black Friday and Cyber Monday are the usual opportunity to perform disaster recovery testing routines.

