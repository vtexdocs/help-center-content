---
title: 'Configurar a comparação de produtos'
id: tutorials_236
status: PUBLISHED
createdAt: 2017-04-27T22:13:10.537Z
updatedAt: 2025-02-27T18:53:28.317Z
publishedAt: 2025-02-27T18:53:28.317Z
firstPublishedAt: 2017-04-27T23:03:10.483Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-product-comparison
legacySlug: configurando-a-comparacao-de-produtos
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

> ⚠️ Tutorial válido apenas para lojas CMS Portal Legado.

A comparação de produtos é um recurso nativo da VTEX que permite exibir, lado a lado, detalhes e especificações de produtos previamente selecionados, possibilitando que o usuário compare os produtos da loja de forma simples e visualize facilmente as diferenças entre suas especificações.

A configuração deve ser realizada em dois momentos:

- [**Página de comparação**](#pagina-de-comparacao): onde o usuário visualizará a comparação dos produtos selecionados na vitrine.
- [**Vitrine**](#vitrine): onde o usuário selecionará os produtos a serem comparados.

> ⚠️ A comparação de produtos não funciona na página inicial da loja.

## Instruções

Siga os passos a seguir para configurar a comparação de produtos em sua loja.

### Página de comparação

1. [Crie um template de prateleira](/pt/faq/como-criar-um-template-de-prateleira) para padronizar a exibição dos produtos na página de comparação. Nesse template, você pode utilizar qualquer um dos [controles disponíveis para prateleiras](https://developers.vtex.com/docs/guides/shelf-template-controls).
2. [Crie um template de página](/pt/faq/como-criar-um-template-de-pagina) utilizando o controle `<vtex.cmc:ProductComparison/>`, que é o responsável pela exibição dos produtos, lado a lado na página de comparação. Exemplo de uso do controle:  

```
<vtex.cmc:ProductComparison ShelfLayoutId="12343216-4c8e-4cd5-bcd7-e3b062681f2a"/>
```

onde `ShelfLayoutId` é `Id` do template de prateleira criado na etapa anterior.

3. Crie uma pasta para a página de comparação:
  - No Admin VTEX, acesse **Storefront > Layout**
  - Na coluna ao lado, clique em `CMS > Sites and channels > {nome do website} > / > New folder`. Substituia `{nome do website}` de acordo com seu cenário.
  - No campo `Folder Name`, atribua um nome para a pasta e clique em `OK`.
  - Clique em `Save Folder`.

       ![new-folder-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/configurando-a-comparacao-de-produtos_1.gif)

4. Crie um layout padrão:
  - Abra a pasta criada no item anterior.
  - Clique em **new layout**.
  - No campo `Template`, vincule o template de página criado no passo 2 à pasta. Saiba mais em [Associando um template a um layout](/pt/tutorial/associando-um-template-a-um-layout--7CkgOHRj7DVbsRxyR8YQrK).
  - Clique em `Save Layout` e, em seguida, em `OK`.

       ![new-layout-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/configurando-a-comparacao-de-produtos_2.gif)

### Vitrine

Para que os produtos sejam exibidos com a opção de comparação (checkbox), atribua o controle `$product.Compare` nos templates de prateleira que você deseja incluir esse recurso. Esse controle renderizará um checkbox para que o usuário possa escolher os produtos para comparar. Além disso, o controle disponibilizará no header e no footer da listagem de produtos o link **Comparar**, que será utilizado pelo usuário após a seleção e o redirecionará para a página de comparação.

> ⚠️ Só é possível realizar a comparação de 4 produtos por vez.
