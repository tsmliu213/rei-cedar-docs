---
{
  "title": "Modal",
  "layout_type": "LayoutComponent",
  "summary": "Disruptive, action-blocking overlays used to display important, task-relevant information",
  "title_metadata": "CdrModal",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/modal",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrModal, CdrButton",
    "styleTag": ".title-header { @include cdr-text-heading-serif-600;}"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrModal",
          "api": {
            "props": [
              {
                "name": "opened",
                "type": "Boolean",
                "default": "N/A",
                "description": "Toggles the state of the modal. Required."
              },
              {
                "name": "label",
                "type": "string",
                "default": "N/A",
                "description": "Text used to generate the `aria-label` attribute as well as the modal title text, if `labelSlot` is empty. Required."
              },
              {
                "name": "showTitle",
                "type": "boolean",
                "default": "true",
                "description": "Toggles the modal title text, which comes from `label` or `labelSlot`."
              },
              {
                "name": "ariaDescribedby",
                "type": "string",
                "default": "'medium'",
                "description": "Text for the `aria-describedby` attribute."
              },
              {
                "name": "id",
                "type": "string",
                "default": "null",
                "description": "Unique id for modal."
              },
              {
                "name": "role",
                "type": "string",
                "default": "dialog",
                "description": "Overrides the `role` attribute on the modal content element. Possible values: { 'dialog' | 'alertdialog' }"
              },
              {
                "name": "overlayClass",
                "type": "string",
                "default": "N/A",
                "description": "Adds a custom class to the `cdr-modal__overlay` div."
              },
              {
                "name": "wrapperClass",
                "type": "string",
                "default": "N/A",
                "description": "Add a custom class to the `cdr-modal__outerWrap` div."
              },
              {
                "name": "contentClass",
                "type": "string",
                "default": "N/A",
                "description": "Add a custom class to the `cdr-modal__innerWrap` div."
              },
              {
                "name": "animationDuration",
                "type": "number",
                "default": "300",
                "description": "Sets animation duration for when the modal is closed."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrModal content."
              },
              {
                "name": "title",
                "description": "Slot for CdrModal title."
              },
              {
                "name": "modal",
                "description": "Slot to override the entire CdrModal content."
              }
            ],
            "events": [
              {
                "name": "closed",
                "arguments": "event",
                "description": "$emit event fired when closing the modal."
              }
            ]
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">

## Overview

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
:sandbox-data="$page.frontmatter.sandboxData" :model="{ opened: false }">

```html
<cdr-button
  @click="opened = true"
  aria-haspopup="dialog"
>Show Modal
</cdr-button>

<cdr-modal
  label="Add to Cart"
  :opened="opened"
  @closed="opened = false"
  aria-describedby="description"
>
  <template #title>
    <cdr-text
      tag="h3"
      class="title-header"
    >Add to Cart
    </cdr-text>
  </template>
  <cdr-text tag="p" id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum.</cdr-text>
</cdr-modal>
```
</cdr-doc-example-code-pair>


### Multiple Modals On One Page

When rendering multiple modals on a single page you can reduce your markup size by using a single CdrModal instance to launch all of the modals.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
:sandbox-data="$page.frontmatter.sandboxData" 
:model="{ opened: false, isAlert: false, termsTitle: 'Terms and Conditions', termsContent: 'Click to accept the Terms and Conditions and place item in your shopping cart.', termsRole: 'alertdialog', shippingTitle: 'Free Shipping', shippingContent: 'Free shipping available on certain orders', shippingRole: 'dialog', title: '', content: '', role: ''}" :methods="{openTermsModal(){this.title = this.termsTitle; this.content = this.termsContent; this.role = this.termsRole; this.opened = true; this.isAlert = true; }, openShippingModal(){this.title = this.shippingTitle; this.content = this.shippingContent; this.role = this.shippingRole; this.opened = true; this.isAlert = false;}}">

```html
<cdr-button
  @click="openTermsModal"
  aria-haspopup="alertdialog"
>Terms and Conditions
</cdr-button>

<cdr-button
  @click="openShippingModal"
  modifier="secondary"
  aria-haspopup="dialog"
>Free Shipping
</cdr-button>

<cdr-modal
  :opened="opened"
  :label="title"
  @closed="opened = false"
  aria-describedby="description"
  :role="role"
>
  <template #title>
    <cdr-text
      tag="h4"
      class="title-header"
    > <span v-if="isAlert"><icon-warning-fill/></span> {{ title }}, {{ role }}
    </cdr-text>
  </template>
  <cdr-text tag="p" id="description"> {{ content }}</cdr-text>
  <div v-if="isAlert">
     <cdr-button @click="opened= false">Accept</cdr-button>
     <cdr-button @click="opened= false" modifier="secondary" >Cancel</cdr-button>
  </div>
  
</cdr-modal>
```
</cdr-doc-example-code-pair>

### Using Modals as alert dialogs

In the above example the cdr-modal `role` property of the "Terms and Conditions" modal has been changed to `alertdialog`.
This role will notify users of critical information requiring their immediate attention. 

```vue
  <cdr-modal role="alertdialog" aria-describedby="description" label="modal title">
    <div id="description">
      modal content description
    </div>
  </cdr-modal>
```


Generally they have at least a Confirmation and close button but can have additional interactive controls as needed.
Like a traditional modal dialog, alert dialogs move and capture the users focus to the blocking overlay window.
By default focus will be placed on the modal window however for alert dialogs you should alter this to be placed on the most appropriate interactive control

The `alertdialog` role should only be used when an [alert](../../patterns/alerts/) occurs.
Additionally, an alert dialog may only be used for alert messages which have associated interactive controls.
Review [alert](../../patterns/alerts/#alert-notifications) for requirements on an alert which only contains static content and has no interactive controls.
### Accessibility

Ensure that usage of this component complies with accessibility guidelines:

- If your modal is launched by a button, add `aria-haspopup="dialog"` to the button element:

```vue
<cdr-button
  aria-haspopup="dialog"
>Launch modal</cdr-button>
```

- Set the `aria-describedby` prop to point to an element that describes what the modal does:

```vue
  <cdr-modal aria-describedby="description" label="modal title">
    <div id="description">
      modal content description
    </div>
  </cdr-modal>
```

This component complies with WCAG guidelines by:
- Uses the `label` prop to set the aria-label
- Assigns role="document" to the modal content
- All text content within the modal is read by screen readers, including the Close button text
- Only the content in the modal is read by the screen reader. Content outside modal is not read when the modal is in focus
- Modal can be closed using the keyboard (ESC key), Close button, or by clicking outside of modal
- Using the `aria-hidden` and `tabindex="-1"` on focusable items for all content outside of the modal

## Guidelines

### Use When

- Displaying important information users need to respond to
- Displaying non-essential content related to the underlying page that exceeds 560 characters


### Don't Use When

- Displaying limited additional page content
- Providing status feedback or messages

### The Basics

- Use modals sparingly. Modals are disruptive and their sudden appearance forces users to stop their current task and focus on the modal content
- Headlines should not exceed 68 characters
- Modal centers within the page
- Keep modal titles succinct and informative

### Behavior

- If two buttons are needed, place the primary button on the left and the secondary button on the right. Stack buttons at XS
- Content behind modal does not scroll and cannot be interacted with in any way
- Gradient is added at bottom to signify further scrollable content
- Modal is dismissed by:
  - Clicking the **Close** button
  - Interacting with the overlay background
  - Pressing the escape key (ESC)
- Modal opens one at a time and are never displayed in groups

# API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />

## Usage

### Modal Title

If the `title` slot is left empty, the `label` prop will be rendered as the title. The title can be hidden altogether by setting `showTitle` to `false`.

When using the `label` slot, add CdrText to use the appropriate header styles.

```vue{3,4}
<template #title>
  <cdr-text
    tag="h1"
    class="custom-text-class"
  >Add to Cart
  </cdr-text>
</template>
```

### `modal` Override Slot

The `modal` override slot provides teams a way to work from essentially a blank slate when creating their modal content. This is useful for situations where more art-direction or custom functionality is required. It is important to note that creating a clear way to close the modal is still required to meet user-experience and accessibility standards (i.e. relying only on the esc key is not enough).
  
```vue{10,11,12,13}
  <cdr-modal
    v-if="opened"
    :opened="opened"
    label="Fancy modal"
    @closed="closed"
    aria-describedby="description"
    role="dialog"
  >
    ...
    <template #modal>
      ...fancy modal code
      <cdr-button @click="close">Close modal</cdr-button>
    </template>
  </cdr-modal>
```
  
### Size

The modal has a default width of `640px` which converts to a fullscreen view at `xs` screen sizes.

### Scroll Behavior

The modal content area will scroll vertically if there's enough content. The modal title does not scroll; it stays affixed to the top of the modal.

### Keep Alive

Do not use `v-if` with CdrModal unless the component is wrapped with `keep-alive`. CdrModal handles showing and hiding itself when toggling, so `v-if` should be unneeded in most cases.

```vue{1,3,11}
<keep-alive>
  <cdr-modal
    v-if="opened"
    :opened="opened"
    label="Add to Cart"
    @closed="closed"
    aria-describedby="description"
  >
    ...
  </cdr-modal>
</keep-alive>
```

</cdr-doc-table-of-contents-shell>
