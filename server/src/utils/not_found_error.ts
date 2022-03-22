import { ApolloError } from 'apollo-server-core'

export default class NotFoundError extends ApolloError {
  constructor(message: string) {
    super(message, 'NOT_FOUND')
  }
}
