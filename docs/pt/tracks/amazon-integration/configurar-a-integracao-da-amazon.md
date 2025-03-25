---
title: 'Configurar a integração da Amazon'
id: 5J9CWPIbYQdAegJJWGsxan
status: PUBLISHED
createdAt: 2019-02-28T23:11:28.346Z
updatedAt: 2023-09-22T20:17:01.064Z
publishedAt: 2023-09-22T20:17:01.064Z
firstPublishedAt: 2019-02-28T23:12:37.347Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-amazon-integration
locale: pt
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugPT: integracao-com-a-amazon
---

Uma vez terminadas as etapas de preparo da sua loja na VTEX e na Amazon, é necessário configurar de fato a integração entre ambas. A configuração da integração é feita no Admin da VTEX. Para configurar, siga as instruções abaixo.

1.	Acesse o Admin da VTEX. 
2.	Clique em __Marketplace > Conexões > Marketplaces e Integrações__.
4.	No box da Amazon, clique em `Conectar`.
5.	Preencha os campos da tela descritos logo abaixo e, em seguida, clique no botão `Salvar Configuração` (campos marcados com o símbolo * são obrigatórios).

- **Id do Afiliado*:**  código identificador para criação de um [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado) que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: MZN. A configuração do conector cria automaticamente o afiliado.
- **Email do afiliado*:** preencha com um email do representante comercial da Amazon, para o afiliado que está sendo criado.
- **Política comercial*:** [política comercial](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/37hdzaRUhJqRfXH1bIRXAa#definicao-da-politica-comercial-na-amazon) que definirá o sortimento de catálogo e os valores dos itens que serão enviados para a Amazon.
- **Amazon Seller Id*:** preencha com o **ID do vendedor** informado pela Amazon na etapa [Autorizar a VTEX no painel da Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf). Caso as dúvidas persistam, [acesse a documentação do Seller Central da Amazon](https://sellercentral.amazon.com.br/sw/AccountInfo/MerchantToken/step/MerchantToken?ref_=macs_aimertok_cont_acinfohm&).
- **Amazon Auth Token*:** preencha com **Token de autorização do MWS** informado pela Amazon na etapa [Autorizar a VTEX no painel da Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf). Caso as dúvidas persistam, [acesse a documentação do Seller Central da Amazon](https://sellercentral.amazon.com.br/apps/manage/ref=xx_masman_dnav_xx).
- **Estoque mínimo*:** determina o valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização da Amazon pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.
- **Nome para o tipo de frete:** nome do tipo de entrega cadastrado na plataforma da Amazon. Este nome do tipo de entrega está localizado em `Configurações de envio` na aba **Modelos de Envio**, embaixo da caixa *Modelo padrão da Amazon*.
- **CEP padrão:** preencha esse campo com um CEP da sua escolha para ativar a funcionalidade, ele será utilizado para garantir a reserva de estoque e SLAs dos pedidos pendentes. Essa funcionalidade permite que pedidos da Amazon com status `Pendente` reservem seus estoques na VTEX para evitar a falta de estoque quando o pedido for aprovado na Amazon. Caso o pedido seja cancelado na Amazon, a reserva de estoque existente na VTEX para este pedido será desfeita.
- **Não enviar variações de SKUs:** atualmente, não é possível enviar os SKUs consolidados para a Amazon. Esta flag deve ser utilizada somente para lojas do setor Office. Caso sua loja seja do setor de Office, recomendamos selecionar a opção *ON*. 
- __Não enviar preço para a Amazon:__ a Amazon dá a possibilidade de usar o próprio sistema deles para parametrização de preços nos produtos. Para utilizar este serviço, marque a opção *ON* para que a integração não envie os preços da VTEX. Pois, se os preços forem enviados via integração, eles irão sobrescrever os preços do sistema da Amazon.
- **Enviar KIT*:** ao escolher *Não*, SKUs [cadastrados como kit](https://help.vtex.com/pt/tutorial/cadastrando-kit--tutorials_215) não são enviados para a Amazon. Ao habilitar *Sim*, todos os itens da sua política comercial são enviados para o marketplace, inclusive SKUs cadastrados como kit. Mudanças na configuração do conector podem ser feitas a qualquer momento, sem que isso afete SKUs que já tenham sido enviados. Por exemplo, se você mudasse sua configuração de *Sim* para *Não*, SKUs enviados anteriormente para a Amazon não seriam removidos nem sofreriam qualquer alteração.

>ℹ️ Com a opção <i>Não</i> ativada, tentativas de envio para a Amazon de SKUs cadastrados como kit resultarão no seguinte aviso: “o conector está configurado para não enviar SKUs do tipo Kit”. Esta mensagem pode ser visualizada no Admin VTEX, no módulo **MARKETPLACE > Integrações > Produtos**, ao se clicar sobre o SKU.

- **Notificar por e-mail se ocorrer um erro em um pedido:** preencher com o e-mail do responsável técnico. Caso ocorra algum erro na integração do pedido, será enviada uma mensagem para o e-mail cadastrado.

<div class="alert-info">
Se a configuração for bem-sucedida, o código do SKU integrado aparecerá no Admin da VTEX com a letra “p” no final, por padrão da Amazon. Exemplo: SKU 13737p.
Isso ocorre porque a letra “p” funciona como o identificador do envio de um produto. O SKU só é integrado se o produto também for. Este é um comportamento esperado no processo de integração com a Amazon.
</div>
