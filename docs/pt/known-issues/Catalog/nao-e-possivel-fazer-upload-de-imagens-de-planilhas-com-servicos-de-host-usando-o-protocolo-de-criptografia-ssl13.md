---
title: "Não é possível fazer upload de imagens de planilhas com serviços de host usando o protocolo de criptografia SSL1.3"
id: sqoXJSms7bhmdNe0Id111
status: PUBLISHED
createdAt: 2023-06-28T12:23:54.884Z
updatedAt: 2023-06-28T12:25:18.545Z
publishedAt: 2023-06-28T12:25:18.545Z
firstPublishedAt: 2023-06-28T12:23:55.364Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: nao-e-possivel-fazer-upload-de-imagens-de-planilhas-com-servicos-de-host-usando-o-protocolo-de-criptografia-ssl13
locale: pt
kiStatus: Backlog
internalReference: 851911
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o host de imagens da planilha usa um protocolo de criptografia SSL1.3, aparece um erro ao tentar carregar a planilha:

"Falha ao processar o registro. Verifique se os dados da planilha estão consistentes e tente novamente. Detalhes do erro: Ocorreu um erro ao enviar a solicitação."

Esse erro ocorre porque nosso serviço do Windows só permite versões mais antigas, como 1.2 ou 1.1.


## Simulação



1. Use um host com uma versão de protocolo mais recente;
2. Tente carregar uma imagem, usando a planilha eletrônica, que está hospedada lá;
3. Verifique se a mensagem de erro é exibida

## Workaround


Use um host diferente ou valide com o host para usar uma versão mais antiga.





