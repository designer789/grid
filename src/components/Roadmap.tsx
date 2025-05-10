export default function Roadmap() {
  const phases = [
    {
      number: 1,
      title: "Network Genesis",
      items: [
        "Launch Grid browser node extensions.",
        "Deploy the real-time dashboard and leaderboard system.",
        "Implement the basic point reward system.",
        "Initiate the first round of community invite challenges."
      ]
    },
    {
      number: 2,
      title: "Compute Expansion",
      items: [
        "Launch the native desktop node applications for Windows, macOS, and Linux.",
        "Expand task types to include AI inference, data processing, and Web3 validation.",
        "Introduce node challenge campaigns and accelerated point-earning programs.",
        "Begin development of lightweight mobile nodes for Android and iOS."
      ]
    },
    {
      number: 3,
      title: "Ecosystem Growth",
      items: [
        "Enable point-to-$GRID token redemption features.",
        "Launch the developer onboarding program for dApp task integration.",
        "Establish Grid DAO governance structures.",
        "Build cross-chain task distribution mechanisms supporting multi-chain compute operations."
      ]
    },
    {
      number: 4,
      title: "Sustainable Compute Economy",
      items: [
        "Launch Grid Mainnet and fully operational network.",
        "Activate GRID token staking and node reward systems.",
        "Introduce the Green Mining Program to incentivize eco-friendly computing.",
        "Expand global community partnerships and strategic collaborations."
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#00714B] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight text-center">
          Roadmap
        </h2>
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="bg-white/15 backdrop-blur-sm  rounded-xl p-8  relative">
              {/* Phase number pill */}
              <div className="absolute -top-3 left-6 bg-white text-[#00714B] text-sm font-semibold px-4 py-1 rounded-full shadow-sm">
                Phase {phase.number}
              </div>
              
              {/* Phase header */}
              <h3 className="text-2xl font-medium mt-3 mb-6">
                {phase.title}
              </h3>
              
              {/* Phase items */}
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">{itemIndex + 1}</span>
                    </div>
                    <p className="text-white text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 