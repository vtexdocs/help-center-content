---
title: 'Configurar a comparação de produtos'
id: tutorials_236
status: PUBLISHED
createdAt: 2017-04-27T22:13:10.537Z
updatedAt: 2021-04-13T18:46:45.472Z
publishedAt: 2021-04-13T18:46:45.472Z
firstPublishedAt: 2017-04-27T23:03:10.483Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-product-comparison
locale: pt
legacySlug: configurando-a-comparacao-de-produtos
subcategoryId: pwxWmUu7T222QyuGogs68
---

A comparação de produtos é um recurso nativo da plataforma VTEX e consiste na exibição, lado a lado, de detalhes e especificações dos produtos previamente selecionados. 

Ou seja, se o recurso estiver corretamente configurado, o usuário poderá comparar os produtos da loja e visualizar as diferenças de suas especificações de maneira mais simples.

Podemos dividir esse recurso em duas partes:

1. **Página de Comparação**: Onde o usuário visualizará a comparação dos produtos selecionados na vitrine.
2. **Vitrine**: Onde o usuário selecionará os produtos a serem comparados.

>⚠️ A comparação de produtos não é aplicável na página inicial do site.

## Configuração

Primeiramente, devemos configurar a **Página de Comparação.**

1. **[Crie um template de prateleira](http://help.vtex.com/pt/faq/como-criar-um-template-de-prateleira):** Em **CMS** > **Layout** (/admin/a/), crie um template de prateleira. Esse template de prateleira representará cada produto na página de comparação. Você pode usar nesse template, todos os controles disponíveis para prateleiras.
2. **[Crie um template de página](http://help.vtex.com/pt/faq/como-criar-um-template-de-pagina):** Em **CMS** > **Layout**, crie um template de página e utilize o controle ProductComparison relacionado ao template de prateleira criado no item anterior. Esse controle é o grande responsável pela exibição da página de comparação. Ele posicionará cada produto, lado a lado, para a melhor visualização de suas especificações. Exemplo de aplicação do controle: `<vtex.cmc:ProductComparison ShelfLayoutId="12343216-4c8e-4cd5-bcd7-e3b062681f2a"/>`
3. **Crie uma pasta chamada “Compare”:** Em **CMS** > **Layout** > **Pasta CMS** > **Sites and channels** > **{nome do website desejado}** > **pasta /** > **New folder**, crie uma pasta com o nome “Compare”. O link gerado pelo controle da vitrine refere-se a essa pasta, por isso sua existência é essencial, bem como todos os itens desse post.
4. **Crie um layout padrão:** Dentro da pasta “Compare”, criada no item anterior, crie um layout padrão clicando em **New layout** e o relacione ao template de página criado no item 2 no campo **Template**.

Com a Página de Comparação configurada, precisamos configurar a **Vitrine** para que os produtos sejam exibidos com a opção de comparação (checkbox). Essa configuração é muito simples e possui apenas um passo:

1. **Configure cada Template de Prateleira que desejar:** Nos templates de prateleira que desejar, inclua o controle `$product.Compare`. Esse controle renderizará um checkbox para que o usuário possa escolher os produtos que deseja comparar. Além disso, o controle disponibilizará no header e no footer da listagem de produto o link “Comparar”, que será utilizado pelo usuário após a seleção e o redirecionará para a pasta “Compare”.

Pronto! O recurso está habilitado para o seu site.

Informação importante: Só é possível realizar a comparação de 4 produtos por vez.
