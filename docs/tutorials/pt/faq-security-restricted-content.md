---
title: 'FAQ - Segurança (conteúdo restrito)'
id: 7AmPOGXykmE9SYyYDzdAZ4
status: DRAFT
createdAt: 2022-05-26T00:09:53.997Z
updatedAt: 2024-05-28T16:45:09.328Z
publishedAt: 
firstPublishedAt: 2022-06-02T18:56:44.116Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: faq-seguranca-conteudo-restrito
locale: pt
legacySlug: faq-seguranca-conteudo-restrito
subcategory: 
---

# FAQ - Segurança (conteúdo restrito)

>❗ Não compartilhe as informações desta FAQ com usuários que não possuem acesso ao Admin VTEX.

Para apoiar as avaliações de risco de seus clientes, a VTEX disponibiliza páginas de FAQ com as principais perguntas e respostas relacionadas à estrutura e à segurança da plataforma. Este conteúdo é restrito a usuários com acesso ao Admin VTEX. As perguntas e respostas de teor público estão disponíveis na [FAQ - Segurança](https://help.vtex.com/pt/tutorial/risk-assessment--4K97IpqkpCpDYsZOSxtfkX) no VTEX Help Center.

Clique nos itens a seguir para acessar as perguntas e respostas referentes a cada assunto:

* [Gestão de risco](#gestao-de-risco)
* [Controle de acesso, identificação e autenticação](#controle-de-acesso-identificacao-e-autenticacao)
* [Segurança da plataforma](#seguranca-da-plataforma)
* [Segurança de dados](#seguranca-de-dados)
* [Segurança de rede](#seguranca-de-rede)
* [Gerenciamento de vulnerabilidades](#gerenciamento-de-vulnerabilidades)
* [Monitoramento de segurança](#monitoramento-de-seguranca)
* [Resposta e mitigação a incidentes](#resposta-e-mitigacao-a-incidentes)
* [Disaster Recovery e continuidade de negócios](#disaster-recovery-e-continuidade-de-negocios)

## Gestão de risco

### Como a VTEX gerencia os riscos de segurança cibernética na plataforma e infraestrutura interna?

A VTEX realiza análises regulares de ameaças e vulnerabilidades na plataforma, nos processos operacionais e no negócio. A identificação de riscos desencadeia o aprimoramento de nossos sistemas de monitoramento e notificação para lidar com sua eventual materialização, seja notificando as pessoas aptas a tratá-los, seja acionando ações automatizadas que possam mitigá-los ou eliminá-los.

### A VTEX tem um programa de gerenciamento de risco do fornecedor?

A VTEX possui um processo robusto de gestão de risco em relação a terceiros. Isso envolve uma avaliação criteriosa e contínua dos parceiros e fornecedores, visando identificar, analisar e mitigar potenciais riscos associados às atividades desempenhadas por essas partes externas. Esse processo tem o objetivo de garantir a segurança e conformidade em todas as interações com terceiros, fortalecendo a postura de gestão de riscos da organização.

Para integrar-se ao nosso ecossistema, exigimos que terceiros adotem medidas de segurança adequadas. Essa condição visa assegurar que todas as partes envolvidas mantenham padrões elevados de Segurança da Informação, contribuindo para a integridade e confiabilidade do nosso ambiente operacional.

Caso deseje conhecer nossos parceiros que atuam como subprocessadores em nossos processos operacionais, visite a página [Subprocessadores - VTEX](https://vtex.com/br-pt/privacy-and-agreements/subprocessors).

## Controle de acesso, identificação e autenticação

### A VTEX detém uma política de senha para funcionários? Se sim, quais são os critérios considerados?

Adotamos configurações seguras e política de senha robusta para o acessos aos nossos sistemas internos, tais como quantidade mínima de caracteres e caracteres especiais, periodicidade para alteração das senhas, não utilização das últimas senhas, controle e inatividade de sessão. Confira exemplos a seguir:

* Comprimento mínimo de dezesseis caracteres.
* Devem ser formados a partir da combinação de caracteres alfabéticos, maiúsculos e minúsculos, numéricos e especiais (`%`, `#`, `$`, `@`, `&`, entre outros).
* Não devem ser utilizados números ou letras repetidos, em sequência ou formando séries óbvias, como, por exemplo, `aaaabbbb`, `12345678`, `asdfghjk`.
* A criptografia forte deve ser usada para tornar todas as credenciais de autenticação ilegíveis durante a transmissão e armazenamento em todos os componentes do sistema.
* A opção de troca de senha no primeiro login deve estar habilitada.
* As senhas usadas anteriormente não devem ser reutilizadas.

### A plataforma efetua log off da sessão por inatividade?

A plataforma VTEX possui mecanismo de logout por inatividade. Um cliente é desconectado do ambiente do checkout automaticamente caso haja 15 minutos de inatividade.

## Segurança da plataforma

### Como a plataforma armazena e mantém a base de usuários? Como as credenciais dos usuários são armazenadas e protegidas?

As senhas da plataforma VTEX usam uma combinação de hash e salt - atualmente suportamos algoritmos de hash SHA1 e PBKDF2 e usaremos um salt pré ou pós para uma camada adicional de segurança. Os e-mails dos usuários são armazenados e separados logicamente com base em uma determinada conta da loja, e não podem ser acessados, mesmo por funcionários da VTEX, de forma cruzada. Os bancos de dados que contêm os e-mails e hashes são totalmente criptografados com AES-256.

### Como funciona o processo de Hardening?

A VTEX sempre cria seus ambientes usando a AMI (imagem de máquina da Amazon) mais recente fornecida pela AWS para cada serviço de implantação, seja Elastic Beanstalk, OpsWorks ou simples Cloud Formation. Ao fazer isso, aproveitamos nossa segurança na proteção que a AWS já oferece para instâncias implantadas por seus serviços e complementamos as configurações de segurança com nossos processos de hardenização específicos para cada tipo de ativo.

### Quais são os recursos de segurança da infraestrutura que hospeda a plataforma?

A plataforma VTEX é uma solução SaaS (Software as a Service) hospedada em um ambiente altamente controlado, com uma variedade de medidas de segurança implementadas. Isso inclui proteção de rede, com filtragem e proteção do tráfego de entrada e saída, bem como o uso de um Web Application Firewall (WAF) para proteger os ativos internos, monitoramento automatizado em tempo real e alertas de ambientes.

Ademais, são realizadas ações como a implementação de baselines, a hardenização dos ativos e o estabelecimento de controles de acesso físico e lógico, entre outros procedimentos necessários. Essas medidas visam garantir que a plataforma esteja continuamente protegida e em conformidade com os mais elevados padrões de segurança da indústria.

## Segurança de dados

### Quais são as capacidades da VTEX para prevenção de vazamento de dados?

Investimos em medidas preventivas e métodos que aumentem a segurança da nossa plataforma e a infraestrutura que suporta a plataforma. Além disso, constantemente reforçamos o gerenciamento dos acessos aos sistemas, principalmente aos que possuem que possuem dados sensíveis, adotando sempre o mínimo de privilégio possível. Também, existem diretrizes gerais que devem ser seguidas ao operar em um ambiente regulamentado, como com dados de cartões de pagamentos (PCI-DSS) e aos aplicáveis às leis de proteção de dados, etc.

Analisamos a forma como as informações são tratadas de um ambiente para outro, seja interno ou externo, sempre focando na prevenção que pessoas que não precisam saber de algumas informações, continuem não cientes sobre, diminuindo o perímetro de segurança. Outras atuações bastante presente na nossa tentativa de previnir vazamentos de dados são: Estamos sempre conscientizando os profissionais com as boas práticas sobre segurança da informação, com treinamentos e capacitação constantes; Estamos sempre tentando automatizar os controles de processos, ou seja, os computadores são muito melhores em manter a uniformidade do que as pessoas; Por fim, consideramos o processo contra vazamento de dados como um organismo vivo, sendo continuamente atualizado conforme forem surgindo novos riscos, demandas tecnológicas ou estratégicas da empresa.

## Segurança de rede

### As redes internas de produção são segregadas de alguma forma, por exemplo, restringindo e/ou filtrando o tráfego entre as redes?

As redes de produção na VTEX são totalmente isoladas das redes externas, garantindo um ambiente altamente seguro. Os funcionários responsáveis pela operação dos ambientes de produção podem ocasionalmente precisar de uma conexão VPN (Virtual Private Network) para acessar essa rede.

Os Load Balancers são os únicos objetos acessados externamente através da DMZ (Demilitarized Zone), enquanto as camadas da plataforma e do banco de dados residem em sub-redes separadas da DMZ. Essas camadas são protegidas por medidas adicionais de segurança, garantindo que apenas usuários autorizados possam acessá-las. Essa estrutura de rede proporciona uma camada adicional de proteção, mantendo os dados sensíveis e os sistemas da VTEX seguros contra ameaças externas.

### A VTEX utiliza proteção de acesso às redes através de firewalls implementados?

A VTEX utiliza proteção de acesso às redes por meio de firewalls implementados. Além dos firewalls locais dos sistemas operacionais nos servidores, contamos com diversas camadas de segurança na infraestrutura da AWS.

Utilizamos AWS Security Groups, configuração ELB (Elastic Load Balancing) e roteamento VPC (Virtual Private Cloud) para obter funcionalidades de firewall em nossos sistemas. Essas medidas garantem que apenas o tráfego autorizado seja permitido em nossa rede, reforçando a segurança dos dados e dos serviços.

Como a implantação de nossos aplicativos é automatizada e todos os logs são centralizados, nossa equipe não precisa de acesso direto aos servidores diariamente. O acesso ao ambiente de produção é normalmente feito através do console AWS ou de nossos próprios aplicativos web e APIs.

Para garantir uma camada adicional de segurança, configuramos nossos Security Groups e ELBs para permitir apenas acesso HTTP e HTTPS para ELBs que expõem recursos publicamente. Caso seja necessário acesso adicional para alguma tarefa específica, podemos solicitar e disponibilizar temporariamente esse acesso de forma controlada e segura. Essas práticas garantem a integridade e a segurança de nossa infraestrutura de rede.

### Quais controles a VTEX utiliza para mitigar ataques DDoS (Distributed Denial of Service)?

Para mitigar ataques de negação de serviço distribuído (DDoS), a VTEX utiliza uma abordagem em duas camadas para defesa. A primeira camada está no nível de CDN (Content Delivery Network), onde são implementadas medidas de segurança para filtrar e bloquear tráfego malicioso antes que ele alcance a infraestrutura principal.

Além disso, uma regra de limitação adaptativa é implementada no proxy frontal que fica na frente de cada um dos microsserviços da VTEX. Essa regra ajuda a detectar e limitar o tráfego malicioso ou excessivo, reduzindo assim o impacto de possíveis ataques DDoS.

Além dessas medidas internas, a VTEX também se beneficia das proteções oferecidas pelo [AWS Shield](https://aws.amazon.com/pt/shield/), um serviço fornecido pela Amazon Web Services para proteção contra ataques DDoS. Essa combinação de estratégias em várias camadas fortalece significativamente a capacidade da VTEX de mitigar e responder a ataques DDoS, garantindo assim a disponibilidade e a integridade de seus serviços.

Além das medidas de proteção padrão implementadas pela VTEX para mitigar ataques DDoS e outras ameaças, os clientes têm a opção de reforçar a segurança de suas lojas contratando um [Web Application Firewall (WAF)](https://help.vtex.com/es/tutorial/web-application-firewall-waf--6BZYLlU03ws72iqIFF6jdn), através da aquisição do produto adicional [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). O WAF oferece uma camada adicional de proteção, ajudando a filtrar e bloquear tráfego malicioso antes que ele atinja a loja. Essa solução personalizada permite que os clientes adaptem as medidas de segurança de acordo com suas necessidades específicas e garantam uma proteção mais robusta contra possíveis ataques cibernéticos. Mediante a aquisição do VTEX Shield, os lojistas podem garantir uma defesa abrangente e proativa para suas lojas online, proporcionando maior tranquilidade e confiança aos seus negócios digitais.

### A VTEX possui IDS (Intrusion Detection System) e IPS (Intrusion Prevention System)? Se sim, com que frequência as regras são revisadas?

Sim, a solução da VTEX inclui IDS (Intrusion Detection System) e IPS (Intrusion Prevention System). Esses sistemas desempenham um papel fundamental na detecção e prevenção de atividades maliciosas em nossa infraestrutura de rede e sistemas.

As regras IDS e IPS são revisadas regularmente para garantir que estejam alinhadas com as últimas ameaças e vulnerabilidades conhecidas. Essa revisão é realizada com uma frequência significativa e é parte integrante de nosso processo de segurança. O objetivo é manter nossos sistemas atualizados e protegidos contra as mais recentes técnicas de ataque e vulnerabilidades emergentes.

Essa prática de revisão constante das regras IDS e IPS reflete nosso compromisso com a segurança e a proteção dos dados de nossos clientes, garantindo que estejamos sempre um passo à frente das ameaças cibernéticas em constante evolução.

## Gerenciamento de vulnerabilidades

### Qual é o tempo de correção de vulnerabilidades?

Nosso procedimento de gestão de vulnerabilidades é cuidadosamente elaborado para garantir uma abordagem eficaz na correção de potenciais falhas de segurança. Estabelecemos políticas internas que definem o tempo para correção, levando em consideração a criticidade e complexidade de cada vulnerabilidade identificada. Esse tempo varia para garantir que as vulnerabilidades mais críticas e urgentes sejam abordadas com prioridade, enquanto as menos graves possam ser tratadas de forma adequada, sem comprometer a segurança do sistema. Essa abordagem nos permite gerenciar de maneira eficiente os riscos de segurança e manter nossos sistemas protegidos contra possíveis ameaças.

### A VTEX permite que os clientes realizem verificações de vulnerabilidade através de scans, varreduras e pentest independentes pré-organizadas por um consultor independente?

As instâncias da VTEX são hospedadas na infraestrutura da AWS, o que impede a realização de auditorias pessoais nos sistemas. A AWS mantém [programas de conformidade](https://aws.amazon.com/compliance/programs/) rigorosos para garantir a segurança das instâncias.

A VTEX não autoriza o acesso às suas instalações ou arquivos para condução de auditorias nos sistemas e procedimentos internos. Em vez disso, a VTEX obtém relatórios de uma empresa de auditoria especializada e independente. Para demonstrar conformidade e comprometimento com a privacidade, segurança, conformidade e governança, a VTEX disponibiliza documentos, políticas e certificações em seu [portal de segurança](https://vtex.com/us-en/trust/). Como parte de seu compromisso contínuo com a segurança, a VTEX busca constantemente obter novas certificações.

Quanto às [varreduras de vulnerabilidades](https://help.vtex.com/pt/tutorial/testes-de-penetracao-e-aviso-de-vulnerabilidade--6jodF6s1I50Fg84ZwutOCb#reportar-vulnerabilidade), os clientes têm permissão para realizar tais testes em seus próprios ambientes, desde que sigam duas condições: não realizar ataques reais que possam derrubar sistemas de produção e não tentar acessar dados que não lhes pertençam.

### Como o gerenciamento de vulnerabilidades é realizado de forma concreta? O processo está documentado? Até que ponto as vulnerabilidades identificadas são gerenciadas e corrigidas?

As varreduras de vulnerabilidade são conduzidas de forma contínua, restritas a um grupo autorizado de indivíduos e utilizando sistemas aprovados e dedicados. No caso de identificação de vulnerabilidades no sistema ou software, empregamos um processo de gerenciamento de patches para realizar as correções necessárias. Nossa equipe coordena efetivamente todos os desenvolvedores envolvidos, ajudando na reprodução e, quando necessário, no desenvolvimento de patches de segurança. Após a implementação das correções, conduzimos testes adicionais para garantir a eficácia das soluções. Caso os resultados sejam positivos, encerramos o caso e, se necessário, realizamos uma análise detalhada semelhante à fase de Gerenciamento de Problemas.

## Monitoramento de segurança

### Os logs dos sistemas são protegidos contra alterações, falsificações ou acessos indevidos?

Nossas aplicações são equipadas com sistemas de registro de auditoria que capturam e armazenam logs relevantes, garantindo a conformidade com nossas normas internas e legislações aplicáveis. Esses registros abrangem uma variedade de eventos, incluindo autenticação (falhas de login, sucessos e bloqueios de contas), em conformidade com exigências regulatórias, de segurança e privacidade, além de serem fundamentais para nossas análises internas. Dessa forma, mantemos um registro completo e detalhado de todas as atividades relevantes na plataforma, garantindo transparência, segurança e conformidade em nossas operações.

### A VTEX registra eventos de segurança?

Nossa organização utiliza uma ferramenta para centralizar os registros de atividades, além de empregá-la para implementar recursos de SIEM (Security Information and Event Management). Os registros são geralmente mantidos por um período de 18 meses. Tanto soluções próprias quanto aquelas fornecidas pela AWS são utilizadas para análise contínua de segurança e para examinar vulnerabilidades na nuvem. Quando não ocorre de maneira contínua, a utilização dessas ferramentas é realizada no mínimo trimestralmente.

A responsabilidade de disponibilizar e manter a solução atualizada com novas funcionalidades é da equipe da VTEX, que também é encarregada de monitorar integralmente o funcionamento da solução. Além disso, contamos com uma equipe especializada que garante a capacidade de expansão da solução em períodos sazonais ou diante de um aumento na demanda, juntamente com um monitoramento constante do desempenho da loja com base em uma heurística própria.

### A VTEX protege seu servidor de e-mail contra spoofing?

A VTEX emprega o Google Workspace como sua ferramenta de comunicação primária. Com o objetivo de fortalecer a segurança do nosso servidor de e-mail contra a falsificação, implementamos medidas como o SPF (Sender Policy Framework) e o DKIM (DomainKeys Identified Mail). O SPF estabelece uma lista de servidores e domínios autorizados a enviar e-mails em nome da nossa organização, enquanto o DKIM adiciona uma assinatura digital única a cada mensagem enviada. Essas medidas garantem que os servidores de destino possam autenticar a origem das mensagens, oferecendo uma camada adicional de proteção contra possíveis atividades fraudulentas. Essas configurações são gerenciadas exclusivamente pelo time de Segurança da VTEX.

### Os endpoints são protegidos com antivírus?

Contamos com uma robusta tecnologia antivírus que integramos em todos os nossos endpoints e servidores. Esta medida é crucial para fortalecer a segurança não apenas da nossa infraestrutura, mas também para proteger os dados e informações sensíveis dos nossos clientes. Ao exigir a obrigatoriedade da instalação do antivírus em todos os dispositivos e servidores, estamos proativamente mitigando potenciais ameaças cibernéticas, garantindo assim uma experiência segura e confiável para todos os envolvidos em nossas operações.

## Resposta e mitigação a incidentes

### O Plano de Resposta a Incidentes determina critérios para notificação?

Sim, como parte de nossos protocolos operacionais, nos comprometemos a notificar os clientes afetados dentro de um prazo máximo de 24 horas após a confirmação de qualquer incidente de segurança. Esta medida é essencial para garantir transparência e fornecer aos nossos clientes as informações necessárias para que possam tomar as medidas apropriadas para proteger seus próprios dados e sistemas. Além disso, ao agir rapidamente na divulgação de informações sobre incidentes de segurança, demonstramos nosso compromisso contínuo com a segurança cibernética e a confiança dos nossos clientes.

## Disaster Recovery e continuidade de negócios

### Qual é RTO (Recovery Time Objective) e RPO (Recovery Point Objetive) para recuperação de desastres?

O Recovery Point Objective (RPO) é a idade máxima dos dados de backup antes de se tornarem obsoletos, estando diretamente vinculado à política de retenção de backup. O RPO padrão para a VTEX é de 24 horas. No entanto, é importante ressaltar que este tempo refere-se à frequência de backup do Catálogo, sendo que sistemas transacionais, como o Checkout, adotam abordagens que podem reduzir o ponto de recuperação para a última transação salva.

O Recovery Time Objective (RTO) é o tempo máximo permitido para que os serviços sejam restaurados. O tempo de inatividade de um serviço pode ser ocasionado por interrupção do aplicativo, corrupção ou perda de dados, falha do servidor ou interrupção na zona ou região de disponibilidade da AWS. Confira a seguir o RTO padrão por tipo de inatividade:

| Tipo de inatividade | RTO padrão |
|---|---|
| Interrupção do aplicativo | 10 minutos |
| Corrupção de dados ou perda de dados | 30 minutos |
| Falha no servidor de dados | 1 hora |
| Interrupção da zona de disponibilidade da AWS | 4 horas |
| Interrupção na região da AWS | 24 horas |
