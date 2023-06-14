---
title: 'Botão Salvar desativado ao modificar sinônimos de pesquisa importados'
id: 1nb1JboRv5YuLyAT50YcYx
status: PUBLISHED
createdAt: 2022-04-27T14:50:02.276Z
updatedAt: 2022-11-25T21:57:47.416Z
publishedAt: 2022-11-25T21:57:47.416Z
firstPublishedAt: 2022-04-27T14:50:02.697Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: botao-salvar-desativado-ao-modificar-sinonimos-de-pesquisa-importados
kiStatus: Backlog
internalReference: 508893
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao tentar fazer qualquer mudança em uma configuração de sinônimo que era anteriormente importada por um arquivo csv, o botão salvar é sempre desativado, não importando a mudança:

 ![](https://vtexhelp.zendesk.com/attachments/token/brdXbHb75jSVJae7gJcCY8QVH/?name=inline1786590037.png)

Isto está acontecendo porque ao importar um arquivo, as informações locais não estão sendo automaticamente preenchidas, conforme o exemplo abaixo:

 ![](https://vtexhelp.zendesk.com/attachments/token/2CvsG56Jprt18bNjvIU8Mt07m/?name=inline-2007024263.png)



## Simulação


Importe um arquivo csv contendo um sinônimo, tente modificar qualquer informação do sinônimo carregado em admin e veja que você não está autorizado a salvar.



## Workaround


Eliminar o sinônimo importado e criar o mesmo manualmente.

