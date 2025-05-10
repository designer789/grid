export default function GetStarted() {
  const steps = [
    {
      number: 1,
      title: "Install and Connect",
      description: "Install the Grid browser extension (Chrome/Firefox/Kiwi) or download the native desktop app. Log in using your email or connect with your Web3 wallet (Solana supported)."
    },
    {
      number: 2,
      title: "Launch Your Node",
      description: "Activate your node with one click. Grid will automatically allocate AI/data/Web3 tasks based on your device performance."
    },
    {
      number: 3,
      title: "Earn Points Effortlessly",
      description: "Your device earns points during idle times. Points are based on uptime, task completion, and special challenges."
    },
    {
      number: 4,
      title: "Track Your Progress",
      description: "Monitor your earnings and device performance on your personalized dashboard."
    },
    {
      number: 5,
      title: "Redeem and Govern",
      description: "Redeem your points for GRID tokens and participate in the Grid DAO governance once launched."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6 tracking-tight text-center">
          How to Get Started with Grid
        </h2>
        
        <p className="text-lg sm:text-xl text-center text-gray-700 mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          Install → Launch → Earn → Track → Redeem
        </p>

        <div className="max-w-7xl mx-auto relative">
          <div className="absolute left-0 sm:left-4 md:left-12 top-8 bottom-8 border-l-2 border-dashed border-teal-200 hidden sm:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start mb-12 sm:mb-16 md:mb-20 last:mb-0 relative">
              <div className="md:w-1/2 md:pr-6 lg:pr-12 mb-6 sm:mb-8 md:mb-0 pl-8 sm:pl-12 md:pl-24 relative">
                <div className="absolute left-0 sm:left-4 md:left-8 top-0 flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    <span className="text-gray-700 font-medium text-xs sm:text-sm">{step.number}</span>
                  </div>
                </div>
                
                <div className="flex items-start mb-2 sm:mb-4">
                  <div className="text-gray-500 font-semibold text-sm sm:text-base">
                    STEP {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 max-w-md">
                  {step.description}
                </p>
              </div>
              
              <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-8 sm:p-12 md:p-16 h-64 sm:h-80 md:h-96 flex items-center justify-center">
                {step.number === 1 && (
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 682.67 682.67" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="sm:w-44 sm:h-44 md:w-48 md:h-48"
                  >
                    <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                      <g>
                        <g>
                          <g transform="translate(27.4087,76.7217)">
                            <path 
                              d="m 0,0 c 0.153,-0.003 0.307,-0.005 0.461,-0.005 0.201,0 0.4,0.002 0.6,0.005 z"
                              stroke="#00714B" 
                              strokeWidth="10" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeMiterlimit="10" 
                            />
                          </g>
                          <g transform="translate(437.4658,389.5293)">
                            <path 
                              d="m 0,0 v 20.985 c 0,10.557 -8.558,19.114 -19.114,19.114 h -216.448 c -12.283,0 -23.756,6.126 -30.591,16.331 l -5.009,7.479 c -6.83,10.198 -18.294,16.322 -30.569,16.33 l -99.846,0.064 c -15.644,0.01 -28.333,-12.669 -28.335,-28.313 l -0.054,-344.433 c 0,-11.095 8.871,-20.118 19.906,-20.365"
                              stroke="#00714B" 
                              strokeWidth="10" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeMiterlimit="10" 
                            />
                          </g>
                          <g transform="translate(195.7974,342.3804)">
                            <path 
                              d="m 0,0 h -91.743 c -3.721,0 -6.738,-3.017 -6.738,-6.738 v -30.707 c 0,-3.721 3.017,-6.738 6.738,-6.738 H 0 c 3.721,0 6.738,3.017 6.738,6.738 V -6.738 C 6.738,-3.017 3.721,0 0,0 Z"
                              stroke="#00714B" 
                              strokeWidth="10" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeMiterlimit="10" 
                            />
                          </g>
                          <g transform="translate(470.0332,278.1182)">
                            <path 
                              d="m 0,0 0.129,92.261 c 0.012,10.557 -8.537,19.124 -19.093,19.135 l -384.146,0.421 c -10.557,0.012 -19.124,-8.537 -19.136,-19.093 l -0.272,-273.809 c -0.012,-11.099 -9.019,-20.324 -20.118,-20.311 l 241.304,-0.144"
                              stroke="#00714B" 
                              strokeWidth="10" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeMiterlimit="10" 
                            />
                          </g>
                          <g transform="translate(273.71,157.563)">
                            <path 
                              d="M 0,0 C 0,63.731 51.664,115.395 115.395,115.395 179.126,115.395 230.79,63.731 230.79,0 230.79,-63.731 179.126,-115.395 115.395,-115.395 51.664,-115.395 0,-63.731 0,0 Z"
                              stroke="#00714B" 
                              strokeWidth="10" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeMiterlimit="10" 
                            />
                          </g>
                          <g transform="translate(389.105,207.5913)">
                            <path 
                              d="M 0,0 V -100.057"
                              stroke="#00714B" 
                              strokeWidth="10" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeMiterlimit="10" 
                            />
                          </g>
                          <g transform="translate(347.8687,148.2129)">
                            <path 
                              d="M 0,0 41.236,-40.678 82.473,0"
                              stroke="#00714B" 
                              strokeWidth="10" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeMiterlimit="10" 
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                )}
                
                {step.number === 2 && (
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 512 512" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="sm:w-44 sm:h-44 md:w-48 md:h-48"
                  >
                    <g>
                      <path 
                        d="M168.471,225.325c-0.235,2.319-0.339,4.674-0.304,7.057c0.059,4.042,0.512,7.988,1.32,11.8c0.699,3.298-1.067,6.611-4.198,7.781c-16.031,5.99-27.481,21.523-27.585,39.775c-0.134,23.772,19.374,42.918,42.906,42.918h182.059c23.536,0,42.576-19.446,42.234-43.302c-0.323-22.507-18.247-41.108-40.512-42.001c-1.02-0.041-2.032-0.045-3.035-0.014"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      <path 
                        d="M262.159,181.706c-9.938-6.962-22.061-10.963-35.122-10.742c-15.474,0.262-29.532,6.527-40.028,16.549"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      <path 
                        d="M274,167.944c-1.408,0.626-2.645,1.589-3.571,2.821c-7.203,9.588-11.473,21.505-11.473,34.42c0,49.19,43.029,67.304,54.554,71.273c1.81,0.623,3.78,0.574,5.558-0.134c11.43-4.552,54.616-24.816,54.616-71.139c0-12.915-4.27-24.833-11.473-34.42c-0.925-1.232-2.163-2.195-3.571-2.821l-38.603-17.153c-2.367-1.052-5.069-1.052-7.435,0L274,167.944z"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      
                      <polyline 
                        points="300.341,219.722 309.952,229.332 341.721,197.564"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      
                      <line x1="459.764" y1="225.326" x2="383.821" y2="93.788" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="385.134" y1="418.312" x2="459.764" y2="289.048" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="188.435" y1="446.856" x2="326.423" y2="446.856" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="58.062" y1="288.232" x2="132.485" y2="417.135" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="133.295" y1="95.835" x2="57.077" y2="227.848" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="324.939" y1="67.518" x2="188.226" y2="67.518" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      
                      <circle cx="40.138" cy="257.187" r="32.638" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <circle cx="471.862" cy="257.187" r="32.638" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      
                      <path 
                        d="M392.582,57.993c0.918,3.013,1.412,6.212,1.412,9.525c0,18.026-14.613,32.638-32.638,32.638s-32.638-14.613-32.638-32.638S343.33,34.88,361.356,34.88c1.992,0,3.943,0.179,5.837,0.52"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      
                      <circle cx="152.977" cy="67.518" r="32.638" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <circle cx="361.356" cy="444.482" r="32.638" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <circle cx="152.977" cy="444.482" r="32.638" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      
                      <line x1="169.85" y1="100.157" x2="211.034" y2="173.459" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="348.499" y1="100.157" x2="320.038" y2="150.791" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="169.85" y1="414.217" x2="213.21" y2="337.042" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="348.499" y1="414.217" x2="304.347" y2="335.656" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="72.777" y1="257.187" x2="153.764" y2="257.187" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                      <line x1="387.938" y1="257.187" x2="439.223" y2="257.187" fill="none" stroke="#00714B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                    </g>
                  </svg>
                )}
                
                {step.number === 3 && (
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 682.66669 682.66669" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="sm:w-44 sm:h-44 md:w-48 md:h-48"
                  >
                    <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                      <g>
                        <g>
                          <g transform="translate(315.5835,72.8066)">
                            <path
                              d="m 0,0 h -60.586 c -12.704,0 -25.39,0.921 -37.96,2.757 l -13.282,1.939"
                              fill="none"
                              stroke="#00714B"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </g>
                          <g transform="translate(83.7485,103.6221)">
                            <path
                              d="m 0,0 v -69.188 c 0,-7.303 -5.921,-13.225 -13.226,-13.225 h -22.463 c -7.305,0 -13.226,5.922 -13.226,13.225 V 74.273 c 0,7.304 5.921,13.226 13.226,13.226 h 22.463 C -5.921,87.499 0,81.577 0,74.273 v -39.2"
                              fill="none"
                              stroke="#00714B"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </g>
                          <g transform="translate(83.7485,43.9971)">
                            <path
                              d="m 0,0 85.158,-31.697 c 8.528,-3.174 17.555,-4.8 26.655,-4.8 H 215.3 c 14.482,0 28.666,4.115 40.899,11.867 l 129.576,73.104 c 8.549,7.59 10.133,20.348 3.702,29.8 -7.037,10.342 -18.678,12.139 -31.488,6.082 L 231.834,28.81 l 0.15,12.006 c -1.671,16.8 -14.606,30.283 -31.322,32.648 L 123.837,82.31 C 106.115,84.817 97.259,90.756 81.81,99.793 60.718,112.132 36.722,118.635 12.285,118.635 H 0"
                              fill="none"
                              stroke="#00714B"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </g>
                          <g transform="translate(275.6841,495.0752)">
                            <path
                              d="m 0,0 v 0 c 6.898,-8.57 18.55,-11.691 28.809,-7.719 15.043,5.825 31.617,-3.745 34.094,-19.684 v 0 c 1.689,-10.871 10.218,-19.401 21.09,-21.09 15.939,-2.477 25.509,-19.051 19.684,-34.094 -3.973,-10.26 -0.851,-21.91 7.719,-28.809 12.566,-10.115 12.566,-29.253 0,-39.368 -8.57,-6.898 -11.692,-18.549 -7.719,-28.809 5.825,-15.042 -3.745,-31.617 -19.684,-34.094 -10.872,-1.689 -19.401,-10.218 -21.09,-21.09 v 0 c -2.477,-15.939 -19.051,-25.509 -34.094,-19.683 -10.259,3.972 -21.911,0.85 -28.809,-7.72 -10.115,-12.566 -29.253,-12.566 -39.368,0 -6.899,8.57 -18.549,11.692 -28.809,7.72 -15.043,-5.826 -31.617,3.744 -34.094,19.683 -1.689,10.872 -10.218,19.401 -21.09,21.09 -15.939,2.477 -25.509,19.052 -19.684,34.094 3.973,10.26 0.851,21.911 -7.719,28.809 -12.566,10.115 -12.566,29.253 0,39.368 8.57,6.899 11.692,18.549 7.719,28.809 -5.825,15.043 3.745,31.617 19.684,34.094 10.872,1.689 19.401,10.219 21.09,21.09 2.477,15.939 19.051,25.509 34.094,19.684 10.26,-3.972 21.91,-0.851 28.809,7.719 C -29.253,12.566 -10.115,12.566 0,0 Z"
                              fill="none"
                              stroke="#00714B"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </g>
                          <g transform="translate(162.8584,381.54)">
                            <path
                              d="m 0,0 c 8.228,43.953 46.8,77.218 93.142,77.218 52.336,0 94.762,-42.427 94.762,-94.763 0,-52.336 -42.426,-94.763 -94.762,-94.763 -46.347,0 -84.922,33.272 -93.144,77.233"
                              fill="none"
                              stroke="#00714B"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </g>
                          <g transform="translate(257.8433,333.8193)">
                            <path
                              d="m 0,0 30.149,-19.929 c 2.578,-1.703 5.889,0.702 5.065,3.68 l -9.636,34.832 c -0.358,1.291 0.09,2.671 1.139,3.506 l 28.269,22.515 c 2.417,1.925 1.152,5.818 -1.934,5.955 l -36.105,1.598 c -1.339,0.06 -2.512,0.912 -2.983,2.167 L 1.287,88.168 c -1.084,2.893 -5.177,2.893 -6.261,0 L -17.651,54.324 c -0.47,-1.255 -1.644,-2.107 -2.982,-2.167 l -36.105,-1.598 c -3.087,-0.137 -4.351,-4.03 -1.935,-5.955 l 28.27,-22.515 c 1.048,-0.835 1.496,-2.215 1.139,-3.506 L -38.9,-16.249 c -0.824,-2.978 2.487,-5.383 5.065,-3.68 L -3.687,0 C -2.569,0.738 -1.118,0.738 0,0 Z"
                              fill="none"
                              stroke="#00714B"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </g>
                          <g transform="translate(171.6807,266.3516)">
                            <path
                              d="m 0,0 -36.916,-71.582 c -1.623,-3.147 1.19,-6.748 4.635,-5.937 l 41.098,9.681 c 1.988,0.468 4.019,-0.58 4.79,-2.47 l 15.942,-39.097 c 1.337,-3.279 5.902,-3.482 7.525,-0.335 l 35.881,69.574"
                              fill="none"
                              stroke="#00714B"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </g>
                          <g transform="translate(267.3647,226.1846)">
                            <path
                              d="m 0,0 35.881,-69.573 c 1.622,-3.147 6.187,-2.944 7.524,0.335 l 15.942,39.097 c 0.771,1.89 2.803,2.938 4.79,2.47 l 41.098,-9.681 c 3.446,-0.811 6.258,2.79 4.636,5.937 L 72.955,40.167"
                              fill="none"
                              stroke="#00714B"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                )}
                
                {step.number === 4 && (
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 512.001 512.001" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="sm:w-44 sm:h-44 md:w-48 md:h-48"
                  >
                    <g>
                      <path 
                        d="M163.497,426.718l35.824-62.693c2.839-4.969,2.839-11.069,0-16.038l-35.824-62.692"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      <path 
                        d="M315.022,426.718l35.824-62.693c2.839-4.969,2.839-11.069,0-16.038l-35.824-62.692"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      
                      <polyline 
                        points="198.8,285.29 7.5,285.29 7.5,426.72 379.98,426.72"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      <path 
                        d="M233.8,285.29h223.37c5.8,0,11.15,3.11,14.03,8.15l31.17,54.55c2.84,4.97,2.84,11.07,0,16.04l-31.17,54.54c-2.88,5.04-8.23,8.15-14.03,8.15h-42.19"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      <path 
                        d="M471.29,160.03h27.14c4.59,0,7.52-4.9,5.33-8.94l-13.29-24.59c-1.3-2.4-1.3-5.29,0-7.68l13.29-24.59c2.19-4.04-0.74-8.95-5.33-8.95H397.48v74.75h38.81"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      
                      <line 
                        x1="397.479" 
                        y1="85.283" 
                        x2="397.479" 
                        y2="285.295"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      
                      <line 
                        x1="256" 
                        y1="194.38" 
                        x2="256" 
                        y2="285.295"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      
                      <line 
                        x1="88.477" 
                        y1="216.604" 
                        x2="88.477" 
                        y2="285.295"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      
                      <circle 
                        cx="256" 
                        cy="167.106" 
                        r="27.274"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                      
                      <circle 
                        cx="88.477" 
                        cy="189.33" 
                        r="27.274"
                        fill="none"
                        stroke="#00714B"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      />
                    </g>
                  </svg>
                )}
                
                {step.number === 5 && (
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 128 128" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="sm:w-44 sm:h-44 md:w-48 md:h-48"
                  >
                    <path 
                      d="m119.48 79.65-32-35a2 2 0 0 0-3.48 1.35v16h-42a2 2 0 0 0-2 2v12.85l-27.29-29.85 27.29-29.85v12.85a2 2 0 0 0 2 2h56a2 2 0 0 0 0-4h-54v-16a2 2 0 0 0-3.48-1.35l-32 35a2 2 0 0 0 0 2.7l32 35a2 2 0 0 0 3.48-1.35v-16h42a2 2 0 0 0 2-2v-12.85l27.29 29.85-27.29 29.85v-12.85a2 2 0 0 0-2-2h-56a2 2 0 0 0 0 4h54v16a2 2 0 0 0 1.28 1.86 1.81 1.81 0 0 0 .72.14 2 2 0 0 0 1.48-.65l32-35a2 2 0 0 0 0-2.7z"
                      fill="#00714B"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 