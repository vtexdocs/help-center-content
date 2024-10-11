---
title: 'Open/close modal hook affects all modals on the page'
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
slugEN: openclose-modal-hook-affects-all-modals-on-the-page
locale: en
kiStatus: Backlog
internalReference: 1042165
---

## Summary


On opening/closing a modal the action affects all the modals of the page


##

## Simulation


Try opening a modal on a page with more than one
Look for the other modals, you'll see the behavior will be the same


##

## Workaround


You can use a customized state instead of the native one. Here is an example:

     import { useState } from "react";import { Modal, ModalHeader, ModalBody, LinkButton, Icon } from "@faststore/ui";import ModalContent from "./ModalContent";import section from "./styles.module.scss";const ModalSelector = () => {const [showModal, setShowModal] = useState(false);const ToggleModal = () => {setShowModal((showModal) => !showModal);};return (} > Delivery {showModal && ( <> )});};export default ModalSelector;





