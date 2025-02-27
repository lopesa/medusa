---
displayed_sidebar: jsClientSidebar
---

# Class: AdminPostOrdersOrderClaimsClaimReq

[internal](../modules/internal-8.md).[internal](../modules/internal-8.internal.md).AdminPostOrdersOrderClaimsClaimReq

**`Schema`**

AdminPostOrdersOrderClaimsClaimReq
type: object
properties:
  claim_items:
    description: The Claim Items that the Claim will consist of.
    type: array
    items:
      type: object
      required:
        - id
        - images
        - tags
      properties:
        id:
          description: The ID of the Claim Item.
          type: string
        item_id:
          description: The ID of the Line Item that will be claimed.
          type: string
        quantity:
          description: The number of items that will be returned
          type: integer
        note:
          description: Short text describing the Claim Item in further detail.
          type: string
        reason:
          description: The reason for the Claim
          type: string
          enum:
            - missing_item
            - wrong_item
            - production_failure
            - other
        tags:
          description: A list o tags to add to the Claim Item
          type: array
          items:
            type: object
            properties:
              id:
                type: string
                description: Tag ID
              value:
                type: string
                description: Tag value
        images:
          description: A list of image URL's that will be associated with the Claim
          type: array
          items:
            type: object
            properties:
              id:
                type: string
                description: Image ID
              url:
                type: string
                description: Image URL
        metadata:
          description: An optional set of key-value pairs to hold additional information.
          type: object
          externalDocs:
            description: "Learn about the metadata attribute, and how to delete and update it."
            url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
  shipping_methods:
    description: The Shipping Methods to send the additional Line Items with.
    type: array
    items:
       type: object
       properties:
         id:
           description: The ID of an existing Shipping Method
           type: string
         option_id:
           description: The ID of the Shipping Option to create a Shipping Method from
           type: string
         price:
           description: The price to charge for the Shipping Method
           type: integer
         data:
           description: An optional set of key-value pairs to hold additional information.
           type: object
  no_notification:
    description: If set to true no notification will be send related to this Swap.
    type: boolean
  metadata:
    description: An optional set of key-value pairs to hold additional information.
    type: object
    externalDocs:
      description: "Learn about the metadata attribute, and how to delete and update it."
      url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"

## Properties

### claim\_items

• `Optional` **claim\_items**: [`Item`](internal-8.Item-3.md)[]

#### Defined in

packages/medusa/dist/api/routes/admin/orders/update-claim.d.ts:164

___

### metadata

• `Optional` **metadata**: [`Record`](../modules/internal.md#record)<`string`, `unknown`\>

#### Defined in

packages/medusa/dist/api/routes/admin/orders/update-claim.d.ts:167

___

### no\_notification

• `Optional` **no\_notification**: `boolean`

#### Defined in

packages/medusa/dist/api/routes/admin/orders/update-claim.d.ts:166

___

### shipping\_methods

• `Optional` **shipping\_methods**: [`ShippingMethod`](internal-8.ShippingMethod-2.md)[]

#### Defined in

packages/medusa/dist/api/routes/admin/orders/update-claim.d.ts:165
