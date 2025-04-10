---
title: 'Gerar arquivo HAR para debugar problemas na loja'
id: 15xVlw8nuakk2k6Cao4k2Q
status: PUBLISHED
createdAt: 2018-02-23T13:16:02.404Z
updatedAt: 2024-11-21T21:50:30.178Z
publishedAt: 2024-11-21T21:50:30.178Z
firstPublishedAt: 2018-02-23T14:02:06.722Z
contentType: tutorial
productTeam: Others
author: authors_24
slugEN: generating-a-har-file
locale: pt
legacySlug: gerar-arquivo-har-para-debugar-problemas-na-loja
subcategoryId: 1VvCpaa8NCA6a0MK6W6oWg
---

Ao buscar soluções para um problema complexo, pode ser que nosso time de Suporte precise receber informações adicionais sobre as requisições web geradas em seu navegador enquanto o problema ocorre.

Um recurso útil para isso é o log de requisições gerado pela ferramenta de desenvolvedor do navegador (o dev tools). Por meio dele, você pode gerar um arquivo `.HAR`, que contém informações detalhadas sobre cada requisição.

>ℹ️ Para gerar o arquivo `.HAR`, recomendamos utilizar o navegador Google Chrome, devido à simplicidade do processo, mas você pode usar outros navegadores, como o Mozilla Firefox, Safari ou o Microsoft Edge.

<br>

Consulte a tabela a seguir para obter a documentação com instruções de exportação de arquivos para cada navegador:

| **Navegador** | **Documentação** |
| ---------- | ---------- |
| Google Chrome (recomendado) | Google: [Capturar o tráfego da sessão da Web](https://support.google.com/admanager/answer/10358597?hl=pt-BR&sjid=2751223489427809764-SA) |
| Mozilla Firefox, Safari ou Microsoft Edge | Zendesk: [Como gerar um arquivo HAR para resolução de problemas](https://support.zendesk.com/hc/pt-br/articles/4408828867098-Como-gerar-um-arquivo-HAR-para-resolucao-de-problemas) |

Após exportar o arquivo `.HAR`, basta enviá-lo ao nosso time de Suporte VTEX. Ao usar o Google Chrome, certifique-se de configurar a [opção de exportação com dados sensíveis](https://developer.chrome.com/blog/new-in-devtools-130?hl=pt-br#har).

>❗ Como o arquivo `.HAR` contém informações sensíveis sobre sua loja, compartilhe-o somente com o time de [Suporte VTEX](https://help.vtex.com/pt/support).
