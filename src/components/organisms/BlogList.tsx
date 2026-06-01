import React from 'react'

export const BlogList: React.FC = () => {
  const posts = Array.from({ length: 3 }).map((_, i) => ({ title: `Pos Blog ${i + 1}`, excerpt: 'Kutipan singkat untuk pos.' }))

  return (
    <section id="blog" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-800">Blog Saya</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {posts.map(p => (
            <div key={p.title} className="bg-white/15 backdrop-blur p-4 rounded-lg border border-white/30 shadow-lg hover:shadow-xl transition duration-200 ease-out cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]">
              <h4 className="font-semibold text-slate-800">{p.title}</h4>
              <p className="text-slate-600 mt-2">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
