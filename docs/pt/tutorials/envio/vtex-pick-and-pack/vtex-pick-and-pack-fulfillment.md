---
title: 'VTEX Pick and Pack: Fulfillment'
id: 1zGUEItEEVsal6cuBEBNcA
status: PUBLISHED
createdAt: 2023-04-10T15:43:59.687Z
updatedAt: 2025-08-05T15:59:40.479Z
publishedAt: 2025-08-05T15:59:40.479Z
firstPublishedAt: 2023-04-10T17:57:34.714Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: vtex-pick-and-pack-fulfillment
legacySlug: vtex-pick-and-pack-fulfillment
locale: pt
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

> ℹ️ Caso tenha interesse em adotar essa funcionalidade no seu negócio, preencha nosso [formulário](https://vtex.com/br-pt/contato/) apontando no campo `Comentários` o nome do produto desejado.

[VTEX Pick and Pack](/pt/docs/tutorials/vtex-pick-and-pack) é uma solução para otimizar os processos de fulfillment das lojas, otimizando a coleta e o empacotamento dos pedidos, além da entrega last mile. A solução é composta pelas páginas de [Last Mile](/pt/docs/tutorials/vtex-pick-and-pack-last-mile) e **VTEX Pick and Pack Fulfillment**, e aparece em seu Admin VTEX em **Apps**.

O módulo **VTEX Pick and Pack Fulfillment** está relacionado ao processo de manuseio de pedidos e apresenta as seguintes seções:

* [Coleta e empacotamento](#coleta-e-empacotamento)
* [Insights](#insights)
* [Configurações](#configuracoes)
* [Usuários](#usuarios)

> ❗ O **VTEX Pick and Pack** não é um sistema de faturação. Após a coleta e o empacotamento, o pedido deve ser faturado e atualizado como `Faturado` no OMS, de modo que o **VTEX Fulfillment** possa terminar o fluxo de coleta e empacotamento e seguir com o envio.

## Coleta e empacotamento

A interface de gerenciamento de pedidos tem duas páginas principais:

* [Lista de coleta e empacotamento](#lista-de-coleta-e-empacotamento)
* [Detalhes de coleta e empacotamento](#detalhes-de-coleta-e-empacotamento)

### Lista de coleta e empacotamento

Ao acessar **Fulfillment > Coleta e empacotamento**, você encontra uma página listando todos os pedidos com pagamento confirmado que estão no [status](/pt/docs/tutorials/fluxo-e-status-de-pedidos) `Pronto para coleta`, como na imagem abaixo:

A tabela abaixo contém a descrição das colunas apresentadas:

| **Coluna** | **Descrição** |
| ---------- | ---------- |
| Data de criação | Data e hora de realização do pedido. |
| Data de entrega | O prazo de entrega dos pedidos, conforme definido no acordo de nível de serviço (SLA) entre a loja e o cliente. |
| Método de entrega | Tipo de envio do pedido, que pode ser entrega, envio para o endereço do cliente, ou coleta em um [ponto de retirada](/pt/docs/tutorials/pontos-de-retirada). |
| Número do pedido | ID único que identifica um pedido, o mesmo usado no sistema de gerenciamento de pedidos (OMS). |
| Entregador | Nome do entregador alocado para o pedido. O entregador é a pessoa responsável pelo processo de coleta. O valor padrão é `Não alocado` até que um entregador seja alocado. |
| Status | Status do pedido, que pode ser: <ul><li>**Pronto para separar:** os pedidos estão prontos para serem separados, mas ainda não foram alocados a um coletor.</li><li>**Pronto para coletar:** o pedido foi alocado para um coletor e depende da confirmação dele para passar para o próximo status.</li><li>**Coletando:** os itens do pedido estão sendo coletados.</li><li>**Pronto para embalar:** o coletor terminou o processo de coleta e o pedido está pronto para ser embalado.</li><li>**Embalando:** os itens do pedido estão sendo colocados em sacolas ou embalagens determinadas pela loja.</li><li>**Pronto para faturar:** o pedido pode ser faturado. A solução *VTEX Pick and Pack* não fatura pedidos.</li><li>**Faturado:** o pedido foi faturado.</li><li>**Preparando serviços:** os serviços de envio estão prontos para serem criados.</li><li>**Pronto para enviar:** o pedido está pronto para ser enviado.</li><li>**Entregue:** o pedido foi entregue no endereço do cliente ou no ponto de retirada.</li><li>**Parado:** o pedido foi de fulfillment externo e não poderá ser processado pelo *VTEX Pick and Pack*. Se o pedido for faturado no OMS em um status diferente de `Pronto para faturar`, o sistema também o considerará um fulfillment externo e alterará o status do pedido para `Parado`.</li><li>**Cancelado:** o pedido estava pronto para ser coletado, mas foi cancelado.</li></ul> |

Para ver mais detalhes de um pedido, selecione-o na lista e as seguintes informações serão exibidas:

| **Coluna** | **Descrição** |
| ---------- | ---------- |
| Informações do cliente | Nome do cliente, email e número para contato. |
| Informações de entrega | Endereço de entrega do cliente ou endereço do ponto de retirada, quando o cliente escolhe a opção de retirada na loja. |
| Janela de entrega | Mostra a data em que o pedido foi feito e a data prevista para o cliente recebê-lo. |
| Item(ns) do pedido | Quantidade de itens e suas categorias. |
| Meio de pagamento | Valor total do pedido e o [meio de pagamento](/pt/docs/tutorials/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento) usado, como cartões de crédito ou débito. |

Você pode realizar as seguintes ações na página de Coleta e empacotamento:

* [Pesquisar](#pesquisar)
* [Filtrar](#filtrar)
* [Importar](#importar)
* [Exportar](#exportar)
* [Imprimir recibo](#imprimir-recibo)
* [Alocar/realocar entregador](#alocar/realocar-entregador)

#### Pesquisar

No topo da página, há uma caixa de busca com o ícone de lupa <i class="fas fa-search"></i>, na qual você pode procurar por pedidos usando os seguintes critérios:

* ID do pedido
* Nome do cliente
* Operador de loja responsável pelo pedido

#### Filtrar

Você pode filtrar os pedidos utilizando diferentes critérios, e ao clicar em `Filtros`, um modal exibe estas opções:

* **Ordem crescente/decrescente:** ao selecionar ordem crescente, são exibidos primeiro os pedidos com data e hora de entrega mais recentes, conforme definido pelos clientes no checkout. Já na ordem decrescente, os pedidos são exibidos da maneira oposta.
* **Data do pedido:** defina um intervalo para filtrar os pedidos criados entre as datas de início e fim escolhidas.
* **Data de expiração:** prazos de entrega entre as datas de início e término escolhidas.
* **Status:** selecione um ou mais [status do pedido](#lista-de-coleta-e-empacotamento).
* **Total do pedido:** faixa de preço do pedido, que pode ir de R$ 0 a R$ 5 milhões.
* **Número de itens:** número de itens do pedido, que pode ir de 0 a 99.
* **Transportadora:** a [transportadora](/pt/docs/tutorials/transportadoras-na-vtex) responsável pela entrega.
* **Meio de pagamento:** o [meio de pagamento](/pt/docs/tutorials/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento) usado pelo cliente, como cartões de crédito ou débito.
* **Entregador:** o entregador alocado para o processo de coleta do pedido. Use os emails dos entregadores disponíveis.
* **Categorias:** categorias de itens dos pedidos, por exemplo, _Bebidas_ ou _Roupas_. Depende da árvore de categoria da loja configurada no Catálogo.

Se você quiser remover os filtros selecionados, clique em `Filtros` e depois em `Limpar filtros`.

#### Importar

Por padrão, os pedidos no status `Pronto para separar` devem ser importados automaticamente do OMS para o VTEX Pick and Pack. Se um pedido não está aparecendo no módulo de fulfillment, apesar de estar `Pronto para separar`, pode ser devido a mudanças manuais no status do pedido no OMS, e você pode importá-lo manualmente.

Para importar um pedido manualmente, siga os passos abaixo:

1. Clique em `Importar`.
2. Insira o ID do pedido.
3. Selecione a caixa de seleção "_Somente os pedidos que não foram baixados automaticamente serão importados_".
4. Clique em `Importar`.

#### Exportar

Você pode exportar uma lista de pedidos seguindo os passos abaixo:

1. Clique em `Exportar`.
2. Aplique os filtros desejados.
    > Não é possível exportar todos os pedidos. Você pode duplicar ou excluir filtros no menu &lt;insert_icon>. Os filtros disponíveis são:
    * Entregador
    * Categorias
    * Transportadora
    * Data de início
    * Data de término
    * Cidade
3. Clique em `Exportar`.

#### Imprimir recibo

O recibo é um relatório que contém o que o entregador coletou e o valor total do pedido. Pode funcionar como uma nota fiscal em alguns países, mas isso não é regra.

Para imprimir o recibo de um pedido, clique no menu <i class="fas fa-ellipsis-v"></i> da linha que corresponde ao pedido e selecione `Imprimir recibo`.

#### Alocar/realocar entregador

Para alocar ou realocar um entregador, na linha do pedido desejado, clique no menu <i class="fas fa-ellipsis-v"></i> e selecione `Alocar` ou `Realocar`. Isso abrirá um modal para selecionar o nome do entregador.

Você também pode alocar ou realocar um entregador na [página de detalhes de Coleta e empacotamento](#detalhes-de-coleta-e-empacotamento), clicando no ícone do lápis <i class="fas fa-pencil-alt"></i> e selecionando o entregador.

### Detalhes de coleta e empacotamento

Para acessar a página de detalhes de um pedido, na **página da lista de Coleta e empacotamento**, clique no botão <i class="fas fa-ellipsis-v"></i> do menu na linha do pedido sobre o qual você deseja ver mais informações e selecione `Ver detalhes`. Você será redirecionado para a seguinte página:

Na página de detalhes, você pode realizar as ações abaixo. As ações disponíveis na **página de detalhes de Coleta e empacotamento** mudarão conforme o status do pedido apresentado na [página de lista de Coleta e empacotamento](#lista-de-coleta-e-empacotamento).

* [Coletar](#coletar)* 
* [Adicionar item](#adicionar-item)*
* [Criar produto personalizado](#criar-produto-personalizado)
* [Substituir por item recomendado (Sugestões)](#substituir-por-item-recomendado-sugestoes)*
* [Substituir item (Pesquisar)](#substituir-item-pesquisar)*
* [Alterar preço](#alterar-preco)*
* [Excluir item](#excluir-item)*
* [Concluir coleta/confirmar coleta](#concluir-coletaconfirmar-coleta)*
* [Embalar](#embalar)*
* [Imprimir recibo e comprovante](#Imprimir-recibo-e-comprovante)
* [Adicionar serviço de envio](#adicionar-servico-de-envio)
* [Rastrear pedido](#rastrear-pedido)

> ❗ Embora as ações acima possam ser realizadas por [usuários](/pt/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#usuarios) com acesso ao Admin, geralmente as ações com um ***** (asterisco) devem ser executadas somente por entregadores em seus dispositivos móveis, sem qualquer acesso ao Admin da loja.

#### Coletar

No fluxo natural, a coleta é feita por coletores em seus dispositivos móveis. Esta seção mostra como fazer isso via Admin, no caso de [outros usuários](#usuarios) precisarem realizar esta ação.

Na linha do produto, como na imagem abaixo, você pode coletá-lo e realizar outras ações.

Para coletar um produto, siga os passos abaixo:

1. Na coluna **Quantidade**, selecione o número desejado de itens.
2. Clique no símbolo de confirmar <i class="far fa-check-circle"></i> no final da linha.
3. Clique em `Confirmar`.

Caso você precise desfazer a coleta, clique no menu <i class="fas fa-ellipsis-v"></i> na linha do produto e selecione `Restaurar`.

#### Adicionar item

No fluxo natural, a adição de itens é feita por coletores em seus dispositivos móveis. Esta seção mostra como fazer isso via Admin, no caso de [outros usuários](#usuarios) precisarem realizar esta ação.

Você pode adicionar outro produto seguindo os passos abaixo:

1. No menu <i class="fas fa-ellipsis-v"></i>, na mesma linha do ID do pedido, clique em `+Adicionar item`.
2. Pesquise o produto desejado.
3. Clique em `Selecionar`.
4. Clique em `Adicionar produtos`.

#### Criar produto personalizado

Você pode criar um produto personalizado seguindo os passos abaixo:

1. No menu <i class="fas fa-ellipsis-v"></i>, na mesma linha do ID do pedido, clique em `+ Adicionar item`.
2. Clique no ícone <i class="fas fa-plus"></i> com sinal de mais.
3. Preencha os campos a seguir:
    * Nome
    * Preço
    * RefID
    * EAN
4. Selecione uma categoria.
5. Clique em `Adicionar`.
6. Clique em `Adicionar produtos`.

#### Pesquisar: substituir item

No fluxo natural, a substituição de itens é feita por coletores em seus dispositivos móveis. Esta seção mostra como fazer isso via Admin, no caso de [outros usuários](#usuarios) precisarem realizar esta ação.

Você pode substituir um produto da seguinte forma:

1. Na linha de um produto não coletado, clique no menu <i class="fas fa-ellipsis-v"></i>.
2. Clique em `Pesquisar`.
3. Pesquise o produto desejado.
4. Clique em `Selecionar`.
5. Clique em `Confirmar`.
6. No modal exibido, selecione um motivo para a substituição.
    > Os motivos precisam ser configurados, como explicado na seção [Configurações de coleta](#configuracoes-coleta).
7. Preencha o campo **Observações** com uma breve explicação para a substituição (obrigatório).
8. Clique em `Confirmar`.

#### Sugestões: substituir por item recomendado

No fluxo natural, a substituição de itens é feita por coletores em seus dispositivos móveis. Esta seção mostra como fazer isso via Admin, no caso de [outros usuários](#usuarios) precisarem realizar esta ação.

Você pode substituir um item por outro com base em uma recomendação. A opção exibida depende de quais são suas configurações no [Intelligent Search](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb). 

Para substituir um item por uma recomendação, siga os passos abaixo:

1. Na linha de um produto não coletado, clique no menu <i class="fas fa-ellipsis-v"></i>.
2. Clique em `Sugestões`.
3. Adicione o produto exibido clicando em `Selecionar`.
4. Clique em `Confirmar`.
5. No modal exibido, selecione um motivo para a substituição.
    > Os motivos precisam ser configurados, como explicado na seção [Configurações de coleta](#configuracoes-coleta).
6. Preencha o campo **Observações** com uma breve explicação para a substituição (obrigatório).
7. Clique em `Confirmar`.

Para pesquisar por um produto manualmente, siga os passos abaixo:

1. No menu <i class="fas fa-ellipsis-v"></i>, clique em `Sugestões`.
2. Clique em `Pesquisar manualmente`.
3. Pesquise o produto desejado.
4. Clique em `Selecionar`.
5. Clique em `Confirmar`. 
6. No modal exibido, selecione um motivo para a substituição.
    > Os motivos precisam ser configurados, como explicado na seção [Configurações de coleta](#configuracoes-coleta).
7. Preencha o campo **Observações** com uma breve explicação para a substituição (obrigatório).
8. Clique em `Confirmar`.

#### Alterar preço

No fluxo natural, a alteração de preço é feita por coletores em seus dispositivos móveis. Esta seção mostra como fazer isso via Admin, no caso de [outros usuários](#usuarios) precisarem realizar esta ação.

Para alterar o preço de um item, siga os passos abaixo:

1. Na linha de um produto não coletado, clique no menu <i class="fas fa-ellipsis-v"></i>. 
2. Clique em `Alterar preço`.
3. No modal exibido, preencha os campos:
    * Novo preço
    * Motivo
    * Observações
4. Clique em `Alterar preço`.

#### Excluir item

No fluxo natural, a exclusão de itens é feita por coletores em seus dispositivos móveis. Esta seção mostra como fazer isso via Admin, no caso de [outros usuários](#usuarios) precisarem realizar esta ação.

Você pode recusar um produto seguindo os passos abaixo:

1. No menu <i class="fas fa-ellipsis-v"></i>, clique em `Excluir item`.
2. No modal exibido, selecione um motivo para a recusa.
3. Preencha o campo **Observações** com uma breve explicação para a exclusão (obrigatório).
4. Clique em `Confirmar`.

Caso você precise restaurar o produto, clique no menu <i class="fas fa-ellipsis-v"></i> e selecione `Restaurar`.

#### Concluir coleta/confirmar coleta

No fluxo natural, essa etapa é feita por coletores em seus dispositivos móveis. Esta seção mostra como fazer essas ações via Admin, no caso de [outros usuários](#usuarios) precisarem realizá-las.

Dependendo do status do pedido apresentado na [página da lista de Coleta e empacotamento](#lista-de-coleta-e-empacotamento), na seção **Status**, você encontrará diferentes botões para ações específicas, como `Concluir coleta` na imagem abaixo:

Você pode realizar as seguintes ações ao clicar nas opções de botões disponíveis:

* `Concluir coleta`: todos os itens foram coletados e você conclui a coleta, passando para o processo de empacotamento.
* `Confirmar a coleta`: se for uma entrega, você confirma a coleta quando os pacotes estiverem prontos para serem entregues e forem coletados por uma transportadora. Se o cliente receber o pedido em um ponto de retirada, você confirma a coleta após o cliente receber os pacotes.

#### Embalar 

No fluxo natural, o empacotamento é feito por coletores em seus dispositivos móveis. Esta seção mostra como fazer isso via Admin, no caso de [outros usuários](#usuarios) precisarem realizar esta ação.

Ao terminar o processo de coleta, você precisa criar os pacotes e indicar qual item vai em cada pacote. As [configurações dos pacotes](#configuracoes-de-pacotes) sobre como configurar sacolas e outros tipos de pacotes serão vistas nas próximas seções.

Para criar um novo pacote, siga os passos abaixo:

1. Clique no ícone na seção **Lista dos pacotes**.
2. Selecione o tipo do pacote.
3. Clique em `Criar pacote`.

Você pode adicionar um único produto a um pacote ou todos os produtos de uma vez. Depois que todos os produtos estiverem embalados, clique em `Fechar pacotes`. Uma vez fechados os pacotes, você não poderá mais adicionar itens ou fazer qualquer tipo de alteração.

> ❗ O **VTEX Pick and Pack** não é um sistema de faturação. Assim que o pedido passar para o status de `Pronto para faturar`, ele deve ser faturado e atualizado como `faturado` no OMS. Somente depois disso o **VTEX Fulfillment** irá terminar o fluxo de coleta e empacotamento e proceder para o envio.Se o pedido é faturado em um status diferente de /`Pronto para faturar`, o sistema irá considerar que é um caso de fulfillment externo e mudará o status do pedido para `Inativo`, desativando o **VTEX Pick and Pack** para processá-lo.

#### Imprimir recibo e comprovante

No topo da página de detalhes, do lado esquerdo de **Status**, você encontrará um menu <i class="fas fa-ellipsis-v"></i>. Ao clicar nele, serão exibidas as seguintes opções:

* **Recibo:** imprima o recibo do pedido com uma relação de todos os itens.
* **Comprovante:** imprima o comprovante, um relatório para o cliente contendo informações gerais, e que pode ser assinado por ele.
* **Recibo dos itens coletados:** imprima o recibo do pedido referente apenas aos itens já selecionados.
* **Comprovante dos itens coletados:** imprima o comprovante referente apenas aos itens já selecionados.
* **+ Adicionar item:** [adicione um novo produto](#adicionar-item) ou [crie um produto personalizado](#criar-produto-personalizado).

#### Adicionar serviço de envio

Quando a coleta, o empacotamento e o faturamento do pedido forem concluídos e o pedido estiver no status _Preparando serviços_, você pode adicionar um serviço de envio seguindo os passos abaixo:

1. Clique no botão `Adicionar serviço`.
2. Selecione o **dia** e a **hora** em que o pedido será despachado.
3. Selecione o **dia** e a **hora** em que o pedido será enviado.
4. Escolha uma transportadora.
5. Selecione um tipo de serviço.
6. Selecione um meio de pagamento.
7. Selecione os pacotes que serão enviados.
8. Clique em `Confirmar remessas`.

Você receberá uma mensagem de sucesso e o pedido passará para o status _Pronto para enviar_.

#### Rastrear pedido

Quando o pedido passar para o status _Pronto para enviar_ ou _Entregue_, o botão `Ir para rastreamento` aparecerá na [página de detalhes de Coleta e empacotamento](#detalhes-de-coleta-e-empacotamento). Ao clicar nele, você será redirecionado para o [Last Mile](/pt/docs/tutorials/vtex-pick-and-pack-last-mile) para rastrear o pedido.

Você também pode ir para o **Last Mile** diretamente no Admin da loja, acessando **Apps > Last Mile > Serviços de envio**.

## Insights

No **VTEX Pick and Pack**, a página **Insights** apresenta dados e análises sobre seus pedidos durante o processo de fulfillment. Nessa página, há duas abas: 

* [Coleta e empacotamento](#insights-coleta-e-empacotamento)
* [Operação](#insights-operacao)

> ⚠️ Para poder acessar a página de **Insights**, você precisa ter um perfil de usuário administrador no VTEX Fulfillment, que é diferente dos [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso). Para mais informações, consulte a seção [Usuários](/pt/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#usuarios).

### Insights: Coleta e empacotamento

**Total de pedidos** é uma métrica atualizada em tempo real que disponibiliza informações sobre todos os pedidos de um determinado período em comparação com outro. Você pode usar vários [filtros](#insights-filtros) para obter resultados diferentes.

#### Insights: filtros

Você pode combinar vários filtros para filtrar as informações que deseja ver nas métricas, acessando os `Filtros` na parte superior da página. É possível filtrar pelos seguintes critérios:

* Entregador
* Método de entrega
* Transportadora
* Cidade
* Seller

> ℹ️ O filtro **Seller** está disponível apenas para contas que operam como marketplace. [Sellers white label](/pt/docs/tutorials/seller-white-label) não têm essa opção de filtro em **Insights**.

Além da métrica de **total de pedidos**, há uma sequência de métricas para obter dados sobre _meios de pagamento_ e pedidos:

* Coletados
* Enviados
* Entregues
* Cancelados

Você pode aplicar vários filtros para obter resultados diferentes.

#### Insights: Desempenho de categorias e produtos

Abaixo do **total de pedidos**, você encontrará métricas sobre o número de pedidos, as unidades compradas e a que categoria pertencem. É possível agrupá-las por `Categorias` ou `Produtos`.

### Insights: Operação

Na aba **Operação**, você verá o **fluxo de pedidos** de Coleta e empacotamento, que mostrará a quantidade total de pedidos distribuídos por dia nos últimos sete dias. Quanto mais escuro for o tom de azul, mais pedidos, quanto mais claro, menos.

> ℹ️ O fluxo de **Coleta e empacotamento** é calculado considerando todos os pedidos dos últimos 7 dias e os distribui em horas, de 0 a 23. Mesmo se você mudar o período para 15 dias, por exemplo, a visualização permanecerá fixa considerando 7 dias.

Abaixo do **fluxo de pedidos**, há uma métrica com pedidos filtrados por entregador. Você irá ver informações sobre:

* Pedidos
* Produtos
* Produtos recusados
* Taxa de fulfillment
* Tempo médio

A página também fornece métricas relacionadas aos seguintes tópicos:

* **Pedidos coletados:** número de pedidos coletados no período selecionado.
* **Taxa de fulfillment:** porcentagem de pedidos coletados dentro do prazo mínimo de entrega. 
* **Tempo:** tempo médio do processo de coleta.
* **Motivo da recusa:** explicação de por que o produto foi recusado.
* **Motivo da substituição:** explicação de por que o produto foi substituído.
* **Motivo da alteração de preço:** explicação de por que um produto sofreu alteração de preço.

## Configurações

Para configurar o **VTEX Pick and Pack** na sua loja, no Admin VTEX, acesse **Apps > Fulfillment > Configurações**. Você verá uma página com as seguintes abas:

* [Geral](#configuracoes-gerais)
* [Coleta](#configuracoes-de-coleta)
* [Categorias](#configuracoes-de-categorias)
* [Pacotes](#configuracoes-de-pacotes)
* [Envio](#configuracoes-de-envio)
* [Impressão](#configuracoes-de-impressao)
* [Webhooks](#configuracoes-de-weebhook)

> ⚠️ Para poder acessar as **Configurações**, você precisa ser um [usuário administrador do VTEX Fulfillment](/pt/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#usuarios-e-license-manager-no-vtex-fulfillment) ou um usuário de atendimento ao cliente.

### Configurações gerais

Nesta aba, você pode configurar a loja à qual está adicionando o **VTEX Pick and Pack**. Você pode escolher uma loja clicando no lápis <i class="fas fa-pencil-alt"></i> no topo da página e selecionando a loja desejada.

Para configurar uma loja, siga os passos abaixo:

1. Preencha os campos ao lado do mapa com as informações do endereço da loja.
2. Em **Informações de contato**, preencha com os dados sobre a pessoa que será contatada, caso seja necessário.
3. Em **Horário de trabalho**, defina a hora inicial e final dos dias da semana em que a coleta da loja pode ser realizada.
4. Em **Unidade de medida**, selecione qual unidade será o padrão para medir o comprimento dos itens e pacotes, por exemplo.
5. Clique no botão `Salvar`.

### Configurações de coleta

Nesta aba, você configura alguns dos principais aspectos e preferências do processo de coleta, como os motivos de recusa e [entregadores](#usuarios-e-license-manager-no-vtex-fulfillment).

Para ajustar as configurações de coleta, siga os passos abaixo:

1. Em **Alocação de entregadores**, selecione se a loja irá alocar entregadores manualmente (`manual`), por um [usuário administrador](#usuarios-e-license-manager-no-vtex-fulfillment), ou automaticamente (`automático`), com base na disponibilidade dos entregadores.
2. Em **Caminho do pacote**, selecione o momento em que você deseja que o processo de empacotamento comece, que pode ser:
    * Após a coleta
    * Após a faturação
    * A partir da faturação
3. No **aplicativo de coleta**, alterne o botão <i class="fas fa-toggle-on"></i> para ativar as preferências das atividades que os entregadores irão poder ver e realizar pelo aplicativo móvel. Não é obrigatório ativá-las, e as opções são as seguintes:
    * Exibir informações do cliente
    * Permitir alteração de preços
    * Permitir substituição de produtos
    * Permitir recusa de produtos
    * Limitar a quantidade de itens para coleta
    * Permitir empacotamento
4. Em **Motivos**, em _Motivos da substituição_, preencha o campo com o nome da opção que irá identificar uma razão de substituição válida e pressione `Enter`. Repita o processo para adicionar quantas opções quiser.
5. Em _Motivos da alteração de preço_, preencha o campo com o nome da opção que irá identificar uma razão de substituição válida e pressione `Enter`. Repita o processo para adicionar quantas opções quiser.
6. Preencha o campo _Limite de alterações_ com o número de alterações que podem ser feitas por pedido.
7. Em **Ordem de prioridade**, escolha o nível de prioridade no nível da árvore de categorias para classificar os itens no processo de coleta. Você pode escolher entre `1` (categorias principais) ou `2` (categorias filhas).
8. Clique no botão `Salvar`.

### Configurações de categorias

Nesta aba, você encontrará categorias e subcategorias que devem ser listadas conforme as prioridades do modelo de negócios da loja.

As ações que você pode fazer são as seguintes:

* **Alterar prioridade:** clique sobre a categoria e arraste-a para a posição desejada. 
* **Excluir categoria:** clique no ícone de lixeira &lt;insert_icon> e depois em `Sim, excluir`. Esta ação fará com que a categoria desapareça da lista e apareça ao lado, em _Prioridade de categoria/coleta_.
* **Adicionar categoria:** se uma categoria foi excluída, ela aparecerá em _Prioridade de categoria/coleta_, e você pode adicioná-la à lista clicando nela.

Após alterar a lista de prioridades, clique em `Salvar`.

### Configurações de pacotes

Nesta aba, você controla os pacotes usados para entregar o pedido e pode criar ou excluir um pacote.

Para criar um pacote, faça o seguinte:

1. Clique em `Adicionar novo`.
2. Preencha o nome que identificará o pacote.
3. Preencha as medidas do pacote: altura, largura e comprimento, usando apenas números. 

  > ℹ️ A unidade de medida é aquela configurada na aba [Geral](/pt/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA#configuracoes-gerais), em **Unidades de medida**.

4. Clique em `Adicionar`.

Para excluir um pacote, clique na linha desse pacote e, em seguida, clique em `Sim, excluir`.

### Configurações de envio

Nesta aba, você associa um serviço [Last Mile](/pt/docs/tutorials/vtex-pick-and-pack-last-mile) à sua loja, o que permite rastrear o status e a localização com atualizações em tempo real, enquanto sua frota interna de entregadores realiza as entregas dos pedidos aos clientes.

Se o botão **Last Mile** <i class="fas fa-toggle-off"></i> estiver desativado, não há opções de configuração. Para começar a usar o Last Mile, faça o seguinte:

1. Ative o botão clicando nele <i class="fas fa-toggle-on"></i>.
2. Em **Transportadora associada**, selecione o nome da transportadora.
3. Se você não quiser ativar a alocação automática de entregadores ao criar serviços de envio, deixe o botão desativado <i class="fas fa-toggle-off"></i> e clique em `Salvar`.
4. Caso queira ativar a alocação automática de entregadores, ative o botão <i class="fas fa-toggle-on"></i> `Alocação automática de entregadores`.
5. Em _Tipo de alocação_, selecione a regra de alocação para escolher entregadores, que pode ser:
    * **Um por vez:** a notificação de serviço é enviada ao entregador que está mais próximo do ponto de coleta. Se o primeiro entregador não aceitar o serviço dentro do prazo de expiração da solicitação, o serviço será enviado para o segundo entregador mais próximo, e assim por diante. Se nenhum entregador aceitar o serviço, ele permanecerá sem alocação.
    * **Enviar para todos:** todos os entregadores disponíveis no fuso horário do serviço recebem a notificação, com limite máximo de 500 entregadores. O serviço é alocado ao primeiro entregador que o aceitar, e permanece sem alocação até ser aceito por alguém.
    * **Rodízio:** dentro de um determinado raio, é feita uma alocação por rodízio, ou round robin — um algoritmo para agendamento e alocação de recursos — ao entregador, e você pode selecionar as seguintes opções:
        * Alocar serviços a usuários desconectados
        * Reiniciar a alocação se o serviço for recusado
        * Priorizar entregadores sem serviços
        * Priorizar entregadores com prazos de entrega mais curtos
    * **O mais próximo:** a alocação do serviço é dada ao entregador que estiver disponível mais próximo do ponto onde o pedido será coletado.
6. Preencha o campo _Expira em (segundos)_ com x, usando apenas números. 
7. Preencha o campo _Número de tentativas_ com x, usando apenas números. 
8. Clique em `Salvar`.

### Configurações de impressão

Nesta aba, você configura as preferências de [impressão](#imprimir-recibo-e-comprovante) organizadas nas seguintes seções:

* **Recibo:** o recibo do pedido.
* **Etiqueta do pacote:** etiqueta que aparece no pacote e pode ser escaneada no processo de coleta.
* **Etiqueta de envio:** etiqueta com o endereço de envio.

Em cada uma dessas seções, há um botão <i class="fas fa-toggle-off"></i> `Desativado` que precisa ser <i class="fas fa-toggle-on"></i> `Ativado` para que a configuração seja válida. 

Ao terminar de definir as configurações de impressão, clique em `Salvar`.

### Configurações de webhook

Nesta aba, você pode configurar um webhook para ser notificado sobre alterações de status dos pedidos e [obter informações](https://developers.vtex.com/docs/guides/vtex-pick-and-pack-get-order-status-and-information-api) sobre um pedido específico.

> ℹ️ Para mais informações, veja nossa documentação do [VTEX Pick and Pack para desenvolvedores](https://developers.vtex.com/docs/guides/vtex-pick-and-pack-get-order-status-and-information-api#webhook).

## Usuários

No **VTEX Pick and Pack**, a página **Usuários** permite gerenciar os perfis envolvidos no processo de fulfillment, chamados de _usuários_. Existem três tipos de usuários: 

| **Usuário** | **Descrição** | **Permissão** |
| ---------- | ---------- | ---------- |
| Entregador | Pessoa responsável pela coleta. | <ul><li>Acesso ao aplicativo, seja na versão mobile ou web (não funciona offline).</li><li>Não tem acesso ao Admin.</li></ul> |
| Atendimento ao cliente | O operador da loja responsável pelo pedido e que tem acesso ao Admin. | <ul><li>Acesso a todos os pedidos no Admin.</li><li>Rastreamento de pedidos.</li><li>Comunicação com os entregadores.</li></ul> |
| Administrador | A função de administrador tem acesso para verificar os entregadores, gerenciar todas as configurações e o fluxo dos pedidos, incluindo o cancelamento de pedidos, caso seja necessário. | Todas as permissões dadas ao usuário de atendimento ao cliente, além de: <ul><li>Gerenciar todas as configurações.</li><li>Gerenciar o fluxo de pedidos, incluindo o cancelamento de pedidos.</li></ul> |

### Usuários e License Manager no VTEX Fulfillment

O conceito de _usuário_ no **VTEX Pick e Pack** é diferente do significado comum do termo na VTEX. No **VTEX Fulfillment**, existem três tipos de usuários que participam do processo de fulfillment: entregador, atendimento ao cliente e administrador. Geralmente, na VTEX, os usuários estão relacionados com [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) e [recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager).

Para acessar o **VTEX Fulfillment**, os usuários administradores e de atendimento ao cliente devem ter permissões relacionadas aos recursos do License Manager. Recomendamos [criar um perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) identificado como "_Fulfillment admin_", contendo pelo menos os seguintes produtos e recursos associados a ele:

| **Produto** | **Recursos associados** |
| ---------- | ---------- |
| Insights | <ul><li>Insights metrics</li></ul> |
| License Manager | <ul><li>Get account by identifier</li><li>Get applications </li><li>Find user by email</li><li>View users with account access</li><li>View all admin users</li><li>Get resource by key</li><li>Get role</li><li>Get paged roles</li><li>Get paged users</li><li>Get admin status</li><li>Get accounts</li><li>Get accounts by host</li></ul> |

### Ações na página Usuários

Na página **Usuários**, você pode realizar as seguintes ações:

* [Adicionar um usuário entregador](#adicionar-um-usuario-entregador)
* [Adicionar um usuário de atendimento ao cliente](#adicionar-um-usuário-de-atendimento-ao-cliente)
* [Adicionar um usuário administrador](#adicionar-um-usuario-administrador)
* [Editar usuários](#editar-usuarios)
* [Gerar chave API](#gerar-chave-api)
* [Excluir](#excluir)

#### Adicionar um usuário entregador

Para criar um novo _entregador_, siga os passos abaixo:

1. Em seu Admin VTEX, acesse **Apps > Fulfillment > Usuários**.
2. No menu superior <i class="fas fa-ellipsis-v"></i>, clique em `Adicionar entregador`.
3. Preencha as seguintes informações:
    * **Nome:** nome completo do entregador.
    * **Email:** email do entregador.
    * **Usuário:** nome do usuário que identificará o entregador.
    * **Senha:** a senha que o entregador precisará para se identificar e se autenticar no aplicativo. Sua senha deve ter pelo menos:
        * Uma letra maiúscula
        * Uma letra minúscula
        * Um número
    * **Lojas:** selecione o ambiente ao qual o entregador será associado. Cada ambiente pode ter múltiplos [sellers white label](/pt/docs/tutorials/seller-white-label) associados a ele.
    * **Categorias:** selecione até quatro categorias relacionadas aos produtos que o entregador irá coletar.

  > ℹ️ As categorias relacionadas ao entregador otimizam o algoritmo ao determinar qual entregador receberá o pedido. Mas essa não é uma limitação: qualquer entregador pode ser alocado para serviços de todas as categorias.

4. Clique em `Salvar usuário`.

#### Adicionar um usuário de atendimento ao cliente

Somente [usuários administradores](#usuários-e-license-manager-no-vtex-fulfillment) podem criar novos _usuários de atendimento ao cliente_. Para isso, siga os passos abaixo:

1. Em seu Admin VTEX, acesse **Apps > Fulfillment > Usuários**.
2. No menu superior <i class="fas fa-ellipsis-v"></i>, clique em `Adicionar usuário de atendimento ao cliente`.
3. No campo de busca, pesquise digitando o nome, email ou ID do usuário.
4. Clique em `Confirmar`.

#### Adicionar um usuário administrador

Somente [usuários administradores](#usuários-e-license-manager-no-vtex-fulfillment) podem criar novos _usuários administradores_. Para isso, siga os passos abaixo:

1. Em seu Admin VTEX, acesse **Apps > Fulfillment > Usuários**.
2. No menu superior <i class="fas fa-ellipsis-v"></i>, clique em `Adicionar administrador`.
3. No campo de busca, pesquise digitando o nome, email ou ID do usuário.
4. Clique em `Confirmar`.

#### Editar usuários

Você pode editar qualquer tipo de usuário para alterar as informações listadas abaixo. 

* Nome
* Senha
* Categorias
* Loja

Para editar um usuário, siga o passo a passo:

1. Em seu Admin VTEX, acesse **Apps > Fulfillment > Usuários**.
2. Na linha do usuário que você deseja editar, clique no menu <i class="fas fa-ellipsis-v"></i>.
3. Selecione a opção `Editar`.
4. Altere os campos desejados.
5. Insira a senha.
6. Clique em `Salvar`.

#### Gerar chave API

[Usuários administradores](#usuarios-e-license-manager-no-vtex-fulfillment) podem gerar chaves API para usar as APIs do VTEX Pick and Pack. Para mais informações, veja nossa [documentação para desenvolvedores](http://link).

Para gerar uma chave API, siga os passos abaixo:

1. Em seu Admin VTEX, acesse **Apps > Fulfillment > Usuários**.
2. Na linha do usuário que você deseja editar, clique no menu <i class="fas fa-ellipsis-v"></i>.
3. Selecione a opção `Editar`.
4. Clique em `Gerar`.
5. Salve a chave API em um lugar seguro.

  > ❗ A chave API será exibida apenas uma vez. Você não poderá acessar essa informação novamente, então salve-a em um local seguro.

6. Insira a senha.
7. Clique em `Salvar`.

#### Excluir usuários

Somente usuários administradores podem excluir outros usuários. Isso pode ser feito seguindo os passos abaixo:

1. Em seu Admin VTEX, acesse **Apps > Fulfillment > Usuários**.
2. Na linha do usuário que você deseja editar, clique no menu <i class="fas fa-ellipsis-v"></i>.
3. Selecione a opção `Excluir`.
4. Clique em `Salvar`.
