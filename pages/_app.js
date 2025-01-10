import '../node_modules/reveal.js/dist/reveal.css';
import '../node_modules/reveal.js/dist/theme/black.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/index.css'
import * as gtag from '../lib/gtag'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
	
    const router = useRouter()
	  useEffect(() => {
		const handleRouteChange = (url) => {
		  gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
		  router.events.off('routeChangeComplete', handleRouteChange)
		}
	  }, [router.events])
	
	
	
  return  <Component {...pageProps} />
}

export default MyApp
