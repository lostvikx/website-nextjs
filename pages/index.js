// import Head from 'next/head'
import Nav from '../components/Nav'
import Layout from '../components/Layout'

const HomePage = () => {
  return (
    <h1>Hello, World 👋</h1>
  );
}

export default function Home() {
  return (
    <div>
      <Layout title="Welcome To Paradise ✨ | lostvikx"><HomePage /></Layout>
    </div>
  )
}
