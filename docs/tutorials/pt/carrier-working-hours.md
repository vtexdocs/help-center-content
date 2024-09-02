---
title: 'Horário de funcionamento das transportadoras'
id: 2oGpbInIgdxSWUi3TZjdCS
status: PUBLISHED
createdAt: 2019-02-06T16:21:24.412Z
updatedAt: 2024-04-11T00:33:50.619Z
publishedAt: 2024-04-11T00:33:50.619Z
firstPublishedAt: 2019-02-06T18:25:37.545Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: horario-de-funcionamento-das-transportadoras
locale: pt
legacySlug: configurar-horario-de-funcionamento-para-transportadoras, configurar-o-horario-de-corte-da-transportadora
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Na VTEX, é possível determinar o horário de funcionamento das [transportadoras](https://help.vtex.com/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) da sua loja através de configurações na [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), na qual você define os períodos válidos para a transportadora coletar e enviar pedidos.

Para configurar o horário de funcionamento, no seu Admin VTEX, acesse **Envio > Estratégia de envio** e crie uma [nova política de envio](https://help.vtex.com/pt/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) ou [edite](https://help.vtex.com/pt/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE) uma existente. 

As configurações de horário de funcionamento influenciam o cálculo do tempo de entrega e estão ao final da página de detalhes da política de envio selecionada com as seguintes opções:

* **[Janela de envio](#janela-de-envio)**: períodos em que a transportadora envia itens para os clientes.
* **[Horário de coleta](#horario-de-coleta)**: horários em que a transportadora faz a coleta de itens para envio.

## Janela de envio

1. Na [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), na seção **Horário de funcionamento**, clique em `Janela de envio`.
2. Se você deseja ativar a opção `Aceitar compras fora do horário de funcionamento`, ative o toggle. Caso contrário, deixe-o desativado.

  <div class="alert alert-danger">
Para autorizar a transportadora a receber pedidos nos finais de semana, este toggle deve ser marcado como <code>Ativo</code>. Mesmo se sábados e domingos estiverem configurados como janelas válidas, a ativação do toggle é obrigatória para autorizar a transportadora a receber pedidos fora do horário de funcionamento.
</div>

  <div class = "alert alert-info">
Quando esta opção está habilitada, o <a href="https://help.vtex.com/pt/tutorial/how-shipping-calculation-works--tutorials_116">cálculo de envio</a> do pedido é influenciado, e o tempo desde a realização do pedido até o horário de início de funcionamento da transportadora é somado ao tempo de envio total de envio.
</div>

3. Selecione o `Dia da semana` e respectivamente o `Horário de início` e `Horário de término` do envio, sendo:
    * **Dia da semana:** os dias da semana que a transportadora faz as entregas.
    * **Horário de início:** o horário que começa o período de envio.
    * **Horário de término:** o horário que termina o período de envio.
4. Para adicionar um novo período, clique em `Adicionar janela de envio`.
5. Clique em `Salvar alterações`.

## Horário de coleta

1. Na [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), na seção **Horário de funcionamento**, clique na janela `Horário de coleta`.
2. Selecione um `Dia da semana`.
3. Selecione um `Horário de coleta`. 
4. Para adicionar um novo horário, clique em `Adicionar horário de coleta`.
5. Clique em `Salvar alterações`.
