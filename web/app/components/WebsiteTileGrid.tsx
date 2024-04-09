import Image from 'next/image'
import Link from 'next/link'
import { website } from '~/types/websites'

export default function WebsiteTileGrid({
  websitesByCategory,
  hideCategories = false,
}: {
  websitesByCategory: { [category: string]: website[] }
  hideCategories?: boolean
}) {
  return (
    <>
      {Object.keys(websitesByCategory).map((category) => (
        <div key={category} id={category.toLowerCase()} className="space-y-8">
          {!hideCategories && <h2 className="h2">{category}</h2>}
          <div className="grid  gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-none">
            {websitesByCategory[category].map((p) => (
              <Link key={p.slug} href={`/websites/${p.slug}`}>
                <a
                  className="
                "
                >
                  <div
                    className="

                bg-scale-100 dark:bg-scale-300
                hover:bg-scale-200 hover:dark:bg-scale-400
                group flex flex-col w-full h-full px-6 py-6 transition-all 
                border rounded 
                shadow 

               
                
                hover:shadow-lg"
                  >
                    <div className="flex w-full space-x-6">
                      <div className="w-10 h-10 transition-all scale-100 group-hover:scale-110">
                        <Image
                          layout="fixed"
                          width={40}
                          height={40}
                          className="w-10 h-10 bg-gray-300 rounded-full"
                          src={p.logo}
                          alt={p.title}
                        />
                      </div>
                      <div>
                        <h3 className="transition-colors text-xl text-scale-1100 group-hover:text-scale-1200 mb-2">
                          {p.title}
                        </h3>
                        <p className="text-sm text-scale-900">{p.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
