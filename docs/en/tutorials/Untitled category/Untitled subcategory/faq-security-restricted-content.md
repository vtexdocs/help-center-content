---
title: 'FAQ - Security (restricted content)'
id: 7AmPOGXykmE9SYyYDzdAZ4
status: DRAFT
createdAt: 2022-05-26T00:09:53.997Z
updatedAt: 2024-05-28T16:45:09.328Z
publishedAt: 
firstPublishedAt: 2022-06-02T18:56:44.116Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: faq-security-restricted-content
locale: en
legacySlug: faq-security-restricted-content
subcategoryId: unknown-subcategory
---

# FAQ - Security (restricted content)

>❗ Please do not share the information in this FAQ with users who do not have access to the VTEX Admin.

VTEX provides FAQ pages that address the main questions and answers concerning the platform's structure and security to assist in customer risk assessments. This content is restricted to users with access to the VTEX Admin. Public questions and answers are available in the Security FAQ in the VTEX Help Center.

Click the following topics to see the related questions and answers:

* [Risk management](#risk-management)
* [Access control, identification, and authentication](#access-control-identification-and-authentication)
* [Platform security](#platform-security)
* [Data security](#data-security)
* [Network security](#network-security)
* [Vulnerability management](#vulnerability-management)
* [Security monitoring](#security-monitoring)
* [Incident response and mitigation](#incident-response-and-mitigation)
* [Disaster recovery and business continuity](#disaster-recovery-and-business-continuity)

## Risk management

### How does VTEX manage cybersecurity risks on its platform and internal infrastructure?

VTEX conducts regular threat and vulnerability analyses of the platform and its operational processes and business. Identifying risks allows us to improve our monitoring and notification systems to deal with their eventual materialization. This can be done by notifying the people in charge of handling risks or triggering automated actions to mitigate or eliminate these risks.

### Does VTEX have a vendor risk management program?

VTEX has a robust third-party risk management process. This involves a thorough and ongoing evaluation of partners and providers to identify, analyze, and mitigate potential risks related to the activities performed by these external parties. This process aims to ensure security and compliance in all third-party interactions, thereby strengthening our organizational risk management posture.

To integrate into our ecosystem, we require third parties to implement appropriate security measures. This condition aims to ensure that all involved parties maintain high standards of information security, contributing to the integrity and reliability of our operational environment.

Learn more about our partners who act as subprocessors in our operational processes on the [Subprocessors](https://vtex.com/us-en/privacy-and-agreements/subprocessors) page.

## Access control, identification, and authentication

### Does VTEX have a password policy for employees? If so, what criteria are considered?

We have secure configurations and a robust password policy to access our internal systems, such as a minimum number of characters and special characters, password expiration, not using previous passwords, session control, inactivity, and more. See examples below:

* Passwords must be at least 16 characters long.
* Passwords must contain at least 1 uppercase, lowercase, numeric, and special character (`%`, `#`, `$`, `@`, `&`, among others).
* It's not recommended to use repeated numbers or letters, either in sequence or an obvious series, e.g., `aaaabbbb`, `12345678`, `asdfghjk`.
* Strong encryption must be used to render all authentication credentials unreadable during transmission and storage in all system components.
* The option to change password at first login must be enabled.
* Previous passwords should not be reused.

### Does the platform end the session due to inactivity?

The VTEX platform has an inactivity timeout mechanism. After 15 minutes of inactivity, customers are automatically logged out of the checkout environment.

## Platform security

### How does the platform store and maintain the user base? How are user credentials stored and protected?

VTEX platform passwords use a combination of hash and salt. We currently support SHA1 and PBKDF2 hash algorithms and add a salt at the beginning or the end for an additional layer of security. User emails are stored and logically separated based on specific store accounts and cannot be cross-accessed, even by VTEX employees. The databases containing the emails and hashes are fully encrypted using AES-256.

### How does the hardening process work?

VTEX consistently deploys its environments using the latest Amazon Machine Image (AMI) provided by AWS for each deployment service, including Elastic Beanstalk, OpsWorks, and CloudFormation. This allows us to leverage our security using the protection AWS has in place for instances deployed through its services. Additionally, we increase security configurations with our specific hardening processes tailored for each type of asset.

### What are the security capabilities of the infrastructure that hosts the platform?

The VTEX platform is a SaaS (Software as a Service) solution hosted in a highly controlled environment with numerous security measures. These measures include network protection, which involves filtering and protecting incoming and outgoing traffic, along with a Web Application Firewall (WAF) to protect internal assets, automated real-time monitoring, and environment alerts.

In addition, we implement baselines and asset hardening and establish both physical and logical access controls, among other necessary procedures. These measures aim to ensure continuous protection of the platform and compliance with the highest industry security standards.

## Data security

### How does VTEX prevent data leaking?

VTEX is committed to enhancing the security of our platform and supporting infrastructure through preventive measures and procedures. In addition, we constantly reinforce the control of access to systems, particularly those containing sensitive data, by adhering to the principle of least privilege. We strictly follow applicable guidelines in regulated environments, such as those involving payment card data (PCI-DSS) and mandated by data protection laws.

We analyze how information is transferred between environments, whether internal or external, ensuring that it is not shared unnecessarily, thus minimizing the security perimeter. Other actions to prevent data leakage are: we continuously educate our professionals on best information security practices through regular training and qualification; we automate process controls, as computers help us maintain control uniformity effectively; we constantly evolve our data leakage prevention process, regularly updating it to meet emerging risks and adapt to technological or strategic company changes.

## Network security

### Are internal production networks segregated in any way, for example, by restricting and/or filtering traffic between networks?

VTEX's production networks are completely isolated from external networks, creating a highly secure environment. Employees who manage these production environments may occasionally require a VPN (Virtual Private Network) connection to access them.

Externally, load balancers are the only components accessed via the DMZ (Demilitarized Zone). Meanwhile, the platform and database layers are housed in separate subnets distinct from the DMZ. These critical layers are fortified with additional security measures to ensure that only authorized personnel can access them. This network architecture provides an extra layer of protection, safeguarding VTEX’s sensitive data and systems from external threats.

### Does VTEX use network access protection through firewalls?

VTEX uses network access protection through firewalls. In addition to the local firewalls installed on the operating systems of the servers, VTEX has multiple layers of security in the AWS infrastructure.

We use AWS security groups, ELB (Elastic Load Balancing) configurations, and VPC (Virtual Private Cloud) routing to replicate firewall features across our systems. These measures are designed to ensure that only authorized traffic is permitted on our network, reinforcing the security of our data and services.

Since the deployment of our applications is automated and all logs are centralized, our team does not require daily direct access to the servers. Access to the production environment is typically managed via the AWS console or through our own web applications and APIs.

For an additional layer of security, our security groups and ELBs are configured to only allow HTTP and HTTPS access to ELBs that expose resources publicly. If a specific task requires additional access, it can be requested and temporarily granted in a controlled and secure manner. These practices guarantee the integrity and security of our network infrastructure.

### What controls does VTEX use to mitigate DDoS (Distributed Denial of Service) attacks?

VTEX employs a two-layer approach to defending against DDoS attacks. The first defense layer is at the CDN (Content Delivery Network) level, where security measures filter and block malicious traffic before it reaches our core infrastructure.

Additionally, we implement an adaptive limitation rule in the front proxy in each of VTEX's microservices.  This rule is crucial for detecting and limiting malicious or excessive traffic, which mitigates the impact of potential DDoS attacks.

VTEX also leverages [AWS Shield](https://aws.amazon.com/shield/), an Amazon Web Services service that offers additional protection against DDoS attacks. This multi-layered strategy significantly enhances VTEX’s ability to mitigate and respond to DDoS attacks, ensuring the continued availability and integrity of our services.

Beyond standard protective measures implemented by VTEX, customers can enhance the security of their stores by opting for a Web Application Firewall (WAF) through the VTEX Shield add-on product. The WAF provides an extra layer of protection, filtering and blocking malicious traffic before it can reach the stores. This customizable solution allows customers to adapt security measures to their specific needs, offering enhanced protection against cyberattacks. By choosing VTEX Shield, merchants ensure a comprehensive and proactive defense for their online stores and have peace of mind and confidence in their digital operations.

### Does VTEX have an IDS (Intrusion Detection System) and an IPS (Intrusion Prevention System)? If so, how often are the rules reviewed?

Yes, our solution includes both an IDS and an IPS.  These systems are crucial for detecting and preventing malicious activities within our network infrastructure and other systems.

We regularly review the IDS and IPS rules to align them with the latest recognized threats and vulnerabilities. This review occurs with considerable frequency and is an integral part of our security process. Our objective is to maintain the most current protection against new attack techniques and emerging vulnerabilities.

This ongoing practice of reviewing IDS and IPS rules reflects our commitment to the security and protection of our client data, ensuring that we stay one step ahead of the continually evolving cyber threats.

## Vulnerability management

### What is the timeframe for patching vulnerabilities?

Our vulnerability management procedure is carefully designed to ensure an effective approach to patching potential security flaws. We have established internal policies that determine the timeframe for patching, which varies according to the criticality and complexity of each identified vulnerability. This timeframe varies to ensure that the most critical and urgent vulnerabilities are addressed with priority, while less severe ones are managed appropriately without compromising system security. This approach allows us to efficiently manage security risks and maintain our systems protected against potential threats.

### Does VTEX allow customers to perform vulnerability checks through independent scans and penetration tests organized by an independent consultant?

VTEX instances are hosted on AWS infrastructure, which prevents personal audits of the systems. AWS adheres to rigorous [compliance programs](https://aws.amazon.com/compliance/programs/) to secure the hosted instances.

VTEX does not allow access to its facilities or files for auditing internal systems and procedures. Instead, VTEX obtains reports from a specialized, independent auditing company. To demonstrate commitment to privacy, security, compliance, and governance, VTEX shares relevant documents, policies, and certifications through a [security portal](https://vtex.com/us-en/trust/). As part of its ongoing commitment to security, VTEX is continuously pursuing new certifications.

Customers can conduct [vulnerability scans](https://help.vtex.com/pt/tutorial/testes-de-penetracao-e-aviso-de-vulnerabilidade--6jodF6s1I50Fg84ZwutOCb#reportar-vulnerabilidade) within their own environments under two conditions: the tests must not include actual attacks that could disrupt production systems, nor should they attempt to access data that does not belong to them.

### How is vulnerability management carried out? Is the process documented? To what extent are the identified vulnerabilities managed and patched?

Vulnerability scans are performed continuously, restricted to an authorized group of individuals using approved and dedicated systems. When vulnerabilities are detected in our systems or software, we initiate a patch management process to implement the necessary corrections. Our team coordinates all involved developers to reproduce the issues and, when necessary, develop the required security patches. After implementing the patches, we conduct further tests to verify their effectiveness. If the testing returns positive results, we close the case. If necessary, we conduct a detailed analysis similar to the problem management phase.

## Security monitoring

### Are system logs protected against modification, falsification, or improper access?

Our applications are equipped with audit logging systems that capture and store relevant logs to ensure compliance with both our internal standards and applicable regulations. Logs cover various events, including authentication details like login failures, successes, and account blocks, all in compliance with regulatory, security, and privacy requirements. They are fundamental to our internal analysis,  providing a complete and detailed record of all relevant activities on the platform. This ensures transparency, security, and compliance in our operations.

### Does VTEX log security events?

Our organization uses a tool to centralize activity logs and implement SIEM (Security Information and Event Management) features. Logs are generally kept for 18 months. We use both in-house and AWS-provided tools for continuous security analysis and vulnerability scanning in the cloud. These tools are used at least quarterly.

The VTEX team makes the solution available, keeps it updated with new features, and fully monitors its operation. In addition, we have a specialized team dedicated to scaling the solution during peak seasons or in response to surges in demand. This team also continuously monitors store performance using proprietary heuristics.

### Does VTEX protect its mail server against spoofing?

VTEX uses Google Workspace as its primary communication tool. To enhance the security of our email server against spoofing, we have implemented SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail). SPF allows us to specify a list of servers and domains authorized to send emails on behalf of our organization, while DKIM adds a unique digital signature to each message sent. These measures ensure that destination servers can authenticate the origin of the messages, offering an additional layer of protection against possible fraudulent activity. The VTEX Security team is the only one that manages these configurations.

### Are the endpoints protected with antivirus?

We have integrated robust antivirus technology across all our endpoints and servers. This measure is crucial for enhancing the security of our infrastructure and for protecting our clients' sensitive data and information. By making the installation of antivirus software on all devices and servers mandatory, we proactively mitigate potential cyber threats, ensuring a secure and reliable experience for everyone involved in our operations.

## Incident response and mitigation

### Does the incident response plan establish criteria for notification?

Yes, our operational protocols include our commitment to notify affected customers within a maximum of 24 hours after confirming any security incident. This measure is essential to ensure transparency and provide our customers with the information they need to take appropriate actions to protect their data and systems. In addition, by acting quickly to disclose information about security incidents, we demonstrate our ongoing commitment to cybersecurity and the trust of our clients.

## Disaster recovery and business continuity

### What are the set RPO (Recovery Point Objective) and RTO (Recovery Time Objective) for disaster recovery?

The RPO is the maximum age of backup data before it becomes obsolete, which directly correlates with the backup retention policy. At VTEX, the standard RPO is 24 hours. However, this timeframe specifically refers to the frequency of backups for Catalog. For transactional systems like Checkout, we implement strategies that can reduce the RPO to the last saved transaction.

The RTO is the maximum time allowed to restore services. Service downtime may result from application interruption, data corruption or loss, server failure, or interruption in the AWS availability zone or region. Check the standard RTO based on the type of downtime below:

| Downtime | Standard RTO |
|---|---|
| Application interruption | 10 minutes |
| Data corruption or loss | 30 minutes |
| Data server failure | 1 hour |
| Interruption in the AWS availability zone | 4 hours |
| Interruption in the AWS region | 24 hours |
