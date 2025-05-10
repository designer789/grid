export default function GridEcosystem() {
  const ecosystemFeatures = [
    {
      title: "Green-first Compute Network",
      description: "Replace carbon-heavy server farms with distributed low-energy nodes."
    },
    {
      title: "Smart Task Matching",
      description: "P2P load balancing based on CPU, GPU, bandwidth specs."
    },
    {
      title: "Community Challenges and Leaderboards",
      description: "Task achievements, point races, and invite bonuses to keep users active."
    },
    {
      title: "Transparent Point Earning",
      description: "Real-time dashboard tracking uptime, tasks, points, and rankings."
    },
    {
      title: "Mobile Edge Node Ready",
      description: "Kiwi Browser support and upcoming Android/iOS lightweight nodes."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight text-center">
          Grid - Building a Global Decentralized Compute Ecosystem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {ecosystemFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="#00714B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="#00714B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}