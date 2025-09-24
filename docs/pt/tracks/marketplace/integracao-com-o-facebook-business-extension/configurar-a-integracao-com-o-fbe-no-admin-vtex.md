---
title: 'Configurar a integração com o FBE no Admin VTEX'
id: jUtgjBDumr5oGWIU7mVLC
status: PUBLISHED
createdAt: 2021-09-30T16:07:29.101Z
updatedAt: 2024-04-17T14:57:04.600Z
publishedAt: 2024-04-17T14:57:04.600Z
firstPublishedAt: 2021-09-30T18:49:18.739Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-integration-with-fbe-in-the-vtex-admin
locale: pt
trackId: 2hS3ANSZ7vlHCcba4h7k8D
trackSlugEN: integracao-com-o-facebook-business-extension
order: 4
---

Com a app _Facebook Business Extension e Conversions API_ instalada, será possível identificar um novo campo no seu Admin VTEX. No módulo **MARKETPLACE**, haverá a opção **Facebook**. Pode ser necessário atualizar a página do seu Admin VTEX para a opção ficar visível.

Para dar início à configuração da integração, realize os seguintes passos:

1. No seu Admin VTEX, no módulo _MARKETPLACE_, clique em `Facebook`.
2. Por padrão, os campos sobre **região e moeda**, e **URL** da sua loja VTEX estarão preenchidos. Confira as informações e, se necessário, faça alterações.
3. A menos que você possua uma implementação customizada do Facebook Pixel, mantenha ativada a opção _Habilitar integração de Pixel_.

  > ℹ️ Independente de você ter instalado a <a href= "https://apps.vtex.com/vtex-facebook-pixel/p">app Facebook Pixel</a>, a recomendação é que a opção **Habilitar integração de Pixel** permaneça ativada. A exceção é quando já se utiliza o Gerenciador de Tags do Google. Mais informações em <a href= "/pt/tracks/integracao-com-o-facebook-business-extension--2hS3ANSZ7vlHCcba4h7k8D/434Z1iWnaa0zbOMDyr6oi#pixel-do-facebook">Pixel do Facebook</a>.

4. Clique em `CONTINUAR COM O FACEBOOK`.
5. A tela seguinte solicita sua conta no Facebook. Preencha com seus dados e clique em `Entrar`. Se você tiver a [integração com o Facebook](/pt/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc) configurada, seus dados já estarão salvos.
6. Na nova tela, conceda as permissões necessárias à integração, clicando em `Continuar`.
7. Determine quais configurações serão utilizadas na integração.
8. Em seguida, clique em `Continuar`.
9. Escolha quais permissões devem ser conferidas à VTEX na integração.

  > ❗ Para que a integração funcione corretamente, o recomendável é conceder todas as permissões apresentadas. Por padrão, elas aparecem como habilitadas.

10. Clique em `Avançar`.
11. Na janela aberta, aparecerá uma confirmação de que a integração foi realizada. Clique em `Concluir`.

![gif pt v1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/integracao-com-o-facebook-business-extension/configurar-a-integracao-com-o-fbe-no-admin-vtex_1.gif)

## Envio de dados dos produtos para o Facebook Business Extension

Com a integração realizada, o envio de produtos para o Facebook é um processo automático. Os dados enviados são:

- Nome de exibição do produto
- Imagem
- Categoria
- Preço
- Moeda
- Descrição
- Marca
- Condição do Produto
- Disponibilidade

Quando é feita uma modificação em qualquer uma dessas informações, a atualização no ambiente do FBE é feita de forma automática. 

Para acrescentar atributos aos produtos enviados, a alteração dos dados deve ser feita no próprio ambiente do Facebook, utilizando a plataforma [Gerenciador de Comércio](https://www.facebook.com/business/help/2371372636254534?locale=pt_BR) (_Commerce Manager_).
