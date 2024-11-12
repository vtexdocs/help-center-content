---
title: 'Incapaz de pausar o vendedor'
id: 4s4VLWa93cnfOhf8faOXjU
status: PUBLISHED
createdAt: 2022-10-20T18:31:59.458Z
updatedAt: 2023-05-11T16:54:08.548Z
publishedAt: 2023-05-11T16:54:08.548Z
firstPublishedAt: 2022-10-20T18:32:00.462Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: unable-to-pause-seller
locale: pt
kiStatus: Fixed
internalReference: 682151
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Às vezes o mercado não consegue fazer uma pausa no vendedor via admin ou via API.

A mensagem de erro é genérica via UI. Entretanto, se o erro via API for:
{
"erro": "Canal inválido",
"dados": {
    "código": "SRAPI-408": "SRAPI-408": "CÓDIGO
}
}

Então o erro está acontecendo porque a validação da afiliação (validação do canal) está falhando.

Se o vendedor apagar o afiliado (ou mudar a identificação do afiliado) de seu lado, o mercado não será capaz de fazer uma pausa no vendedor.



## Simulação


1. Na conta do vendedor, eliminar a afiliada do mercado;
2. Na conta do mercado, tentar pausar o vendedor na conta Admin;
3. Verifique se foi enviada uma mensagem de erro genérica.
4. Tente pausar o mesmo vendedor usando a API de atualização do vendedor;
5. Verifique se a mensagem de erro é similar/igual ao erro acima;


## Workaround


A fim de poder pausar o vendedor, existem 3 soluções:

1. Eliminar as informações sobre a seção do vendedor chamada "Integração" na IU ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
2. Peça ao vendedor para criar novamente o afiliado como era antes e depois disso pausar o vendedor. (depois que o vendedor puder apagar o afiliado novamente);
3. Use a antiga interface de administração do vendedor para prosseguir com esta ação: www.myaccount.myvtex.com/admin/site/seller.aspx

