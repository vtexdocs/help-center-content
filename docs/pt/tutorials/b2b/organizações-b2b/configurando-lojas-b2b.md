---
title: 'Configurando lojas B2B'
id: 7riBcnrOv4Cz7qMeACyVLm
status: PUBLISHED
createdAt: 2023-10-11T15:17:39.003Z
updatedAt: 2025-08-14T15:51:14.997Z
publishedAt: 2025-08-14T15:51:14.997Z
firstPublishedAt: 2023-10-19T13:27:04.087Z
contentType: tutorial
productTeam: B2B
author: 5l3eEiSz8MpcppCxcnijGz
slugEN: b2b-store-settings
legacySlug: configurando-lojas-b2b
locale: pt
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---

Esta página permite definir o comportamento da loja B2B com relação à aprovação de organizações, à experiência do usuário durante navegação entre empresas, e aos vínculos comerciais ativos.

Para acessar as configurações de sua loja B2B, siga os passos a seguir:

1. No Admin VTEX acesse, Aplicativos > Organizações e centros de custo B2B > Organizações, ou digite Organizações na barra de busca no topo da página.
2. Na página de Organizações, clique em Configurações.

Nesta página, é possível realizar as seguintes ações.
- Definir aprovação de novas organizações
- Associar políticas comerciais à loja
- Remover política comercial da loja

## Definir aprovação de novas organizações

    - Aprovar automaticamente novas organizações: quando habilitada, todas as organizações recém-criadas serão aprovadas automaticamente.
Quando essa opção estiver desabilitada, é possível configurar a barra superior de notificação para informar que a organização ainda não está aprovada.

Após configurar a aprovação de organizações, personalize a barra superior exibida aos compradores.

### Personalizar a barra superior da loja
- Cor da barra superior: define a cor de fundo da barra que será exibida no topo da tela. A cor deve ser informada em código hexadecimal (ex.: #656896).
- Mensagem: texto informativo que será exibido dentro da barra.

> ℹ️ Caso nenhum texto seja inserido no campo de **Mensagem**, será exibido automaticamente um texto padrão.

### Aplicar restrições de edição
- Ativar modo de somente leitura para o CNPJ: impede a edição do campo de CNPJ por parte do comprador.
- Ativar modo de somente leitura para a inscrição estadual: impede a edição do campo de inscrição estadual.

### Configurar o comportamento de navegação
- Usar modal para trocar de organização: ativa uma janela modal que aparece na interface do usuário, permitindo que ele selecione outra organização compradora sem sair da página atual.
- Limpar carrinho ao trocar de empresa ou fazer login: remove os itens do carrinho sempre que o usuário alternar entre organizações ou realizar o login.
- Permitir a seleção de organização e centro de custo durante a personificação: habilita o controle direto desses campos ao atuar como outro usuário no ambiente da loja.

Após realizar qualquer alteração nas seções acima, clique em `Salvar` no canto superior direito da página para que as mudanças sejam aplicadas corretamente.

## Associar políticas comerciais à loja
Esta seção permite associar a loja a [políticas comerciais](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) específicas.

Veja como fazer essa associação:

1. Na página de **Configurações da loja**, localize a seção **Vínculos**.
2. Na coluna **Vínculos disponíveis**, selecione a caixa correspondente à política desejada.
3. Clique em `Adicionar ao vínculo` para mover a política para a lista de Vínculos selecionados.

## Remover política comercial da loja
Para desvincular uma política comercial da loja, siga os passos abaixo:

1. Na página de **Configurações da loja**, localize a seção Vínculos selecionados.
2. Marque a caixa correspondente à política que deseja remover.
3. Clique em `Remover do vínculo` para excluí-la da lista.

Após concluir a associação ou remoção de políticas comerciais, clique em `Salvar`, localizado no canto superior direito da página, para confirmar e aplicar todas as alterações realizadas.
