---
title: 'Criar trigger no Master Data v1'
id: tutorials_1270
status: PUBLISHED
createdAt: 2017-04-27T21:56:49.666Z
updatedAt: 2024-06-27T13:01:58.637Z
publishedAt: 2024-06-27T13:01:58.637Z
firstPublishedAt: 2017-04-27T23:03:50.015Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slugEN: creating-trigger-in-master-data
locale: pt
legacySlug: criando-trigger-no-master-data
subcategoryId: 2nx7hMJmisofwqwy2P9l2i
---

>ℹ️ Este artigo se refere ao Master Data v1. Se você quiser utilizar o Master Data v2, veja os passos do guia [Setting up triggers in Master Data v2](https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2).

Conceitualmente, trigger é um recurso de programação que executa uma ação específica sempre que um evento associado ocorre. No Master Data, um trigger é a configuração de um ou mais disparos (eventos) que são acionados quando uma determinada situação ocorre, baseada em diversas variáveis.

Isso possibilita diversas automatizações e controle de dados, aumentando a eficiência de seu gerenciamento de dados. Simplificando, um trigger é uma funcionalidade que permite agendar ações a serem realizadas quando um evento disparador ocorre.

Por exemplo:

1. Uma entidade de dados contém os dados de todas as suas lojas físicas.
2. Um novo registro é inserido nessa entidade.
3. Um trigger configurado envia para todos os clientes um email contando a novidade.

Os triggers permitem agendar ações para serem executadas quando certas condições são atendidas. Qualquer informação cadastrada no Master Data pode desencadear inúmeras outras ações, conforme desejado.

As principais características dos triggers são:

- São associados a uma entidade de dados.
- São acionados automaticamente.
- Não podem ser chamados diretamente.
- Disparam diversas ações.
- Permitem a criação de cenários de recursividade.
- Podem impactar na manipulação de dados da entidade devido à característica anterior.

## Estrutura de um trigger

