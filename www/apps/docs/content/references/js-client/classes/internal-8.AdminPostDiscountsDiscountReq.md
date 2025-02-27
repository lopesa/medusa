---
displayed_sidebar: jsClientSidebar
---

# Class: AdminPostDiscountsDiscountReq

[internal](../modules/internal-8.md).AdminPostDiscountsDiscountReq

**`Schema`**

AdminPostDiscountsDiscountReq
type: object
properties:
  code:
    type: string
    description: A unique code that will be used to redeem the discount
  rule:
    description: The discount rule that defines how discounts are calculated
    type: object
    required:
      - id
    properties:
      id:
        type: string
        description: "The ID of the Rule"
      description:
        type: string
        description: "A short description of the discount"
      value:
        type: number
        description: "The value that the discount represents. This will depend on the type of the discount."
      allocation:
        type: string
        description: "The scope that the discount should apply to. `total` indicates that the discount should be applied on the cart total, and `item` indicates that the discount should be applied to each discountable item in the cart."
        enum: [total, item]
      conditions:
        type: array
        description: "A set of conditions that can be used to limit when the discount can be used. Only one of `products`, `product_types`, `product_collections`, `product_tags`, and `customer_groups` should be provided based on the discount condition's type."
        items:
          type: object
          required:
            - operator
          properties:
            id:
              type: string
              description: "The ID of the condition"
            operator:
              type: string
              description: "Operator of the condition. `in` indicates that discountable resources are within the specified resources. `not_in` indicates that
               discountable resources are everything but the specified resources."
              enum: [in, not_in]
            products:
              type: array
              description: list of product IDs if the condition's type is `products`.
              items:
                type: string
            product_types:
              type: array
              description: list of product type IDs if the condition's type is `product_types`.
              items:
                type: string
            product_collections:
              type: array
              description: list of product collection IDs if the condition's type is `product_collections`.
              items:
                type: string
            product_tags:
              type: array
              description: list of product tag IDs if the condition's type is `product_tags`.
              items:
                type: string
            customer_groups:
              type: array
              description: list of customer group IDs if the condition's type is `customer_groups`.
              items:
                type: string
  is_disabled:
    type: boolean
    description: Whether the discount code is disabled on creation. If set to `true`, it will not be available for customers.
  starts_at:
    type: string
    format: date-time
    description: The date and time at which the discount should be available.
  ends_at:
    type: string
    format: date-time
    description: The date and time at which the discount should no longer be available.
  valid_duration:
    type: string
    description: The duration the discount runs between
    example: P3Y6M4DT12H30M5S
  usage_limit:
    type: number
    description: Maximum number of times the discount can be used
  regions:
    description: A list of region IDs representing the Regions in which the Discount can be used.
    type: array
    items:
      type: string
  metadata:
     description: An object containing metadata of the discount
     type: object
     externalDocs:
       description: "Learn about the metadata attribute, and how to delete and update it."
       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"

## Properties

### code

• `Optional` **code**: `string`

#### Defined in

packages/medusa/dist/api/routes/admin/discounts/update-discount.d.ts:171

___

### ends\_at

• `Optional` **ends\_at**: ``null`` \| `Date`

#### Defined in

packages/medusa/dist/api/routes/admin/discounts/update-discount.d.ts:175

___

### is\_disabled

• `Optional` **is\_disabled**: `boolean`

#### Defined in

packages/medusa/dist/api/routes/admin/discounts/update-discount.d.ts:173

___

### metadata

• `Optional` **metadata**: [`Record`](../modules/internal.md#record)<`string`, `unknown`\>

#### Defined in

packages/medusa/dist/api/routes/admin/discounts/update-discount.d.ts:179

___

### regions

• `Optional` **regions**: `string`[]

#### Defined in

packages/medusa/dist/api/routes/admin/discounts/update-discount.d.ts:178

___

### rule

• `Optional` **rule**: [`AdminUpdateDiscountRule`](internal-8.AdminUpdateDiscountRule.md)

#### Defined in

packages/medusa/dist/api/routes/admin/discounts/update-discount.d.ts:172

___

### starts\_at

• `Optional` **starts\_at**: `Date`

#### Defined in

packages/medusa/dist/api/routes/admin/discounts/update-discount.d.ts:174

___

### usage\_limit

• `Optional` **usage\_limit**: ``null`` \| `number`

#### Defined in

packages/medusa/dist/api/routes/admin/discounts/update-discount.d.ts:177

___

### valid\_duration

• `Optional` **valid\_duration**: ``null`` \| `string`

#### Defined in

packages/medusa/dist/api/routes/admin/discounts/update-discount.d.ts:176
