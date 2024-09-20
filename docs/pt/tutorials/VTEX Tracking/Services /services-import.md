---
title: 'Importação de Serviços'
id: 2LRgMnGbX0af7krrs6tXy3
status: PUBLISHED
createdAt: 2021-04-05T14:18:55.672Z
updatedAt: 2023-03-30T20:35:08.741Z
publishedAt: 2023-03-30T20:35:08.741Z
firstPublishedAt: 2021-04-14T12:30:57.849Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slug: importacao-de-servicos
locale: pt
legacySlug: importacao-de-servicos
subcategoryId: 7GypxQ3HDmFVCHTNTwyhr0
---

Para que você tenha um serviço - entrega, atendimento ou coleta - disponível na plataforma web do VTEX Tracking é preciso cadastrá-lo previamente. Existem três maneiras de realizar esse cadastro:

* Plataforma web
* [API](https://developers.vtex.com/docs/api-reference/tracking)
* [Aplicativo VTEX Tracking](https://help.vtex.com/pt/tutorial/como-instalar-e-configurar-a-app-vtex-tracking-no-seu-admin-vtex--3ejuFsJ1m0r08cT6afpIPf)

Este artigo explica como importar serviços pela plataforma web a partir de uma planilha modelo.

## Importação

Para importar um serviço:

1. Acesse o Admin Tracking;
2. No menu à esquerda, na seção **Cadastro,** clique em `Importação de Serviços`;
1. No campo **Tipo de Serviço**, selecione qual tipo de serviço você irá importar: **Entrega, Atendimento ou Coleta;**
2. É preciso selecionar o arquivo para importação. O arquivo deve conter os campos preenchidos corretamente de acordo com o modelo da planilha, para isso: 
    * Baixe o modelo da planilha clicando em <i class="fas fa-download"></i>;
    * Preencha os campos conforme está descrito em [Preenchimento dos campos](#preenchimento-dos-campos);
3. Clique em `Selecione o arquivo`;
4. Busque o arquivo no seu dispositivo; 
5. Clique em `Importar`.

### Preenchimento dos campos

Depois de baixar o modelo é preciso preencher os campos com as informações dos serviços. O preenchimento deve ocorrer da seguinte forma: 

* **CPF/CNPJ do Embarcador:** preencha esse campo quando há operações em que existam dois tipos de usuários. Por exemplo, quando há filiais é preciso identificar para qual filial do embarcador os pedidos serão importados. Também pode ser utilizado ao fazer importação utilizando o usuário do embarcador, nos casos em que os pedidos são disponibilizados para uma de suas filiais. (Não utilize _espaço_, _vírgula_, _ponto e vírgula_, ou caracteres especiais.)
* **Nome do embarcador:** campo é utilizado no aplicativo para identificar o nome do Embarcador. Esse campo não é exibido em nenhuma tela no Admin Tracking e nem no relatório.
* **Nome do destinatário:** o nome do cliente que receberá a entrega. _(Esse campo é obrigatório)._
* **CPF ou CNPJ:** dados do destinatário ou cliente que irá receber ou terá a coleta do produto. (Não utilize _espaço_, _vírgula_, _ponto e vírgula_, ou caracteres especiais.)
* **Email:** email do cliente -  para que ele receba notificações sobre o serviço. É utilizado para o envio da previsão da entrega, comprovante da entrega ou coleta do produto. (Não utilize _espaço_, _vírgula_, _ponto e vírgula_, ou caracteres especiais.Esse campo é obrigatório.) 
* **DDD:** código de discagem direta a distância do telefone do cliente. Com isso, a plataforma poderá enviar SMS com notificações sobre o serviço. Não utilize o zero na frente do código -  ao invés de 011 preencha apenas com 11. _(Esse campo é obrigatório)_
* **Telefone celular:** telefone do cliente - para que a plataforma envie SMS com notificações sobre o serviço. _(Esse campo é obrigatório)._
* **Endereço:** rua ou logradouro do cliente. Separe o nome da rua e o número com vírgula - como em Praça dos Omaguás, 98. _(Esse campo é obrigatório)_
* **Complemento:** Complemento ou informação adicional do endereço do cliente. _(Esse campo é obrigatório)_
* **Bairro:** bairro do cliente. _(Esse campo é obrigatório)_
* **CEP:** código de endereçamento postal. Utilize apenas números. Valide o CEP de acordo com os campos relacionados à endereço (**endereço, complemento, bairro, CEP, cidade e estado**), evite abreviações e preencha todos os itens corretamente sem divergência das informações. São essas informações que  garantem o destino correto do serviço. _(Esse campo é obrigatório)_
* **Cidade:** cidade do cliente. _(Esse campo é obrigatório)_
* **Estado:** Estado do cliente, no formato UF. _(Esse campo é obrigatório)_
* **Latitude do endereço:** Recomendamos não utilizar esse campo pois a plataforma está em atualização e esse campo será deprecado.
* **Longitude do endereço:** Recomendamos não utilizar esse campo pois a plataforma está em atualização e esse campo será deprecado.
* **NF / OS:** Número da nota fiscal ou ordem de serviço. No preenchimento desse campo não utilize os números de série, para isso utilize o campo seguinte.
* **Série:** para evitar duplicidade de notas insira o campo série, caso haja.
* **Número do Pedido (se houver):** identificação do pedido do pacote/serviço. O preenchimento é alfanumérico e livre para o controle interno do serviço.
* **Descrição:** informações pertinentes ao portador. Esse campo aparecerá no aplicativo do portador e também será utilizado para visualização de informações via plataforma web. Utilize, por exemplo, para descrever a quantidade de pacotes e notas fiscais que há na entrega. _(Esse campo é obrigatório)_.
* **ID do cliente:** Identificação do cliente. Essa identificação é criada pela plataforma web em [Configurações de conta > Clientes.](https://help.vtex.com/pt/tutorial/clientes-vtex-tracking--277Z0epDNArIGJIbqtPMA9) O uso desse campo substitui o preenchimento do nome do cliente, CPF e os dados referentes ao endereço do cliente.
* **ID do parceiro:** Identificação do parceiro. Essa identificação é criada pela plataforma web em [Configurações de conta > Parceiros.](https://help.vtex.com/pt/tutorial/parceiros-vtex-tracking--2xEHQ98hoMzgkrdhkpOedQ) Utilize para facilitar o acesso do parceiro às informações do serviço.
* **Tempo de serviço:** tempo estimado do serviço. Insira o tempo que o portador irá permanecer no local da entrega, assim o sistema calcula as previsões da entrega e notifica ao cliente. O formato de preenchimento deverá ser em  em minutos.
* **Portador:** o usuário criado para o portador - motorista - utilizar do aplicativo. O campo deve ser preenchido com o usuário que é utilizado pelo portador para o seu acesso no aplicativo VTEX Tracking. Há dois casos de uso desse campo:
    * Se preenchido: o serviço que está sendo cadastrado ficará disponível no aplicativo do portador. O portador receberá o endereço do serviço na data de início cadastrada, e caso haja mais serviços para a mesma data, os serviços ficarão todos disponíveis obedecendo a ordem que foram inseridos.
    * Se não preenchido: o serviço será cadastrado sem portador atribuído, então utilize o[ cadastro de rota](https://help.vtex.com/pt/tutorial/nova-rota--58zHktlupty2jfvSYsQE5h) para definir um portador e para otimizar a rota criada. 
* **ID do frete:** ID relativo a todos os fretes com destino em determinada faixa de CEP. Você pode criar regras de frete por faixa de CEP no Admin Tracking: pelo menu esquerdo em **Configurações de conta > Fretes > Criar novo**.
* **Valor a receber:** Recomendamos não utilizar esse campo pois a plataforma está em atualização e esse campo será deprecado.
* **Placa:** Inserir placa do veículo que irá realizar a entrega.
* **Data Início:** data para qual a entrega foi programada. Se a entrega for programada para o mesmo dia da importação, este campo pode ficar em branco e o sistema ajustará automaticamente. Lembre-se que a data de início preenchida aqui será a data que o serviço ficará disponível no aplicativo do portador. O preenchimento deve seguir o modelo dd/mm/aaaa. _(Se durante a criação do serviço um portador for atribuído a rota, esse campo se torna obrigatório)._
* **Data fim:** data final do serviço. Utilize para os casos de rotas itinerantes. Preencha com uma data posterior a data de início, seguindo o modelo de dd/mm/aaaa.
* **Data agendamento:** data de entrega agendada pelo cliente. O modelo de preenchimento é dd/mm/aaaa.
* **Romaneio:** número do romaneio ou nome para a rota estruturada. Este campo será relevante caso a funcionalidade de romaneio esteja ativada pelo embarcador. É importante ressaltar que se essa funcionalidade estiver ativada, é possível criar rotas com datas futuras, sendo possível atribuir o portador no momento da criação. Também é possível atribuir a rota a um portador posteriormente. Para ativar essa funcionalidade entre em contato com o [suporte](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM). 
* **Peso:** peso do pacote. Utilize quilogramas (Kg) como unidade de medida.

>❗ Cuidados com o preenchimento da planilha:
>  <body>
>
> * Se algum campo não for utilizado deixe-o em branco.
>
> * Não altere os rótulos das colunas da planilha modelo.
>
> * Caso os campos estejam preenchidos de forma errada o serviço não será criado.
>
> </body>

![menu importação de serviços](//images.ctfassets.net/alneenqid6w5/6VXBtxVKQvnNvqEwCI09dZ/15a4abddec959d9efdd9ae97f4116b97/importacao_servi__os.png)

