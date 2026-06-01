import React from 'react'

const DUMMY_CARDS = [
  {
    title: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    title: 'Dolor Sit Amet',
    description:
      'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
  },
  {
    title: 'Consectetur',
    description:
      'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
  },
]

export const LoremSection: React.FC = () => {
  return (
    <section id="lorem" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-xl p-8 shadow-2xl">
          <div className="text-center mb-10">
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-[0.3em]">Dummy content</p>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900">Lorem Ipsum Dummy Section</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              This section is built with placeholder content to demonstrate structure and spacing in the page layout.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {DUMMY_CARDS.map((card) => (
              <div key={card.title} className="rounded-3xl bg-white/10 p-6 border border-white/20 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoremSection
