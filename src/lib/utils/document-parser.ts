import { DocumentRendererProps } from '@keystone-6/document-renderer'

type Element = DocumentRendererProps['document'][0]
type Node = DocumentRendererProps['document'][0]['children'][0]

export function mapDocumentToString(docs?: Node[]): string | undefined {
  return docs?.reduce((acc, d) => {
    if ('children' in d) {
      return (
        acc +
        (d.type === 'list-item' ? ', ' : '') +
        mapDocumentToString(d.children as Element[])
      )
    } else {
      return acc + d.text
    }
  }, '')
}
