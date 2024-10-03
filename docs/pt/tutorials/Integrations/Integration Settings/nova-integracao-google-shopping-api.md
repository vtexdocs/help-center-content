---
title: 'Integrar com o Google Shopping'
id: tutorials_7034
status: ARCHIVED
createdAt: 2017-04-27T21:48:21.080Z
updatedAt: 2021-04-15T21:41:15.677Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:42.177Z
contentType: tutorial
productTeam: Channels
author: authors_41
slugEN: new-google-shopping-api-integration
locale: pt
legacySlug: nova-integracao-google-shopping-api
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A nova integração do Google Shopping deixa de utilizar o XML para permitir integração por API e acompanhamento em tempo real pela seção de __Integrações__.

O XML não foi descontinuado; ainda é possível utilizá-lo, mas a API trabalha com recursos modernos, muito mais rápidos e confiáveis.

Para habilitar essa nova integração com o Google Shopping, é necessário ter uma conta no Google Merchant Center vinculada ao Google Adwords, aonde precisa haver uma campanha do tipo shopping para que os produtos ativos do Merchant Center passem a estar disponíveis e aparecerem nos resultados de busca do Google.

Para mais informações sobre as campanhas e anúncios do Shopping, acesse [este artigo do Google](https://support.google.com/adwords/answer/2454022?hl=pt-BR).

## Como configurar

1. No menu do Admin, clique em __Integrações__.
2. Clique em __Configurações__.
3. Na opção do Google Shopping, clique em __Integrar__.

Neste formulário de configuração, é necessário fornecer o código do seu Merchant Center, escolher a Política Comercial desejada, um e-mail para criação do afiliado Google Shopping no Gerenciamento de Pedidos. Também é possível habilitar/desabilitar a integração ao clicar nos botões **Ativada**/**Desativada**

É no modulo Integrações também que o lojista escolhe a opção de enviar preço promocional ou não. Por default essa flag vem ativada, mas caso a loja não deseje enviar os produtos com os valores promocionais ela possui essa opção de deixar inativo. 

E o ID da conta do merchant caso seja multi-client (esse campo deve ser preenchido com o ID da sub-conta relacionada ao merchant).

OBS: Se a loja notar que os produtos estão divergindo de preço ou que usa schema de dados de atualização automática e não quer desativar (deseja trabalhar com as duas opções, integracao + atualização automática do Google Shopping), ela pode, contanto que o preço promocional esteja contido na tag dos updates automáticos. E se não quiser, pode desativar no Integrações.

## Autorizar a integração

O próximo passo é autorizar a VTEX a ter acesso ao seu Merchant Center e enviar seus produtos. Antes de tudo, faça login no Google Merchant Center com o usuário master\* lá existente.

\*Para saber qual é o e-mail master do Google Shopping, atente-se que ele é o único que permite gerenciar usuários.

Feito isso, no Integrações clique em **Autorização** e depois no botão **Desejo me autenticar**. Você será direcionado a uma página do Google para conceder o acesso para a VTEX utilizar as APIs do Merchant. Clique em **Permitir**.

Uma notificação aparecerá na tela dizendo que o "acesso for concedido com sucesso". 

Após seguir todos esses passos, sua loja está pronta para enviar os produtos para o Google Shopping. O envio dos produtos acontece automaticamente após a autorização ser feita.

## Considerações

#### Produtos enviados
Na integração atual, **todos** os produtos disponíveis na política comercial serão enviados ao Google Shopping, não havendo possibilidade de filtrar por coleção nesse momento. Este é um recurso futuro, que está em nosso backlog.

#### Preço enviado
É enviado o preço definido na política comercia vinculada ao Google Shopping. Se existir preço de oferta (De/por), será enviado o preço "por". Se existir promoção de desconto à vista (promoção condicionada ao método de **pagamento boleto**), esse beneficio será aplicado ao valor do produto antes do envio.

#### Preço quando há vários sellers
No caso de marketplace, sempre enviamos a melhor oferta entre os sellers disponíveis.

#### Resolução da imagem
Será enviada a maior resolução disponível para o produto, conforme arquivo que foi feito upload no cadastro.

#### EAN/GTIN
O GTIN é tratado. Se o produto tem EAN, nós enviamos, e se o EAN for inválido, o erro será exibido no Integrações como "EAN invalido =  GoogleShopping bad request".

#### Tamanho da descrição
Respeitamos o limite de descrição de produto do Google Shopping, enviando o máximo de 5 mil caracteres.

#### Outras integrações
Não se deve utilizar duas integrações com o Google Shopping ativas ao mesmo tempo. Optando por utilizar a nossa integração por API somente ela deve estar ativa, desabilitando o XML, por exemplo.

#### URL do site
No console do Google Merchant você deve preencher a URL exata do site, se atentando à existência de WWW ou não, e ao uso de HTTP ou HTTPS. Os links são construidos a partir desses dados, e caso a informação estiver incorreta os redirecionamentos não serão contabilizados corretamente pelo Google Analytics.

#### Expiração de produtos
O Google faz com que os produtos enviados expirem automaticamente após 30 dias se não sofrerem nenhuma atualização (isto inclui qualquer alteração no produto, seja ela de preço, estoque, ou especificação). 

#### Tamanho do título
O limite é de 150  caracteres, mas os anúncios do Google só exibem 70 caracteres de qualquer maneira ([entenda mais aqui](https://support.google.com/merchants/answer/6098378?hl=pt)). A integração envia até 150 caracteres que é composto por Título do Produto + Título do SKU.

>⚠️ **Atenção:** A integração por XML não foi descontinuada, porém se a integração for feita por XML e pelo módulo de Integrações (API) os produtos aparecerão duplicados.

