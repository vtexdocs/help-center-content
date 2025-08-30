---
title: 'Novos campos obrigatórios para emissão de notas fiscais'
id: 5jDozNwc272jtq92dvKQkq
status: PUBLISHED
createdAt: 2025-08-29T23:29:00.226Z
updatedAt: 2025-08-29T23:46:47.127Z
publishedAt: 2025-08-29T23:46:47.127Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: 2025-08-29-new-mandatory-fields-for-invoice-issuance
locale: pt
legacySlug: novos-campos-obrigatorios-para-emissao-de-notas-fiscais
announcementImageID: 'undefined'
announcementSynopsisPT: 'Novos campos fiscais na Orders API garantem conformidade com a NT 2025.001 e evitam rejeição de NF-e.'
---

A NT 2025.001 é uma Nota Técnica que detalha mudanças nos documentos fiscais eletrônicos no Brasil (NF-e, NFC-e, CT-e, MDF-e.) em função da Reforma Tributária.
Por isso a VTEX implementou novos campos que serão utilizados pelos sistemas de geração de Nota Fiscal.

> ℹ️ Acesse a [nota técnica completa](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=trSXReoZPuY=).

## O que mudou?

A VTEX passou a disponibilizar novos campos nos pedidos para atender às exigências da NT 2025.001. Esses campos são obrigatórios para a emissão de notas fiscais e garantem que não haja rejeição durante o processo. Agora, os pedidos incluem:

- Meio de pagamento utilizado 
- CNPJ da credenciadora (empresa responsável pelo processamento do pagamento)
- Código de autenticação/autorização da operação
- Bandeira do cartão de crédito ou débito (quando aplicável)

Você pode consultar o [release note](https://developers.vtex.com/updates/release-notes/2025-08-29-orders-api-support-for-nt-2025-001-fields) para conferir as adequações feitas pela VTEX no endpoint [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-).

### Responsabilidade compartilhada para marketplaces

A VTEX já está preparada para receber esses novos campos. No entanto, se o marketplace ainda não tiver disponibilizado essas informações, a nota fiscal poderá ser rejeitada.

Acompanhe na tabela abaixo o status de cada integração:

| Marketplace        | API disponibilizada | Data disponível VTEX | Status |
|--------------------|---------------------|----------------------|--------|
| Amazon             | 28/08/2025 (FBAOS) e 01/09/2025  (MFN) | 01/09/2025 | Em desenvolvimento (fase de publicação) |
| Mercado Livre      | 01/09/2025 | Sem data definida | Aguardando marketplace |
| Shopee             | 27/08/2025 | 29/08/2025 | Em desenvolvimento |
| Dafiti             | Cartão: 26/08/2025 / PIX: não disponível | Cartão: 28/08/2025 / PIX: TBD | Cartão: disponível / PIX: aguardando marketplace |
| Magalu             | 15/09/2025 (nova API) | 15/09/2025 | Aguardando marketplace |
| Netshoes           | Previsão 01/09/2025 | Sem data definida | Aguardando marketplace |
| Centauro           | Não disponível | Sem data definida | Aguardando marketplace |
| Grupo CasasBahia   | Não disponível | Sem data definida | Aguardando marketplace |
| Carrefour          | Não disponível | Sem data definida | Aguardando marketplace |
| Americanas (B2W)   | Não disponível | Sem data definida | Aguardando marketplace |
| Zoom               | Não disponível | Sem data definida | Aguardando marketplace |
| Livelo             | Não disponível | Sem data definida | Aguardando marketplace |
| Posthaus           | Não disponível | Sem data definida | Aguardando marketplace |
| Kabum              | Não disponível | Sem data definida | Aguardando marketplace |  

<div class=”alert alert-warning”>
Os marketplaces que não estão listados acima não têm suas integrações controladas pela VTEX. Nesses casos, é necessário contatar diretamente o integrador responsável.  
</div>

## O que precisa ser feito?  
Verifique com seu integrador ou marketplace se os campos exigidos pela NT 2025.001 estão sendo enviados. Confirme que as integrações com seus ERPs ou emissores fiscais já conseguem consumir os novos `customApps`.  

Em caso de dúvidas, entre em contato com o [Suporte VTEX](https://support.vtex.com/).  

