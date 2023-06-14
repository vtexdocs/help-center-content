---
title: 'Assembly Options'
id: 5x5FhNr4f5RUGDEGWzV1nH
status: PUBLISHED
createdAt: 2021-10-25T20:22:43.094Z
updatedAt: 2023-03-29T17:55:49.763Z
publishedAt: 2023-03-29T17:55:49.763Z
firstPublishedAt: 2021-10-25T21:39:46.746Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: assembly-options
legacySlug: assembly-options-pt
subcategory: 1hoOi2R0Rm6ky0yCwOUoiy
---

<div class="alert alert-warning">
  <p>Esta funcionalidade está disponível apenas para lojas desenvolvidas usando <a href="https://vtex.com/br-pt/store-framework/">VTEX IO</a>. Antes de prosseguir, você deve <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-customizer">instalar e configurar o Product Customizer</a> na sua loja.</p>
</div>

Uma Assembly Option é um [anexo](https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) para cenários complexos, como a customização de produtos, em que é necessário gerenciar diferentes combinações de produtos, quantidade, itens adicionais, custos e estoque.

No exemplo abaixo, uma loja oferece várias Assembly Options para o produto _Custom Bell_. Essas opções são mostradas na página do produto, onde o cliente pode selecionar as opções desejadas. Dependendo das escolhas, pode haver um custo adicional.

![assembly-option-PT](//images.ctfassets.net/alneenqid6w5/3A5QzqwSI6Z9CZk3EqPrZs/4d0d0db168c8a984a69fb6462ccc9084/image.png)

Você pode combinar [SKUs](https://help.vtex.com/pt/tutorial/o-que-e-um-sku--1K75s4RXAQyOuGUYKMM68u) para oferecer Assembly Options, como o _Bells add-ons Roman_ ou o _Bells add-ons 1-3 lines_ no exemplo acima. Se um item estiver esgotado, ele será exibido como indisponível.

Neste artigo, explicamos como começar a utilizar Assembly Options na sua loja.

## Implementação das Assembly Options

Existem duas formas de implementar Assembly Options: utilizando o [app Assembly Options](#app-assembly-options) ou utilizando a interface nativa de [Campos personalizados](#campos-personalizados) do Catálogo.

<div class="alert alert-warning">
  <p>Ao implementar Assembly Options em uma <a href="https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w">conta de seller</a>, as opções de customização do produto são exibidas para os clientes da sua loja no checkout. Para que as opções sejam exibidas na página do produto, você precisa implementar a funcionalidade em uma <a href="https://help.vtex.com/pt/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8">conta de marketplace</a>.</p>
</div>

### App Assembly Options

O app [Assembly Options](https://apps.vtex.com/vtex-admin-assembly-options/p), disponível para lojas desenvolvidas usando [VTEX IO](https://vtex.com/br-pt/store-framework/), oferece uma interface para configuração e gerenciamento das opções de customização. Nesse caso, a sintaxe da Assembly Option e o anexo são gerados automaticamente. Para saber mais sobre esse aplicativo, leia a documentação [App Assembly Options](https://help.vtex.com/pt/tutorial/app-assembly-options--54mWg37mojrqOgCA79iqqk).

### Campos personalizados

Para criar Assembly Options utilizando **Campos personalizados** no Admin VTEX, você precisa primeiro criar uma [sintaxe](#sintaxe-das-assembly-options) de forma manual para definir as regras de customização do produto. Em seguida, é necessário inserir essa sintaxe na [configuração do anexo](#configuracao-do-anexo). Confira as seções a seguir para mais detalhes.

#### Sintaxe das Assembly Options

Para implementar uma Assembly Option, primeiro é necessário criar uma sintaxe, como ilustrado no exemplo abaixo, alterando cada valor de acordo com o seu cenário.

`[0-3]#10000[1-2][1]pricetable1;#20000[0-2][0]pricetable2;#30000[0-2][0]pricetable3`

O primeiro trecho`[x-y]` se refere às regras aplicadas ao grupo, e entre cada `#` e `;` estão as regras que se aplicam a cada SKU. Saiba mais sobre os segmentos da sintaxe na tabela abaixo.  

| Segmento            | Descrição           |
|------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|**\[0-3\]**#10000\[1-2\]\[1\]pricetable1;#20000\[0-2\]\[0\]pricetable2;#30000\[0-2\]\[0\]pricetable3       | A quantidade mínima e máxima de itens que podem ser selecionados no grupo. O primeiro segmento determina quantas escolhas essa Assembly Option aceita no total. `[0-3]` significa que você pode selecionar um mínimo de zero e um máximo de três itens. Se o valor for `[1-1]`, isso significa que você só pode selecionar um item entre todas as opções. |
| \[0-3\]#**10000**\[1-2\]\[1\]pricetable1;**#20000**\[0-2\]\[0\]pricetable2;#**30000**\[0-2\]\[0\]pricetable3 | Após cada `#`, você deve incluir o ID do SKU do componente. Você deve usar pelo menos um SKU.|
| \[0-3\]#10000**\[1-2\]**\[1\]pricetable1;#20000**\[0-2\]**\[0\]pricetable2;#30000**\[0-2\]**\[0\]pricetable3 | Esse segmento define a quantidade mínima e máxima de cada SKU que o cliente final pode selecionar. O valor `[0-1]` significa que pode haver no máximo um desse SKU.|
|\[0-3\]#10000\[1-2\]**\[1\]**pricetable1;#20000\[0-2\]**\[0\]**pricetable2;#30000\[0-2\]**\[0\]**pricetable3 | Esse segmento define a quantidade padrão selecionada para cada SKU.                                    |
| \[0-3\]#10000\[1-2\]\[1\]**pricetable1**;#20000\[0-2\]\[0\]**pricetable2**;#30000\[0-2\]\[0\]**pricetable3** | O segmento final indica a tabela de preços para cada item. |

![assembly-option-exemplo-PT](//images.ctfassets.net/alneenqid6w5/2c4cfwQo0KisXQhlzYoxGC/ff463ce52bf53d528a1127d81a36eb38/image.png)

#### Configuração do Anexo

Para adicionar uma Assembly Option, é necessário ter um anexo já cadastrado. Consulte o artigo [Cadastrar um anexo](https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU) para saber mais.

Após criar um anexo e [associá-lo a um SKU](https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU#associar-o-anexo-a-um-sku), siga os passos abaixo para configurar a Assembly Option.

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Campos personalizados**.
3. Na aba **Serviço e SKUs**, selecione o anexo ao qual você deseja adicionar a Assembly Option e clique em `Alterar`.
4. No campo **Valores permitidos**, insira a sintaxe que você criou, conforme explicado na seção [Sintaxe das Assembly Options](#sintaxe-das-assembly-options).
5. Clique em `Salvar`.
