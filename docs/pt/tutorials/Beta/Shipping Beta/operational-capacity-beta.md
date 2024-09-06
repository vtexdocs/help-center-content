---
title: 'Capacidade operacional (Beta)'
id: 2thSYLMAS8KAd8V4XuBLSy
status: PUBLISHED
createdAt: 2023-05-08T18:03:07.644Z
updatedAt: 2024-04-08T18:59:56.706Z
publishedAt: 2024-04-08T18:59:56.706Z
firstPublishedAt: 2023-05-09T17:22:57.861Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: capacidade-operacional-beta
locale: pt
legacySlug: modulo-localidades
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ Essa funcionalidade está em fase beta, o que significa que estamos trabalhando para aprimorá-la. Se você deseja utilizar a **Capacidade operacional (Beta)**, preencha o [formulário de contato](https://docs.google.com/forms/d/e/1FAIpQLScgmHPJEnVfd1EK9znevW-bcdxL2WVqzNZdrwri9auKayZDJA/viewform). O requisito para usar a funcionalidade é ter [contas franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) associadas à [conta principal](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex).

O módulo **Capacidade operacional** permite que você gerencie a capacidade dos sellers de receberem e prepararem os pedidos da loja, de forma a otimizar sua malha logística. Você acompanha a distribuição de pedidos entre os sellers e pode realizar [ações](#acoes-na-pagina-de-detalhes-do-seller) para melhorar a distribuição dos pedidos entre eles. 

O bom gerenciamento da capacidade operacional dos sellers traz os seguintes benefícios: 

* Redistribui melhor a demanda de produtos entre estoques de diferentes sellers.
* Otimiza o tempo de envio de pedidos, pois evita a sobrecarga de sellers.
* Melhora a experiência de compra dos clientes, que recebem seus pedidos nos prazos prometidos.

Ao acessar no Admin VTEX **Envio > Capacidade operacional**, você encontra uma página como a imagem abaixo:

![operational_capacity_image1_PT](https://images.ctfassets.net/alneenqid6w5/5k7wWTuVZk7Ylc2IHpNE5C/750c0ac19cbb24293a58ccadeb4604b8/operational_capacity_image1_PT.png)

>⚠️ Os sellers que aparecem na interface são os sellers da sua operação, e eles são previamente configurados pela nossa equipe. Para acrescentar um novo seller, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

O gráfico apresenta os dados abaixo:

* **Total de sellers:** quantidade total de sellers da sua operação.
* **Ativos:** quantidade de sellers que estão recebendo novos pedidos. 
* **Pausados:** quantidade de sellers que foram pausados e não estão recebendo novos pedidos. 
* **Quantidade de sellers que ultrapassaram a capacidade:** número de sellers que recebeu mais pedidos do que o limite configurado. Você pode escolher visualizar resultados dos últimos `7 dias` ou `28 dias`.

A página **Capacidade operacional** apresenta as seguintes informações:

| **Coluna** | **Descrição** |
|:---:|:---|
| Nome | Identificação do [seller](https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w) a que se refere a capacidade operacional. |
| Capacidade utilizada | <p>Porcentagem da capacidade operacional que foi utilizada no dia.</p><p><b>Exemplo:</b> um seller com capacidade para preparar 100 pedidos está com 80% de sua capacidade do dia utilizada. Portanto, ele só pode receber 20 novos pedidos naquele dia.</p><p>Nesta coluna, aparece um ícone de alerta quando 100% da capacidade do seller é atingida e ele não pode receber novos pedidos no dia.</p><p>Você pode <a href="https://help.vtex.com/pt/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#editar-capacidade-operacional-do-seller">editar a capacidade operacional dos sellers</a> de forma individual ou massiva, como será visto em Editar capacidade operacional do seller.</p> |
| Status | <p>Status da capacidade operacional do seller, que pode ser de dois tipos:</p><p><ul><li><i class="fas fa-toggle-on" aria-hidden="true"></i> <b>Ativo:</b> o toggle está acionado e o seller pode receber novos pedidos.</li><li><i class="fas fa-toggle-off"></i> <b>Pausado:</b> o toggle está desativado e o seller não pode receber novos pedidos.</li></p><p>Para escolher quando pausar um seller, veja a seção <a href="https://help.vtex.com/pt/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#escolher-entre-pausar-ou-aumentar-a-capacidade-operacional">Escolher entre pausar ou aumentar a capacidade operacional</a>.</p> |

Quando você clica em um seller, você é redirecionado para a [página de detalhes do seller](#acoes-na-pagina-de-detalhes-do-seller), que será visto adiante.

## Ações em Capacidade operacional

No Admin VTEX, na página **Envio > Capacidade operacional**, você pode realizar as seguintes ações:

* [Buscar seller](#buscar-seller)
* [Filtrar sellers](#filtrar-sellers)
* [Ativar e pausar capacidade operacional de sellers](#ativar-e-pausar-capacidade-operacional-de-sellers)
* [Editar unidade da capacidade operacional do seller](#editar-unidade-da-capacidade-operacional-do-seller)

### Buscar seller

Utilizando a barra de busca, você pode usar o nome do seller para encontrá-lo.

>ℹ️ É possível associar a busca de sellers com o [filtro por status](https://help.vtex.com/pt/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#filtrar-sellers). Caso os resultados da sua busca retornem vazios, observe se não há um filtro ativo.

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

>⚠️ A plataforma tem algumas restrições com relação a [sellers abrangentes](https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI), saiba mais na seção [Capacidade operacional de seller abrangente](https://help.vtex.com/pt/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#capacidade-operacional-de-seller-abrangente).

## Ações na página de detalhes do seller

No Admin VTEX, na página **Envio > Capacidade operacional**, ao clicar em um seller, você é redirecionado para sua página de detalhes e pode realizar as seguintes ações:

* [Pausar e ativar capacidade operacional de seller](#pausar-e-ativar-capacidade-operacional-de-seller)
* [Acompanhar capacidade utilizada](#acompanhar-capacidade-utilizada)
* [Editar endereço associado ao seller](#editar-endereco-associado-ao-seller)
* [Editar capacidade operacional do seller](#editar-capacidade-operacional-do-seller)

### Pausar e ativar capacidade operacional de seller

No topo direito da página de detalhes do seller, existe um toggle para ativar ou desativar sua capacidade operacional:

* **Ativar:** habilite o toggle para `Ativo` e clique em `Ativar`.
* **Desativar:** desabilite o toggle para `Pausado` e clique em `Pausar`.

>⚠️ A plataforma tem algumas restrições com relação a [sellers abrangentes](https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI), saiba mais na seção [Capacidade operacional de seller abrangente](https://help.vtex.com/pt/tutorial/capacidade-operacional-beta--2thSYLMAS8KAd8V4XuBLSy#capacidade-operacional-de-seller-abrangente).

### Acompanhar capacidade utilizada

O gráfico **Status da capacidade operacional** apresenta, em tempo real, a porcentagem da capacidade do seller que já foi consumida, como na imagem a seguir: 

![operational_capacity_image2_PT](https://images.ctfassets.net/alneenqid6w5/510RtT3ugOksM3YD5tYSGc/5a10fcf3a7fc20c4796a0bac0f14eeca/operational_capacity_image2_PT.png)

O gráfico apresenta os seguintes períodos:

* Hoje
* Amanhã
* Data dos próximos dois dias

Se você configurar no seller a [regra](#iii-regra) _Continuar a receber pedidos consumindo a capacidade dos dias seguintes_, o gráfico vai apresentar a porcentagem da capacidade operacional dos dias seguintes que já foi consumida a partir de pedidos de dias anteriores. Saiba mais em [Editar capacidade operacional do seller](#editar-capacidade-operacional-do-seller).

### Editar endereço associado ao seller

Para editar o endereço ou o nome de identificação do seller na **Capacidade operacional**, siga os passos abaixo:

1. Na seção **Informações básicas**, clique em `Editar informações básicas`.
2. Altere as informações desejadas.
3. Clique em `Salvar alterações`.

### Editar capacidade operacional do seller

Na seção **Capacidade operacional**, você visualiza as configurações atuais da capacidade operacional do seller para cada dia da semana, como na imagem abaixo:

![operational_capacity_image3_PT](https://images.ctfassets.net/alneenqid6w5/70kbPFFifh8ykCHvIj6vEZ/f8faca5d71b3729e9c5df67b5609753d/operational_capacity_image3_PT.png)

Para alterar essas configurações, siga os passos abaixo:

1. Na seção **Capacidade operacional**, clique em `Editar`.
2. Altere as opções desejadas, são elas:
    * [I - Unidade da capacidade operacional](#i-unidade-da-capacidade-operacional)
    * [II - Capacidade](#ii-capacidade)
    * [III - Regra](#iii-regra)
3. Clique em `Salvar alterações`. 

Veja a seguir as descrições dos campos mencionados no passo a passo.

#### I - Unidade da capacidade operacional

Escolha se a capacidade operacional será definida pelo número de _pedidos_ ou de _itens_. O número de itens considera os itens de todos os pedidos feitos no dia.

#### II - Capacidade

Determine qual o limite da capacidade operacional do seller para cada dia da semana. O sistema não restringe um valor máximo. 

Quando o limite configurado é atingido, a sua loja continua recebendo novos pedidos, que podem ser distribuídos para outros sellers ou alocados para o mesmo seller, mas na capacidade nos próximos dias. Isso vai depender da regra que você escolher.

#### III - Regra

Escolha qual a regra para quando o seller atingir a capacidade máxima do dia:

* **Continuar recebendo pedidos consumindo a capacidade dos dias seguintes:** o seller continua recebendo novos pedidos quando a capacidade é atingida, que são alocados na capacidade dos próximos dias, e a promessa de envio dos próximos pedidos é ajustada no checkout para os clientes. Não é possível configurar esse período em horas, porque ele vai corresponder automaticamente ao número de dias seguintes no qual foi alocado.
  * Se você escolher esta regra, determine qual o número de dias seguintes para alocar os pedidos que ultrapassarem a capacidade do dia atual.
  > **Exemplo:** um seller vende chocolates e sua capacidade operacional hoje foi 100% consumida. O seller continua recebendo novos pedidos, mas eles serão preparados só amanhã, porque o time não consegue preparar mais pedidos do que os já previstos para hoje. No checkout, as promessas de envio de novos pedidos agora aparecem com um dia a mais de prazo, pois os pedidos serão preparados amanhã. Se a capacidade de amanhã for consumida ainda hoje, os novos pedidos serão alocados para depois de amanhã e preparados dali a dois dias, porque a loja configurou três dias para Continuar recebendo pedidos consumindo a capacidade dos próximos dias.
* **Desativar este seller até o final do dia:** uma vez que o seller atinja o limite da sua capacidade do dia, naquele mesmo dia ele deixa de receber novos pedidos, que são repassados para outros sellers.

## Escolher entre pausar ou aumentar a capacidade operacional

Para definir se a melhor estratégia para o seu negócio é [editar a capacidade operacional](#editar-capacidade-operacional-do-seller) de um seller ou [pausá-lo](#ativar-e-pausar-capacidade-operacional-de-sellers), é importante compreender o seguinte:

* **Seller pausado:** o seller deixa de receber novos pedidos até ser reativado. Mesmo que a regra para _Continuar recebendo pedidos consumindo a capacidade dos próximos dias_ esteja configurada, novos pedidos não são aceitos.
  > **Exemplo:** a loja do seller teve problemas nas instalações e o preparo de novos pedidos foi comprometido. Neste caso, é estratégico pausar o seller e reativá-lo somente quando os pedidos puderem ser preparados novamente.
* **Seller atingiu limite máximo:** o seller com 100% da capacidade consumida deixa de receber novos pedidos naquele dia. Porém, no dia seguinte, sua capacidade operacional está liberada e ele automaticamente recebe novos pedidos. 
  > **Exemplo:** na véspera do Natal, o seller atingiu o limite máximo da sua capacidade do dia e não conseguiria preparar mais pedidos, portanto não valeria [aumentar a capacidade operacional do seller](#editar-capacidade-operacional-do-seller). No dia seguinte, novos pedidos poderiam ser preparados, portanto seria preferível não editar o seller, que no dia seguinte já teria sua capacidade liberada e estaria recebendo novos pedidos.

### Capacidade operacional de seller abrangente

No site da sua loja, quando o cliente não informa sua localização, ele visualiza os produtos da sua loja (seller 1) e dos [sellers abrangentes](https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI).

Devido a uma limitação da plataforma, quando você desativa a capacidade operacional de um seller abrangente, os produtos desse seller continuam aparecendo como disponíveis na vitrine, mas o cliente não consegue comprá-los. Desta forma, recomendamos que a capacidade operacional de sellers abrangentes seja sempre mantida ativada.

