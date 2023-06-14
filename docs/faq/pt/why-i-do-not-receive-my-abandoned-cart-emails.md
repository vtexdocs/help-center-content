---
title: 'Por que não recebo email de carrinho abandonado?'
id: 5ERWuLh9ajnTiHuRSsNje3
status: PUBLISHED
createdAt: 2019-03-15T16:46:36.370Z
updatedAt: 2022-05-20T15:36:07.176Z
publishedAt: 2022-05-20T15:36:07.176Z
firstPublishedAt: 2019-03-15T17:15:34.657Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 6JCq5z9N5xvlHKhhoEcvjM
slug: por-que-nao-recebo-email-de-carrinho-abandonado
locale: pt
legacySlug: por-que-nao-recebo-email-de-carrinho-abandonado
---

Em alguns casos, a configuração da [Trigger](https://help.vtex.com/pt/tutorial/criando-trigger-no-master-data?locale=pt "Trigger") para o [Carrinho Abandonado](https://help.vtex.com/pt/tutorial/setting-up-abandoned-carts--tutorials_740#) poderá não funcionar corretamente. Esse comportamento acontece por conta de algumas configurações indevidas. Porém, esses erros podem ser corrigidos facilmente pelo [Master Data](https://help.vtex.com/pt/tutorial/o-que-e-o-master-data?locale=pt).

Siga o passo a passo a seguir para acessar a página de configurações:

1. Acesse o módulo __Master Data__
2. Logo abaixo de "Links Rápidos", clique em __Criar Aplicação__
3. Do lado esquerdo da tela, em "Configurações", clique em __Estrutura de Dados__
4. Ao ser direcionado para uma nova página, autentique-se novamente com seu __login VTEX__ 
5. Com tudo certo, clique na aba __Trigger__
6. No canto superior esquerdo da tela, digite o código do carrinho que deseja editar na barra de busca
7. Por fim, clique no ícone de lápis embaixo de __"Ações"__ 

A aba __“Condições”__ agrupa as principais configurações para o disparo de uma Trigger. Logo, é possível fazer as verificações para garantir que todos os dados foram incluídos corretamente e, consequentemente, corrigir eventuais erros.

Dito isso, cheque os seguintes parâmetros:
- __Status “Ativo”__
A trigger funcionará corretamente apenas se o status selecionado for o “Ativo”. Qualquer outro status selecionado implica em um erro no disparo da Trigger.

- __Email para notificação de erros__
Não se deve preencher o campo de “Email para a notificação de erros”. Se durante a sua verificação de dados este campo estiver preenchido, deixe-o vazio. 

- __Email de origem__
Também não se deve preencher o campo de “Email de origem”.

- __Nome de exibição do email de origem__ 
Não é possível preencher o espaço para o nome de exibição do email de origem. Caso haja alguma informação neste campo, limpe-o.

- __Condições de aplicação__
No caso de Carrinho Abandonado, é importante configurar dois filtros: “Checkout Diferente de Finalizado” e “Checkout Não Está Nulo”. Valores diferentes dessas duas configurações podem prejudicar a Trigger. 

Depois da verificação, é imprescindível salvar todas as informações feitas. Posteriormente, os emails serão enviados como o de costume. 

<div class="alert alert-warning">
Além disso, é importante ressaltar que o tempo de uma sessão dura <strong>30 minutos</strong>. Somente após esse tempo o sistema considerará o agendamento da Trigger de Carrinho Abandonado. Ou seja, o tempo considerado é o do período da sessão somado ao agendamento da Trigger.
</div>
