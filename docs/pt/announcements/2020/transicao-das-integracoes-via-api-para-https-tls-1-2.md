---
title: 'Transição das integrações via API para HTTPS / TLS 1.2 '
id: 50H4bHnV1uk2GCY3CaJBXo
status: CHANGED
createdAt: 2020-07-10T20:32:32.971Z
updatedAt: 2021-11-17T17:58:32.348Z
publishedAt: 2020-07-21T19:14:32.690Z
contentType: updates
productTeam: Reliability
author: 127RQ7SUoFfyTh5gbXUpdM
slugEN: transitioning-api-integrations-to-https-tls-1-2
locale: pt
legacySlug: transicao-das-integracoes-via-api-para-https-tls-1-2
announcementImageID: ''
announcementSynopsisPT: 'Nos próximos meses, eliminaremos o suporte a todas as conexões HTTP a fim de aumentar a segurança da nossa plataforma. '
---

Como parte do nosso comprometimento contínuo em adotar padrões mundiais de segurança e privacidade, eliminaremos gradualmente o suporte a todas as conexões HTTP nos próximos meses. 

Para que nossos clientes e parceiros se adaptem a essa mudança, definimos um cronograma de transição até que o uso do HTTPS + TLS 1.2 seja obrigatório para todas as comunicações com nossos servidores. 

<table>
  <tr>
    <td style="border-left: 4px solid #F71963;" bgcolor="#FFE6E6">Certifique-se de que as equipes responsáveis por seu stack tecnológico e suas integrações estejam cientes. Caso sua loja seja afetada, serão necessárias mudanças técnicas imediatas.  </td>
  </tr>
</table>

## O que mudou?

Até agora, os servidores da VTEX exigiam conexões seguras somente em rotas específicas e conexões HTTPS podiam ser feitas usando o TLS 1.0, TLS 1.1 ou TLS 1.2. 

Quando o cronograma de transição acabar, os servidores da VTEX passarão a exigir conexões seguras em todas as rotas e as conexões HTTPS deverão ser feitas usando o TLS 1.2.

<table>
  <tr>
    <td style="border-left: 4px solid #856407;" bgcolor="#FFF3CD">As conexões HTTP receberão a resposta `301 Moved Permanently`, que redirecionará para HTTPS. Implementações que não suportem o TLS 1.2 falharão ao tentar se conectar. </td>
  </tr>
</table>

## Por que fizemos essa mudança?

Não proteger o seu site com o TLS é um perigoso downgrade que pode colocar tanto seu site como seus clientes em risco. O tráfego HTTP pode ser lido por qualquer pessoa com acesso à rede em que o tráfego se move. Por outro lado, o tráfego HTTPS só pode ser descriptografado pelo proprietário do certificado HTTPS.  

Proteger a sua aplicação e o seu site com o TLS é particularmente importante para sites que recolhem informações de pagamento (como informações bancárias e de cartões de crédito) ou informações pessoais (como senhas e endereços). No entanto, qualquer site e aplicação que recolha informações de usuários devem estar protegidos com o TLS a fim de proteger os usuários e seus dados.  

Para obter mais informações sobre o HTTPS, veja por que o [HTTPS é importante](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https) e [por que precisamos do HTTPS](https://howhttps.works/why-do-we-need-https/).

## O que preciso fazer?

As equipes responsáveis por seu stack tecnológico e suas integrações devem verificar se todos os softwares que se comunicam com a VTEX usando nossas APIs estão usando o HTTPS e o TLS 1.2. 

Qualquer software externo que esteja se comunicando com os servidores da VTEX sem usar o HTTPS e o TLS 1.2 deve ser ajustado para estar em conformidade com esses padrões.  

<table>
  <tr>
    <td style="border-left: 4px solid #004084;" bgcolor="#CCE5FE">Para nos certificarmos de que seus clientes HTTPS possam se comunicar com nossos servidores de maneira segura, disponibilizamos a seguinte rota de teste para assegurar que sua implementação está correta:
<pre>[https://sandbox.vtexcommercestable.com.br/api/test](https://sandbox.vtexcommercestable.com.br/api/test)</pre>
Fazer uma requisição ao endereço acima e receber a resposta `200 OK` significa que seu cliente tem capacidade de usar os protocolos exigidos. </td>
  </tr>
</table>

## Cronograma de transição
Para que você tenha tempo suficiente para se preparar, iniciaremos os testes controlados com janelas de bloqueio de solicitações HTTP no dia 30 de julho de 2020. 

Durante essas janelas de bloqueio de requisições, as conexões HTTP receberão a resposta `301 Moved Permanently`, que redirecionará para HTTPS, e nossos servidores exigirão que as conexões HTTPS sejam feitas usando o TLS 1.2. 

A tabela abaixo lista as janelas de bloqueio de requisições HTTP nesse período de transição:

| Data       | Hora (UTC-3) | Duração  |
| ---------- | ------------ | -------- |
| 13/08/2020 | 04:00:00     | 2:00:00  |
| 28/08/2020 | 07:00:00     | 4:00:00  |
| 05/09/2020 | 10:00:00     | 8:00:00  |
