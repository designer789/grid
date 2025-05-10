"use client";
import ContainerScroll from "./ui/ContainerScroll";

export default function Intro() {
  return (
    <div className="relative">
      <ContainerScroll titleComponent={null}>
        <div className="p-3 sm:p-4 md:p-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-700 text-center">
            Grid is a decentralized compute-sharing protocol where users contribute idle CPU/GPU resources to power AI inference, data processing, and next-gen Web3 dApps — and earn points convertible into GRID tokens. Join the future of low-energy, community-powered computation.
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
} 