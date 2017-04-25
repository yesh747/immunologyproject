import React, { Component } from 'react';
import './App.css';
import Scroll from 'react-scroll';
import {Reddit} from './redditComponent';
import {BuckleyBonus} from './treeComponent';

import logo from './images/logo.png';
import nonspecific from './images/shomu_nonspecific_immunotherapy.png'
import monoclonal from './images/janeway_monoclonal_antibodies.png'
import immunecheckpoint from './images/werone_immunecheckpoint.png'
import vaccine1 from './images/buzzle_vaccine1.png'
import vaccine2 from './images/buzzle_vaccine2.png'
import vaccine3 from './images/buzzle_vaccine3.png'
import vaccine4 from './images/buzzle_vaccine4.png'
import act from './images/rosenburg_restifo_act.png'

class Header extends Component {
  render() {

      console.log('test')

    var style_header = {
      fontSize: "1.5em"
    };

    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><span style={style_header}>Cancer Immunotherapy</span><br />for Struggling Immunology Students</h2>
        </div>

  );
  }
}

class Nav extends Component {
  render() {

    return (
        <div className="App-nav">
            <Scroll.Link activeClass="active" to="buckleybonus" spy={true} smooth={true} duration={500} offset={-70}>Buckley Bonus!</Scroll.Link>
            <Scroll.Link activeClass="active" to="reddit" spy={true} smooth={true} duration={500} offset={-70}>Reddit Reads</Scroll.Link>
            <Scroll.Link activeClass="active" to="topic6" spy={true} smooth={true} duration={500} offset={-70}>ACT</Scroll.Link>
            <Scroll.Link activeClass="active" to="topic5" spy={true} smooth={true} duration={500} offset={-70}>Vaccines</Scroll.Link>
            <Scroll.Link activeClass="active" to="topic4" spy={true} smooth={true} duration={500} offset={-70}>Checkpoint Blockade</Scroll.Link>
            <Scroll.Link activeClass="active" to="topic3" spy={true} smooth={true} duration={500} offset={-70}>Monoclonal Ab</Scroll.Link>
            <Scroll.Link activeClass="active" to="topic2" spy={true} smooth={true} duration={500} offset={-70}>Non-specific Im</Scroll.Link>
            <Scroll.Link activeClass="active" to="topic1" spy={true} smooth={true} duration={500} offset={-70}>Introduction</Scroll.Link>
        </div>
  );
  }
}

