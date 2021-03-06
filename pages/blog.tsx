import type { GetStaticPropsContext } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/api/operations/get-all-pages'
import { Layout } from '@components/common'
import { Container } from '@components/ui'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  return {
    props: { pages },
  }
}

export default function Blog() {
  return (
    <div className="pb-20">
      <div className="text-center pt-40 pb-56 bg-violet">
        <Container>
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
            Welcome to my test store
          </h2>
          <p className="mt-3 max-w-md mx-auto text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Supplements Demo store
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="flex">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-12 w-12 rounded-full"
                  src="/frank-suit.jpg"
                  alt="Avatar"
                />
              </div>
              <div className="ml-4">
                <div className="leading-6 font-medium text-white">
                  Frank Espinoza
                </div>
                <div className="leading-6 font-medium text-gray-200">
                  Author
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        {/* <div className="-mt-96 mx-auto">
          <img src="/jacket.png" alt="Jacket" />
        </div> */}
      </Container>
    </div>
  )
}

Blog.Layout = Layout
