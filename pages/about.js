import Layout from '../components/Layout';
import Breadcrums from '../components/BreadCrums';

export default function About() {
  return (
    <Layout title="About | Vikram Negi" blog={true}>
      <h1>About, Me</h1>
      <Breadcrums endpointTitle="About" />
    </Layout>
  )
}