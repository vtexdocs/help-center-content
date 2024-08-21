---
title: 'Módulo Localidades (Beta)'
id: 2thSYLMAS8KAd8V4XuBLSy
status: PUBLISHED
createdAt: 2023-05-08T18:03:07.644Z
updatedAt: 2023-05-10T00:52:49.688Z
publishedAt: 2023-05-10T00:52:49.688Z
firstPublishedAt: 2023-05-09T17:22:57.861Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: modulo-localidades-beta
locale: pt
legacySlug: modulo-localidades
subcategory: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

As localidades são pontos físicos envolvidos no processo de [fulfillment](https://help.vtex.com/pt/tutorial/fulfillment-logistics-vtex--53udnvI5eBy8DKo8FOjMoP) de pedidos e englobam etapas como coleta, empacotamento, emissão de faturas, entre outros. Alguns exemplos de localidades são lojas físicas e centros de distribuição.

Cada localidade possui os seguintes atributos:

* **Nome:** nome que identifica a localidade.
* **Seller:** seller associado à localidade, é quem possui os produtos sendo vendidos.
* **Endereço:** local físico onde se situa a localidade.
* **Status:** situação da localidade, que pode ser `Ativa` ou `Pausada`.
* **Capacidade operacional:** atributo que define qual o limite de pedidos ou itens que uma localidade pode receber em cada dia da semana.	

Na página **Localidades**, você administra todas as suas localidades e pode realizar [várias ações](#acoes-em-localidades), como criar, editar ou ativar/pausar localidades. As ações podem ser feitas de forma manual ou massiva.

## Localidades

Uma vez que você tenha [criado as localidades](#criar-localidade), elas vão aparecer em uma página de listagem em **Envio > Localidades**, conforme a imagem a seguir:

![modulo_localidade_imagem_1_PT](https://images.ctfassets.net/alneenqid6w5/1XfpG28jPnGlrQijpDSeU4/7716765c8256984d33b005df9db73254/modulo_localidade_imagem_1_PT.png)

O topo da página apresenta os seguintes dados:

* Total de localidades
* Localidades ativas
* Localidades pausadas

A página apresenta colunas e elas estão descritas na tabela abaixo:

| **Coluna** | **Descrição** |
| ---------- | ---------- |
| Nome | Nome da localidade e identificação do [seller](https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w) ao qual ela está associada. |
| Capacidade utilizada | <p>Porcentagem da capacidade operacional do dia que foi utilizada.</p><p><b>Exemplo:</b> uma localidade com capacidade para preparar 100 pedidos está com 80% de sua capacidade do dia utilizada, portanto, ela só pode receber 20 novos pedidos naquele dia.</p><p>Nesta coluna, aparece um ícone de alerta <i class="fas fa-exclamation-triangle"></i> quando a localidade atinge 100% da sua capacidade e não é mais capaz de receber novos pedidos naquele dia.</p><p>Você pode editar a capacidade das suas localidades de forma individual ou massiva, como será visto adiante em <a href="https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy#editar-capacidade-operacional">Editar capacidade operacional</a>.</p> |
| Status | <p>Situação da localidade, que pode ser de dois tipos:</p><ul><li><i class="fas fa-toggle-on"></i><b>Ativa:</b> o toggle está acionado e a localidade é válida para receber novos pedidos.</li><li><i class="fas fa-toggle-off"></i><b>Pausada:</b> o toggle está desativado e a localidade no momento <a href="https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy#ativar-e-pausar-localidade">não está recebendo novos pedidos</a>.</li></ul><p>Para decidir quando pausar uma localidade, veja a seção <a href="https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy#estrategias-de-negocio">Estratégias de negócio</a>.</p> |

Quando você clica em uma localidade, você é direcionado para a [página de detalhes da localidade](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-da-localidade--3se4QBRYsNCwC8Wo56J6zG).

## Ações em Localidades

Na página **Localidades**, você pode realizar as seguintes ações:

* [Criar localidade](#criar-localidade)
* [Editar localidade](#editar-localidade)
* [Editar capacidade operacional](#editar-capacidade-operacional)
* [Buscar localidade](#buscar-localidade)
* [Filtrar localidade](#filtrar-localidades)
* [Ativar e pausar localidade](#ativar-e-pausar-localidade)
* [Excluir localidade](#excluir-localidade)

### Criar localidade

Para criar uma localidade, é necessário realizar duas etapas:

* [Etapa 1: Configurações básicas](#etapa-1-configuracoes-basicas)
* [Etapa 2: Capacidade operacional](#etapa-2-capacidade-operacional)

#### Etapa 1: Configurações básicas

Para realizar a primeira etapa de **Configurações básicas**, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Localidades**, ou digite **Localidades** na barra de busca no topo da página. 
2. Clique em `Criar localidade`.
3. Em **Status**, acione o toggle <i class="fas fa-toggle-on"></i> para criar a localidade como _Ativa_, ou deixe-o desativado <i class="fas fa-toggle-off"></i> para que a nova localidade esteja _Pausada_. Somente localidades ativas recebem novos pedidos.
4. Em **Identificação**, determine o nome da localidade sendo criada. Este nome é visível somente no seu Admin VTEX.
5. Em **Seller**, selecione um seller para associar à localidade. O seller é quem possui os produtos sendo vendidos.

  >⚠️ Cada localidade pode ser associada a um único seller.

6. Em **Endereço**, defina o local físico onde se situa a localidade.
7. Clique no botão `Próximo`.

Feito isso, você terá concluído a Etapa 1 será redirecionado para a segunda e última etapa de criação, a **Capacidade operacional**.

#### Etapa 2: Capacidade operacional

Para realizar esta etapa, siga os passos abaixo:

1. Em **Gostaria de configurar uma capacidade?**, clique em umas das alternativas:</br><p><ul><li><b>Configurar:</b> a localidade tem um limite na capacidade de receber pedidos e, caso este limite seja atingido, novos pedidos podem ser alocados em outras localidades. Isso aumenta a eficiência da sua operação e aumenta as chances de cumprir as promessas de envio feitas aos clientes.</li><li><b>Manter ilimitada:</b> a localidade mantém a capacidade irrestrita de receber novos pedidos. Como não é possível determinar um limite máximo, a localidade pode receber mais pedidos do que é capaz de dar vazão no tempo de envio prometido, o que pode causar um atraso nos envios e consequente frustração de clientes.</li></ul></p>

  <div class = "alert alert-info">
Por padrão, as localidades são criadas sendo ilimitadas. Se você não deseja configurar a capacidade, você terá concluído a criação da nova localidade. Se você deseja configurá-la, prossiga com o passo a passo.
</div>

2. Em **Unidade da capacidade operacional**, escolha se a capacidade operacional será definida pelo número de _pedidos_ ou de _itens_. O número de itens considera os itens de todos os pedidos feitos no dia.
3. Em **Capacidade**, determine qual a quantidade limite para os dias da semana. O sistema não restringe um valor máximo.
4. Em **Regra**, escolha o que deve acontecer quando uma localidade atinge a capacidade máxima do dia:<br><p><ul><li><b>Continuar recebendo pedidos consumindo a capacidade dos dias seguintes:</b> a localidade continua válida para novos pedidos e eles são alocados na capacidade dos próximos dias. A promessa de envio dos novos pedidos será ajustada, mas não é possível configurar esse período em horas, por exemplo, porque ele vai corresponder automaticamente ao número de dias seguintes no qual for alocado.</li></ul></p>
  <p><ul><ul><li>Se você escolher esta opção, determine qual o <i>número de dias</i> seguintes para alocar os pedidos que ultrapassarem a capacidade do dia atual.</li></ul></ul></p>

  <div class = "alert alert-info">
Por exemplo, uma loja vende chocolates e sua capacidade operacional hoje foi 100% consumida. A loja continua recebendo novos pedidos, mas eles serão preparados só amanhã, porque o time não consegue preparar mais pedidos do que já previstos para hoje. No checkout, as promessas de envio de novos pedidos agora aparecem com um dia a mais de prazo, pois os pedidos serão preparados amanhã. Se a capacidade de amanhã for consumida ainda hoje, os novos pedidos serão alocados para depois de amanhã e preparados dali a dois dias, porque a loja configurou três dias para <b>Continuar recebendo pedidos consumindo a capacidade dos próximos dias</b>. Veja mais no artigo <a href="https://help.vtex.com/pt/tutorial/pagina-de-detalhes-da-localidade--3se4QBRYsNCwC8Wo56J6zG">Página de detalhes da localidade</a>.
</div>

  <ul><li><b>Desativar esta localidade até o final do dia:</b> uma vez que atinja o limite da sua capacidade, a localidade deixa de ser válida para novos pedidos no dia, sendo que estes pedidos são recebidos por outras localidades.</li></ul>
5. Clique em `Salvar alterações`. 

Feito isso você terá concluído a criação da nova localidade.

### Editar localidade

Em **Localidades**, ao clicar sobre uma localidade você é direcionado para a [página de detalhes da localidade](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-da-localidade--3se4QBRYsNCwC8Wo56J6zG), onde é possível editar os seguintes dados:

* **Status:** para ativar a localidade, habilite o toggle <i class="fas fa-toggle-off"></i> `Pausada` e clique em `Ativar`. Para pausar a localidade, desabilite o toggle <i class="fas fa-toggle-on"></i> `Ativa` e clique em `Pausar`.
* **Informações básicas:** clique em <i class="fas fa-pencil-alt"></i> `Editar` e altere o _Status, Identificação, Seller_ ou _Endereço_ da localidade.
* **Capacidade operacional:** clique em <i class="fas fa-pencil-alt"></i> `Editar` e altere a opção desejada:
<br>
    * Unidade da capacidade operacional
    * Capacidade
    * Regra

Após realizar as alterações desejadas, clique em `Salvar alterações`.

Além disso, é possível editar a capacidade operacional de várias localidades ao mesmo tempo, como será visto a seguir.

### Editar capacidade operacional

Para editar a capacidade operacional de várias localidades, realize o passo a passo abaixo:

1. No Admin VTEX, acesse **Envio > Localidades**, ou digite **Localidades** na barra de busca no topo da página. 
2. Selecione as localidades desejadas, clicando nas caixas de seleção <a class="far fa-check-square"></a> ao lado do nome das localidades.
3. Clique em `Editar capacidade`.
4. altere a opção desejada:
    * Unidade da capacidade operacional
    * Capacidade
    * Regra
5. Clique em `Salvar alterações`.

### Buscar localidade

Utilizando a barra de busca, você pode usar o nome da localidade para encontrá-la.

<div class = "alert alert-info">
É possível associar a busca com o <a href="https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy#filtrar-localidades">filtro por status</a>. Caso os resultados da sua busca retornem vazios, observe se não há um filtro ativo.
</div>

### Filtrar localidades

Você pode filtrar as localidades que aparecem na listagem por meio de status, clicando no botão `Status` <i class="fas fa-angle-down"></i> e selecionando uma das opções:

* `Ativas`
* `Pausadas`

Em seguida, clique em `Aplicar`. Para limpar os filtros, clique em **Status > Limpar**.

### Ativar e pausar localidade

Uma localidade vai estar `Ativa` se o toggle estiver habilitado  <i class="fas fa-toggle-on"></i> e `Pausada` se ele estiver desabilitado <i class="fas fa-toggle-off"></i>. 

Para alterar o status de uma única localidade, clique sobre o toggle da sua linha correspondente e confirme a operação clicando em `Pausar`/`Ativar`.

Para ativar ou pausar várias localidades, realize os seguintes passos:

1. No Admin VTEX, acesse **Envio > Localidades**, ou digite **Localidades** na barra de busca no topo da página. 
2. Selecione as localidades desejadas, clicando nas caixas de seleção <a class="far fa-check-square"></a> ao lado do nome das localidades.
    > É possível selecionar todas as localidades, clicando em `Selecione todos`.
3. Clique em <i class="fas fa-ellipsis-v"></i> `Mais ações`.
4. Clique em `Ativar` ou `Pausar`, conforme desejado.
5. Confirme clicando em **Ativar** ou **Pausar**, conforme desejado.

### Excluir localidade

A ação de excluir uma localidade é permanente e não pode ser desfeita. 

>⚠️ Quando uma localidade é excluída, isso não tem efeito sobre o seller ao qual ela estava associada. Ou seja, o seller continua recebendo pedidos normalmente.

Você pode realizar esta ação de forma individual ou massiva. Para excluir uma única localidade, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Localidades**, ou digite **Localidades** na barra de busca no topo da página. 
2. Clique no menu <i class="fas fa-ellipsis-v"></i> na linha corresponde à localidade desejada.
3. Clique em <i class="far fa-trash-alt"></i> `Excluir`.
4. Clique em **Excluir**.

Para excluir várias localidades, realize os seguintes passos:

1. No Admin VTEX, acesse **Envio > Localidades**, ou digite **Localidades** na barra de busca no topo da página.
2. Selecione as localidades desejadas, clicando nas caixas de seleção <a class="far fa-check-square"></a> ao lado do nome das localidades.
3. Clique em <i class="fas fa-ellipsis-v"></i> `Mais ações`.
4. Clique em <i class="far fa-trash-alt"></i> `Excluir`.
5. Clique em **Excluir**.

## Estratégias de negócio

Para definir a melhor estratégia para o seu modelo de negócios e escolher se o melhor é [editar a capacidade](#editar-capacidade-operacional) de uma localidade ou [pausá-la](#ativar-e-pausar-localidade), é importante compreender o seguinte: 

* **Localidade** <i class="fas fa-toggle-off"></i> **pausada:** a localidade deixa de receber novos pedidos até ser [reativada](#ativar-e-pausar-localidade). Mesmo que a regra para _Continuar recebendo pedidos consumindo a capacidade dos próximos dias_ esteja configurada, novos pedidos não são aceitos.
    > _Exemplo:_ uma loja teve problemas nas suas instalações e o preparo de novos pedidos foi comprometido. Neste caso, é estratégico pausar a localidade e reativá-la somente quando os pedidos puderem ser preparados.
* **Localidade atingiu** <i class="fas fa-exclamation-triangle"></i> **limite máximo:** uma localidade com o alerta 100% da capacidade consumida deixa de receber novos pedidos naquele dia. Porém, no dia seguinte, a capacidade de localidade é liberada e ela automaticamente recebe novos pedidos.
    > _Exemplo:_ na véspera do Natal, uma loja atingiu o limite máximo da sua capacidade do dia e a equipe não conseguiria preparar mais pedidos, portanto não valeria [aumentar a capacidade](#editar-capacidade-operacional). No dia seguinte, a equipe conseguiria preparar novos pedidos, portanto seria estratégico não editar a localidade, pois no dia seguinte ela automaticamente tem sua capacidade liberada e volta a receber novos pedidos.

<div class = "alert alert-info">
Quando você pausa uma localidade configurada com a regra <b>Continuar recebendo pedidos consumindo a capacidade dos próximos dias</b>, novos pedidos não são recebidos e, portanto, não podem ser alocados nos dias seguintes. Porém, localidades com essa configuração que ultrapassaram a capacidade do dia tem novos pedidos automaticamente alocados nos dias seguintes, inclusive com a promessa de envio aos clientes ajustada.
</div>
