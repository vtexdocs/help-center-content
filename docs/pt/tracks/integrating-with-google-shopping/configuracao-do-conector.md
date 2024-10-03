---
title: 'Configuração do conector'
id: wWyl0Njxgs5KfXvxYZJrl
status: PUBLISHED
createdAt: 2021-04-14T21:01:49.270Z
updatedAt: 2023-10-13T19:52:02.877Z
publishedAt: 2023-10-13T19:52:02.877Z
firstPublishedAt: 2021-04-15T17:41:17.442Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-connector
locale: pt
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugPT: configurar-integracao-com-o-google-shopping
---

A configuração da integração com o Google Shopping é feita no Admin. Para realizá-la, siga as instruções abaixo:

1. Acesse o Admin.
2. No módulo Marketplace, clique em __Marketplaces e Integrações.__
3. Busque __Google Shopping__ na barra de busca e clique no botão `Conectar`.
4. Preencha os campos da tela descritos logo abaixo e em seguida, clique no botão `Salvar configuração` (campos marcados com o símbolo * são obrigatórios).

- **Integração*:** a integração somente será habilitada se você clicar em _sim._
- **Ignorar envio do EAN (GTIN):** a opção _sim_ significa que os SKUs serão enviados sem o código de barras. Se o seu produto possuir código de barras, a recomendação é marcar _não, _de forma a incluir essa informação na integração. Caso necessário, veja o artigo [Cadastrar o campo EAN](https://help.vtex.com/pt/tutorial/cadastrar-o-codigo-de-barra-dos-skus-para-o-instore--2jkOdRB4XSMG2ke0uUQIKS#cadastrar-o-campo-ean).
- **Merchant Id*:** código atribuído ao seu perfil no Google Merchant Center (sequência numérica que aparece no canto superior direito da sua tela quando você acessa sua conta).
- **Política comercial*:** número da política comercial que definirá o sortimento de catálogo e valores dos itens utilizados na integração.
- **E-mail da conta Google Merchant*:** email utilizado na criação da conta no Google Merchant Center.
- **Aplicar desconto no preço enviado*:** aqui o seller deve escolher qual tipo de desconto deseja enviar ao Google Shopping, __Não aplicar__ (envia o preço cadastrado na plataforma VTEX), __Para meio de pagamento configurado na API de Checkout__ (deve ser selecionado caso o seller tenha configurado o desconto), ou __Maior desconto configurado__.
- **Remover SKU’s sem estoque*:** ao clicar em _não_, quando um produto não estiver disponível ele não será removido do seu feed do Google Shopping, apenas aparecerá com o status _indisponível_. Caso você clique em _sim_, o SKU removido temporariamente por falta de estoque voltará a aparecer no feed assim que o estoque for reposto.
- **Merchant Id (Multi-Client):** este campo deve ser usado apenas quando uma conta avançada for configurada no Google Merchant Center. As contas avançadas são criadas para gerenciar vários vendedores e domínios em grande escala. Nestes casos, o preenchimento do campo deverá ser feito com o código atribuído à sua conta avançada no Google Merchant Center, que poderá ser identificado da mesma forma que o Merchant Id (sequência numérica localizada no canto superior direito da tela). Se for do seu interesse, veja mais detalhes no artigo do Google [Mudar para uma conta avançada](https://support.google.com/merchants/answer/188487).
- **Enviar preço*:** há duas opções, _sem multiplicador de unidade_, no qual seu produto aparece com o valor unitário, e _com multiplicador de unidade,_ quando a cobrança do seu produto for por algum tipo de metragem.
<br/><br/>
Exemplo: se o produto é um piso cerâmico vendido em metros quadrados, então a opção adequada é _com multiplicador de unidade_.

## Configuração no Google Merchant Center

Para efetivar a integração, **não há configurações obrigatórias** que devam ser realizadas na sua conta do Google Merchant Center. Entretanto, para minimizar a ocorrência de erros, existe a recomendação de que a **atualização automática dos itens esteja desabilitada.**

Desabilitar a atualização automática faz com que o Google não tenha permissão para alterar os preços dos seus produtos, e isso passa a ser feito exclusivamente pela Plataforma VTEX. Portanto, após efetuar o login no [Google Merchant Center](https://www.google.com/retail/solutions/merchant-center/), cheque se as preferências da sua conta estão de acordo com essa orientação.
