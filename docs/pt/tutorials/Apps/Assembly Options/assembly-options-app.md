---
title: 'App Assembly Options'
id: 54mWg37mojrqOgCA79iqqk
status: PUBLISHED
createdAt: 2022-06-14T10:43:51.397Z
updatedAt: 2023-03-29T14:51:54.670Z
publishedAt: 2023-03-29T14:51:54.670Z
firstPublishedAt: 2022-06-22T19:48:18.050Z
contentType: tutorial
productTeam: Apps
author: 1malnhMX0vPThsaJaZMYm2
slug: app-assembly-options
locale: pt
legacySlug: app-assembly-options
subcategoryId: 3xpuy7xGlzKKg6vxqiExZ2
---

>⚠️ Este aplicativo está disponível apenas para lojas que utilizam [VTEX IO](https://vtex.com/br-pt/store-framework/). Antes de prosseguir, você deve [instalar e configurar o Product Customizer](https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-customizer) na sua loja.

Na VTEX, é possível disponibilizar opções de customização de produtos utilizando [Assembly Options](https://help.vtex.com/pt/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH). Essa solução consiste em criar [anexos](https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) para cenários complexos, em que é necessário gerenciar diferentes combinações de produtos, quantidades, itens adicionais e custos.

O [app Assembly Options](https://apps.vtex.com/vtex-admin-assembly-options/p) disponibiliza uma interface para configurar e gerenciar as opções de customização em lojas que utilizam [VTEX IO](https://vtex.com/br-pt/store-framework/), como alternativa à implementação de Assembly Options pelos anexos do Catálogo.

## Instalação 

Você pode instalar o aplicativo gratuitamente pela [VTEX App Store](https://apps.vtex.com/vtex-admin-assembly-options/p) ou pelo [VTEX IO CLI](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-installation-and-command-reference), seguindo os passos do [guia para desenvolvedores Assembly Options](https://developers.vtex.com/vtex-developer-docs/docs/assembly-options-app).

>⚠️ Quando o aplicativo Assembly Options é instalado em uma [conta de seller](https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w), as opções de customização do produto são exibidas para os clientes da sua loja no checkout. Para que as opções sejam exibidas na página do produto, você precisa instalar o aplicativo em uma [conta de marketplace](https://help.vtex.com/pt/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8).

Após a instalação, a página **Catálogo > Assembly Options** se torna disponível no Admin VTEX. Veja a seguir as funcionalidades disponíveis uma vez que o aplicativo é instalado.

## Lista de Assembly Options

No Admin VTEX, em **Catálogo > Assembly options**, você tem acesso a uma lista com todas as Assembly Options cadastradas na sua loja utilizando o aplicativo.

![assembly-options-app](//images.ctfassets.net/alneenqid6w5/7AoMYLduvKisAxKMho64m0/e2166df5fd26a7dba75c2420c19e43e9/image1.png)

As informações exibidas na lista são:

* **ID:** exibe o ID da Assembly Option, que equivale ao ID do [anexo](https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) no **Catálogo**.
* **Nome:** indica o nome do anexo de tipo Assembly Option.
* **Obrigatório:** quando marcada com um <i class="far fa-check-circle"></i>, esta coluna indica que o anexo de tipo Assembly Option é obrigatório. Se o campo estiver vazio, não é obrigatório.
* **Status:** indica o status da Assembly Option, que pode ser:
    * **Ativa**: significa que as opções de customização estão ativadas, então elas serão exibidas na sua loja [se forem associadas a um SKU](https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU#associar-o-anexo-a-um-sku).
    * **Inativa**: significa que as opções de customização estão desativadas, portanto não estarão disponíveis para seleção.
* **Menu** <i class="fas fa-ellipsis-v"></i>: exibe as opções a seguir:
    * <i class="far fa-pencil"></i> **Editar**: permite acessar a página de edição da Assembly Option.
    * <i class="far fa-trash-alt"></i> **Deletar**: permite excluir uma Assembly Option.

Você pode buscar por uma Assembly Option pelo nome, utilizando a barra de busca. Também é possível filtrar os resultados exibidos na lista por **Status**(**Ativa** ou **Inativa**).

Para configurar uma nova Assembly Option, você precisa clicar no botão `Criar Assembly option`, no canto superior direito da página.

## Criar ou editar Assembly Option

A página **Produtos > Assembly options > Novas Assembly options** contém um formulário com as informações necessárias para criar ou editar uma Assembly Option. Siga os passos abaixo para criar uma Assembly Option.

1. Preencha os campos de **Informações básicas**:
    * **Nome:** nome da Assembly Option. Exemplo: Ingredientes.
    * <i class="fas fa-toggle-on"></i> **Ativa:** define se a Assembly Option ficará ativa, ou seja, disponível para uso na sua loja.
    * <i class="far fa-square"></i> **Obrigatório:** define se é obrigatório que seus clientes selecionem uma das opções disponibilizadas pela Assembly Option ou não.
2. Em **Grupos de SKU**, clique em `Adicionar novo grupo`.
    Um grupo sem nome será criado. Cada grupo irá reunir as opções de SKU disponibilizadas para escolha dos clientes.
3. Preencha as informações do grupo criado:
    * **Nome**: nome do grupo que será mostrado na página do produto. Exemplo: Ingredientes extras.
    * **Quantidade mínima:** define a quantidade mínima de itens do grupo que o cliente da sua loja pode selecionar.
    * **Quantidade máxima:** define a quantidade máxima de itens do grupo que o cliente da sua loja pode selecionar.
4. Clique em `Adicionar SKU` para incluir um SKU existente no grupo.
5. Preencha as seguintes informações sobre o SKU:
    * **ID do SKU:** identificador do SKU.
    * **Nome da tabela de preço vinculada:** nome da tabela de preço a ser considerada para o SKU selecionado. Quando esse campo for deixado vazio, o SKU vai assumir o preço da política comercial cadastrada.
    * **Quantidade mínima:** quantidade mínima do item que o cliente da sua loja pode selecionar.
    * **Quantidade máxima:** quantidade máxima do item que o cliente da sua loja pode selecionar.
    * **Quantidade inicial:** quantidade do item que será selecionada por padrão.
6. Clique em `Adicionar`.
    As informações do SKU adicionado serão exibidas em uma tabela, a partir da qual é possível editar as informações ou deletar o SKU do grupo.
    Se desejar, adicione outros SKUs ao grupo repetindo o passo 4 em diante. Você também pode criar outros grupos repetindo o passo 2 em diante.
7. Quando todos os grupos estiverem configurados, clique em `Salvar`.

Ao salvar a Assembly Option, um anexo é criado automaticamente em **Catálogo > Anexos**, com o prefixo `vtex.assembly-option.` adicionado ao nome da Assembly Option criada. Exemplo: `vtex.assembly-option.Ingredientes`.

>⚠️ Para que as opções de customização cadastradas na Assembly Option apareçam no storefront, é necessário associar o anexo criado a um SKU em* **Catálogo > Produtos e SKUs > SKU > Configurações Avançadas > Anexos***. Para isso, siga os passos descritos em [Associar o anexo a um SKU](https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU#associar-o-anexo-a-um-sku).

## Saiba mais

* [Assembly Options](https://help.vtex.com/pt/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH)
* [O que é um Anexo?](https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm)

