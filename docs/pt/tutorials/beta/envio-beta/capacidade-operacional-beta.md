---
title: 'Capacidade operacional (Beta)'
id: 2thSYLMAS8KAd8V4XuBLSy
status: PUBLISHED
createdAt: 2023-05-08T18:03:07.644Z
updatedAt: 2025-01-23T12:00:02.987Z
publishedAt: 2025-01-23T12:00:02.987Z
firstPublishedAt: 2023-05-09T17:22:57.861Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: operational-capacity-beta
legacySlug: modulo-localidades
locale: pt
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com [nosso Suporte](https://supporticket.vtex.com/support).

> ⚠️ O requisito para usar a funcionalidade é ter [contas franquia](/pt/docs/tutorials/o-que-e-conta-franquia) associadas à [conta principal](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex).

O módulo **Capacidade operacional (Beta)** permite que você gerencie a capacidade dos sellers de receberem e prepararem os pedidos da loja, de forma a otimizar sua malha logística. Você acompanha a distribuição de pedidos entre os sellers e pode realizar [ações](#acoes-na-pagina-de-detalhes-da-capacidade-do-seller) para melhorar a distribuição dos pedidos entre eles.

> ⚠️ O módulo **Capacidade operacional (Beta)** não gerencia a entrega de pedidos. Este gerenciamento é realizado pelo módulo [**Capacidade de entrega**](https://help.vtex.com/pt/docs/tutorials/gerenciar-capacidade-de-entrega).

O bom gerenciamento da capacidade operacional dos sellers traz os seguintes benefícios:

* Redistribui melhor a demanda de produtos entre estoques de diferentes sellers.
* Otimiza o tempo de envio de pedidos, pois evita a sobrecarga de sellers.
* Melhora a experiência de compra dos clientes, que recebem seus pedidos nos prazos prometidos.

> ℹ️ Para ser capaz de habilitar e gerenciar o **Capacidade operacional (Beta)**, o seu [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) no Admin VTEX deve estar associado ao [recurso do License Manager](/pt/docs/tutorials/recursos-do-license-manager) chamado *Logistics full access*.

## Habilitar módulo Capacidade operacional (Beta)

Para começar a usar a funcionalidade, é preciso habilitar o Capacidade operacional (Beta) pelo Admin VTEX. Quando não habilitado, o módulo não gera efeitos e não permite realizar o gerenciamento da capacidade dos sellers.

> ⚠️ Antes de habilitar o módulo, recomendamos que você configure a capacidade operacional dos seus sellers. Assim, antes que a funcionalidade produza efeitos, você terá a visibilidade prévia de como a capacidade de cada seller é consumida e poderá ajustar suas configurações conforme as demandas da sua operação.

Para habilitar o módulo **Capacidade operacional (Beta)**, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Capacidade operacional**, ou digite **Capacidade operacional** na barra de busca no topo da página.
2. No topo da página, encontre o callout com a mensagem: “*Módulo desabilitado: habilite-o para que as configurações realizadas sejam aplicadas e utilizadas pela plataforma VTEX*”.
3. No callout, clique em `Habilitar`.

Caso deseje interromper o uso da funcionalidade, você pode [desabilitar o Capacidade operacional (Beta)](#desabilitar-modulo-capacidade-operacional-beta) a qualquer momento. No entanto, vale considerar outras estratégias, como pode ser visto em [Escolher entre editar capacidade operacional do seller, torná-la ilimitada, pausar seller ou desabilitar módulo](#escolher-entre-editar-capacidade-operacional-do-seller-torna-la-ilimitada-ou-pausar-seller-ou-desabilitar-modulo).

## Apresentação do módulo Capacidade operacional (Beta)

Ao acessar no Admin VTEX **Envio > Capacidade operacional**, ou digitar **Capacidade operacional** na barra de busca, você encontra uma página como a imagem abaixo:

![operational_capacity_image_1_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/capacidade-operacional-beta_1.png)

> ⚠️ Os sellers que aparecem na interface são os sellers da sua operação, e eles são previamente configurados pela nossa equipe. Para acrescentar um novo seller, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

O gráfico apresenta os dados abaixo:

* **Total de sellers:** quantidade total de sellers da sua operação.
* **Ativos:** quantidade de sellers que estão recebendo novos pedidos, sejam sellers com um limite de capacidade configurado ou com capacidade ilimitada.
* **Pausados:** quantidade de sellers que foram pausados e não estão recebendo novos pedidos.
* **Número de sellers que excederam a capacidade:** número de sellers que receberam mais pedidos do que o limite configurado. Você pode escolher visualizar resultados dos últimos `7 dias` ou `28 dias`.

A página **Capacidade operacional (Beta)** apresenta as seguintes informações:

| **Coluna** | **Descrição** |
|:---:|:---|
| Seller | Identificação do [seller](/pt/docs/tutorials/o-que-e-um-seller) a que se refere a capacidade operacional. |
| Segmentação | Identificação do tipo de segmentação realizada pela capacidade operacional. São dois tipos de segmentação: por sellers ou por [política comercial](https://help.vtex.com/pt/docs/tutorials/como-funciona-uma-politica-comercial). Para habilitar a segmentação por política comercial, entre em contato com [nosso Suporte](https://supporticket.vtex.com/support). |
| Capacidade utilizada | Porcentagem da capacidade operacional do seller que foi utilizada no dia. **Exemplo:** um seller com capacidade para preparar 100 pedidos diários está com 80% de sua capacidade do dia utilizada. Portanto, ele só pode receber 20 novos pedidos naquele dia. Nesta coluna, aparece um ícone de alerta quando 100% da capacidade do seller é atingida e ele não pode receber novos pedidos no dia. Você pode [editar a capacidade operacional dos sellers](#editar-capacidade-operacional-do-seller) de forma individual ou massiva. |
| Status | Status da capacidade operacional do seller, que pode ser de dois tipos:<ul><li><i class="fas fa-toggle-on" aria-hidden="true"></i> **Ativo:** o toggle está acionado e o seller pode receber novos pedidos, seja por estar dentro do limite da capacidade que foi configurado, seja por ser um seller de capacidade ilimitada.</li><li><i class="fas fa-toggle-off"></i> **Pausado:** o toggle está desativado e o seller não pode receber novos pedidos.</li>Para escolher quando pausar um seller, veja a seção [Escolher entre editar capacidade operacional do seller, torná-la ilimitada ou pausar seller](#escolher-entre-editar-capacidade-operacional-do-seller-torna-la-ilimitada-ou-pausar-seller-ou-desabilitar-modulo). |

Quando você clica em um seller, você é redirecionado para a [página de detalhes da capacidade do seller](#acoes-na-pagina-de-detalhes-da-capacidade-do-seller), que será visto adiante.

## Ações no módulo Capacidade operacional (Beta)

No Admin VTEX, na página **Envio > Capacidade operacional**, você pode realizar as seguintes ações:

### Buscar seller

Utilizando a barra de busca, você pode usar o nome do seller para encontrá-lo.

> ℹ️ É possível associar a busca de sellers com o [filtro por status](/pt/docs/tutorials/capacidade-operacional-beta#filtrar-sellers). Caso os resultados da sua busca retornem vazios, observe se não há um filtro ativo.

### Filtrar sellers

Você pode filtrar por status os sellers que aparecem na listagem, clicando em `Status` e selecionando `Ativos` ou `Pausados`. Em seguida, clique em `Aplicar`.

Para limpar os filtros aplicados, clique em **Status > Limpar**.

### Ativar e pausar capacidade operacional de sellers

Um seller vai estar com status <i class="fas fa-toggle-on"></i> `Ativo` se o toggle estiver habilitado e <i class="fas fa-toggle-off"></i> `Pausado` se o toggle estiver desabilitado. Para alterar o status da capacidade operacional de um único seller, clique sobre o toggle da sua linha correspondente e confirme a operação clicando em `Pausar`/`Ativar`.

Para ativar ou pausar a capacidade operacional de vários sellers, realize os seguintes passos:

1. No Admin VTEX, acesse **Envio > Capacidade operacional**, ou digite **Capacidade operacional** na barra de busca no topo da página.
2. Selecione os sellers desejados, clicando nas caixas de seleção ao lado dos nomes. É possível selecionar todos os sellers, clicando em uma caixa de seleção e, em seguida, clicando em `Selecione todos`.
3. Clique em `Mais ações`.
4. Clique em `Ativar` ou `Pausar`, conforme desejado.
5. Confirme clicando em `Ativar` ou `Pausar`, conforme desejado.

### Editar unidade da capacidade operacional do seller

A capacidade operacional do seller pode ser contabilizada em número de pedidos ou itens de pedidos. Para editar a capacidade operacional de um ou vários sellers, realize o passo a passo abaixo:

1. No Admin VTEX, acesse **Envio > Capacidade operacional**, ou digite **Capacidade operacional** na barra de busca no topo da página.
2. Selecione os sellers desejados, clicando nas caixas de seleção ao lado dos nomes. É possível selecionar todos os sellers, clicando em uma caixa de seleção e, em seguida, clicando em `Selecione todos`.
3. Clique em `Editar capacidade`.
4. Escolha a **Unidade da capacidade operacional**:
    * **Quantidade de pedidos:** a capacidade operacional do seller será contada por número de pedidos.
    * **Quantidade de itens:** a capacidade operacional do seller será contada por número de itens do pedido.
5. Clique em `Salvar alterações`.

> ⚠️ A plataforma tem algumas restrições com relação a [sellers abrangentes](/pt/docs/tutorials/seller-abrangente), saiba mais na seção [Comportamento de sellers abrangentes](#comportamento-de-sellers-abrangentes).

## Desativar módulo Capacidade operacional (Beta)

Para desabilitar o módulo **Capacidade operacional (Beta)**, siga os passos a seguir:

1. No Admin VTEX, acesse **Envio > Capacidade operacional**, ou digite **Capacidade operacional** na barra de busca no topo da página.
2. Clique no botão <i class="fa-solid fa-ellipsis-vertical"></i>.
3. Clique em <i class="fa-regular fa-circle-xmark"></i> `Desabilitar módulo`.

## Ações na página de detalhes da capacidade do seller

No Admin VTEX, na página **Envio > Capacidade operacional**, ao clicar no nome do seller, você é redirecionado para sua página de detalhes da capacidade e pode realizar as seguintes ações:

* [Pausar e ativar capacidade operacional do seller](#pausar-e-ativar-capacidade-operacional-do-seller)
* [Acompanhar capacidade utilizada](#acompanhar-capacidade-utilizada)
* [Editar capacidade operacional do seller](#editar-capacidade-operacional-do-seller)
* [Configurar capacidade ilimitada do seller](#configurar-capacidade-ilimitada-do-seller)
* [Editar endereço associado ao seller](#editar-endereco-associado-ao-seller)

### Pausar e ativar capacidade operacional do seller

No topo direito da página de detalhes do seller, existe um toggle para ativar ou desativar sua capacidade operacional:

* **Ativar:** habilite o toggle para `Ativo` e clique em `Ativar`.
* **Desativar:** desabilite o toggle para `Pausado` e clique em `Pausar`.

> ⚠️ A plataforma tem algumas restrições com relação a [sellers abrangentes](/pt/docs/tutorials/seller-abrangente), saiba mais na seção [Comportamento de sellers abrangentes](#comportamento-de-sellers-abrangentes).

### Acompanhar capacidade utilizada

O gráfico **Status da capacidade operacional** apresenta, em tempo real, a porcentagem da capacidade do seller que já foi consumida no dia atual e nos próximos três dias, como na imagem a seguir:

![operational_capacity_image_2_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/capacidade-operacional-beta_2.png)

Se você configurar no seller a [regra](#iii-regra) *Continuar a receber pedidos consumindo a capacidade dos dias seguintes*, o gráfico vai apresentar a porcentagem da capacidade operacional dos dias seguintes que já foi consumida a partir de pedidos de dias anteriores. Saiba mais em [Editar capacidade operacional do seller](#editar-capacidade-operacional-do-seller).

![operational_capacity_image_3_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/envio-beta/capacidade-operacional-beta_3.png)

### Editar capacidade operacional do seller

Na seção **Capacidade operacional**, você visualiza as configurações atuais da capacidade operacional do seller para cada dia da semana. Para alterar essas configurações, siga os passos abaixo:

1. Na página de detalhes da capacidade do seller, encontre a seção **Capacidade operacional**.
2. Clique em `Editar`.
3. Altere as opções desejadas, são elas:
    * [I - Unidade da capacidade operacional](#i-unidade-da-capacidade-operacional)
    * [II - Capacidade](#ii-capacidade)
    * [III - Regra](#iii-regra)
4. Clique em `+ Adicionar capacidade por política comercial` para configurar a segmentação da capacidade operacional por política comercial. Selecione na seção **Segmentação por política comercial** as políticas comerciais que deseja incluir.
5. Clique em `Salvar alterações`.

Veja a seguir as descrições dos campos mencionados no passo a passo.

#### I - Unidade da capacidade operacional

Escolha se a capacidade operacional será definida pelo número de *pedidos* ou de *itens*. O número de itens considera os itens de todos os pedidos feitos no dia.

#### II - Capacidade

Determine qual o limite da capacidade operacional do seller para cada dia da semana. O sistema não restringe um valor máximo.

Quando o limite configurado é atingido, a sua loja continua recebendo novos pedidos, que podem ser distribuídos para outros sellers ou alocados para o mesmo seller, mas na capacidade nos próximos dias. Isso vai depender da regra que você escolher.

#### III - Regra

Escolha qual a regra para quando o seller atingir a capacidade máxima do dia:

* **Continuar a receber pedidos consumindo a capacidade dos dias seguintes:** o seller continua recebendo novos pedidos quando a capacidade é atingida, que são alocados na capacidade dos próximos dias, e a promessa de envio dos próximos pedidos é ajustada no checkout para os clientes. Não é possível configurar esse período em horas, porque ele vai corresponder automaticamente ao número de dias seguintes no qual foi alocado.
  * Se você escolher esta regra, determine qual o número de dias seguintes para alocar os pedidos que ultrapassarem a capacidade do dia atual.
  > **Exemplo:** um seller vende chocolates e sua capacidade operacional hoje foi 100% consumida. O seller continua recebendo novos pedidos, mas eles serão preparados só amanhã, porque o time não consegue preparar mais pedidos do que os já previstos para hoje. No checkout, as promessas de envio de novos pedidos agora aparecem com um dia a mais de prazo, pois os pedidos serão preparados amanhã. Se a capacidade de amanhã for consumida ainda hoje, os novos pedidos serão alocados para depois de amanhã e preparados dali a dois dias, porque a loja configurou três dias para Continuar recebendo pedidos consumindo a capacidade dos próximos dias.
* **Pausar este seller até o final do dia:** uma vez que o seller atinja o limite da sua capacidade do dia, naquele mesmo dia ele deixa de receber novos pedidos, que são repassados para outros sellers.

### Configurar capacidade ilimitada do seller

Ainda na seção **Capacidade operacional**, você pode configurar o seller para ter capacidade ilimitada. Isso permite que ele receba pedidos de forma irrestrita, ou seja, sem um gerenciamento da sua capacidade operacional.

Para configurar a capacidade ilimitada do seller, siga os passos abaixo:

1. Na página de detalhes da capacidade do seller, encontre a seção **Capacidade operacional**.
2. Clique em **Configurações**
3. Na seção, **Capacidade operacional**, clique em <i class="fa fa-link" aria-hidden="true"></i> `Definir como ilimitada`.
4. Clique em `Confirmar`.

> ℹ️ A capacidade ilimitada do seller é o comportamento padrão de sellers para lojas que não utilizam o **Capacidade operacional (Beta)**. Quando o seller é configurado com capacidade ilimitada, o módulo não computa o consumo da sua capacidade operacional.

Para saber quando é melhor escolher cada estratégia, veja a seção [Escolher entre editar capacidade operacional do seller, torná-la ilimitada ou pausar seller](#escolher-entre-editar-capacidade-operacional-do-seller-torna-la-ilimitada-ou-pausar-seller-ou-desabilitar-modulo).

### Editar endereço associado ao seller

Para editar o endereço ou o nome de identificação do seller na **Capacidade operacional**, siga os passos abaixo:

1. Na página de detalhes da capacidade do seller,  encontre a seção **Informações básicas**.
2. Clique em `Editar informações básicas`.
3. Altere as informações desejadas.
4. Clique em `Salvar alterações`.

## Comportamento de sellers abrangentes

No site da sua loja, quando o cliente não informa sua localização, ele visualiza os produtos da sua loja (seller 1) e dos [sellers abrangentes](/pt/docs/tutorials/seller-abrangente).

Devido a uma limitação da plataforma, quando você desativa a capacidade operacional de um seller abrangente, os produtos desse seller continuam aparecendo como disponíveis na vitrine, mas o cliente não consegue comprá-los. Desta forma, recomendamos que a capacidade operacional de sellers abrangentes seja sempre mantida ativada.

## Escolher entre editar capacidade operacional do seller, torná-la ilimitada ou pausar seller ou desabilitar módulo

Para definir a melhor estratégia para o seu negócio nas diferentes situações, é importante compreender o seguinte:

* **[Seller pausado](#pausar-e-ativar-capacidade-operacional-do-seller):** o seller deixa de receber novos pedidos até ser reativado. Mesmo que a regra para *Continuar a receber pedidos consumindo a capacidade dos próximos dias* esteja configurada, novos pedidos não são aceitos.
  > **Exemplo:** a loja do seller teve problemas nas instalações e o preparo de novos pedidos foi comprometido. Neste caso, é estratégico pausar o seller e reativá-lo somente quando os pedidos puderem ser preparados novamente.
* **[Seller com limite da capacidade atingido](#acompanhar-capacidade-utilizada):** o seller com 100% da capacidade consumida deixa de receber novos pedidos naquele dia. Porém, no dia seguinte, sua capacidade operacional está liberada e ele automaticamente recebe novos pedidos.
  > **Exemplo:** na véspera do Natal, o seller atingiu o limite máximo da sua capacidade do dia e não conseguiria preparar mais pedidos, portanto não valeria [aumentar a capacidade operacional do seller](#editar-capacidade-operacional-do-seller). No dia seguinte, novos pedidos poderiam ser preparados, portanto seria preferível não editar o seller, que no dia seguinte já teria sua capacidade liberada e estaria recebendo novos pedidos.
* **[Seller com capacidade ilimitada](#configurar-capacidade-ilimitada-do-seller):** o seller recebe pedidos de forma irrestrita, ou seja, você não gerencia o limite da capacidade operacional deste seller. Este é o comportamento padrão da plataforma para os sellers de lojas que não usam o **Capacidade operacional (Beta)**.
  > **Exemplo:** um seller vende somente artigos digitais que não requerem tempo de manuseio e entrega. Neste caso, seria interessante que ele tivesse sua capacidade operacional configurada como ilimitada.
* **[Módulo desabilitado](#desabilitar-modulo-capacidade-operacional-beta):** quando o Capacidade operacional (Beta) não está habilitado, o módulo não produz efeitos e não é possível gerenciar a capacidade operacional de sellers. No entanto, ao desabilitar o módulo as configurações da capacidade operacional de sellers realizadas anteriormente não são perdidas e voltam a funcionar quando o módulo é habilitado.
  > **Exemplo:** por algum imprevisto na sua operação, você prefere parar temporariamente de utilizar o módulo Capacidade operacional (Beta). Neste caso, seria apropriado desabilitá-lo.

## Desabilitar módulo Capacidade operacional (Beta)

Se você deseja parar de usar o Capacidade operacional (Beta) e suspender os efeitos das configurações de capacidade de todos os sellers, você pode desabilitar o módulo. Ao fazer isso, você não perde as configurações de capacidade dos sellers configuradas anteriormente, mas elas deixam de produzir efeitos.

Para desabilitar o módulo Capacidade operacional (Beta), siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Capacidade operacional**, ou digite **Capacidade operacional** na barra de busca no topo da página.
2. No menu no topo direito da página, clique em `Desabilitar módulo`.
3. No modal, clique em `Desabilitar`.

> ⚠️ A qualquer momento, você pode [habilitar o módulo Capacidade operacional (Beta)](/pt/docs/tutorials/capacidade-operacional-beta#habilitar-modulo-capacidade-operacional-beta) para gerenciar a capacidade dos seus sellers.
