const mixer = require('../../../core/shared/mixer')
const Folder = require('../Folder')
const Propertiable = require('../../../core/shared/mixins/Propertiable')

module.exports = mixer.mixin([Propertiable], (base) => {
  return class Folderable extends base {

  }
})
  .define()
  .properties({
    folder: {
      type: Folder,
    },
  })