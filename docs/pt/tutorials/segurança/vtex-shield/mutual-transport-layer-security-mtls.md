---
title: 'Mutual Transport Layer Security (mTLS)'
id: 6YR3SoynJMfeEKGlY1Cqlo
status: PUBLISHED
createdAt: 2025-05-21T23:02:08.320Z
updatedAt: 2025-07-22T14:43:57.796Z
publishedAt: 2025-07-22T14:43:57.796Z
firstPublishedAt: 2025-05-21T23:17:03.123Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: mutual-transport-layer-security-mtls
legacySlug: mutual-transport-layer-security-mtls
locale: pt
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️  Esta funcionalidade faz parte do produto [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). Se já é cliente da VTEX e deseja adotar o VTEX Shield no seu negócio, entre em contato com o [Suporte Comercial](https://help.vtex.com/pt/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/). 

Em integrações entre sistemas, especialmente quando há troca de informações sensíveis ou controle de operações de negócio, garantir que ambas as pontas da comunicação sejam confiáveis é essencial. O mTLS é uma solução oferecida pelo [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh) que adiciona um nível avançado de segurança às integrações entre sistemas externos e a VTEX.

## Conceitos-chave

Antes de entender como o mTLS funciona na prática, é importante relembrar dois conceitos fundamentais de integrações entre sistemas: a arquitetura cliente-servidor e o papel dos certificados digitais.

### Arquitetura cliente-servidor

Toda comunicação entre sistemas baseada em APIs segue, em essência, uma **arquitetura cliente-servidor**. Nessa arquitetura, um sistema (cliente) faz uma requisição, e o outro (servidor) responde. No modelo tradicional (TLS/HTTPS), apenas o servidor apresenta um certificado digital, que é verificado pelo cliente.

### Certificados digitais

Um certificado digital é como uma identidade eletrônica que um sistema usa para comprovar sua identidade durante uma conexão. Ele é emitido por uma Autoridade Certificadora (CA), que atua como uma terceira parte confiável que valida identidades digitais.

* O servidor apresenta seu certificado, e o cliente verifica se foi emitido por uma CA confiável.  
* No caso do mTLS, o processo é bidirecional: além do servidor, o cliente também apresenta o seu certificado, e o servidor verifica se ele foi emitido pela CA correta.

Essa troca mútua de certificados permite que ambos os lados da comunicação validem a identidade um do outro, aumentando significativamente a segurança da integração.

## Funcionamento do mTLS

Em vez de apenas criptografar o tráfego com base na autenticação do servidor (como no protocolo TLS padrão), o mTLS exige que cliente e servidor apresentem certificados digitais válidos.

Com o mTLS, apenas sistemas confiáveis possam se comunicar, reforçando a segurança das integrações e evitando acessos não autorizados. Ou seja, toda comunicação entre o um storefront headless e a VTEX ou entre um ERP e a VTEX, em qualquer direção, é protegida por autenticação mútua e criptografia, impedindo que conexões não autorizadas acessem dados sensíveis ou manipulem as informações trocadas.

O diagrama abaixo representa o fluxo de autenticação mútua utilizando mTLS, no qual cliente e servidor validam suas identidades antes de qualquer troca de dados:

![mtls-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/seguran%C3%A7a/vtex-shield/mutual-transport-layer-security-mtls_1.png)

1. O cliente inicia a conexão com o servidor.  
2. O servidor apresenta seu certificado TLS.  
3. O cliente verifica se o certificado do servidor é válido.  
4. O cliente, então, apresenta seu próprio certificado TLS.  
5. O servidor verifica o certificado do cliente.  
6. Após a verificação mútua, o acesso é concedido.  
7. A comunicação segue de forma criptografada e segura, com base na confiança estabelecida entre as partes.

### Fluxo do mTLS no contexto da VTEX

Entenda a seguir como o fluxo se aplica à comunicação entre os sistemas da VTEX e o os sistemas do lojista. Em alguns casos, a VTEX atua como cliente, e em outros como servidor.

| Sentido da requisição | Explicação |
| :---- | :---- |
| **Loja headless ou ERP/WMS → VTEX** | Quando uma requisição parte da loja para a VTEX, ela é roteada para um **proxy mTLS de entrada** localizado dentro da nossa VPC.<br><br>Esse proxy valida o certificado que acompanha a requisição, verificando se foi emitido pela CA da VTEX.<br><br>Somente após essa validação com sucesso a chamada é encaminhada aos microsserviços internos. |
| **VTEX → Loja headless ou ERP/WMS** | No caso da VTEX enviando uma requisição para a loja, o tráfego passa por um **proxy mTLS de saída** dentro da nossa VPC, que injeta o certificado emitido pela CA do lojista.<br><br>Isso permite que o ambiente do lojista verifique a autenticidade da requisição e aceite apenas conexões legítimas e seguras. |

## Vantagens

Os principais benefícios do uso do mTLS na VTEX são:

* **Autenticação mútua:** cliente e servidor validam a identidade um do outro antes de qualquer troca de dados, impossibilitando tentativas de acesso não verificadas.

* **Criptografia ponta a ponta:** todos os dados são criptografados, protegendo informações sensíveis de clientes e detalhes de transações contra interceptações.

* **Integração sem fricção:** os lojistas podem integrar o mTLS rapidamente com suas APIs de comércio e aplicações de terceiros, reduzindo complexidade e riscos.

* **Proteção flexível:** é possível habilitar mTLS apenas para as integrações desejadas, como provedores de pagamento ou ERPs, adaptando o nível de segurança conforme o caso de uso.

### Proteção contra ataques

Ao autenticar ambos os lados da conexão, o mTLS ajuda a prevenir ataques como:

* **Man-in-the-Middle (MitM):** também conhecido como “on-path”, ocorre quando agentes maliciosos se posicionam entre o cliente e o servidor para interceptar ou alterar comunicações. Com mTLS habilitado, os atacantes não conseguem se autenticar como cliente ou servidor, tornando esse tipo de ataque praticamente impossível.

* **Chamadas de API maliciosas:** o mTLS garante que chamadas de API sejam feitas apenas por usuários legítimos e autenticados. Isso evita que atacantes enviem requisições maliciosas com o objetivo de explorar vulnerabilidades ou manipular o funcionamento da API.

* **Ataques de spoofing:** atacantes podem tentar “falsificar” um servidor web para enganar um usuário (ou o contrário). Com a exigência de autenticação por certificados TLS de ambos os lados, esse tipo de ataque se torna muito mais difícil.

* **Credential stuffing:** cibercriminosos usam combinações de credenciais vazadas para tentar acessos não autorizados. Sem um certificado TLS emitido legitimamente, ataques de credential stuffing são ineficazes contra organizações que utilizam mTLS.

## Requisitos

Como o mTLS é uma proteção para integrações entre sistemas, a ponta oposta à VTEX precisa ser um outro sistema, por exemplo: um middleware que processa o frontend de uma integração headless, ou que processa chamadas para um ERP ou WMS.

Por isso, para utilizar o mTLS, a loja precisa cumprir com pelo menos um dos requisitos a seguir:

- Operar em um modelo headless, no qual todas as interações com a VTEX são feitas por meio de integrações baseadas em API.

  > ⚠️  O uso de mTLS não se aplica a implementações com storefront nativo, como [Store Framework](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2) e [Portal CMS Legado](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj). 

- Ter uma ou mais integrações via API com serviços externos (ERPs, WMS, sellers externos etc.).

### Requisitos adicionais para integrações com retorno da VTEX

Para qualquer situação em que a VTEX precise enviar requisições de volta ao ambiente do lojista, como em integrações com sellers externos ou fluxos de login, os requisitos a seguir se aplicam:

* O lojista deve possuir uma CA própria. Essa CA é responsável por emitir o certificado que a VTEX apresentará, permitindo que o lojista valide a autenticidade das requisições provenientes da VTEX.  
* O servidor do lojista deve estar configurado para exigir ou solicitar o certificado do cliente durante o *handshake* TLS. Isso normalmente é feito ajustando as configurações de SSL/TLS para habilitar a autenticação mútua. Dessa forma, garante-se que ambos os lados da conexão possam validar suas identidades antes da troca de qualquer dado.

## Modalidades de uso

O mTLS pode ser implementado de forma total ou apenas em integrações específicas, oferecendo flexibilidade conforme as necessidades de segurança da loja. Saiba mais a seguir sobre as modalidades disponíveis para contratação.

### mTLS com cobertura total

* Proteção abrangente por mTLS para todas as comunicações de entrada e saída entre a VTEX e o servidor de destino do lojista.  
* Garante que todas as trocas de dados sejam protegidas por autenticação mútua, assegurando a segurança de cada interação de API em todo o ecossistema.

### mTLS por integração específica

* Proteção mTLS apenas em integrações específicas, em vez de uma cobertura total da plataforma.  
* Protege conexões selecionadas com serviços externos, como ERPs, WMSs/TMSs, sellers externos e outros sistemas de terceiros.

## Saiba mais

* [VTEX Shield](https://help.vtex.com/pt/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
* [mTLS API](https://developers.vtex.com/docs/api-reference/mtls-api#overview)
* [Implementing Mutual Transport Layer Security (mTLS)](https://developers.vtex.com/docs/guides/implementing-mtls)
* [Revoking SSL private certificates when using Mutual Transport Layer Security (mTLS)](https://developers.vtex.com/docs/guides/revoking-ssl-private-certificates-when-using-mtls)