Antes de [criar um trigger](#configurar-um-trigger), é necessário compreender que a configuração de um trigger se dá por quatro partes, explicadas a seguir.

![trigger](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20v1%20triggers/criando-trigger-no-master-data_1.png)

### Ação que dispara o trigger

Para isso, é necessário decidir qual ação deve impulsionar uma outra ação. Essa configuração é separada em duas partes:

- **Regra**: ação que dispara o trigger. Exemplo: o cadastro de um novo cliente na loja.
- **Filtros adicionais**: condições que aquela ação deve atender para a ação de resposta ser executada, como o cadastro ser feito pelo formulário de newsletter e não pela finalização de compra. Exemplo: para acionar o trigger, o cadastro precisa ser feito pelo formulário de newsletter e não pela finalização de compra.

Neste exemplo, a condição do trigger seria **Sempre que um registro for inserido** e, nos filtros adicionais, deveria existir um campo "origem" filtrando por "newsletter". Assim, sempre que um novo cadastro fosse realizado, o trigger verificaria se o cliente se cadastrou pela newsletter e, somente neste caso, realizaria a ação configurada.

### Tempo para o disparo

É possível configurar vários envios separados por um intervalo de tempo. Ou, mais ainda, agendar o disparo de acordo com a data de outro campo. Exemplo: existe o campo **Data de Vencimento** no cadastro de uma entidade **Produto** e é desejado que, 1 mês antes dessa data, seja enviada uma notificação por API para outro sistema. Neste caso, o tempo de disparo será **Data de Vencimento** menos 1 mês.

### Ações que serão executadas caso um registro atenda à regra do trigger e aos filtros

Aqui, você deve configurar todas as ações que serão executadas quando o registro que atendeu às condições também atendeu aos filtros. Essas ações podem ser envio de email, pontuar um campo do tipo Score2, entre outras possibilidades, detalhadas adiante.

Exemplo: um cenário onde se busca fazer a pontuação de um campo a cada nova compra do cliente. Sempre que o cliente finaliza um pedido, 10 pontos são somados ao valor atual do campo **Bônus**.

- **Regra**: quando o atributo Checkout for alterado.
- **Filtro adicional**: Checkout igual Finalizado.
- **Ações em caso positivo**: Alterar o campo Bônus (tipo Score2), colocando a tag bônus com valor 10 e validade 30 dias.

### Ações que serão executadas caso um registro atenda à regra do trigger mas não atenda aos filtros

Nesta configuração, você deve definir ações que serão executadas somente se o registro que passou pela condição da trigger **não** atender aos filtros adicionais. Exemplo:

- **Regra**: um novo registro em Cadastro Estendido for inserido.
- **Filtro adicional**: Gênero igual feminino.
- **Ações em caso positivo**: Enviar um email com ofertas do departamento feminino.
- **Ações em caso negativo**: Enviar um email com ofertas do departamento masculino.

## Configurar trigger

Siga as instruções a seguir para criar um trigger no Master Data v1:

1. Acesse o Master Data em `https://{nomedaconta}.ds.vtexcrm.com.br/`, substituindo `{nomedaconta}` pelo nome da sua conta VTEX.
2. Clique na aba **Ativação**.
3. Clique no botão `Adicionar`.
4. Insira o **Nome** do trigger.
5. Selecione a [entidade de dados](https://help.vtex.com/pt/tutorial/entidade-de-dados--tutorials_1265/ "entidade de dados") que irá disparar a ação do trigger.

   Após selecionar a entidade de dados, surgirão os demais campos de configuração.
7. Selecione um status para o trigger, que pode ser **Ativo** ou **Desativado**.
8. Realize as configurações em cada uma das abas, conforme as seções:

    - [Regras](#regras)
    - [Agendar](#agendar)
    - [Se positivo](#se-positivo)
    - [Se negativo](#se-negativo)

9. Clique em `Salvar`.   

### Regras

Aqui, você deve definir as condições que vão disparar o(s) evento(s) configurado(s) no trigger.

#### Regra de ativação

- **O valor de um atributo é alterado**: quando o valor do campo que for informado abaixo for alterado, em qualquer registro, o trigger será disparado.

   Na opção **Campo**, selecione o campo que será utilizado. Exemplo: se quando o campo **Email** for alterado, o trigger deva ser disparado, selecione o campo **Email**.

- **Um atributo de filtro é alterado**: quando um atributo de filtro for alterado, o trigger será disparado.
- **Um registro é alterado**: quando um registro for alterado, em qualquer campo, o trigger será disparado.
- **Um registro é inserido**: quando um registro for inserido, o trigger será disparado.
- **Um registro é removido**: quando um registro for removido, o trigger será disparado.

#### Filtro adicional

- **Adicionar grupo**: cria grupos que contém filtros. Cada um desses grupos pode se relacionar com os demais, formando camadas mais complexas de filtro.
- **Adicionar filtro**: é possível criar um filtro dentro do último grupo criado ou de maneira independente de grupos. Um filtro sempre interage com os demais, no modelo de conjunto, sendo as opções "E" e "OU" para cada um deles.

   Selecione quais são os campos e quais os valores aceitos ou não para que o trigger seja disparado.

   ![filters-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20v1%20triggers/criando-trigger-no-master-data_2.png)

>ℹ️ O Master Data v1 não permite configuração de retentativas de trigger, diferente do Master Data v2.

### Agendar

Esta aba permite configurar quando o trigger deve ser disparado:

- **Executar o mais rápido possível:** imediatamente.
- **Agendar em uma data específica:** agendamento com uma data e hora no calendário.
- **Agendar em uma data dinâmica:** definição de uma data no futuro, partindo da data atual ou da data de algum campo de data, podendo utilizar minutos, horas, dias, mês e anos.

### Se positivo

Nesta aba, você deve configurar os eventos a serem disparados caso o registro que desencadeou o evento passe por todos os filtros adicionais.

#### Enviar um email

Envia um email para destinatários dinâmicos (contidos no registro) ou estáticos. O email a ser enviado é  personalizado, podendo ser um texto, HTML ou até mesmo o conteúdo de uma URL. É possível inserir anexos e o campo **Tags válidas** mostra como inserir valores de campos do registro.

![send-email-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20v1%20triggers/criando-trigger-no-master-data_3.png)

#### Enviar um email usando um modelo do VTEX Message Center

Envia um email utilizando um template existente no Message Center.

#### Adicionar pontuação ao campo Pontuação2

Um campo do tipo Pontuação2 ou Score2 é um tipo especial de dado que guarda 3 informações: Chave, Pontos e Validade. Você pode definir um valor para cada um desses pontos e salvar em um campo desse tipo.

#### Enviar uma solicitação HTTP

Envia uma requisição HTTP com a possibilidade de salvar informações da resposta no Master Data.

Preencha a seção **Informações da solicitação** com as informações da requisição a ser enviada. Na seção **Ação de resposta**, você poderá indicar como as informações da resposta deverão ser salvas no Master Data.

![http-request-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20v1%20triggers/criando-trigger-no-master-data_4.png)

Para configurar a **Ação de resposta**, selecione a entidade de dados desejada e defina, para cada campo a ser salvo, o caminho JSON correspondente na resposta.

### Se negativo

Serão feitos os disparos de eventos para quando o registro não passar pelos filtros adicionais do trigger. Podem ser configurados os mesmos eventos das [ações em caso positivo](#se-positivo).

## Exemplos

- [Configurar Carrinho Abandonado](https://help.vtex.com/pt/tutorial/configurando-carrinho-abandonado--tutorials_740)

