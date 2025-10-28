---
title: 'Agências (VTEX Tracking)'
id: 2PMohRiNdNpHPA2g2HyYH7
status: PUBLISHED
createdAt: 2020-08-06T19:08:35.899Z
updatedAt: 2021-11-30T00:16:30.066Z
publishedAt: 2021-11-30T00:16:30.066Z
firstPublishedAt: 2020-08-06T19:17:32.028Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: vtex-tracking-agencies
legacySlug: agencias-vtex-tracking
locale: pt
subcategoryId: 7yiFRk9TGfMNeyhT83UljP
---

O cadastro de **Agências** em sua plataforma VTEX Tracking permite a personalização da comunicação por SMS e e-mail com seu cliente. Para contratantes do serviço VTEX Tracking que possuem mais de uma marca dentro de sua carteira de produtos, por exemplo, é importante que a comunicação com o cliente seja feita de forma personalizada. Para evitar que o cliente receba uma informação de entrega e não saiba a que marca se refere, é possível customizar a mensagem. 

## Por que devo configurar uma Agência?

Vamos supor que a loja ABC vende eletrodomésticos de marcas diferentes: a marca Azul e a Rosa. É a loja ABC que é a contratante VTEX Tracking, e não cada marca individualmente, portanto é a loja que gerencia todo o sistema de comunicação sobre entregas. Para o cliente final, Azul e Rosa vendem produtos diferentes e são empresas totalmente sem vínculo. Se o sistema comunicar a esse cliente que seu produto da empresa ABC está a caminho,  pode ser que ele desconheça e não identifique a que se refere essa entrega. Por isso é possível customizar a comunicação feita com seu cliente, para segmentar marcas diferentes à sua operação logística com o VTEX Tracking. 

Para atender a esse cenário, é preciso cadastrar Agências e definir a comunicação para cada uma. Seguindo o exemplo acima, criamos uma agência para marca Azul e outra agência para a marca Rosa com textos personalizados.

 Neste artigo você aprenderá a:

- Consultar agências  
- Criar nova agência  
- Campos de cadastro de agência  
- Como configurar e-mail e SMS  
- Status   
- Templates  
- Tags  

## Consultar agência

1. Acesse o módulo **Configurações da Conta**.  
2. Acesse a aba **Agências**.  
3. Clique em **Consultar Agências**.  

Uma vez no painel, é possível: 
- Buscar agência pelo nome ou CNPJ, utilizando a barra de busca.  
- Selecionar uma agência, e conferir detalhes de sua conta, clicando no botão `:`.  

## Criar nova agência

1. Acesse o módulo **Configurações da Conta**.  
2. Acesse a aba **Agências**.  
3. Clique em **Nova Agência**.  
4. Preencha os campos de cadastro da agência.   
5. Marque a caixa de seleção **Ativo** para ativar a agência.  
5. Clique em **Criar**.  

### Campos de cadastro de agência

- **Nome:** nome referente à agência (ou marca) que será criada.   
- **Logotipo:** selecione o arquivo, a partir das imagens salvas no seu computador, correspondente ao logotipo da marca.  
- **Cor:** selecione a cor correspondente à marca, que será exibida no cabeçalho da tela do LastMile, acessada pelo destinatário. Clicando na barra de cor, e em seguida no ícone onde está escrito `RGB`  é possível inserir o código RGB, HEX ou HSL da cor.   
- **E-mail:** configure os e-mails que serão enviados para o consumidor clicando no botão de edição.   
- **SMS:** configure os SMS que serão enviados para o consumidor clicando no botão de edição.   
- **Ativo:** marque a caixa de seleção para ativar a agência cadastrada.  

### Como configurar e-mail e SMS 

Para cada status de entrega, é enviado um e-mail e um SMS para o consumidor com informações que podem ser customizadas. A tela **Configuração Email** e **Configuração SMS** é onde você irá inserir as informações personalizadas para cada comunicação que será enviada para seu destinatário. Para configurar SMS ou e-mail, siga o tutorial abaixo.

 1. Em **Nova Agência**, clique no **botão de edição**.  
 2. Na barra superior, selecione o *Status* que deseja configurar.    
*Status incluem: Rota itinerante, Antes de Roteirizar, Rota Iniciada, Entrega Iniciada, Entrega Realizada, Entrega Não-Realizada, Entrega Sem Agendamento, Fora do Prazo.* 
 3. Marque a caixa de seleção **Ativo**.  
 4. Selecione somente um dos *templates* disponíveis.     
