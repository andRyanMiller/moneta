import _ from 'lodash'

export function generateBlankPattern(size) {

  return _.chunk(_.range(size * size).map(() => false), size)

}

export function generatePattern(size) {

  return _.chunk(_.range(size * size).map(() => Math.random() >= 0.5), size)

}
