import '../styles/globals.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>	
      </div>
    </div>
    )
}

export default MyApp
