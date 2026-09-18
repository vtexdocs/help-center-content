---
title: 'VTEX CX Platform: suporte a BSUID e usernames do WhatsApp'
slug: '2026-09-18-vtex-cx-platform-suporte-a-bsuid-e-usernames-do-whatsapp'
createdAt: 2026-09-18T12:00:00.000Z
updatedAt: 2026-09-18T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: whatsapp-privacy-first-contact-identity
locale: pt
announcementSynopsisPT: 'O VTEX CX Platform agora identifica contatos do WhatsApp pelo BSUID, mantendo conversas e automações ativas mesmo sem número de telefone.'
tags:
  - Nova funcionalidade
  - Admin
  - VTEX CX Platform
---

Agora o VTEX CX Platform identifica contatos do WhatsApp também pelo Business Scoped User ID (BSUID)), o identificador de usuário com escopo de negócio do WhatsApp. Com isso, suas conversas e automações continuam funcionando mesmo quando o contato não compartilhou o número de telefone.

## O que mudou?

Antes, o número de telefone era o único identificador de um contato do WhatsApp no VTEX CX Platform. Se o contato não compartilhasse o número, não era possível receber suas mensagens nem enviar templates para ele.

Agora, a plataforma resolve automaticamente o identificador disponível em cada conversa:

- **Se o contato tem número de telefone:** tudo funciona como antes.
- **Se o contato tem apenas BSUID:** você continua recebendo as mensagens dele e pode enviar templates normalmente, sem nenhuma configuração adicional.

O BSUID do contato aparece na página de detalhes do contato, ao lado das outras informações do perfil. Você também pode:

- **Solicitar o número de telefone:** os agentes podem convidar o contato a compartilhar o número voluntariamente por meio de um componente nativo do WhatsApp. O compartilhamento é opcional e só acontece se o contato aceitar.
- **Segmentar contatos sem telefone:** ao criar um grupo em **Contatos**, marque a opção **Contatos do WhatsApp sem telefone** para gerar um grupo inteligente com todos os contatos que têm BSUID e não têm número de telefone. Assim, você acompanha esse público de forma específica.

## Por que fizemos essa mudança?

O WhatsApp está evoluindo seu modelo de privacidade e os usuários poderão interagir com empresas usando um nome de usuário, sem expor o número de telefone. Isso significa que o número deixa de ser um identificador garantido. Para que sua comunicação não seja interrompida quando esse modelo entrar em vigor, desenvolvemos o suporte a BSUID no VTEX CX Platform. Suas principais vantagens são:

- **Comunicação sem interrupção:** conversas de entrada e envios de templates continuam funcionando para qualquer contato, independentemente do identificador disponível.
- **Preparação antecipada:** sua loja já está pronta para as mudanças de identidade do WhatsApp, sem depender de uma atualização futura da plataforma.
- **Enriquecimento de perfil em conformidade:** você pode pedir o número de telefone ao contato por um componente oficial do WhatsApp, respeitando a escolha do cliente.
- **Automações preservadas:** o suporte a BSUID está integrado à mesma camada de identificação usada pelas automações nativas de WhatsApp, como carrinho abandonado, recuperação de PIX e status do pedido.

## O que precisa ser feito?

Nenhuma ação é necessária. A identificação do contato é feita automaticamente pelo VTEX CX Platform, sem que você precise escolher entre número de telefone e BSUID.

Se você usa sistemas externos que dependem exclusivamente do número de telefone como identificador do contato, como CRMs, integrações personalizadas, pipelines de BI ou regras de segmentação, recomendamos planejar a adaptação desses sistemas para também aceitar o BSUID.

> ⚠️ A interação apenas por BSUID depende de a Meta liberar o uso de usernames para os usuários finais do WhatsApp. A Meta ainda não divulgou um cronograma para essa liberação. Até então, o comportamento foi validado em cenários simulados, e nenhuma alteração na experiência atual do canal WhatsApp é esperada.

Para saber mais sobre o canal WhatsApp, confira o artigo [WhatsApp: Integração com o VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/whatsapp-integracao-com-o-vtex-cx-platform).
