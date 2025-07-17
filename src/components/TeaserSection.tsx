const TeaserSection = () => {
 return (
  <section className="hidden">
    {TeaserSection.tsx}
  </section>
);
  return (
    <section className="bg-background py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Teaser Image */}
        <div className="text-center mb-8 animate-fade-in">
          <img 
            src="https://private-user-images.githubusercontent.com/143424182/433229769-4d94ee45-185b-4e10-b97e-b0a36e3ff42e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI1OTA4NjIsIm5iZiI6MTc1MjU5MDU2MiwicGF0aCI6Ii8xNDM0MjQxODIvNDMzMjI5NzY5LTRkOTRlZTQ1LTE4NWItNGUxMC1iOTdlLWIwYTM2ZTNmZjQyZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxNVQxNDQyNDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ODU0NjA2NjJhMGM3ZGM4NzZhYmFkYjk0NzY3ZGRmMTA4MjU2MzhiN2NjNTNlNDViYjRkZTBmNWYyYWY5ZWM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.jfzdhGMeMzvAuAPHN8qJa2kMlIYnj5-P0C4y32jPJy4"
            alt="grounded teacher Teaser " 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-medium hover-scale transition-all duration-300"
          />
        </div>

        {/* Caption */}
        <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Fig. (a) illustrates the overall architecture of our proposed cross-domain detection framework.
             The Relation Contextual Module <strong>(RCM) </strong>distinguishes between source-similar and source-dissimilar instances to guide a teacher-student detector pair, aided by pseudo-labeling.
              A discriminator and Gradient Reversal Layer <strong>(GRL)</strong> further support domain adaptation. Fig. (b) introduces an Expert Branch that uses a pretrained LVFM Embedder to inject expert-level knowledge via text prompts,
               helping align features semantically and reducing false predictions across domains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;