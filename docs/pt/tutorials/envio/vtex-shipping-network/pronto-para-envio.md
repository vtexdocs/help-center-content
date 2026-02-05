---
title: 'VTEX Shipping Network: Pronto para envio'
id: 5YOZV7Aotv3pap0fGNESDs
status: PUBLISHED
createdAt: 2021-11-11T20:13:17.128Z
updatedAt: 2024-02-29T19:44:25.837Z
publishedAt: 2024-02-29T19:44:25.837Z
firstPublishedAt: 2021-11-11T20:44:13.846Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: ready-to-dispatch
legacySlug: pronto-para-envio
locale: pt
subcategoryId: 5n5MnINzWTQUX1I2EZl4Ib
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Caso tenha interesse em adotar essa funcionalidade no seu negócio, acesse o site [VTEX Shipping Network](https://vtex.com/br-pt/shipping-network/).

> ⚠️ O [VTEX Shipping Network Correios](/pt/docs/tutorials/vtex-shipping-network-correios-faq) integra sua operação com os serviços PAC e SEDEX do contrato VTEX junto aos Correios, e o [VTEX Shipping Network](https://vtex.com/br-pt/shipping-network/) integra a sua operação com os Correios e outras transportadoras. Com ambas as soluções você pode usar as funcionalidades:<ul><li>[Painel VTEX Shipping Network](/pt/docs/tutorials/painel-vtex-shipping-network)</li><li>[Entregas Correios](/pt/docs/tutorials/entregas-correios-vtex-shipping-network)</li><li>Pronto para envio</li></ul>

Quando um pedido está pronto para o envio e com a nota fiscal inserida na plataforma ([faturado](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT)), a loja providencia a etiqueta de envio e notifica a transportadora que o envio deve ser feito.

Para gerar etiquetas padronizadas e notificar as transportadoras do envio automaticamente, o [VTEX Shipping Network](https://vtex.com/br-pt/shipping-network/) tem a funcionalidade **Pronto para envio**.

> ℹ️ Além de emitir etiquetas de envio pelo Admin VTEX com a funcionalidade **Pronto para envio**, você pode fazer isso por API conectada diretamente ao seu ERP. Saiba  mais na nossa documentação para desenvolvedores [VTEX Shipping Network Labels Integration](https://developers.vtex.com/docs/guides/vtex-shipping-network-labels-integration).

O sistema da VTEX identifica o número de pacotes de um pedido de acordo com o número de notas fiscais desse pedido, de forma que o número de etiquetas que o lojista pode imprimir para cada pedido corresponde ao número de notas fiscais. 

> **Exemplo:** para imprimir três etiquetas para três pacotes (volumes) de um pedido, o lojista precisa ter três notas fiscais. 

Para emitir etiquetas pelo seu Admin VTEX, acesse **Envio > Pronto para envio**, ou digite *Pronto para envio* na barra de busca no topo da página. Você pode realizar as seguintes ações nesta página:

* Imprimir uma nova etiqueta de envio, na aba [Pronto para etiquetar](#pronto-para-etiquetar).
* Acessar etiquetas impressas previamente, na aba [Pacotes enviados](#pacotes-enviados).

> ℹ️ O pedido só aparecerá em **Pronto para envio** após o [status](/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#tabela-de-status-de-pedidos) *faturado*. Não é possível gerar a etiqueta de um pedido não faturado.

## Aba Pronto para etiquetar 

Em **Pronto para envio**, na aba `Pronto para etiquetar`, você vai encontrar as etiquetas disponíveis para impressão, com todos os pacotes que estão prontos para serem enviados.

Para buscar por pedidos específicos, você pode:

* Utilizar a barra de pesquisa. 
* Utilizar os seguintes filtros:
    * **Data:** data em que a fatura foi inserida no pedido.
    * **Origem:** seller relacionado ao pedido.
    * **Transportadora:** a [transportadora](/pt/docs/tutorials/transportadoras-na-vtex), ou seja, a empresa responsável pelo envio dos pacotes do pedido.

A busca exibe apenas os pacotes que ainda não foram enviados, e eles estão organizados por:

* **ID do pedido:** código identificador do pedido na VTEX.
* **Data da fatura:** data da emissão da fatura associada ao pacote.
* **Data da criação:** data em que o pedido foi criado.
* **Cidade/UF:** localidade de envio do pacote.
* **Origem:** loja onde o pedido foi realizado (se um marketplace ou a própria loja).
* **ID da fatura:** código de identificação da fatura associada ao pacote.
* **Itens:** quantidade de itens do pacote.
* **Transportadora:** empresa responsável pela envio.

Você pode organizar a lista de pacotes de duas formas, clicando nas opções ao lado de _Ordenar por_:
* `Data da criação`: ordena pela data em que os pedidos foram criados.
* `Data da fatura`: ordena pela data em que as notas fiscais foram criadas.

> ⚠️ O **Pronto para envio** emite etiquetas para todos os [pedidos faturados](/pt/docs/tutorials/faturar-um-pedido-manualmente) no Admin VTEX cujos itens foram referenciados na nota fiscal, seja via API no ERP ou manualmente. No entanto, apenas as etiquetas de transportadoras vinculadas ao **VTEX Shipping Network** possuem layout e rastreabilidade válidos via API.

### Impressão de etiquetas

A funcionalidade **Pronto para envio** permite imprimir algumas etiquetas específicas ou todas as etiquetas disponíveis para impressão na sua loja.

Para imprimir etiquetas específicas e notificar as transportadoras encarregadas do envio, realize os passos a seguir: 

1. No Admin VTEX, acesse **Envio > Pronto para envio**, ou digite *Pronto para envio* na barra de busca no topo da página.
2. Na aba `Pronto para etiquetar`, marque a caixa de seleção <i class="far fa-check-square"></i> dos pacotes desejados.
    > Se você deseja selecionar todas as opções, marque a caixa da coluna _ID do pedido_.
3. Clique em `ENVIAR PACOTES`.
4. Uma nova janela vai abrir, com o número total de pacotes e transportadoras por envio. Ao lado de cada transportadora estará o número de pacotes que ela deverá entregar. Confira as informações.
5. Clique em `ENVIAR`.
6. A janela **Gerenciar arquivos** e download das etiquetas é iniciado.
7. Confira as etiquetas nos arquivos baixados no dispositivo. 

As transportadoras são notificadas quando é feito o download das etiquetas. 

![etiquetas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-shipping-network/pronto-para-envio_1.png)

> ❗ Em caso de erros ou dúvidas, entre em contato diretamente com o suporte do **VTEX Shipping Network** através do email vtexlog@vtex.com.br.

### Alterar o tipo do tamanho das etiquetas

No Admin VTEX, é possível alterar o formato das dimensões da etiqueta e escolher entre `A4` (297x210mm) ou `ZPL` (Zebra Programming Language). Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Aplicativos > Aplicativos > Meus aplicativos** e procure pelo termo _correios_ na barra de busca. Observe a grafia exata, pois a palavra _correios_ deve começar com letra minúscula.
2. Clique na opção `Correios - Labels`.
3. Clique em <i class="fas fa-cog" alt="engrenagem azul"></i> `Configurações`.
4. No campo **Configurações**, defina qual o formato desejado:
    * `a4` (297x210mm)
    * `zpl` (_Zebra Programming Language_)
5. Clique em `Salvar`.

Feito isso, você terá alterado o tipo das dimensões das etiquetas.

## Aba Pacotes enviados

No seu Admin VTEX, em **Envio > Pronto para envio**, a aba `Pacotes enviados` disponibiliza a consulta de pacotes que já tiveram as etiquetas de envio baixadas. Além disso, você pode reimprimir as etiquetas e _Notfis_.

> ℹ️ *Notfis* é o arquivo da mensagem usada na comunicação entre a sua loja e a transportadora. Esse arquivo contém os dados das notas fiscais dos pacotes enviados. Quando uma transportadora não é integrada ao **VTEX Shipping Network**, apenas o arquivo *notfis* fica disponível para download.

Na aba `Pacotes enviados`, para buscar por pedidos na lista de pacotes com etiquetas baixadas, você pode:

* Utilizar a barra de pesquisa. 
* Utilizar os seguintes filtros:
    * **Data:** data em que a fatura foi inserida no pedido.
    * **Origem:** seller relacionado ao pedido.
    * **Transportadora:** a [transportadora](/pt/docs/tutorials/transportadoras-na-vtex), ou seja, a empresa responsável pelo envio dos pacotes do pedido.

A lista tem as seguintes colunas:

* **ID do pedido:** código de identificação do pedido na VTEX.
* **Data da fatura:** data de inclusão da fatura no pedido.
* **Data da Etiquetagem:** data da primeira impressão da etiqueta de envio.
* **Cidade/UF:** localidade de entrega do pedido.
* **Origem:** onde o pedido foi realizado (se em um marketplace ou na própria loja).
* **ID da fatura:** código de identificação da nota fiscal do pacote.
* **Itens:** quantidade de itens do pacote.
* **Transportadora:** empresa responsável pelo envio.

Você pode organizar a lista de pacotes de duas formas, clicando nas opções ao lado de _Ordenar por_:
* `Data da Etiquetagem`: ordena para ordenar pela data da impressão da etiqueta.
* `Data da fatura`: ordena pela data da emissão da nota fiscal.

### Reimpressão de etiquetas

Para baixar novamente as etiquetas e notfis, realize os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pronto para envio**, ou digite *Pronto para envio* na barra de busca no topo da página.
2. Na aba `Pacotes enviados`, na linha do pacote desejado, clique em menu <i class="fas fa-ellipsis-v"></i> e selecione a opção desejada:
    * Reimprimir etiquetas
    * Baixar arquivos notfis
3. Confira o arquivo baixado.

## Saiba mais

* [VTEX Shipping Network: Entregas Correios](/pt/docs/tutorials/entregas-correios-vtex-shipping-network)
* [VTEX Shipping Network: Painel](/pt/docs/tutorials/painel-vtex-shipping-network)
* [VTEX Shipping Network Correios: FAQ](/pt/docs/tutorials/vtex-shipping-network-correios-faq)