*O template escolhido nesta etapa será o que será disparado pelo sistema, para aquele status. O template *Personalizado* é o único que poderá ser alterado.*  
 5. Se desejar, altere o **Assunto**.  
 6. Edite o **corpo** da mensagem como desejar.  
*O corpo do email deve ser preenchido em HTML, CSS e Javascript. Já a mensagem SMS pode ser preenchida em texto normal, substituindo os valores variáveis pelas `{{tags}}`, que explicaremos a seguir.*   
 7. Clique em **Salvar**.  

![PT Tracking Agencia Configurar email](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-tracking/vtex-tracking---todos-os-artigos/agencias-vtex-tracking_1.png)

#### Status 

A imagem abaixo representa o fluxo de disparo de emails e SMS para destinatários presentes em uma rota. 

![PT Tracking Agencia status disparo](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-tracking/vtex-tracking---todos-os-artigos/agencias-vtex-tracking_2.png)

- **Rota itinerante:** rota itinerante é aquela que demora mais de um dia para ser concluída. A comunicação é enviada quando o portador inicia a primeira entrega da rota. No email ou SMS a mensagem avisa que o serviço está em rota, e determina que a entrega será feita até o dia cadastrado como a data de fim da rota. 
- **Rota Iniciada:** enviado quando o portador inicia a primeira entrega da rota. Todos os pedidos dentro daquela rota recebem uma previsão estimada, que será atualizada quando a comunicação de Entrega Iniciada for enviado.    
- **Entrega Iniciada:** enviado quando o portador dá início à entrega de um serviço específico. Quando chegou a vez de uma determinada entrega dentro de sua rota, é enviada a mensagem com a previsão de entrega.      
- **Entrega Realizada:** enviado quando o portador confirma o status de uma entrega através do app móvel.    
- **Entrega não Realizada:** enviado quando não foi possível realizar a entrega. Portador indica o motivo através do app móvel.    
- **Entrega sem Agendamento:** enviado quando não há agendamento.     
- **Fora do Prazo:** aviso de que a entrega não será enviada conforme o prazo.    

#### Templates

- **Personalizado:** configure seu template do zero.
- **Padrão:** Corresponde ao horário de entrega do pacote. Já vem com um modelo previamente preenchido, que não pode ser alterado.   
- **Período:** indica em qual período do dia o pacote será entregue. Já vem com um modelo previamente preenchido, que não pode ser alterado. 
- **Intervalo:** determina a previsão de faixa de horário que o pacote será entregue. Marque o horário desejado através da caixa ao lado da descrição. Já vem com um modelo previamente preenchido, que não pode ser alterado. 
- **Até:** previsão de horário limite de entrega. Marque o horário desejado através da caixa ao lado da descrição. Já vem com um modelo previamente preenchido, que não pode ser alterado. 
- **Saiu:** indica que o pedido saiu do centro de distribuição e está a caminho. Já vem com um modelo previamente preenchido, que não pode ser alterado. 
- **HEC:** indica o horário de entrega. Já vem com um modelo previamente preenchido, que não pode ser alterado. 

#### Tags

As `{{tags}}` entre chaves correspondem aos dados que são importados dos módulos de Serviço e Rota, para preencher os campos variáveis do e-mail e SMS. As tags seguem o formato HTML, portanto é necessário respeitar seus valores permitidos e formatação. As tags incluem:

- **Logo:** link com a imagem da logo do contratante. Segue a tag `<img>` em HTML.
- **ShipperName:** nome do contratante. 
- **ShipperCustomerFirstName:** primeiro nome do destinatário da entrega.
- **InvoiceOrderOfService:** nota fiscal do serviço.
- **OrderNumber:** número do pedido. 
- **DeliveryDay:** data da rota.
- **Link:**  o link para visualizar a entrega através do LastMile.
- **NonDeliveryReason:** ocorrências de entregas não realizadas.
- **ItinerantDate:** data da rota itinerante, adicionada na planilha de importação de serviço. 
- **UpTo:** horário limite que a entrega será realizada. 
- **Interval:** descreve entre quais horários a entrega será realizada. É possível determinar um intervalo 1 em 1 hora, por exemplo.
Ex: Seu pedido será entregue entre 09:00hrs e 10:00hrs
- **Period:** período do dia em que será realizada a entrega (manhã, tarde ou noite).
- **HEC:** calcula a previsão exata para a entrega do pedido.
- **OutForDelivery:** determina o momento exato em que a entrega foi iniciada.

