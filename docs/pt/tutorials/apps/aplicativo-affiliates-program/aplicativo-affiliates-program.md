---
title: 'Aplicativo Affiliates Program'
id: 7IpHHHcjjWxdmSRMw1FMPQ
status: PUBLISHED
createdAt: 2022-11-07T14:17:36.954Z
updatedAt: 2023-03-29T14:35:30.885Z
publishedAt: 2023-03-29T14:35:30.885Z
firstPublishedAt: 2022-11-07T22:17:42.126Z
contentType: tutorial
productTeam: Apps
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: affiliates-program-app
legacySlug: aplicativo-affiliates-program
locale: pt
subcategoryId: 6GWaAkVqXQYN79ilMgUsPr
---

> ℹ️ O **Affiliates Program** é um aplicativo compatível apenas com lojas [VTEX IO](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), e não está disponível para lojas que utilizam [CMS Portal (Legado)](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) ou [Headless CMS](https://faststore.dev/tutorials/cms/0#vtex-headless-cms). Para instalar e configurar o aplicativo na sua loja VTEX, acesse o guia para desenvolvedores Affiliates Program app.

No aplicativo **Affiliates Program**, um afiliado é alguém que se associa a sua loja VTEX para promover as vendas em troca de uma comissão. O termo é, portanto, diferente do [conceito usual de afiliado na VTEX](/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0).

O aplicativo **Affiliates Program **cria uma URL específica da sua loja VTEX para os seus [afiliados cadastrados](#adicionar-afiliado). Quando o afiliado compartilha sua URL com um cliente e este realiza uma compra pelo link, o afiliado recebe uma comissão sobre a venda.

O aplicativo cria dois grupos de página após ser instalado em seu ambiente VTEX:

- [Páginas dos afiliados](#paginas-dos-afiliados)
- [Páginas no Admin VTEX](#paginas-no-admin-vtex)

### Páginas dos afiliados

O aplicativo cria três tipos de páginas para os afiliados, que dispõem delas sem precisar de qualquer acesso ao Admin VTEX da sua loja, conforme indicado na tabela abaixo:

| **Tipo**                         | **URL**                                              |
| -------------------------------- | ---------------------------------------------------- |
| Página do afiliado               | `{storeName.com}/affiliates/{affiliateSlug}`         |
| Página de perfil do afiliado     | `{storeName.com}/affiliates/{affiliateSlug}/profile` |
| Página do formulário de cadastro | `{storeName.com}/affiliate/form`                     |

A **página do afiliado** é a URL da loja VTEX que ele compartilha com os clientes. Veja um exemplo na imagem a seguir:

![print_affiliates_url_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/aplicativo-affiliates-program/aplicativo-affiliates-program_1.png)

A **página de perfil do afiliado** é uma interface pela qual ele pode acompanhar e gerenciar seus pedidos e comissões. Veja um exemplo na imagem a seguir:

![affiliate_profile_page_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/aplicativo-affiliates-program/aplicativo-affiliates-program_2.png)

A **página de cadastro** permite que os próprios interessados em se tornar afiliados preencham seus dados para solicitar registro junto a sua loja VTEX.

> ℹ️ As páginas dos afiliados são customizáveis. Para mais informações, veja o guia para desenvolvedores [Affiliates Program app](https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app).

### Páginas no Admin VTEX

O aplicativo **Affiliates Program** cria interfaces no Admin VTEX para que você gerencie todo o conteúdo relacionado a afiliados.

Após a [instalação](https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app#installation) do aplicativo, as seguintes páginas se tornam disponíveis no seu Admin VTEX, em **Apps > Afiliados**:

- [Gerenciamento de afiliados](#gerenciamento-de-afiliados)
- [Gerenciamento de pedidos](#gerenciamento-de-pedidos)
- [Gerenciamento de comissões](#gerenciamento-de-comissoes)

## Gerenciamento de afiliados

A página **Gerenciamento de afiliados **permite realizar as seguintes ações:

- [Adicionar afiliado](#adicionar-afiliado)
- [Pesquisar afiliados](#pesquisar-afiliados)
- [Filtrar afiliados](#filtrar-afiliados)
- [Visualizar detalhes do afiliado](#visualizar-detalhes-do-afiliado)
- [Editar afiliado](#editar-afiliado)

![affiliates_management_page_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/aplicativo-affiliates-program/aplicativo-affiliates-program_3.jpg)

### Adicionar afiliado

Para criar um novo afiliado, clique no botão `Adicionar afiliado`, preencha os campos apresentados e clique em `Salvar`.

> Os seguintes campos são de preenchimento obrigatório: _Nome_, _Email_, _Identificador da URL_ e _Telefone_.

### Pesquisar afiliados

Para pesquisar um afiliado, digite na barra de busca por alguma das seguintes informações: _ID do afiliado, Nome, Nome da Loja, Email_ ou* Telefone. *

> ⚠️ No aplicativo **Affiliates Program**, além do termo afiliado ser diferente do [conceito usual de afiliado na VTEX](/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0), o `ID do Afiliado` também não corresponde ao código padrão. No aplicativo, o `ID do Afiliado` é um código alfanumérico gerado automaticamente quando você cria um novo afiliado.

### Filtrar afiliados

Para filtrar a pesquisa de afiliados, clique sobre `Todos` <i class="fas fa-toggle-on"></i> e selecione a opção desejada. A opção default `Todos` realiza a pesquisa em todos os seus afiliados, e as outras opções são referentes à aprovação: `Sim` para afiliados aprovados e `Não` para os não aprovados.

### Visualizar detalhes do afiliado

Para visualizar os dados de um afiliado, na linha referente ao afiliado, clique em <i class="fas fa-ellipsis-v"></i> **Mais ações**, e em seguida clique em <i class="fas fa-eye"></i> **Detalhes**. Você será redirecionado para uma página onde pode visualizar informações sobre o afiliado e também realizar as seguintes ações:

- **Ativar o afiliado**: clicando no toggle em `Ativo?` <i class="fas fa-toggle-on"></i>.
- **Acessar a página [Gerenciamento de pedidos](#gerenciamento-de-pedidos) dos afiliados:** clicando no botão `Gerenciamento de pedidos`.
- **Editar afiliado:** clicando no botão `Editar`.

### Editar afiliado

Para editar um afiliado de forma a modificar seu cadastro, siga os passos abaixo:

1. Na linha referente ao afiliado, clique em <i class="fas fa-ellipsis-v"></i> **Mais ações**.
2. Clique em <i class="fas fa-pencil-alt"></i> **Editar**.
3. Altere os dados do cadastro.
4. Clique em `Salvar`.

## Gerenciamento de pedidos

A página **Gerenciamento de pedidos** permite realizar as seguintes ações:

- [Acompanhar dashboard](#acompanhar-dashboard)
- [Pesquisar pedidos](#pesquisar-pedidos)
- [Filtrar pedidos](#filtrar-pedidos)
- [Exportar lista de pedidos](#exportar-lista-de-pedidos)
- [Visualizar detalhes do pedido](#visualizar-detalhes-do-pedido)

![orders_management_page_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/aplicativo-affiliates-program/aplicativo-affiliates-program_4.jpg)

### Acompanhar dashboard

No topo da página, você visualiza as seguintes métricas sobre os pedidos realizados pelos links de um ou mais afiliados:

- **Total de pedidos:** número total dos pedidos dos afiliados.
- **Total do pedido:** soma dos valores dos pedidos, feita a partir do preço dos itens e sem incluir os custos de envio.
- **Total da comissão do pedido:** soma dos valores das comissões dos afiliados sobre os pedidos.

> ℹ️ Para acompanhar o fluxo de um pedido, clique sobre o `ID do pedido`. Desta forma, você é redirecionado para o Admin VTEX em **Pedidos > Todos os pedidos**.

### Pesquisar pedidos

Para pesquisar um pedido, digite na barra de busca o `ID do afiliado` relacionado ao pedido. Você pode realizar esta busca associada ao uso de filtros, como será visto [a seguir](#filtrar-pedidos).

### Filtrar pedidos

É possível filtrar a busca de pedidos pelos seguintes critérios:

- **Status do pedido:** a opção default é mostrar todos os pedidos. Para escolher um status, clique em **Todos os pedidos** <i class="fas fa-angle-down"></i> e selecione uma das opções sobre o pedido: _Criado, Pagamento aprovado, Pagamento pendente, Faturado ou Cancelado_. Saiba mais em [Fluxo e status de pedidos](/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196).
- **Período de criação do pedido:** filtre a partir de um intervalo de dias e horas durante o qual os pedidos foram criados. Para isso, no campo `De` determine uma data de início, e no campo `Até` coloque a data final.

### Exportar lista de pedidos

O aplicativo **Affiliates Program** permite que você exporte uma lista com extensão CSV dos pedidos de afiliados.

> ⚠️ Para habilitar a função de exportar lista, primeiro é necessário configurar templates de email, conforme descrito no guia para desenvolvedores [Affiliates Program app](https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app#email-templates).

Após a configuração, para exportar a lista basta clicar em **Exportar**, na página **Gerenciamento de Pedidos**. A seguinte mensagem de confirmação deve aparecer:

> _O relatório está sendo gerado e será enviado para o seu email._

O arquivo gerado será enviado para o email do [usuário](/pt/docs/tutorials/gerenciar-usuarios-administrativos) logado. O conteúdo exportado é referente ao total de pedidos da listagem no momento da exportação. Se algum filtro estiver ativo, somente os anúncios selecionados serão exportados.

### Visualizar detalhes do pedido

Para visualizar os dados de um pedido, na linha referente ao pedido clique <i class="fas fa-ellipsis-v"></i> **Mais ações**, e em seguida clique em <i class="fas fa-eye"></i> **Detalhes**.

## Gerenciamento de comissões

A página **Gerenciamento de comissões** permite realizar as seguintes ações:

- [Pesquisar comissões](#pesquisar-comissoes)
- [Editar comissões](#editar-comissoes)
- [Exportar planilha de comissões](#exportar-planilha-de-comissoes)
- [Importar comissões](#importar-comissoes)
- [Fazer o download da última importação](#fazer-o-download-da-ultima-importacao)

![commissions_ management_page_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/aplicativo-affiliates-program/aplicativo-affiliates-program_5.jpg)

### Pesquisar comissões

Para pesquisar entre as comissões de pedidos, na barra de busca da aba **Comissões cadastradas**, digite o `ID do SKU` do pedido, ou seja, o número que [identifica o SKU](/pt/tutorial/descobrir-o-id-de-um-sku--4VQZsYeb3igGK2YowuEYWW).

### Editar comissões

É possível alterar o valor percentual de uma comissão seguindo o passo a passo abaixo:

1. Na aba **Comissões cadastradas**, na linha referente à comissão que deseja editar, clique em <i class="fas fa-ellipsis-v"></i> **Mais ações**.
2. Clique em <i class="fas fa-pencil-alt"></i> **Editar**.
3. No modal aberto, digite o número da comissão desejada. Decimais não são aceitos.
4. Clique em `Confirmar`.

A seguinte mensagem deve aparecer:

> _Comissão atualizada com sucesso_

### Exportar planilha de comissões

Para exportar uma planilha de comissionamento por SKU com extensão CSV, no topo da página **Gerenciamento de comissões**, clique em **Exportar**. A seguinte mensagem de confirmação deve aparecer:

> _O relatório está sendo gerado e será enviado para o seu email._

O arquivo será enviado para o email do [usuário](/pt/docs/tutorials/gerenciar-usuarios-administrativos) logado.

> ℹ️ O conteúdo exportado é referente ao comissionamento dos SKUs da listagem no momento da exportação. Se algum filtro estiver ativo, somente as comissões de SKU selecionadas serão exportadas.

### Importar comissões

Você pode fazer uma atualização em massa de comissionamentos por SKU, conforme o passo a passo abaixo. Se desejar, pode utilizar um template de modelo, clicando em `template em XLSX`.

1. Acesse a aba **Importar comissões**.
2. Arraste e solte o arquivo em formato CSV ou XLSX na área pontilhada, ou clique em `escolha um arquivo`.
3. Clique em `Enviar arquivo`.

Confira se a seguinte mensagem aparece:

> _O arquivo está sendo processado_

O nome do arquivo adicionado vai aparecer próximo ao campo `Última importação`.

> ℹ️ É possível identificar a data de importação e o usuário que executou a ação, passando o cursor sobre o símbolo `?` em `Última importação`.

### Fazer o download da última importação

O último arquivo importado fica disponível para download. Para baixá-lo, acesse a aba **Importar comissões**, identifique o nome do arquivo próximo a `Última importação` e clique sobre ele.
