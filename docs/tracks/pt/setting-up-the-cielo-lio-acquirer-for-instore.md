---
title: Configurar o adquirente Cielo LIO para o inStore
id: 2X8bWpsWGOLOCToLZSbUkA
status: DRAFT
createdAt: 2020-06-28T15:28:38.682Z
updatedAt: 2021-02-23T15:47:34.391Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:30:26.705Z
contentType: trackArticle
productTeam: Shopping
slug: configurar-o-adquirente-cielo-lio-para-o-instore
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugPT: configurar-o-adquirente-cielo-lio-para-o-instore
---

Para permitir transações por meio de máquinas de cartão usando o inStore, você precisa de um adquirente ou sub-adquirente que processe seus pagamentos.

A __Cielo LIO__ é um adquirente homologado pelo inStore no Brasil.

<div class="alert alert-warning">
Se você deseja usar a Cielo LIO em um país diferente ou se deseja usar outro adquirente que atualmente não é homologado, precisará criar a integração com o aplicativo desse adquirente. Para fazer isso, consulte o artigo <a href="https://help.vtex.com/pt/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod"> Integrar o inStore a um novo adquirente de pagamento</a>.
</div>

<div class="alert alert-info">
Atualmente, a Cielo LIO é suportada apenas pelos sistemas Android. Você pode usar a CieloLio V2 ou a CieloLio+.
</div>

Antes de instalar o aplicativo da Cielo LIO, verifique se você concluiu a etapa anterior da configuração do módulo de Pagamentos. Se tiver concluído, siga as etapas abaixo para instalar e configurar o adquirente Cielo LIO para o inStore.

Para mais informações sobre a Cielo LIO, visite o [site da Cielo](https://www.cielo.com.br/comprar-maquina-de-cartao).

## Detalhes das configurações

Para disponibilizar o inStore na Cielo LIO, é necessário abrir um ticket para a Cielo solicitando a associação de sua máquina à sua loja VTEX, bem como o envio do aplicativo `UriAppClient`, passando o número do seu estabelecimento comercial (EC) e o da LIO.

Durante o fluxo de configuração no módulo de Pagamentos da VTEX, mantenha atenção aos seguintes detalhes:

1. Os campos `Access Token` e `Client ID` devem ser preenchidos com os dados que você obtém diretamente da VTEX.
2. Atenção ao `Tipo de parcelamento` selecionado. Ele deve estar de acordo com o configurado em sua Cielo LIO. Se você não souber qual opção foi contratada, simule uma venda na LIO (usando o sistema padrão da máquina, fora do inStore) e selecione a opção Crédito, que listará as opções de parcelamento disponíveis (Administrador, Lojista ou Banco) na sua máquina. Certifique-se que a opção ativa na máquina seja a mesma configurada no módulo de Pagamentos da VTEX.