class Content extends Component {
  render() {
    return (
        <div className="content">
        <div className="topic" id="topic1">
          <h1>INTRODUCTION</h1>
            <img src={logo} style={{width: 250, float: 'left'}}/>
            <p>
                Cancer is defined as a group of diseases characterized by uncontrolled growth and spread of abnormal cells (1). Because cancer cells are self-cells that have become mutated, as opposed to foreign molecules resulting from infection, the immune response is not always effective in identifying and destroying them. It is currently hypothesized that when aberrant cell production begins, the immune system first uses a surveillance method to determine the presence of tumor specific antigens that become the target of a tumor-specific T-cell response. This is known as the “elimination” phase and occurs during the first of three stages of tumor growth. However, if the immune response is not sufficient to completely eliminate the cancer cells, they will undergo a series of mutations as a result of selective pressure by the immune system. Some of these mutations will promote survival of the cancer cell. This is known as the “equilibrium” phase, or the second stage in tumor cell growth. Finally, in the third “escape” phase, tumor cells that have acquired additional mutations to promote uncontrolled proliferation and immune evasion will develop into a clinically identifiable tumor. Currently, research scientists are attempting to better understand the interactions between cancer cells and the immune system with the goal of devising treatment methods that will promote immune system activity against tumors. Several methods are being explored to achieve this including <b>nonspecific immune stimulation, monoclonal antibodies, antitumor vaccines, immune checkpoint blockade, and adoptive cell transfer </b> (2).
            </p>
            <p className="source">
                <span style={{fontWeight:700}}>Sources:</span>
                <ol>
                    <li>
                        "WHAT IS CANCER?" SEER Training: What Is Cancer? N.p., n.d. Web. 24 Apr. 2017.
                    </li>
                    <li>
                        Murphy, Kenneth, and Casey Weaver. <i>Janeway's immunobiology.</i> New York, NY: Garland Science/Taylor & Francis Group, LLC, 2017. Print.
                    </li>
                </ol>
            </p>
        </div>
        <div className="topic" id="topic2">
            <h1>NON-SPECIFIC IMMUNE STIMULATION</h1>
            <figure style={{float: 'right'}}>
                <img src={nonspecific} style={{width: 250, fontSize:6}}/>
                <figcaption style={{width: 250, margin: 'auto', display:'block'}}>Source: Shomu's Biology (1)</figcaption>
            </figure>
            <p>
                The immune system can naturally defend against cancer cells, so one strategy is to augment the natural occurring immune response. To do this, immunotherapy must first help CTL-P (activated cytotoxic T-cells) overcome a immune-evasion technique used by tumor cells. Normally, for CTL-P to kill a cell, its T-cell receptor (TCR) must bind to an MHC Class I Receptor presenting an tumor specific/associated antigen on the tumor, AND the CTL-P CD28 (costimulatory molecule) must bind to B7 on the tumor. However, most successful tumors often do not express B7 because of genetic selection pressures, so no immune response takes place. One approach for immunotherapy is to transfect the tumor cells with the gene encoding B7 ligand to induce immune response with CTL-P (1).
            </p>
            <p>
                A second approach of non-specific immune stimulation is to upregulate dendritic cell activity. Similar to before, tumor cells are transfected with the GM-CSF gene (granulocyte macrophage colony-stimulating factor). When expressed GM-CSF upregulates dendritic cells to increase cross presentation of tumor specific and tumor associated antigens (TSAs and TAAs). This then activates CTL-P, which eventually kills tumor (1).
            </p>
            <p>
                <span style={{fontWeight:700}}>Sources:</span>
                <ol>
                    <li>
                        "Cancer Immunotherapy." Shomu's Biology (2013). Youtube. Web. 23 Apr. 2017.
                    </li>
                </ol>
            </p>
        </div>
        <div className="topic" id="topic3">
            <h1>MONOCLONAL ANTIBODIES</h1>
            <figure style={{float: 'left'}}>
                <img src={monoclonal} style={{width: 350, fontSize:6}}/>
                <figcaption style={{width: 350, margin: 'auto', display:'block'}}>Source: Janeway's Immunobiology (1)</figcaption>
            </figure>
            <p>
                Depending on the type of tumor, it is possible for cancer cells to display several types of tumor rejection antigens that can be recognized by T cells. These encompass six general categories including tumor-specific antigens, cancer-testis antigens, differentiation antigens, antigens strongly overexpressed in tumor cells, molecules that display abnormal post-translational modifications, and novel proteins generated when one or more introns are retained in the mRNA transcribed from a gene. In order to initiate a T cell response, these antigens must have the ability to be expressed on the cell surface. However, even when T cells are able to recognize the abnormal cell surface antigens, they are not always reactive against them, which could be caused by deficient priming, insufficient effector function, or downstream resistance mechanisms.
            </p>
            <p>
                The use of monoclonal antibodies can combat this dysfunction in three ways. First, the Fc region of the monoclonal antibody can bind to effector cells and activate them to destroy the tumor cells or bind to specific receptors on the tumor cell itself (1). This is more effective in non-haematological malignancies in which the antibody targets receptors such as human epidermal growth factor 2 receptor (HER2), commonly overexpressed in breast cancer cells (2).  Second, it is possible to create a monoclonal antibody that is conjugated to a toxin, producing an immunotoxin. The immunotoxin is internalized by receptor-mediated endocytosis, and it is cleaved in the endosomal compartment, thus freeing the toxin to kill the tumor cell. Finally, monoclonal antibodies can also be conjugated with a radionuclide. Once the antibody binds to the tumor cell, the radioactive component of the antibody can kill both the targeted tumor cell as well as neighboring tumor cells (1). The conjugated antibodies have shown more efficacy in hematological malignancies (2).
            </p>
            <p className="source">
                <ol>
                    <span style={{fontWeight:700}}>Sources:</span>
                    <li>
                        Murphy, Kenneth, and Casey Weaver. <i>Janeway's Immunobiology.</i> New York, NY: Garland Science/Taylor & Francis Group, LLC, 2017. Print.
                    </li>
                    <li>
                        Weiner, Louis M., Rishi Surana, and Shangzi Wang. "Monoclonal antibodies: versatile platforms for cancer immunotherapy." <i>Nature Reviews Immunology</i> 10.5 (2010): 317-27. Web.
                    </li>
                </ol>
            </p>

        </div>
        <div className="topic" id="topic4">
            <h1>Immune Checkpoint Blockade</h1>
            <figure style={{float: 'right'}}>
                <img src={immunecheckpoint} style={{width: 350, fontSize:6}}/>
                <figcaption>Source: <a href="http://werone.co/eng/immunotherapy-non-toxically-with-plants">Werone.co</a></figcaption>
            </figure>
            <p>
                Another avenue for potential treatment involves deactivating inhibitory signals that would prevent lymphocytes from initiating an immune response against the tumor. Antigen presenting cells interact with T cells via several receptors and co-receptors, each of which act as either positive or negative checkpoints for T cell activation. The combination of stimulatory and inhibitory inputs at these checkpoints determines if the lymphocyte will reach a necessary threshold to become activated.
            </p>
            <p>
                Negative checkpoints involve inhibitory receptors such as CTLA-4 (cytotoxic T-lymphocyte-associated antigen 4) and PD-1 (programmed death 1) on antigen-presenting cells. Normally, CTLA-4 acts to prevent autoreactive T cells from becoming activated by binding to B7 molecules, stimulatory molecules also located on the surface of antigen-presenting cells. Therefore, it is possible that using antibodies against CTLA-4 could lower the threshold necessary for T cell activation against tumor antigens. However, CTLA-4 is also found on the surface of regulatory T cells, which are important for preventing autoimmune responses by preventing T cell activation from recognition of self-antigen. Antibody binding to CTLA-4 on regulatory T cells could cause them to be targeted for destruction. Either of these mechanisms carry the risk of increasing the likelihood of an autoimmune reaction. (1) In a study conducted of patients with metastatic melanoma receiving CTLA-4 antibody ipilimumab, there was increased recognition of a cancer-testing antigen expressed by melanoma. Nevertheless, only 15% of patients responded successfully enough to treatment to induce long-term remission. As expected, these patients also carried an increased risk of developing autoimmunity (2).
            </p>

            <p>
                Alternatively, researchers have targeted inhibitory receptor PD-1. Ligands of this receptor, PD-L1 and PD-L2 are expressed on tumor cells and inhibit activation of cytotoxic T cells. An antibody against PD-1 antibody (pembrolizumab, previously lambrolizumab) has shown efficacy in some melanoma patients, with a nearly 30% response rate in patients who have previously been treated (3). Another PD-1 antibody, nivolumab, has also been approved for treatment in metastatic melanoma patients and is currently being investigated as a potential drug for treatment of Hodgkin’s lymphoma (4).
            </p>
            <p className="source">
                <span style={{fontWeight:700}}>Sources:</span>
                <ol>
                    <li>
                        Murphy, Kenneth, and Casey Weaver. <i>Janeway's Immunobiology.</i> New York, NY: Garland Science/Taylor & Francis Group, LLC, 2017. Print.
                    </li>
                    <li>
                        "Improved Survival with Ipilimumab in Patients with Metastatic Melanoma." <i>New England Journal of Medicine</i> 363.13 (2010): 711-23. Web.
                    </li>
                    <li>
                        "Safety and Tumor Responses with Lambrolizumab (Anti–PD-1) in Melanoma." <i>New England Journal of Medicine</i> 369.2 (2013): 134-44. Web.
                    </li>
                    <li>
                        "PD-1 Blockade with Nivolumab in Relapsed or Refractory Hodgkin's Lymphoma." <i>New England Journal of Medicine</i> 372.4 (2015): 311-19. Web.
                    </li>
                </ol>
            </p>

        </div>
        <div className="topic" id="topic5">
            <h1>Vaccine Strategies</h1>
            <p>
                Because tumors in and of themselves are not strongly immunogenic, it was proposed that providing immunogenic agents to the tumor by delivering antigen or antigen fragments would initiate an immune response. William Coley, an American surgeon, first suggested this in 1891. He found that injecting Streptococcus bacteria into tumor cells caused them to shrink. Currently, scientists are attempting to create therapeutic vaccines based on this principle. The current vaccines in use and being researched can be broadly divided into tumor cell vaccines, dendritic cell vaccines, protein/peptide-based cancer vaccines, and genetic vaccines.
            </p>
            <p>
                There are two types of tumor cell vaccines. The first is made by extracting the patient’s own tumor cells, irradiating them, and adding an adjuvant that would be recognizable by the immune system. Such autologous tumor vaccines can also be enhanced by genetic modification that would provide additional immunostimulatory molecules such as B7 and GM-CSF in order to promote an immune response. However, this strategy has limitations because it requires a significant number of tumor cells to be isolated, thus restricting the type and stage of cancer that can be treated by this method.
            </p>
            <p>
                Another tumor cell vaccine, the allogeneic whole tumor cell vaccine, consists of combining human tumor cell lines that have an established repertoire of tumor cell antigens at play. The advantage of this method is that this type of vaccine can be standardized for large-scale production and can also be manipulated to express additional immunostimulatory molecules.
            </p>
            <figure style={{float: 'center'}}>
                <img src={vaccine1} style={{width: 250, margin: 'auto', display:'block'}}/>
                <figcaption style={{width: 250, margin: 'auto', display:'block'}}>Source: <a href="http://www.buzzle.com/articles/strategies-for-cancer-vaccine-development.html">buzzle.com</a></figcaption>
            </figure>
            <p>
                In addition to tumor cell vaccines, scientists have also investigated the recruitment of dendritic cells, important antigen-presenting cells, into vaccines. By preparing cultures of dendritic cells (DCs) ex vivo, loading them with tumor associated antigens, and adding adjuvant, one can create an enhanced dendritic cell capable of initiating an immune response specific to the tumor antigens.
            </p>
            <figure style={{float: 'center'}}>
                <img src={vaccine2} style={{width: 250, margin: 'auto', display:'block'}}/>
                <figcaption style={{width: 250, margin: 'auto', display:'block'}}>Source: <a href="http://www.buzzle.com/articles/strategies-for-cancer-vaccine-development.html">buzzle.com</a></figcaption>
            </figure>
            <p>
                Rather than administering the whole cells to the patient, it is also possible to create recombinant vaccines based on peptides from defined tumor-associated antigens. These types of vaccines are more cost effective than the aforementioned individualized or autologous vaccines. However, they also are potentially disadvantageous because they can only target select epitopes of the antigen. Therefore, it is possible for the tumor cells to mutate and produce their associated antigen with a modified version of the epitope upon selective pressure from administration of the vaccine.
            </p>
            <figure style={{float: 'center'}}>
                <img src={vaccine3} style={{width: 250, margin: 'auto', display:'block'}}/>
                <figcaption style={{width: 250, margin: 'auto', display:'block'}}>Source: <a href="http://www.buzzle.com/articles/strategies-for-cancer-vaccine-development.html">buzzle.com</a></figcaption>
            </figure>
            <p>
                Finally, genetic vectors can also be used that will lead to expression of antigen fragments through DNA, RNA or viral vaccines. For example, DNA vaccines are bacterial plasmids encoding tumor antigen that can be targeted by cellular and humoral immunity. This type of vaccine can be combined with immunostimulatory agents such as TLR agonists in order to increase the likelihood of an antibody response. They also hold the additional advantage in that they are unlikely to cause an autoimmune response because they are degraded and cleared rapidly. Current obstacles in this technique, however, include that the associated helper T cell response is short-lived and subsequent antibody response decreases over time. Additionally, while these vaccines have shown promise in mouse models, they have failed to translate effectively into non-human primates and humans.
            </p>
            <figure style={{float: 'center'}}>
                <img src={vaccine4} style={{width: 500, margin: 'auto', display:'block'}}/>
                <figcaption style={{width: 500, margin: 'auto', display:'block'}}>Source: <a href="http://www.buzzle.com/articles/strategies-for-cancer-vaccine-development.html">buzzle.com</a></figcaption>
            </figure>
            <p className="source">
                <span style={{fontWeight:700}}>Sources:</span>
                <ol>
                    <li>
                        Guo, Chunqing, et al. "Therapeutic cancer vaccines: past, present and future." <i>Advances in cancer research</i> 119 (2013): 421.
                    </li>
                </ol>
            </p>

        </div>
        <div className="topic" id="topic6">
            <h1>Adoptive Cell Transfer</h1>
            <figure style={{float: 'left'}}>
                <img src={act} style={{width: 350}}/>
                <figcaption style={{width: 350, margin: 'auto', display:'block'}}>Source: Rosenberg and Restifo, 2015 (2)</figcaption>
            </figure>
            <p>
                The basic tenet of Adoptive Cell Transfer (ACT) is leveraging your own immune cells to defend against cancer, usually melanoma or leukemia. Essentially, T-cells are removed from your body, engineered to target the tumor, rapidly multiplied, and reintroduced into your body. When removing cells from your body, they can be isolated in one of two ways. Lymphocytes can be removed surgically directly from the tumor (TIL: Tumor Infiltrating Lymphocytes), or they can be extracted via peripheral blood mononuclear cell pheresis (PBL: Peripheral Blood Lymphocytes). The former strategy is available to most patients, while the latter is restricted to patients of type HLA-A2. Before the next step, PBL cells must undergo transformation via viral infection in order to insert engineered genes to induce TCR expression. Because TIL are already activated in the tumor, this viral infection is unnecessary. Both TIL and PBL cells are grown in high concentrations of IL-2 to induce growth. 14 days of growth can multiple cell count by over 1000x (1). These T-cells are then tested for tumor recognition in vitro by colorimetric assay. The assay measures the IFNγ released when encountering tumor cells as a proxy for response. While cells are cultured in a lab, the patient often undergoes lymphocyte depleting chemotherapy, nearly zeroing their immune cell concentration before the administration of the CTL cultures. Lymphocyte depletion in mouse models before ACT transfer has shown to increase treatment effectiveness by 10x (2).
            </p>
            <p>
                The ACT approach with TILs is the most effective approach for complete regression for metastatic melanoma patients. One of the main benefits is the selective nature of TILs. Studies suggest that TILs that respond to ACT are unique to each melanoma, and, thus, melanoma TILs are potentially recognizing the random somatic mutations in the cancer. This means that TILs are highly specific to the tumor and makes sense of the lack of autoimmune side effects during ACT treatment with TILs (2).
            </p>
            <p>
                While ACT through TILs are effective in melanoma treatment, genetic engineering of lymphocytes aim to expand ACT to other cancers. This is the aforementioned PBL approach. Two approaches for genetic engineering exist: conventional α/β TCRs and CARs (chimeric antigen receptors). CARs are created by linking variable regions of the heavy and light chains of antibodies to intracellular signaling chains, like CD3-ζ, CD28, or CD136 (Rosenberg and Restifo, 2015). Typically, early stage T-cells are chosen for engineering, as older CD8+ T-cells lose their anti-tumor capability. One of the major challenges of the genetic engineering approach is to design TCRs/CARs that target tumor specific antigens. Some trials have lead to toxicity of the kidneys, eyes, skin, and ears during treatment, and in some cases the toxicity was life-threatening and trials had to be stopped (2). However, other trials have found tumor associated markers that lead to manageable side-effects. Successful trials have addressed cancers that express target molecules shared with nonessential organisms, such as CD19, which is found on non-plasma B-cells. ACT has been successful with lymphomas and leukemias but have only been used in small numbers – less than 200 patients treated globally (2).
            </p>
            <p className="source">
                <span style={{fontWeight:700}}>Sources:</span>
                <ol>
                    <li>
                        Dudley, Mark. “Adoptive Cell Therapy at the NCI”. Surgery Branch, National Cancer Institute. Youtube (2011). Web. 23 April 2017.
                    </li>
                    <li>
                        Rosenberg, Steven A and Nicholas P. Restifo. “Adoptive cell transfer as personalized immunotherapy for human cancer”. Science (2015) 348(6320): 62-68.
                    </li>
                </ol>
            </p>

        </div>
        <div className="reddit" id="reddit">
            <Reddit subreddit="Immunology"/>
        </div>
        <div className="buckleybonus" id="buckleybonus">
            <BuckleyBonus/>
        </div>

    </div>
    )
  }
}

class Footer extends Component {

    render() {
        return(
          <div className="footer">
              <p>
                  Created by Yeshwant Chillakuru and Christina Darwish
              </p>
              <p>
                  Source code available on <a href="https://github.com/yesh747/immunologyproject">Github</a>
              </p>
          </div>
        );
    }

}

export { Header, Nav, Content, Footer }