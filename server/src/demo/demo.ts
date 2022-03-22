let a = ''
let f = 'f'

if (true) {
  a = 'truex'
}

if (false) {
  a = 'falsex'
}

function main() {
  if (process.env.NODE_ENV === 'production') {
    log('truex')
  }
  if (process.env.NODE_ENV !== 'production') {
    log('falsex')
  }
}

function log(msg: string) {
  let a = 0
  if (process.env.NODE_ENV === 'production') {
    a = 123
  }
  if (process.env.NODE_ENV !== 'production') {
    a = 456
  }
  return a
}

main()

export { a, log }
