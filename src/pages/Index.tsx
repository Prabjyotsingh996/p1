import Header from "@/components/Header";
import TeaserSection from "@/components/TeaserSection";
import AbstractSection from "@/components/AbstractSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import AlgorithmSection from "@/components/AlgorithmSection";
import ResultsSection from "@/components/ResultsSection";
import AblationSection from "@/components/AblationSection";
import CitationSection from "@/components/CitationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-academic">
      <Header />
      <TeaserSection />
      <AbstractSection />
      <ArchitectureSection />
      <AlgorithmSection />
      <ResultsSection />
      <AblationSection />
      <CitationSection />
    </div>
  );
};

export default Index;
