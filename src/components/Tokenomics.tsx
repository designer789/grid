export default function Tokenomics() {
  const tokenomicsFeatures = [
    {
      title: "Node Reward Allocation",
      description: "Earn $GRID tokens as rewards for running shared compute nodes and contributing to the network."
    },
    {
      title: "Access to Shared Compute Resources",
      description: "Use $GRID tokens to access the network's shared computing power for tasks like data processing, AI workloads, or decentralized mining."
    },
    {
      title: "Governance Participation",
      description: "$GRID holders will be able to submit proposals and vote on Grid DAO decisions."
    },
    {
      title: "Staking Rewards",
      description: "Future staking mechanisms will allow users to earn additional incentives through locked $GRID tokens."
    }
  ];

  return (
    <section className="py-24 bg-cyan-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Tokenomics
            </h2>
            <p className="text-2xl text-gray-700 mt-4">
              Introducing $GRID
            </p>
            
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {tokenomicsFeatures.map((feature, index) => (
              <div key={index} className="pb-8 relative">
                {/* Divider line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-cyan-200"></div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center mr-5 mt-1 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#00714B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 