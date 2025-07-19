const ResultsSection = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Quantitative Results on Datasets
        </h2>
        
        {/* Evaluation Metric */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Evaluation Metric</h3>
          <div className="prose prose-lg max-w-none text-justify leading-relaxed text-foreground">
            <p className="mb-4">
               We evaluate the performance of our proposed Grounded Teacher (GT) method against other approaches on all three medical benchmarks and
 the natural benchmark mentioned earlier for generalizability.Since UDA and SFDOAD sharesimilar task settings, we conducted comparisons with
 both.Table <span> 1</span>,Table 2and Table3 present the comparison results onmedical image datasets.Table 4 presents comparison of the natural
 dataset. Our proposed GT consistently outper forms existing all SOTA methods, demonstrat in ggeneralizability and significant improvements
 across both natural and medical settings. <strong> DDSM to INBreast</strong>.Adaptation from large to small-scale medical dataset swith different modalities. Here, we consider DDSM[66] data set as the
 source domainand INBreast [85] as the target domain.Results are presented in Table1.Our proposed method demonstrates superior performance
 across various False positives per Image (FPI) values compared to existing methods as displayed. <strong> RSNA to INBreast</strong>.Adaptation across medical 
 datasets with different machine-acquisitions.This isvital for enhancing health care outcomes,improving diagnostic accuracy, and facilitating
 better clinical decisions.To evaluate our method’s performance, we adapt a model trained on DDSM[66] to RSNA[11].Results for all 
 FPIvaluesarepresentedinTable2,demonstratingthat
            </p>
            
          </div>
        </div>

        {/* Results Table */}
        <div className="text-center mb-16 space-y-8">
  <img 
    src="images/t12.png" 
    alt="Quantitative Results Table 1" 
    className="w-full max-w-5xl mx-auto rounded-lg shadow-medium" 
  />
  <img 
    src="images/t34.png" 
    alt="Quantitative Results Table 2" 
    className="w-full max-w-5xl mx-auto rounded-lg shadow-medium" 
  />
</div>


        {/* Qualitative Results */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Quantitative Results</h3>
          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
                Figure 5 presents the qualitative outcomes of our method, comparing predictions from baseline
 AT [71] in the top row with those from the Ground Truth (GT) in the bottom row. The GT effectively
 corrects misclassifications, as highlighted by the blue boxes. For instance, in columns 1, 2, and 4,
 the GT accurately labels ’person’, ’car’, and ’truck’, respectively, rectifying the AT’s errors. Moreover,
 the GT demonstrates a notable reduction in both false positives and false negatives, indicated by the
 pink and red boxes, respectively. This enhancement signifies improved detection accuracy across
 various object scales and classes. This improvement is particularly evident in column 3, where
 the GT successfully identifies small-scale objects and provides more accurate detections for larger
scale objects. Also in Fig 5, we show how qualitatively the predictions are improved with variousproposed modules
            </p>
          </div>
          
          <div className="text-center">
            <img 
              src="images/img5.png" 
              alt="Qualitative Results Comparison" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-medium"
            />
            <img 
    src="images/fig3.png" 
    alt="Quantitative Results Table 2" 
    className="w-full max-w-5xl mx-auto rounded-lg shadow-medium" 
  />
  <div className="text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Fig. 3: <strong>FROC analysis of model generalization on unseen target domains.</strong> Performance comparison
 between our method (GT) and the MT baseline for detection tasks under domain shift: (a) DDSM→INBreast (410
 images), (b) DDSM→RSNA (993 images), and (c) RSNA→INBreast (410 images), where our method demon
strates superior performance across different domain shifts. Higher curves indicate better trade-offs between
 sensitivity (TPR) and false positives per image (FPI).
          </p>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;