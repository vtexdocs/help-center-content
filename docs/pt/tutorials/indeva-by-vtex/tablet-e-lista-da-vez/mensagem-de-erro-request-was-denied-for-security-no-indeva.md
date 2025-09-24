---
title: 'Mensagem de erro "request was denied for security" no Indeva'
id: sFfVIk5VfXpj5xhCDOf0L
status: PUBLISHED
createdAt: 2025-09-12T12:58:02.751Z
updatedAt: 2025-09-12T13:07:19.949Z
publishedAt: 2025-09-12T13:07:19.949Z
firstPublishedAt: 2025-09-12T13:06:49.622Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: error-message-request-was-denied-for-security-in-indeva
legacySlug: mensagem-de-erro-request-was-denied-for-security-no-indeva
locale: pt
subcategoryId: 78bsG4YLzz1TR7eUzFSf4F
---

Foi identificado um cenário não mapeado pelo time de suporte em dispositivos antigos.  

Em dispositivos com Android 4.4.4 ou anterior (lançado em 2013), a validação do token não prossegue e pode aparecer a mensagem de erro `"Request was denied for security"` ao acessar o app **Indeva – Lista da Vez**.

Embora nenhuma atualização tivesse sido feita nesta versão do **Indeva – Lista da Vez**, identificamos que uma atualização de segurança no firewall bloqueava a abertura de diversos apps.  

Isso ocorre porque o Android 4.x foi descontinuado e, consequentemente, várias ferramentas e sistemas não são mais compatíveis. Conforme detalhado no artigo [ACM certificate compatibility FAQ (Heroku)](https://help.heroku.com/LBVEYASY/acm-certificate-compatibility-faq), esse foi o caso do certificado *Let's Encrypt*, responsável por assegurar o acesso ao app.  

Para contornar o cenário, realizamos uma alteração no provedor de certificados de segurança da versão do app instalada nesses dispositivos, permitindo a retomada do acesso.  

> ⚠️ Para atualizar o certificado de segurança e retomar o acesso, feche o aplicativo e abra novamente. Se o problema persistir, entre em contato com o suporte.

## Alternativas recomendadas

1. **Atualizar o dispositivo**  
   Atualize o sistema operacional do dispositivo para uma versão mais recente do Android, se compatível. Isso garante segurança e compatibilidade com o app.  

2. **Migrar para o VTEX Sales App**  
   O **VTEX Sales App** é a principal solução da VTEX para operações de comércio unificado e pode ser instalado em dispositivos com Android 10 ou superior. Ele integra os canais de venda online e físicos, incluindo a funcionalidade **Lista da Vez**.  

3. **Acessar o VTEX Sales App via navegador**  
   Caso a atualização do sistema não seja viável, o app pode ser acessado por um navegador web no dispositivo.

> ℹ️ Mudanças como essa podem gerar impacto temporário, mas nosso compromisso é oferecer a melhor experiência possível aos usuários.
