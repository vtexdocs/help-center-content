---
title: "A API REST da marca do catálogo permite que o cliente quebre as informações se enviar uma solicitação com valores incorretos"
id: 6yIs7KNTiS1oghcobXNnVD
status: PUBLISHED
createdAt: 2024-10-30T18:59:26.880Z
updatedAt: 2024-10-31T12:51:32.710Z
publishedAt: 2024-10-31T12:51:32.710Z
firstPublishedAt: 2024-10-30T19:20:04.320Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-api-rest-da-marca-do-catalogo-permite-que-o-cliente-quebre-as-informacoes-se-enviar-uma-solicitacao-com-valores-incorretos
locale: pt
kiStatus: Backlog
internalReference: 1126473
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Há muitas rotas que suportam algum tipo de valor, mas se o cliente usar outro tipo de valor (por exemplo, inserir nulo em vez de booleano) pode quebrar a interface do produto / SKU / categoria / marca. Negar ao cliente a atualização das informações por meio do administrador.


## Simulação


Para as rotas `api/catalog/pvt/brand?an=`ou` /api/catalog/pvt/brand/?an=`, a documentação diz que o campo `MenuHome` só aceita valores booleanos. Mas se enviarmos uma solicitação com "null", por exemplo, a rota retornará um 200 e poderemos inserir esse valor. Depois disso, se tentarmos editar a marca na interface de administração, não será possível. Ele retornará um erro Something Went Wrong (Algo deu errado) com a mensagem `exception_message="Object cannot be cast from DBNull to other types."`

## Workaround


Atualize as informações novamente, por meio da API.






