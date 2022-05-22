import type { NextPage } from 'next'
import Head from 'next/head'
//import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <p>simnet Ghana Limited</p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        simnet
      </footer>
    </div>
  )
}

export default Home
