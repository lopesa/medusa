import { IsEmail, IsObject, IsOptional, IsString } from "class-validator"
import { defaultStoreCustomersFields, defaultStoreCustomersRelations } from "."

import { EntityManager } from "typeorm"
import CustomerService from "../../../../services/customer"
import { AddressPayload } from "../../../../types/common"
import { validator } from "../../../../utils/validator"
import { IsType } from "../../../../utils/validators/is-type"

/**
 * @oas [post] /store/customers/me
 * operationId: PostCustomersCustomer
 * summary: Update Customer
 * description: "Update the logged-in customer's details."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersCustomerReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.update({
 *         first_name: "Laury"
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/customers/me' \
 *       -H 'Cookie: connect.sid={sid}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "first_name": "Laury"
 *       }'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCustomersRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
export default async (req, res) => {
  const id = req.user.customer_id

  const validated = await validator(StorePostCustomersCustomerReq, req.body)

  const customerService: CustomerService = req.scope.resolve("customerService")
  const manager: EntityManager = req.scope.resolve("manager")
  await manager.transaction(async (transactionManager) => {
    return await customerService
      .withTransaction(transactionManager)
      .update(id, validated)
  })

  const customer = await customerService.retrieve(id, {
    relations: defaultStoreCustomersRelations,
    select: defaultStoreCustomersFields,
  })

  res.status(200).json({ customer })
}

/**
 * @schema StorePostCustomersCustomerReq
 * type: object
 * properties:
 *   first_name:
 *     description: "The customer's first name."
 *     type: string
 *   last_name:
 *     description: "The customer's last name."
 *     type: string
 *   billing_address:
 *     description: "The address to be used for billing purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressPayload"
 *         description: The full billing address object
 *       - type: string
 *         description: The ID of an existing billing address
 *   password:
 *     description: "The customer's password."
 *     type: string
 *   phone:
 *     description: "The customer's phone number."
 *     type: string
 *   email:
 *     description: "The customer's email."
 *     type: string
 *   metadata:
 *     description: "Additional custom data about the customer."
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export class StorePostCustomersCustomerReq {
  @IsOptional()
  @IsType([AddressPayload, String])
  billing_address?: AddressPayload | string

  @IsOptional()
  @IsString()
  first_name?: string

  @IsOptional()
  @IsString()
  last_name?: string

  @IsOptional()
  @IsString()
  password?: string

  @IsOptional()
  @IsString()
  phone?: string

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
  @IsObject()
  metadata?: Record<string, unknown>
}
