---
title: 'Configurar integração'
id: 3tZ4qVuMDDsC2jx2DCmjdA
status: PUBLISHED
createdAt: 2021-03-16T20:17:00.970Z
updatedAt: 2024-10-01T16:02:27.714Z
publishedAt: 2024-10-01T16:02:27.714Z
firstPublishedAt: 2021-03-18T20:12:33.299Z
contentType: trackArticle
productTeam: Channels
slugEN: configure-integration
locale: pt
trackId: 5Yx5IrNa7Y48c6aSC8wu2Y
trackSlugEN: configurar-integracao-com-o-magazine-luiza
order: 6
---

A configuração da integração com o Magalu é feita em duas etapas, primeiro a  configuração no Admin VTEX e logo após a autenticação no [portal do Magalu Marketplace](https://marketplace-vendamais.magazineluiza.com.br/). Antes de iniciar a configuração, certifique-se de estar [cadastrado](/pt/tracks/configurar-integracao-com-o-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y) no portal do Magalu Marketplace e siga as instruções abaixo para realizar as etapas de configuração:

1. No Admin VTEX, acesse o módulo **Marketplace > Conexões > Marketplaces e integrações.**
2. Clique no marketplace `Magazine Luiza`
3. No modal que aparecerá, clique em `Conectar`.
4. Preencha os campos da tela, descritos na tabela abaixo. Os campos marcados com o símbolo * são obrigatórios.
5. Após preencher os campos, clique no botão `Autenticar` no topo da página e você será redirecionado para fazer o login no [portal do Magalu Marketplace](https://marketplace-vendamais.magazineluiza.com.br/).
6. Para [autorizar a integradora](https://marketplacemagalu.zendesk.com/hc/pt-br/articles/15666930590605) VTEX, no portal do Magalu Marketplace, acesse **MENU > Integradoras.**
7. Na barra de busca, digite `VTEX` e clique no botão `Autorizar`.
8. No modal que aparecerá, selecione as seguintes opções de [consentimento de integração](https://marketplacemagalu.zendesk.com/hc/pt-br/articles/15666930590605):

   - OpenId
   - Permissão acesso marketplace

9. Clique no botão `Continuar`.

Feito isso, a integração da sua loja VTEX com o Magalu Marketplace estará concluída.

| **Campo** | **Descrição** | **Exemplo**|
|---|---|---|
| **Integração*** | Marque como *Ativada* para que a integração comece a operar. Se optar por desativar a integração, toda a configuração, incluindo afiliado, serão excluídos. | ![Integração Magalu](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-com-o-magazine-luiza/configurar-integracao_1.png) |
| **CNPJ*** | CNPJ utilizado no cadastrado no portal Magalu Marketplace. Inserir apenas números, sem caracteres especiais. | **45121594000127** |
| **Id do afiliado*** | Código identificador para criação de um [afiliado](/pt/tutorial/o-que-e-afiliado) que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas. A configuração do conector cria automaticamente o afiliado. | **MGZ** |
| **Política Comercial*** | ID da [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial) que será utilizada para a integração com o Magalu Marketplace. Todos os produtos vinculados a esta política comercial serão enviados para o marketplace. | **1** |
| **Série da Nota Fiscal*** | Numeração da série de um grupo de notas fiscais. Caso nenhum valor seja preenchido, o sistema automaticamente vai atribuir o número 1. |**123**|
| **Estoque Mínimo*** | Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização do Magalu pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial. Se o saldo do SKU estiver igual ou abaixo do valor configurado, será enviado saldo 0 para o marketplace. | **3** |
| **Mapeamento de SLA Customizável** | Tipo de Entrega Magalu x Tipo de Entrega VTEX. No caso do seu Tipo de Entrega Magalu ter um nome diferente da sua [política de envio](/pt/docs/tutorials/politica-de-envio), é necessário fazer uma convergência de denominação **(de > para)** entre ambos.É possível associar vários Tipos de Entrega Magalu a uma mesma política de envio na VTEX, e não há um número limite de tipos de entrega que podem ser cadastrados no Magalu Marketplace. Você também pode alterar os valores padrões do Tipo de entrega Magalu (de até 50 caracteres) para que tenham os mesmos nomes das suas políticas de envio. Neste caso, o mapeamento da correspondência não será necessário, pois os valores serão idênticos. O pedido só será integrado na VTEX se estiver relacionado a uma [estratégia de envio](/pt/docs/tutorials/estrategia-de-envio). Mesmo quando a entrega é feita pelo Magalu Marketplace, é necessário haver uma correspondência entre a sua política de envio e o seu Tipo de Entrega Magalu, seja por meio do mapeamento entre valores diferentes ou utilizando valores idênticos. Os Correios (PAC) são usados como transportadoras, seu Tipo de Entrega no Magalu se chama NORMAL, e sua política de envio (nome dado ao seu método de envio) na VTEX é Comum. Portanto, você deve preencher o primeiro campo com NORMAL e o segundo com Comum. Esteja atento para letras maiúsculas, minúsculas e espaçamentos. | **NORMAL > Comum**|
| **Enviar Kit*** | Ao escolher Não, SKUs [cadastrados como kit](/pt/docs/tutorials/cadastrar-kit) não são enviados para o Magalu Marketplace. Ao habilitar Sim, todos os itens da sua política comercial são enviados para o marketplace, sem filtrar SKUs cadastrados como kit. Mudanças na configuração do conector podem ser feitas a qualquer momento, sendo que isso não afeta SKUs que já tenham sido enviados. Por exemplo, se você mudar sua configuração de *Sim* para *Não*, SKUs enviados anteriormente para o Magalu não são removidos ou alterados. Com a opção Não ativada, tentativas de envio para o Magalu Marketplace de SKUs cadastrados como kit resultam no seguinte aviso: `O conector está configurado para não enviar SKUs do tipo Kit.`  Esta mensagem pode ser visualizada no Admin VTEX, em **Marketplace > Conexões > Produtos**, clicando no SKU. | ![Enviar kit Magalu](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-com-o-magazine-luiza/configurar-integracao_2.png) |
| **Estratégia de envio para cotação de frete (Válida apenas caso a configuração de estoque e cotação para contas franquias estiver ativa)** | É possível escolher entre duas opções de frete. **Mais barato:** a escolha de estoque para fulfillment do pedido é feita com base no menor preço, mas o envio do produto leva mais tempo. **Mais rápido:** a escolha de estoque para fulfillment do pedido é feita com base no menor tempo, mas o envio do produto custa mais caro.| |
|**Etiqueta de entrega**| Qual o tipo do arquivo da etiqueta de entrega deve ser disponibilizada. | PDF ou ZPL |
| **Mapeamento de Certificados de Homologação (ANATEL, INMETRO, ANVISA e MAPA)** | Devido à [determinação da Anatel](https://www.gov.br/anatel/pt-br/assuntos/noticias/marketplaces-adotam-medidas-para-coibir-venda-de-produtos-nao-homologados), produtos da categoria Smartphones e Celulares deverão possuir obrigatoriamente uma [especificação de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) cadastrada com o código de homologação da Anatel para serem comercializados no Magalu Marketplace. Por isso, é necessário preencher este campo com o nome da especificação de produto criada e o código de homologação do produto disponibilizado pela Anatel. Você poderá cadastrar a especificação com o nome que quiser. Se o certificado de homologação não for mapeado, os produtos apresentarão erros de integração. Para cadastrar a especificação, você irá preencher os campos **DE e PARA** e clicar no botão **+**.Você pode cadastrar quantas especificações forem necessárias.| ** CERTIFICADO_1 > ANATEL **|

**Mapeamento de Campos Customizados (Nome e descrição):**  Para utilizar esse mapeamento é necessário criar um campo customizado. Para saber como criar campos customizados, acesse a documentação [Cadastrar especificações ou campos de produto](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-produto).

> ℹ️ O mapeamento de campos customizáveis está disponível apenas para **nome do produto** e **descrição do produto**. **Exemplo de nome para o novo campo:** `MGZ_ProductName` para nome do produto e `MGZ_ProductDescription` para descrição do produto.  

Para o mapeamento funcionar, é necessário o seller seguir os seguintes passos:  

1. Criar um campo do tipo `Texto grande`.  
2. Desativar a opção  `Exibe especificação`.  
3. Preencher os campos criados em cada produto cadastrado.  

O preenchimento desse campo deve ser realizado da seguinte maneira:

1. Preencha o campo DE com o nome do campo de origem.   Obrigatoriamente `ProductName` para título do produto ou Obrigatoriamente `ProductDescription` para descrição do produto.  
2. Preencha o campo PARA com o nome do novo campo.   `MGZ_ProductName` para nome do produto e `MGZ_ProductDescription` para descrição do produto.    
3. Clique no botão e uma regra de mapeamento será adicionada a sua integração.  

> ℹ️ Cada regra cadastrada mapeia apenas um campo. Caso o campo mapeado não tenha um valor preenchido, será enviado o valor padrão de `Título` ou `Descrição` cadastrados no catálogo.
