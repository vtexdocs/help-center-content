---
title: 'Configurar XML do Google Shopping'
id: frequentlyAskedQuestions_372
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.317Z
updatedAt: 2023-03-24T13:45:31.912Z
publishedAt: 2023-03-24T13:45:31.912Z
firstPublishedAt: 2019-01-24T22:02:18.230Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: how-to-configure-xml-for-google-shopping
legacySlug: como-configurar-xml-do-google-shopping
locale: pt
subcategoryId: 2OCA7SVfWoMSiAi0GEGwKo
---

> ℹ️ Desenvolvemos um novo tipo de integração com o Google Shopping por API, que permite acompanhamento em tempo real. Saiba mais em [Configurar integração com o Google Shopping](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw).

> ⚠️ Este artigo se refere ao modelo de 22 de maio de 2013 de especificações do Google Shopping. O Google modifica e atualiza seu modelo sem prévio aviso. Portanto, sempre confirme se nossa explicação permanece atualizada segundo a [documentação do Google Shopping](https://support.google.com/merchants/answer/188494?hl=pt-BR).

Você pode configurar o Google Shopping através do Admin VTEX, seguindo os passos abaixo:

1. No Admin VTEX, acesse **Configurações da Loja**.
2. Em **Canais**, clique em **Integração XML**.
3. Clique em `Novo XML`.
4. Em **Tipo de XML**, selecione a opção **XML Livre (padrão)**.
5. No campo **Coleção**, selecione uma coleção de produtos pré-cadastrada.
6. Marque a opção **Exibir produto com SKU padrão**.
  Com essa seleção, é necessário definir a estrutura do XML seguindo as definições do exemplo abaixo.
7. Revise o modelo, alterando o que for desejado.
8. Clique em `Salvar`.
  O link de acesso ao XML será gerado automaticamente.
9. Grave este XML em um arquivo .txt e envie o arquivo ao Google.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/xml-integration/como-configurar-xml-do-google-shopping_1.png)

> ⚠️ Caso a opção **Exibir SKUs indisponíveis** esteja desmarcada, os produtos ou SKUs que estiverem esgotados não aparecerão no XML. Produtos inativos também não aparecem no XML.
