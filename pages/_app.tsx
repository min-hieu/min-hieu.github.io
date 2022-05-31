import '../styles/globals.scss'
import type { AppProps } from 'next/app'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import '../styles/customNotion.scss'

// used for code syntax highlighting (optional)
import 'prism-themes/themes/prism-gruvbox-dark.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
