import { App } from 'vue'
import { Notify, Loading, Quasar } from 'quasar'
import iconSet from 'quasar/icon-set/mdi-v5'

import { palette } from '@/constants'

export default {
  install: (app: App<Element>) => {
    app.use(Quasar, {
      iconSet,
      config: { brand: palette },
      plugins: { Notify, Loading }
    })
  }
}
