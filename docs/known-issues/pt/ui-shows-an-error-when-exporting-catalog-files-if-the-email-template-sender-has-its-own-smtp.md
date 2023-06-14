---
title: 'UI mostra um erro ao exportar arquivos de catálogo se o remetente do modelo de e-mail tiver seu próprio SMTP'
id: 6MCsAvrOHbLTYjuxRHDsuU
status: PUBLISHED
createdAt: 2023-03-15T19:04:48.152Z
updatedAt: 2023-03-15T19:04:59.595Z
publishedAt: 2023-03-15T19:04:59.595Z
firstPublishedAt: 2023-03-15T19:04:48.719Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: ui-mostra-um-erro-ao-exportar-arquivos-de-catalogo-se-o-remetente-do-modelo-de-email-tiver-seu-proprio-smtp
kiStatus: Backlog
internalReference: 771942
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Ao exportar dados de catálogo usando o módulo "Import and Export", a IU mostrará a seguinte mensagem: "Houve um problema inesperado: Ocorreu um erro: Erro no envio de e-mail para conta (nome da conta)" indicando que houve um erro no envio do arquivo para o e-mail do usuário. Entretanto, o e-mail é enviado corretamente junto com o documento de exportação.

Este comportamento só acontece quando o remetente registrado no módulo "Emails Templates" tem suas próprias configurações SMTP.


##

## Simulação



1-Registar um remetente válido com seu próprio fornecedor nas configurações do Centro de Mensagens.
2 - Configure este remetente no modelo "Exportar" do Centro de Mensagens.
3-Tente exportar quaisquer dados de catálogo do módulo "Importar e Exportar".
4-Observe se a mensagem "Houve um problema inesperado": Ocorreu um erro: Erro para enviar e-mail para conta (nome da conta)" será mostrado.
5- Ao acessar sua caixa de e-mail, você verá que o arquivo chegou corretamente.


##

## Workaround



Use o remetente VTEX em vez de usar um SMTP próprio.





