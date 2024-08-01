---
title: 'El gancho para abrir/cerrar modales afecta a todos los modales de la página'
id: l1G3HN5Y3LxYVzuMnhjkL
status: PUBLISHED
createdAt: 2024-05-31T19:16:13.601Z
updatedAt: 2024-06-04T12:14:19.271Z
publishedAt: 2024-06-04T12:14:19.271Z
firstPublishedAt: 2024-05-31T19:16:14.596Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: el-gancho-para-abrircerrar-modales-afecta-a-todos-los-modales-de-la-pagina
locale: es
kiStatus: Backlog
internalReference: 1042165
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al abrir/cerrar un modal la acción afecta a todos los modales de la página


##

## Simulación


Prueba a abrir un modal en una página con más de uno
Busca los otros modales, verás que el comportamiento será el mismo



## Workaround


Puedes usar un estado personalizado en lugar del nativo. Aquí tienes un ejemplo:

     import { useState } from "react";import { Modal, ModalHeader, ModalBody, LinkButton, Icon } from "@faststore/ui";import ModalContent from "./ModalContent";import section from "./styles.module.scss";const ModalSelector = () => {const [showModal, setShowModal] = useState(false);const ToggleModal = () => {setShowModal((showModal) => !showModal);};return (} > Entrega {showModal && ( <> )});};export default ModalSelector;





