---
title: 'Novos requisitos do Google e Yahoo para remetentes de emails em massa'
id: 4Tb5eIYJVnKHAK2hPHY1uZ
status: PUBLISHED
createdAt: 2024-01-25T21:37:28.950Z
updatedAt: 2024-01-26T00:23:10.235Z
publishedAt: 2024-01-26T00:23:10.235Z
contentType: updates
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2024-01-25-new-google-and-yahoo-requirements-for-bulk-email-senders
locale: pt
legacySlug: novos-requisitos-do-google-e-yahoo-para-remetentes-de-emails-em-massa
announcementImageID: 'undefined'
announcementSynopsisPT: 'Novas exigências do Google e do Yahoo para os remetentes de emails em massa.'
---

O Google e o Yahoo estão implementando novas exigências para os remetentes de emails em massa. O objetivo é garantir mais segurança aos destinatários, diminuir o volume de spam e oferecer melhor experiência para os usuários.

A partir de fevereiro de 2024, conforme suas [diretrizes para remetentes de emails](https://support.google.com/mail/answer/81126?hl=pt-BR&sjid=15077216349840152409-SA), o Google vai exigir novos requisitos para os remetentes que enviam 5 mil ou mais mensagens por dia para as contas do Gmail. De forma similar, o Yahoo também definiu novas [práticas na entregabilidade massiva de emails](https://senders.yahooinc.com/best-practices/). Os requisitos exigidos pelas empresas são:

* Autenticação do email do remetente.
* Fácil cancelamento de inscrição pelos destinatários.
* Limite para a taxa de emails marcados como spam.

Caso essas diretrizes não sejam seguidas pelos remetentes, os emails enviados poderão ser rejeitados ou entregues na caixa de spam dos destinatários.

## O que mudou?

A partir de fevereiro de 2024, o Google e o Yahoo vão exigir dos remetentes de emails massivos os seguintes requisitos:

| **Requisitos** | **Descrição** |
| :---: | :--- |
| Autenticação de email do remetente | Os remetentes devem autenticar a origem do seu email usando os seguintes protocolos:<ul><li>[SPF](https://support.google.com/a/answer/33786?sjid=4150033421619503412-SA) (*Sender Policy Framework*)</li><li>[DKIM](https://support.google.com/a/answer/174124?sjid=4150033421619503412-SA) (*DomainKeys Identified Mail*)</li><li>[DMARC](https://support.google.com/a/answer/2466580?sjid=4150033421619503412-SA) (*Domain-based Message Authentication, Reporting & Conformance*)</li></ul>Ao realizar essas configurações, você se protege contra *spoofing* (mensagens falsas enviadas em nome do seu domínio) e evita que as suas mensagens enviadas sejam marcadas como spam.Saiba mais em [Evitar spam, spoofing e phishing com a autenticação do Gmail](https://support.google.com/a/answer/10583557). |
| Fácil cancelamento de inscrição | Os destinatários devem ser capazes de cancelar a inscrição de um email com um único clique, e o processamento da solicitação de cancelamento deve ocorrer em até dois dias.Saiba mais em [Inscrições](https://support.google.com/mail/answer/81126#subscriptions) (Google) e [Support one click unsubscribe](https://blog.postmaster.yahooinc.com/post/182917670818/dont-want-to-be-marked-as-spam-support-one-click) (Yahoo). |
| Limite para taxa de spam | Os destinatários devem considerar os emails como desejáveis, portanto a taxa de emails marcados como spam deve ser menor que 0,1% e o remetente deve evitar que ela chegue a 0,3% ou mais. Essa taxa é referente ao número de emails marcados como spam pelos destinatários, dividido pelo número total de emails recebidos.É possível usar o [Postmaster Tools](https://support.google.com/mail/answer/14289100) para rastrear dados sobre grandes volumes de emails do Gmail, e o [Complaint Feedback Loop](https://senders.yahooinc.com/complaint-feedback-loop/) para o mesmo serviço do Yahoo. |

Os requisitos acima mencionados são considerados básicos na manutenção de envio de emails. Para obter mais informações sobre boas práticas na entregabilidade de emails no Google, acesse [Diretrizes para remetentes de emails](https://support.google.com/mail/answer/81126), e para conteúdo sobre o Yahoo, veja [Email deliverability best practices](https://senders.yahooinc.com/best-practices/).

## O que precisa ser feito?

Para ser um remetente de emails em massa que está em conformidade com as exigências do Google e Yahoo, você deve:

* [Configurar a autenticação de email do remetente](#configure-a-autenticacao-de-email-do-remetente)
* [Permitir o fácil cancelamento da inscrição](#permita-o-facil-cancelamento-da-inscricao)
* [Controlar o limite da taxa de spam](#controle-o-limite-da-taxa-de-spam)

Caso essas diretrizes não sejam seguidas, os emails enviados poderão ser rejeitados ou entregues na caixa de spam dos destinatários. É possível confirmar se você está em conformidade com os requisitos do Google, por meio do [Postmaster Tools](https://support.google.com/mail/answer/14289100).

### Configure a autenticação de email do remetente

* Configure a [autenticação SPF](https://support.google.com/a/answer/33786?sjid=4150033421619503412-SA) para seu domínio de envio.
* Configure a [autenticação DKIM](https://support.google.com/a/answer/174124?sjid=4150033421619503412-SA) para seu domínio de envio.
* Configure a [autenticação DMARC](https://support.google.com/a/topic/2759254?hl=pt-BR&ref_topic=9061731&sjid=8809025610711525699-SA) para seu domínio de envio (você pode conferir se tem um [registro válido de DMARC](https://dmarcian.com/dmarc-inspector/)).
* Defina uma política de DMARC para o seu domínio (confira a [implementação recomendada](https://support.google.com/a/answer/10032473?hl=pt-BR&ref_topic=2759254&sjid=8809025610711525699-SA) pelo Google).

### Permita o fácil cancelamento da inscrição

* Garanta aos destinatários a opção de cancelar a inscrição de emails com [um único clique](https://blog.postmaster.yahooinc.com/post/182917670818/dont-want-to-be-marked-as-spam-support-one-click).
* Inclua um link visível para o cancelamento no corpo da mensagem.
* Processe a solicitação de cancelamento em até 2 dias.

### Controle o limite da taxa de spam

* Idealmente, mantenha as taxas de spam informadas abaixo de 0,1%.
* Evite atingir uma taxa de spam de 0,3% ou mais.
* Monitore as taxas de spam informadas no Gmail pelo [Postmaster Tools](https://gmail.com/postmaster) e no Yahoo pelo [Complaint Feedback Loop](https://senders.yahooinc.com/complaint-feedback-loop/).

## Artigos relacionados

| **VTEX** | **Google** | **Yahoo** |
| :--- | :--- | :--- |
| <ul><li>[Boas práticas de SPF (Sender Policy Framework)](/pt/docs/tutorials/configuracao-de-spf)</li><li>[Setting up the SPF](https://developers.vtex.com/docs/guides/setting-up-the-spf)</li><li>[Setting up DKIM for transactional emails](https://developers.vtex.com/docs/guides/setting-up-dkim-for-transactional-emails)</li><li>[Generate DKIM keys](https://developers.vtex.com/docs/api-reference/message-center-api#post-/api/mail-service/pvt/providers/-EmailProvider-/dkim)</li></ul> | <ul><li>[Diretrizes para remetentes de e-mails](https://support.google.com/mail/answer/81126?hl=pt-BR&sjid=15077216349840152409-SA)</li><li>[Perguntas frequentes sobre as diretrizes para remetentes de e-mails](https://support.google.com/a/answer/14229414?hl=pt-BR&ref_topic=7279058&sjid=15077216349840152409-SA#zippy=%2Co-que-acontece-quando-os-remetentes-n%C3%A3o-atendem-aos-requisitos-nas-diretrizes%2Co-que-acontece-quando-a-taxa-de-spam-do-remetente-excede-o-m%C3%A1ximo-permitido-pelas-diretrizes)</li><li>[Evitar spam, spoofing e phishing com a autenticação do Gmail](https://support.google.com/a/answer/10583557?hl=pt-BR&sjid=8809025610711525699-SA)</li><li>[Anúncio do Google](https://support.google.com/a/answer/10583557?hl=pt-BR&sjid=8809025610711525699-SA)</li></ul> | <ul><li>[Best practices- Deliverability](https://senders.yahooinc.com/best-practices/)</li><li>[FAQs - Deliverability](https://senders.yahooinc.com/faqs/)</li><li>[Anúncio do Yahoo](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)</li></ul> |

