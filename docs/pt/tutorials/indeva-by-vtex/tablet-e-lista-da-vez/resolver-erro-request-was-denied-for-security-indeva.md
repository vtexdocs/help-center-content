---
title: 'Como resolver erro “Request was denied for security” no Indeva'
id: sFfVIk5VfXpj5xhCDOf0L
status: PUBLISHED
createdAt: 2025-09-12T12:58:02.751Z
updatedAt: 2025-10-03T15:30:32.781Z
publishedAt: 2025-10-03T15:30:32.781Z
firstPublishedAt: 2025-09-12T13:06:49.622Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: fix-request-was-denied-for-security-error-indeva
legacySlug: resolver-erro-request-was-denied-for-security-indeva
locale: pt
subcategoryId: 78bsG4YLzz1TR7eUzFSf4F
---

Identificamos um cenário não mapeado em dispositivos antigos, que afeta o funcionamento do app **Indeva – Lista da Vez**.

Em aparelhos com Android 4.4.4 ou anterior (lançado em 2013), a validação do token não é concluída corretamente, o que pode gerar a mensagem de erro `"Request was denied for security"`

Embora nenhuma atualização tenha sido feita nessa versão do aplicativo, identificamos que uma atualização de segurança no firewall passou a bloquear a abertura de diversos apps.

Esse problema ocorre porque o Android 4.x foi descontinuado e perdeu compatibilidade com várias ferramentas. É o caso do certificado *Let's Encrypt*, utilizado para garantir o acesso seguro ao app, conforme descrito neste artigo da Heroku: [ACM certificate compatibility FAQ (Heroku)](https://help.heroku.com/LBVEYASY/acm-certificate-compatibility-faq)

Para resolver a situação, alteramos o provedor de certificados de segurança utilizado na versão instalada nesses dispositivos. Isso restaurou o acesso ao aplicativo.

> ⚠️ Para atualizar o certificado de segurança e retomar o acesso, feche o aplicativo e abra novamente. Se o problema persistir, entre em contato com o suporte.

## Alternativas recomendadas

1. **Atualizar o dispositivo**  
   Atualize o sistema operacional para uma versão mais recente do Android (se compatível). Isso garante mais segurança e compatibilidade com o app.

2. **Migrar para o VTEX Sales App**  
   O **VTEX Sales App** é a principal solução da VTEX para operações de comércio unificado e está disponível para dispositivos com Android 10 ou superior.  
   Ele integra canais de venda físicos e online, incluindo a funcionalidade **Lista da Vez**.

3. **Usar o VTEX Sales App no navegador**  
   Se não for possível atualizar o sistema, acesse o app por meio de um navegador web no próprio dispositivo.

> ℹ️ Mudanças como essa podem gerar impacto temporário, mas nosso compromisso é oferecer a melhor experiência possível aos usuários.

