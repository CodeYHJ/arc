import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faEnvelope, faChevronRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  library.add(
    faBars, 
    faEnvelope, 
    faChevronRight, 
    faGlobe,
    faTwitter, 
    faFacebook, 
    faStackOverflow, 
    faGithub )
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.config.productionTip = false

  const VueScrollTo = require('vue-scrollto')
  Vue.use(VueScrollTo)
}