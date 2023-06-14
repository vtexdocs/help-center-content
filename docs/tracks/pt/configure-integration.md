---
title: 'Configurar integração'
id: 3tZ4qVuMDDsC2jx2DCmjdA
status: PUBLISHED
createdAt: 2021-03-16T20:17:00.970Z
updatedAt: 2022-09-06T22:49:30.916Z
publishedAt: 2022-09-06T22:49:30.916Z
firstPublishedAt: 2021-03-18T20:12:33.299Z
contentType: trackArticle
productTeam: Channels
slug: configurar-integracao
locale: pt
trackId: 5Yx5IrNa7Y48c6aSC8wu2Y
trackSlugPT: configurar-integracao-com-o-magazine-luiza
---

A configuração da integração com o Magazine Luiza é feita no Admin. Para realizá-la, siga as instruções abaixo:

1. Acesse o Admin.
2. No módulo Marketplace, clique em `Integrações`.
3. Clique em `Configurações`.
4. No card do Magazine Luiza, clique em `Integrar`.
5. Preencha os campos da tela descritos logo abaixo e em seguida, clique no botão `Salvar configuração` (campos marcados com o símbolo * são obrigatórios).

- **Integração (se optar por desativar a integração, toda a configuração, incluindo afiliado, serão excluídos)*:** marque _Ativada_ para que a integração comece a operar.

- **Id do afiliado*:** código identificador para criação de um [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado) que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: MGZ. A configuração do conector cria automaticamente o afiliado.

- **Política Comercial*:** ID da política comercial que será utilizada para a integração com o Magazine Luiza. Todos os produtos vinculados a esta política comercial serão enviados para o marketplace

- **Série da Nota Fiscal*:** numeração que identifica a série a que pertencem um grupo de notas fiscais. Caso nenhum valor seja preenchido, o sistema automaticamente vai atribuir o número 1.

- **Estoque Mínimo (se o saldo do SKU estiver igual ou abaixo do valor configurado, será enviado saldo 0 para o marketplace)*:** valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização do Magalu pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.

- **Mapeamento de SLA Customizável (Tipo de Entrega Magalu/Tipo de Entrega VTEX):** no caso do seu Tipo de Entrega Magalu ter um nome diferente da sua [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), é necessário fazer uma convergência de denominação (de > para) entre ambos.
  > Exemplo: os Correios (PAC) são usados como transportadoras, seu Tipo de Entrega no Magalu se chama _NORMAL_, e sua política de envio (nome dado ao seu método de envio) na VTEX é _Comum_. Portanto, você deve preencher o primeiro campo com _NORMAL_ e o segundo com _Comum_.

  É possível associar vários Tipos de Entrega Magalu a uma mesma política de envio na VTEX, e não há um número limite de tipos de entrega que podem ser cadastrados no Magazine Luiza. Você também pode alterar os valores padrões do Tipo de entrega Magalu (de até 50 caracteres) para que tenham os mesmos nomes das suas políticas de envio. Neste caso, o mapeamento da correspondência não será necessário, pois os valores serão idênticos.

  <div class="alert alert-danger">
O pedido só será integrado na VTEX se estiver relacionado a uma estratégia de envio. Mesmo quando a entrega é feita pelo Magazine Luiza, é necessário haver uma correspondência entre a sua política de envio e o seu tipo de entrega Magalu, seja por meio do mapeamento entre valores diferentes ou utilizando valores idênticos. Esteja atento para letras maiúsculas, minúsculas e espaçamentos.
</div>

- **Mapeamento de Certificados de Homologação (Ex: ANATEL, INMETRO, ANVISA e MAPA):** devida à [determinação da Anatel](https://www.gov.br/anatel/pt-br/assuntos/noticias/marketplaces-adotam-medidas-para-coibir-venda-de-produtos-nao-homologados), produtos da categoria Smartphones e Celulares deverão possuir obrigatoriamente uma [especificação de produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) cadastrada com o código de homologação da Anatel para serem comercializados no Magazine Luiza. Por isso, é necessário preencher este campo com o nome da especificação de produto criada e o código de homologação do produto disponibilizado pela Anatel.

  Você poderá cadastrar a especificação com o nome que quiser. Se o certificado de homologação não for mapeado, os produtos apresentarão erros de integração.

  Exemplo: `CERTIFICADO_1 > ANATEL`

- **Enviar Kit*:** ao escolher _Não_, SKUs [cadastrados como kit](https://help.vtex.com/pt/tutorial/cadastrando-kit--tutorials_215) não são enviados para o Magazine Luiza. Ao habilitar _Sim_, todos os itens da sua política comercial são enviados para o marketplace, sem filtrar SKUs cadastrados como kit. Mudanças na configuração do conector podem ser feitas a qualquer momento, sendo que isso não afeta SKUs que já tenham sido enviados. Por exemplo, se você mudasse sua configuração de _Sim_ para _Não_, SKUs enviados anteriormente para o Magalu não seriam removidos ou sofreriam qualquer alteração.

  <div class="alert alert-info">
Com a opção <i>Não</i> ativada, tentativas de envio para o Magazine Luiza de SKUs cadastrados como kit resultarão no seguinte aviso: <i>O conector está configurado para não enviar SKUs do tipo Kit</i>. Esta mensagem pode ser visualizada no Admin, no módulo <b>MARKETPLACE > Integrações > Produtos,</b> ao se clicar sobre o SKU.
</div>

- **Estratégia de envio para cotação de frete (válida apenas caso a configuração de estoque e cotação para contas franquias estiver ativa):** é possível escolher entre duas opções de priorização de frete.
  - **Mais barato:** a escolha de estoque para fulfillment do pedido é feita com base no menor preço, mas a entrega do produto leva mais tempo.
  - **Mais rápido:** a escolha de estoque para fulfillment do pedido é feita com base no menor tempo, mas a entrega do produto é mais cara.

- **Usuário API*:** login enviado por email pelo Magalu após a realização do [cadastro no portal da Magazine Luiza](https://marketplace-vendamais.magazineluiza.com.br/).

- **Senha API*:** senha fornecida por email pelo Magalu depois da configuração do [cadastro no portal da Magazine Luiza](https://marketplace-vendamais.magazineluiza.com.br/).
