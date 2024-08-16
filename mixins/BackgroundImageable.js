const mixer = require('../../../core/shared/mixer')
const Propertiable = require('../../../core/shared/mixins/Propertiable')
const Image = require('../Image')
const Folderable = require('./Folderable')

module.exports = mixer.mixin([Propertiable, Folderable], (base) => {
  return class BackgroundImageable extends base {

  }
})
  .define()
  .properties({
    backgroundImage: {
      type: Image,
    },
  })

