---
title: 'Criar promoção para um cluster de clientes'
id: tutorials_342
status: PUBLISHED
createdAt: 2017-04-27T22:07:51.509Z
updatedAt: 2024-08-05T17:40:23.033Z
publishedAt: 2024-08-05T17:40:23.033Z
firstPublishedAt: 2017-04-27T23:03:15.652Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: criando-promocao-para-um-cluster-de-clientes
locale: pt
legacySlug: criando-promocao-para-um-cluster-de-clientes
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Uma promoção para um cluster de clientes é uma promoção válida apenas para um grupo de clientes pré-determinado a partir do módulo Master Data. Essa promoção será concedida apenas aos clientes selecionados após o login no site e somente exibida no carrinho de compras.

Configurar clusters de clientes permite criar uma variedade de promoções personalizadas para públicos segmentados.

Antes de criar uma promoção, é preciso definir a propriedade que determina se um cliente faz parte ou não do cluster. Para isso, é possível utilizar campos já existentes no perfil do cliente (por exemplo: `email`) ou [criar um cluster de clientes no módulo Master Data](https://help.vtex.com/pt/faq/como-criar-um-cluster-de-clientes/).

Com a propriedade definida, siga as instruções abaixo.

1. No Admin VTEX, acesse *Promoções > Promoções*, ou digite *Promoções* na barra de busca no topo da página.
2. Busque pela promoção em que deseja realizar essa configuração ou [crie uma nova promoção](https://help.vtex.com/pt/tutorial/como-criar-promocoes/).
3. Navegue para a área **Quais as condições para a promoção ser válida?**
4. Selecione a opção **Cluster de clientes**.
5. Selecione a configuração de critérios que desejar:
    *   **Todos os seguintes:** é preciso que o cliente cumpra todos os requisitos para ser incluído na promoção.
    *   **Pelo menos um dos seguintes:** se o cliente cumprir qualquer um dos critérios listados, ele será incluído na promoção.
6. Preencha o campo com o cluster que deseja relacionar à promoção — [veja abaixo mais informações sobre como preencher este campo](#como-preencher-o-campo-cluster-de-clientes). Você pode adicionar mais de um cluster, clicando no botão `+`.
7. Clique no botão `Salvar`.

>ℹ️ Você pode inserir no máximo 50 clusters na opção **Cluster de clientes**.

## Como preencher o campo Cluster de clientes

Existem dois critérios possíveis para a seleção de um cluster para a promoção e, portanto, duas opções de preenchimento do campo **Cluster de clientes**: 

*   com uma [função de igualdade](#funcao-de-igualdade): `{nomedapropriedade}={"valor"}`.
*   com uma [função `contains`](#funcao-contains): `{nomedapropriedade} contains {valor}`

Perceba que, em ambas opções, `{nomedapropriedade}` deve ser alterado pelo nome do campo na entidade de dados e `{"valor"}` deve ser substituído pelo valor definido no Master Data.

>ℹ️ O uso das aspas duplas varia [de acordo com o tipo de campo](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265#entendendo-os-tipos) criado no Master Data.

### Função de igualdade

A expressão `{nomedapropriedade}={"valor"}` deve ser utilizada caso a informação contida no perfil do cliente referente à propriedade em questão deva ser **exatamente igual** ao valor preenchido na expressão.

Na configuração abaixo, por exemplo, apenas registros `funcionario` com o valor `true` (utilizado em um campo do tipo **[Boolean](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265#entendendo-os-tipos)**, em que os valores são sempre verdadeiro ou falso) receberão a promoção. 

Dessa forma, você poderia configurar também `funcionario=false`, em que apenas registros `funcionario` com valor `false` no campo receberiam a promoção.

![Campo funcionário Master Data PT](//images.ctfassets.net/alneenqid6w5/1GQftbj5FuIiQ4mUweacwa/06fd3f196a18b3d331742a01bb4ef2d6/Campo_funcion__rio_Master_Data_PT.png)

![Cluster de clientes PT](//images.ctfassets.net/alneenqid6w5/1IOHFLD9w840WEuceWMk4Q/c1d0536a53150d809b8c6c74b5a81b12/Cluster_de_clientes_PT.png)

Considerando um campo do tipo **[Varchar](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265#entendendo-os-tipos)**, poderíamos configurar `funcionario="sim"` para que apenas clientes com valor `"sim"` no campo recebessem a promoção.

>⚠️ Para campos do tipo **Varchar**, o valor informado na seção **Cluster de clientes **da promoção diferencia caracteres minúsculos e maiúsculos. Isso quer dizer que, ao preencher a opção **Cluster de clientes** de forma diferente daquela definida para o campo no Master Data, a promoção não será aplicada.

Portanto, considerando o exemplo acima de um campo tipo **Varchar** com os valores cadastrados `"sim"` e `"não"`, o cadastro na promoção obrigatoriamente será `funcionario="sim"`. Ao cadastrar na promoção o termo `funcionario="Sim"`, por exemplo, o cluster de clientes desejado não receberá a promoção.

### Função contains

A expressão `{nomedapropriedade} contains {valor}` deve ser utilizada quando a informação contida no perfil do cliente referente à propriedade em questão deve **conter** o `valor` preenchido na expressão.

Por exemplo, caso você queira criar um cluster apenas com clientes cujos emails contenham `@teste.com`, a configuração seria igual à representada na imagem abaixo.

![Campo Email Master Data](//images.ctfassets.net/alneenqid6w5/5aeXd0Ro72P1GlzVeBiVVZ/4bfb1189f8f967ef9ed77e081291931b/Campo_Email_Master_Data.png)

![cluster email PT](//images.ctfassets.net/alneenqid6w5/5LKj1wrG3zL54lfh4R2MzQ/271cdcec5cdf081311215a57cfa2994c/cluster_email_PT.PNG)

Nesse caso, `email contains test.com` será verdadeiro, por exemplo, quando o valor for `joao@test.com` e falso quando o valor for `joao@test.org`.
