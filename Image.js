
const { validateType } = require('../../core/shared/utils/file')
const File = require('./File')

module.exports = class Image extends File {
  static accept({ mimetype }) {
    return validateType(['image/*'], mimetype)
  }
}
  .define({
    name: 'image',
  })
  .properties({

  })