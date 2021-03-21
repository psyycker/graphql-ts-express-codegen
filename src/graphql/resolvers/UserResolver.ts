import { IResolvers } from 'graphql-tools'
import { AuthenticateResponse, MutationRegisterArgs, QueryLoginArgs } from '../generated'

export const UserResolvers: IResolvers = {
  Query: {
    async login (_: void, args: QueryLoginArgs): Promise<AuthenticateResponse> {
      return {
        token: "toto"
      }
    }
  },
  Mutation: {
    async register (_: void, args: MutationRegisterArgs): Promise<AuthenticateResponse> {
      return {
        token: "toto"
      }
    }
  }
}
