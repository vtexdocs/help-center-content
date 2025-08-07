---
title: 'Configurar conector'
id: 40eYElt1qwIqGeIeum2W4M
status: PUBLISHED
createdAt: 2018-09-27T22:25:49.315Z
updatedAt: 2024-07-02T19:23:01.065Z
publishedAt: 2024-07-02T19:23:01.065Z
firstPublishedAt: 2018-09-27T22:41:30.135Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-connector-b2w
locale: pt
trackId: 6w07SJBVqE020KIOOS8ygk
trackSlugEN: configurar-integracao-da-b2w
---

Para realizar a configuração do conector, siga os passos abaixo:

1. No Admin VTEX, em _MARKETPLACE_, clique em `Integrações`.
2. Clique em `Configurações`.
3. No card da B2W, clique em `Integrar`.
4. Preencha os campos da tela descritos abaixo e, em seguida, clique no botão `Salvar configuração` (campos marcados com o símbolo * são obrigatórios).

- **Email de acesso da SkyHub*:** email utilizado no cadastro da [SkyHub](https://ajuda.skyhub.com.br/hc/pt-br).
- **Chave de acesso da SkyHub*:** token de identificação da sua loja no marketplace. Esta informação é obtida com a SkyHub.
- **Id do afiliado*:** código identificador para criação de um [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado) que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: BWW. A configuração do conector cria automaticamente o afiliado.
- **Política comercial*:** ID da [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que será utilizada na integração com a B2W. Todos os produtos vinculados a esta política comercial serão enviados para o marketplace.
- **Ativar integração de pontos de retirada*:** com a opção _Sim_ selecionada, você autoriza a retirada de produtos nos [pontos de retirada](https://help.vtex.com/pt/tutorial/configurar-integracao-de-lojas-fisicas-com-a-b2w--1yv2BSquNmdp8M6vJvaLwm) cadastrados na conta principal da sua loja na VTEX. Um ponto de retirada é um local físico onde o cliente tem a opção de retirar por conta própria o seu pedido.
- **Ativar pontos de retirada das contas franquias*:** com a opção _Sim_ selecionada, você autoriza a retirada de produtos nos [pontos de retirada](https://help.vtex.com/pt/tutorial/configurar-integracao-de-lojas-fisicas-com-a-b2w--1yv2BSquNmdp8M6vJvaLwm) cadastrados nas [contas franquias](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa) associadas à conta principal.
- **Ativar estoque para entrega e cotação de frete para contas franquias*:** com a opção _Sim_ selecionada, a funcionalidade [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) permite que você venda na B2W produtos dos estoques das suas contas franquias. Ou seja, o estoque de contas franquias é disponibilizado para fullfilment de pedidos na B2W.
- **Estratégia de envio para cotação de frete (válida apenas caso a configuração de estoque e cotação para contas franquias estiver ativa):** é possível escolher entre duas opções de priorização de frete.
  - **Mais barato:** a escolha de estoque para fulfillment do pedido é feita com base no menor preço, mas a entrega do produto leva mais tempo.
  - **Mais rápido:** a escolha de estoque para fulfillment do pedido é feita com base no menor tempo, mas a entrega do produto é mais cara.
- **Estratégia de envio de estoque (válida apenas caso a configuração de estoque e cotação para contas franquias estiver ativa):** é possível escolher entre duas opções de priorização de estoque.
  - **Total dos estoques:** para fulfillment do pedido, considera-se tanto o estoque da loja principal quanto os estoques das contas franquias.
  - **Estoque máximo:** para fulfillment do pedido, utiliza-se apenas o maior estoque disponível da conta franquia.
- **Url da loja (Ex: www.minhaloja.com.br):** endereço eletrônico da sua loja.
- **Informe aqui o nome dos seus atributos utilizados para fazer a variação dos seus produtos:** insira as [especificações de SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-sku)s utilizadas no seu catálogo. Você deve digitar uma especificação por vez e adicioná-la clicando em `+` sinal de adição. Este campo é _case sensitive_, ou seja, detecta o uso de letras maiúsculas e minúsculas, por isso esteja atento para a grafia exata da especificação.
- **Mapeamento de Certificados de Homologação (Ex: ANATEL, INMETRO, ANVISA e MAPA):** devida à [determinação da Anatel](https://www.gov.br/anatel/pt-br/assuntos/noticias/marketplaces-adotam-medidas-para-coibir-venda-de-produtos-nao-homologados), produtos da categoria Smartphones e Celulares deverão possuir obrigatoriamente uma [especificação de produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) cadastrada com o código de homologação da Anatel para serem comercializados na B2W. Por isso, é necessário preencher este campo com o nome da especificação de produto criada e o código de homologação do produto disponibilizado pela Anatel.

  Você poderá cadastrar a especificação com o nome que quiser. Se o certificado de homologação não for mapeado, os produtos apresentarão erros de integração.

  Exemplo: `CERTIFICADO_1 > ANATEL`

- **Estoque mínimo (Se o saldo do SKU estiver igual ou abaixo do valor configurado, será enviado saldo 0 para o marketplace e o anúncio será desativado)*:** insira o valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio será pausado para evitar vendas sem estoque durante o tempo de atualização da SkyHub/B2W pela VTEX. Escolha com atenção, pois essa configuração é aplicada a todos os produtos. Verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.
- **Enviar KIT*:** ao escolher _Não_, SKUs [cadastrados como kit](https://help.vtex.com/pt/tutorial/cadastrando-kit--tutorials_215) não são enviados para a B2W. Ao habilitar _Sim_, todos os itens da sua política comercial são enviados para o marketplace, sem filtrar SKUs cadastrados como kit. Mudanças na configuração do conector podem ser feitas a qualquer momento, sendo que isso não afeta SKUs que já tenham sido enviados. Por exemplo, se você mudasse sua configuração de _Sim_ para _Não_, SKUs enviados anteriormente para a B2W não seriam removidos ou sofreriam qualquer alteração.

  <div class = "alert alert-info">
Com a opção <i>Não</i> ativada, tentativas de envio para a B2W de SKUs cadastrados como kit resultarão no seguinte aviso: <i>O conector está configurado para não enviar SKUs do tipo Kit</i>. Esta mensagem pode ser visualizada no Admin, no módulo <b>MARKETPLACE > Integrações > Produtos</b>, ao se clicar sobre o SKU.
</div>

- **E-mails Para Notificação de Pedidos Não Integrados*:** digite o endereço eletrônico desejado e, em seguida, clique em `+` sinal de adição. Você pode inserir vários emails para receberem a notificação de [pedidos da B2W que não foram integrados](https://help.vtex.com/pt/tutorial/erros-de-integracao-de-pedidos-da-b2w--2iQqCJIfySN0JsCJkOG2h8).
- **Etiqueta dos pedidos de B2W Entrega*:** selecione o formato que você deseja para a emissão de etiquetas, se em JSON (JavaScript Object Notation) ou em PDF (Portable Document Format).  
- **Mapeamento de Campos Customizados (Nome e descrição):**  Para utilizar esse mapeamento é necessário criar um campo customizado. Para saber como criar campos customizados, acesse a documentação Cadastrar especificações ou campos de produto.  

<div class = "alert alert-info">
  O mapeamento de campos customizáveis está disponível apenas para <b>nome do produto</b> e <b>descrição do produto</b>.
  <p><b>Exemplo de nome para o novo campo:</b> <code>B2W_ProductName</code> para nome do produto e <code>B2W_ProductDescription</code> para descrição do produto.</p>
</div>  

Para o mapeamento funcionar, é necessário o seller seguir os seguintes passos:  

1. Criar um campo do tipo `Texto grande`.  
2. Desativar a opção  `Exibe especificação`.  
3. Preencher os campos criados em cada produto cadastrado.  

O preenchimento desse campo deve ser realizado da seguinte maneira:

1. Preencha o campo DE com o nome do campo de origem.   
Obrigatoriamente `ProductName` para título do produto ou Obrigatoriamente `ProductDescription` para descrição do produto.  
2. Preencha o campo PARA com o nome do novo campo.   
`B2W_ProductName` para nome do produto e `B2W_ProductDescription` para descrição do produto.    
3. Clique no botão e uma regra de mapeamento será adicionada a sua integração.  

<div class="alert alert-info">
Cada regra cadastrada mapeia apenas um campo.
<p>Caso o campo mapeado não tenha um valor preenchido, será enviado o valor padrão de <code>Título</code> ou <code>Descrição</code> cadastrados no catálogo.
</div>

Após salvar a configuração, a integração envia automaticamente todos os produtos associados à política comercial determinada para a SkyHub, a integradora com a B2W.
