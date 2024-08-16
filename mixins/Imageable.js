const mixer = require('../../../core/shared/mixer')
const Propertiable = require('../../../core/shared/mixins/Propertiable')
const Image = require('../Image')

module.exports = mixer.mixin([Propertiable], (base) => {
  return class Imageable extends base {

  }
})
  .define()
  .properties({
    image: {
      type: Image,
    },
  })

