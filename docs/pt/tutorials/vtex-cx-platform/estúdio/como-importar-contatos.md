---
title: 'Como importar contatos'
id: 2iPoWuJtzfIvGrpUdIvvhR
status: PUBLISHED
createdAt: 2025-09-12T17:23:02.357Z
updatedAt: 2025-10-03T14:21:49.258Z
publishedAt: 2025-10-03T14:21:49.258Z
firstPublishedAt: 2025-10-03T14:21:49.258Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: importing-contacts
legacySlug: como-importar-contatos
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Quando uma pessoa interage por algum dos canais conectados no VTEX CX Platform, automaticamente ela vira um contato. Porém, muitas vezes, já temos informações dos futuros contatos que vão interagir pelos canais, então, como podemos importar esses contatos para a plataforma?

1. Acesse **Contatos** (em **Operações**) e vá para a aba de **contatos**.
2. Clique em `Importar contatos` no canto esquerdo.
3. Na página de importação, você pode escolher uma planilha do Excel, no formato `.xls`, e importar os contatos dessa planilha. Para que isso funcione, é necessário nomear corretamente o nome das colunas. No final da página, disponibilizamos um modelo de template.

Utilize as seguintes regras para as colunas:

- Name: nome do contato
- Language: língua que o contato interage
- URN: URN do canal que o contato vai se comunicar. O contato só é válido se possuir pelo menos uma URN. A **URN:whatsapp** é extremamente importante e necessária para o envio de mensagens template. Se essa coluna, juntamente com os números de telefone abaixo dela, não estiver presente ao importar os contatos, o envio de mensagens via WhatsApp para esses contatos ficará indisponível posteriormente.
- Field: campos customizados dos contatos.

4. Depois de selecionar o arquivo, clique em `Prévia` e seus contatos serão importados para a plataforma.

Todos os contatos aparecerão vinculados a um grupo estático, com o mesmo nome do arquivo da planilha. Caso você não deseje manter o grupo, basta exclui-lo.
