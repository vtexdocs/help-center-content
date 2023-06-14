---
title: Criar trigger no Master Data v1
id: tutorials_1270
status: PUBLISHED
createdAt: 2017-04-27T21:56:49.666Z
updatedAt: 2022-12-14T18:27:30.828Z
publishedAt: 2022-12-14T18:27:30.828Z
firstPublishedAt: 2017-04-27T23:03:50.015Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: criando-trigger-no-master-data
legacySlug: criando-trigger-no-master-data
subcategory: 2nx7hMJmisofwqwy2P9l2i
---

<div class="alert alert-info">
Esse artigo se refere ao Master Data v1. Se você quiser utilizar o Master Data v2, veja os passos <a href="https://help.vtex.com/pt/tutorial/configurar-triggers--54eVOFGhS0EWyAUieoqKWo">deste artigo</a>.
</div>

Conceitualmente, **trigger** é um recurso de programação que executa determinada ação sempre que um evento associado ocorrer. No Master Data, um trigger é a configuração de um ou mais disparos (eventos) quando determinada situação ocorre. Essa situação é configurada com base em diversas variáveis.

Isso possibilita diversas automatizações e controle de dados, aumentando a eficiência de seu gerenciamento de dados. Ou seja, de modo simples, trigger é uma funcionalidade que permite o agendamento de ações caso uma ação de disparo aconteça.

1. Uma entidade de dados contém os dados de todas as suas lojas físicas
2. Um novo registro é inserido nessa entidade
3. Um trigger configurado envia para todos os clientes um e-mail contando a novidade

Imagine que são feitos agendamentos de determinadas ações para, quando uma condição for atendida, essas ações sejam realizadas. Então, qualquer informação cadastrada no MasterData pode ser uma ação que dispare outras inúmeras ações, de acordo com o que for desejado. O trigger possui algumas características importantes, descritas a seguir:

- São associados a uma entidade de dados;
- São chamados automaticamente;
- Não podem ser chamados diretamente;
- Dispara diversas ações;
- Permite a criação de cenários de recursividade;
- Pode impactar na manipulação de dados da entidade, devido à característica anterior.

A configuração se dá por 4 partes. Cada uma delas é detalhada abaixo:

1. Configuração da ação que vai disparar o trigger. Para isso, decida qual ação deve ser seguida por outra. E, essa configuração é separada em duas partes: a **condição** do trigger e os **filtros adicionais**. A condição é a ação que dispara o trigger, um cadastro por exemplo, enquanto os filtros são as especificações que aquela ação deve atender para a ação de resposta ser executada, como o cadastro ser feito pelo formulário de newsletter e não pela finalização de compra. Neste caso, a condição do trigger seria: “Sempre que um registro for inserido” e, nos filtros adicionais, existir um campo “origem” filtrando por “newsletter”. Assim, sempre que um novo cadastrado fosse realizado, o trigger verificaria se o cliente cadastrou-se pela newsletter e, somente neste caso, realizaria a ação configurada para este fim.
2. Tempo para o disparo. É possível configurar vários envios separados por um intervalo de tempo. Ou, mais ainda, agendar o disparo de acordo com a data de outro campo. Exemplo: existe o campo “Data de Vencimento” no cadastro de uma entidade “Produto” e é desejado que, 1 mês antes dessa data, seja enviada uma notificação por API para outro sistema. Neste caso, o tempo de disparo será “Data de Vencimento” menos 1 mês.

Ações que serão executadas caso um registro atenda à condição do trigger e aos filtros. Aqui, são configuradas todas as ações que serão executadas quando o registro que atendeu as condições também atendeu aos filtros chegou na data definida no agendamento. Essas ações podem ser envio de e-mail, de comentário, alterar outro campo e outras possibilidades, detalhadas mais abaixo. Exemplo real:

- **Condição** - O atributo Checkout for alterado;
- **Filtro adicional** - Checkout igual Finalizado;
- **Ações em caso positivo** - Alterar o campo Bônus (tipo score), colocando a tag bônus com valor 10 e validade 30 dias.

