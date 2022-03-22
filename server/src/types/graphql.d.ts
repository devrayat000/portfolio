declare module '*.graphql' {
  import type {
    DocumentNode,
    // SchemaDefinitionNode,
    // TypeDefinitionNode,
  } from 'graphql'

  const shema: DocumentNode
  export default shema
  // export
}
