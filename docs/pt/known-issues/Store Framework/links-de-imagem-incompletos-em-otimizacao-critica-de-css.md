---
title: 'Links de imagem incompletos em otimização crítica de CSS'
id: 1965M3rMbB30pTOCiMMxXj
status: PUBLISHED
createdAt: 2024-10-02T17:52:53.482Z
updatedAt: 2024-10-02T17:53:09.426Z
publishedAt: 2024-10-02T17:53:09.426Z
firstPublishedAt: 2024-10-02T17:52:54.232Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: incomplete-image-links-in-critical-css-optimization
locale: pt
kiStatus: Backlog
internalReference: 1110160
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o recurso de otimização crítica de CSS está ativado nas lojas do Store Framework, os links de imagem adicionados via CSS são inseridos apenas com o caminho (path) e não com o URL completo. Isso pode levar a erros 404 quando se tenta acessar esses links por meio do URL do site.

## Simulação



- Acesse uma loja que usa o Store Framework.
- Ative o recurso de otimização crítica de CSS nas configurações.
- Adicione imagens via CSS usando links completos.
- Verifique o arquivo CSS gerado e observe que os links de imagem aparecem apenas com o caminho, sem o domínio completo.



## Workaround


Atualmente, não há solução alternativa para esse bug. Recomenda-se evitar o uso de imagens via CSS devido a vários motivos, inclusive implicações de SEO e preocupações com acessibilidade. Em vez disso, os usuários devem adicionar imagens usando blocos de imagens. Para ícones, é recomendável usar o método fornecido aqui para garantir a renderização adequada e a conformidade com SEO.