Nesse caso, é um cenário onde se busca fazer a pontuação de um campo a cada nova compra do cliente. Ou seja, sempre que o cliente finaliza um pedido, é somado 10 pontos no campo “Bônus”. Supondo que o bônus seja concedido quando esse campo soma 40 pontos, existe a necessidade de um outro trigger que verifique esse bônus e dê a promoção. Para isso, o segundo trigger vai associar o cliente a um cluster que já está configurado em uma promoção. Veja a configuração do segundo trigger:

- **Condição** - O atributo Bônus for alterado
- **Filtro adicional** - Bônus maior ou igual 40
- **Ações em caso positivo** - Alterar o campo ClusterBônus para verdadeiro.

Ações que serão executadas caso um registro atenda à condição do trigger mas não atenda  aos filtros. Essa opção é exatamente o contrário da opção acima. Só será executada caso o registro que passou pela condição da trigger **não** atenda aos filtros adicionais. Exemplo real:

- **Condição** - Um novo registro em Cadastro Estendido for inserido
- **Filtro adicional** - Sexo igual feminino
- **Ações em caso positivo** - Enviar um e-mail com ofertas do departamento feminino.
- **Ações em caso negativo** - Enviar um e-mail com ofertas do departamento masculino.

## Como configurar

1. Acesse o DynamicStorage (https://*SUALOJA*.ds.vtexcrm.com.br);
2. Clique na aba **Trigger**;
3. Clique no botão **Novo**;
4. Insira o Nome da trigger;
5. Preencha um e-mail que será notificado caso ocorra algum erro na execução;
6. Selecione a [entidade de dados](/tutorial/criando-entidade-de-dados/ "entidade de dados") que irá disparar a ação do trigger;
7. Após selecionar a entidade de dados, surgirão os demais campos de configuração;
8. Selecione um status para a trigger;
9. Siga na configuração de cada uma das abas conforme abaixo:

### Condições

Aqui, são configuradas as condições que vão disparar o(s) evento(s) configurado(s) no trigger. A maneira de fazer essa configuração é descrita da seguinte forma:

#### Condição do trigger

- **Se o valor de um atributo for alterado** - significa que, quando o valor do campo que for informado abaixo for alterado, em qualquer registro, este trigger será disparado.
Deve ser informado o campo que será filtrado. Ex.: Quando o campo “Email” for alterado o trigger deve ser disparado &#8211; informe campo “Email” no campo “Informe o atributo”.
- **Se um evento for levantado** - Este tipo foi descontinuado.
- **Um registro for alterado** - significa que, quando um registro for alterado, em qualquer campo, este trigger será disparado.
- **Um registro for comentado** - significa que, quando um registro for comentado, este trigger será disparado.
- **Um registro for inserido** - significa que, quando um registro for inserido, este trigger será disparado.
- **Um registro for removido** - significa que, quando um registro for removido, este trigger será disparado.

#### Filtro adicional

**Adicionar grupo** - cria grupos que contém filtros. Cada um desses grupos pode se relacionar com os demais, formando camadas mais complexas de filtro.
![relacaoGrupos](//images.contentful.com/alneenqid6w5/6n2ipjsapUYyG8quIucIke/1b789ceed1f6ea993096f0d3c857b114/relacaoGrupos.png)

**Incluir filtro** - é possível criar dentro do último grupo criado ou sem a necessidade de grupos. Um filtro sempre interage com os demais, no modelo de conjunto, sendo as opções “E” e “OU” para cada um deles.
Deve-se selecionar quais são os campos e quais os valores aceitos ou não para que o trigger seja disparado.
![filtroTrigger](//images.contentful.com/alneenqid6w5/go7XW0mqWsuA4ygwYsoMS/cf6c5ef321a8d39e16a09d30c2ca1245/filtroTrigger.png)

<div class="alert alert-info">
O Master Data v1 não permite configuração de retentativas de trigger, diferente do Master Data v2.
</div>

### Agendamento

Aqui, é configurado quando o trigger deve ser disparado. Pode ser imediatamente, com a opção “Executar o mais rápido possível”, agendamento com uma data no calendário com  “Agendar para uma data específica” ou um valor no futuro, partindo da data atual ou da data de algum campo de data, podendo utilizar minutos, horas, dias, mês e anos com a opção “Agendar execução para uma data dinâmica”.

### Ações em caso positivo

Serão configurados os eventos a serem disparados caso o registro que desencadeou o evento passe por todos os filtros adicionais.

#### Alterar um atributo

Esta ação altera um campo do registro que disparou a trigger. Deve ser informado qual o campo (atributo) deve ser alterado assim como qual a fórmula deve ser utilizada. O campo “Expressões dinâmica” exibe quais são os valores que devem ser inseridos na fórmula caso queira se usar valores contidos em campos do registro ou dos registros relacionados (se possuir). Entende-se como fórmula um código em C# que retorne algum valor do mesmo tipo definido na entidade de dados para o campo.
![fórmula](//images.contentful.com/alneenqid6w5/F3qRfRkScKWAYoCas4GCe/36f27cb6e71425b80340e1221251d3d2/f_C3_B3rmula-1.png)

O botão validar vai compilar o código no campo fórmula para verificar se está ou não válido e mostrará qual o valor que será retornado para o campo.
![validacaoFormula](//images.contentful.com/alneenqid6w5/3Fjh4Q1hVCqkY0yAmMSmOM/67564a371055792fd5c0f40efed7670b/validacaoFormula.png)

#### Incluir um comentário

Inclui um comentário no registro que disparou o trigger. Deve-se digitar o comentário que será inserido.

#### Enviar email

Envia um e-mail para destinatários dinâmicos (contidos no registro) ou fixos. O E-mail a ser enviado é todo personalizado, podendo ser um texto, HTML ou até mesmo o conteúdo de uma URL. É possível inserir anexos e, o campo tag válidas, mostra como inserir valores de campos do registro.
![email](//images.contentful.com/alneenqid6w5/KsQUtktQoECEMiKEY6EU8/89d9d75e4cfdb2fd539dece5a542f8ce/email.png)

#### Pontuar campo Score

Um campo score é um tipo especial de dado que guarda 3 informações: Chave, Pontos e Validade. Você pode definir um valor para cada um desses pontos e salvar em um campo do tipo Score. 

#### Gerar um QRCode

Gera um QRCode com o conteúdo inserido. Este QRCode deve ser inserido em algum campo do tipo “file” do registro.

Podem ser configurados mais de uma ação, porém, é recomendado até 3 ações por trigger. Configure as ações conforme a prioridade, pois, caso haja algum erro na configuração de um evento, todos os eventos abaixo dele não serão disparados.

#### Envie requisição HTTP

Envie uma requisição HTTP com a possibilidade de salvar informações da resposta no Master Data.

Preencha a seção **Request data** com as informações da requisição a ser enviada. Na seção **Response action** você poderá indicar como as informações da resposta deverão ser salvas no Master Data.

![Master Data v1 enviar requisição http screenshot](//images.ctfassets.net/alneenqid6w5/5uIXuDHBecTzuJxi0mnjWv/07197eb9ba3d6a3c298a8e27f6392c13/mdv1_trigger_http_request.PNG)

Para configurar a **Response action** selecione a entidade de dados desejada e defina, para cada campo a ser salvo, o caminho JSON correspondente na resposta.

### Ações em caso negativo

Serão feitos os disparos de eventos para quando o registro não passar pelos filtros adicionais do trigger. Podem ser configurados os mesmos eventos das “Ações em caso positivo”.

<!--
## Exemplo

Veja o vídeo a seguir com a configuração do seguinte cenário: Envio de um e-mail de Boas Vindas para cada novo cliente da loja. A não ser que o cliente faça parte de um cluster. Neste caso, a abordagem de boas vindas será feito por telefone, portanto, clientes do cluster “Cluster 1” não devem receber o e-mail.

<iframe width="840" height="473" src="https://www.youtube.com/embed/A6UrxcYIq5E?feature=oembed" frameborder="0" allowfullscreen></iframe>
-->

## Exemplos

- [Configurar Carrinho Abandonado](https://help.vtex.com/pt/tutorial/configurando-carrinho-abandonado--tutorials_740)
