/* data.js — all page content for arcarolab.org */
'use strict';

const IMG = 'https://www.arcarolab.org/img/research-img/';
const PEOPLE_IMG = 'https://www.arcarolab.org/img/people-img/';

const PREPRINTS = [
  { author: 'Liu X, Zhang Y, Yin Z, Zhen Z, Arcaro MJ', title: 'Brainana: an end-to-end preprocessing framework for macaque neuroimaging', venue: 'bioRxiv', href: 'https://www.biorxiv.org/content/10.64898/2026.06.03.729972v1' },
  { author: 'Meyer EE, Ong WS, Cottaris NP, Zhang L, Collina J, Brainard DH, Arcaro MJ', title: 'Transformation-tolerant object recognition in tree shrews despite lacking a fovea', venue: 'bioRxiv', href: 'https://www.biorxiv.org/content/10.64898/2026.04.10.717715v1' },
  { author: 'Kim H, Arcaro MJ, Imam N', title: 'Geometric constraints in the development of primate extrastriate visual cortex', venue: 'bioRxiv', href: 'https://www.biorxiv.org/content/10.64898/2026.02.04.703881v3' },
  { author: 'Ellwood-Lowe ME, Nishio M, Dufford AJ, Arcaro MJ, Satterthwaite TD, Mackey AP', title: 'Cascading periods of language-related brain plasticity across early childhood', venue: 'bioRxiv', href: 'https://www.biorxiv.org/content/10.64898/2026.03.27.714739v1' },
];

// Carousel papers — exactly matching current arcarolab.org homepage slides, in order
const CAROUSEL_PAPERS = [
  { img: IMG+'neonate_viscortex.jpg', year:'2026', journal:'Neuron',                      author:'Ayzenberg V & Arcaro MJ',                        title:'Functional organization of the human visual system at birth and across late gestation',              href:'https://www.cell.com/neuron/fulltext/S0896-6273(26)00267-9' },
  { img: IMG+'pulvinarscenes.png',    year:'2026', journal:'Nature Communications',         author:'Guest DR, Allen EJ, Kay KN, Arcaro MJ',          title:'Processing of natural scenes in the human pulvinar',                                                href:'https://www.nature.com/articles/s41467-025-67472-3' },
  { img: IMG+'monami_fig.png',        year:'2025', journal:'PLOS Biology',                  author:'Nishio M, Liu X, Mackey AP, Arcaro MJ',          title:'Humans have a longer period of cortical maturation across depth and hierarchy than macaques',       href:'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003378' },
  { img: IMG+'visexpansion.png',      year:'2025', journal:'PNAS',                          author:'Meyer E, Martynek M, Kastner S, Livingstone MS, Arcaro MJ', title:'Expansion of a conserved architecture drives the evolution of primate visual cortex',            href:'https://www.pnas.org/doi/10.1073/pnas.2421585122' },
  { img: IMG+'neonatepulvinar.jpg',   year:'2025', journal:'Current Biology',               author:'Ayzenberg V, Song C, Arcaro MJ',                 title:'An intrinsic hierarchical, retinotopic organization of visual pulvinar connectivity in the human neonate', href:'https://www.cell.com/current-biology/abstract/S0960-9822(24)01583-5' },
  { img: IMG+'histology.jpg',         year:'2024', journal:'Cell Reports',                  author:'Oishi H, Berezovskii VK, Livingstone MS, Weiner KS, Arcaro MJ', title:'Inferotemporal face patches are histo-architectonically distinct',                           href:'https://www.cell.com/cell-reports/fulltext/S2211-1247(24)01083-0' },
  { img: IMG+'topographic.png',       year:'2024', journal:'Annual Reviews Neuroscience',   author:'Arcaro MJ & Livingstone MS',                     title:'A whole-brain topographic ontology',                                                                href:'https://www.annualreviews.org/doi/abs/10.1146/annurev-neuro-082823-073701' },
  { img: IMG+'NRP.jpg',               year:'2023', journal:'Nature Reviews Psychology',     author:'Scott LS & Arcaro MJ',                           title:'A domain-relevant framework for the development of face processing',                               href:'https://www.nature.com/articles/s44159-023-00152-5' },
  { img: IMG+'stuart_solo.png',       year:'2020', journal:'eLife',                         author:'Arcaro MJ, Ponce CR, Livingstone MS',            title:'The neurons that mistook a hat for a face',                                                        href:'https://elifesciences.org/articles/53798' },
];

const PUBLICATIONS = [
  // 2026
  { year: '2026', journal: 'PLOS Biology',      author: 'Oishi H, Berezovskii VK, Livingstone MS, Weiner KS, Arcaro MJ',                                            title: 'Metabolic organization of macaque visual cortex reflects visual field topography and perceptual specialization', href: 'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003847' },
  { year: '2026', journal: 'Neuron',               author: 'Ayzenberg V & Arcaro MJ',                                                                                  title: 'Functional organization of the human visual system at birth and across late gestation', href: 'https://www.sciencedirect.com/science/article/pii/S0896627326002679' },
  { year: '2026', journal: 'Nature Communications', author: 'Guest DR, Allen EJ, Kay KN, Arcaro MJ',                                                                     title: 'Processing of natural scenes in the human pulvinar', href: 'https://www.nature.com/articles/s41467-025-67472-3' },
  { year: '2026', journal: 'NeuroImage',            author: 'Nishio M, Wang X, Cornblath EJ, Lee SH, Shih YI, Palomero-Gallagher N, Arcaro MJ, Lydon-Staley DM, Mackey AP', title: 'Alcohol impacts an fMRI marker of neural inhibition in humans and rodents', href: 'https://www.sciencedirect.com/science/article/pii/S1053811926002144' },

  // 2025
  { year: '2025', journal: 'PLOS Biology',          author: 'Nishio M, Liu X, Mackey AP, Arcaro MJ',                                                                     title: 'Humans have a longer period of cortical maturation across depth and hierarchy than macaques', href: 'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003378' },
  { year: '2025', journal: 'PNAS',                  author: 'Meyer E, Martynek M, Kastner S, Livingstone MS, Arcaro MJ',                                                 title: 'Expansion of a conserved architecture drives the evolution of primate visual cortex', href: 'https://www.pnas.org/doi/10.1073/pnas.2421585122' },
  { year: '2025', journal: 'Current Biology',       author: 'Ayzenberg V, Song C, Arcaro MJ',                                                                            title: 'An intrinsic hierarchical, retinotopic organization of visual pulvinar connectivity in the human neonate', href: 'https://www.cell.com/current-biology/abstract/S0960-9822(24)01583-5' },
  { year: '2025', journal: 'Module in Neuroscience and Biobehavioral Psychology', author: 'Arcaro MJ, Willbrand EH, Amiez C, Maboudian SA, Weiner KS',                   title: 'Evolution of functional sulcal anatomy in primates', href: 'https://www.sciencedirect.com/science/article/abs/pii/B9780443273803000294?via%3Dihub' },
  { year: '2025', journal: 'Nature Neuroscience',   author: 'Sydnor VJ, Bagautdinova J, Larsen B, Arcaro MJ, et al.',                                                   title: 'Human thalamocortical structural connectivity develops in line with a hierarchical axis of cortical plasticity', href: 'https://www.nature.com/articles/s41593-025-01991-6' },
  { year: '2025', journal: 'eLife',                 author: 'Ellis CT, Yates TS, Arcaro MJ, Turk-Browne NB',                                                              title: 'Movies reveal the fine-grained organization of infant visual cortex', href: 'https://elifesciences.org/articles/92119' },

  // 2024
  { year: '2024', journal: 'Journal of Neuroscience', author: 'Bourne JA, Cichy RM, Kiorpes L, Morrone MC, Arcaro MJ, Nielsen KJ',                                       title: 'Development of higher-level vision: A network perspective', href: 'https://www.jneurosci.org/content/44/40/e1291242024' },
  { year: '2024', journal: 'Cell Reports',          author: 'Oishi H, Berezovskii VK, Livingstone MS, Weiner KS, Arcaro MJ',                                              title: 'Inferotemporal face patches are histo-architectonically distinct', href: 'https://www.cell.com/cell-reports/fulltext/S2211-1247(24)01083-0' },
  { year: '2024', journal: 'Annual Reviews Neuroscience', author: 'Arcaro MJ & Livingstone MS',                                                                          title: 'A whole-brain topographic ontology', href: 'https://www.annualreviews.org/doi/abs/10.1146/annurev-neuro-082823-073701?journalCode=neuro' },

  // 2023
  { year: '2023', journal: 'Nature Reviews Psychology', author: 'Scott LS & Arcaro MJ',                                                                                  title: 'A domain-relevant framework for the development of face processing', href: 'https://www.nature.com/articles/s44159-023-00152-5' },
  { year: '2023', journal: 'Neuron',                author: 'Kay K, Bonnen K, Denison RN, Arcaro MJ, Barack DL',                                                          title: 'Tasks and their role in visual neuroscience', href: 'https://www.cell.com/neuron/fulltext/S0896-6273(23)00218-0' },
  { year: '2023', journal: 'Advances in Neural Information Processing', author: 'Linsely D, Rodriguez IF, Fel T, Arcaro MJ, Sharma S, Livingstone MS, Serre T',           title: 'Performance-optimized deep neural networks are evolving into worse models of inferotemporal visual cortex', href: 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/5bf234ecf83cd77bc5b77a24ba9338b0-Abstract-Conference.html' },

  // 2022
  { year: '2022', journal: 'Brain Structure and Function', author: 'Arcaro MJ, Livingstone MS, Kay KN, Weiner KS',                                                       title: 'The retrocalcarine sulcus maps different retinotopic representations in macaques and humans', href: 'https://link.springer.com/article/10.1007/s00429-021-02427-0' },
  { year: '2022', journal: 'The Thalamus (Cambridge University Press)', author: 'Kastner S & Arcaro MJ',                                                                 title: 'The Thalamus in Attention', href: 'https://www.cambridge.org/core/books/abs/thalamus/thalamus-in-attention/258AC010479DCD0828B5541FABFB2CFD' },

  // 2021
  { year: '2021', journal: 'Nature Reviews Neuroscience', author: 'Arcaro MJ & Livingstone MS',                                                                          title: 'On the relationship between maps and domains in inferotemporal cortex', href: 'https://www.nature.com/articles/s41583-021-00490-4' },
  { year: '2021', journal: 'Neuron',                author: 'Ellis CT, Yates TS, Skalaban LJ, Bejjanki VR, Arcaro MJ, Turk-Browne NB',                                    title: 'Retinotopic organization of visual cortex in human infants', href: 'https://www.cell.com/neuron/fulltext/S0896-6273(21)00419-0' },
  { year: '2021', journal: 'Cerebral Cortex',       author: 'Natu VS, Arcaro MJ, Barnett MA, Gomez J, Livingstone MS, Grill-Spector KS, Weiner KS',                       title: 'Sulcal depth in medial ventral temporal cortex predicts the location of a place-selective region in macaques, children, and adults', href: 'https://academic.oup.com/cercor/advance-article-abstract/doi/10.1093/cercor/bhaa203/5909031?redirectedFrom=fulltext' },

  // 2020
  { year: '2020', journal: 'PNAS',                  author: 'Arcaro MJ, Mautz T, Livingstone MS',                                                                        title: 'Anatomical correlates of face patches in macaque inferotemporal cortex', href: 'https://www.pnas.org/content/early/2020/12/03/2018780117' },
  { year: '2020', journal: 'eLife',                 author: 'Arcaro MJ, Ponce CR, Livingstone MS',                                                                       title: 'The neurons that mistook a hat for a face', href: 'https://elifesciences.org/articles/53798' },

  // 2019
  { year: '2019', journal: 'PNAS',                  author: 'Arcaro MJ, Schade PF, Livingstone MS',                                                                      title: 'Body-map proto-organization in newborn macaques', href: 'https://www.pnas.org/content/early/2019/11/14/1912636116' },
  { year: '2019', journal: 'Annual Reviews Vision Science', author: 'Arcaro MJ, Schade PF, Livingstone MS',                                                               title: 'Universal mechanisms and the development of the face network: what you see is what you get', href: 'http://www.annualreviews.org/eprint/4KFK5VFSCYJ3PGYZDGBC/full/10.1146/annurev-vision-091718-014917' },
  { year: '2019', journal: 'Trends in Cognitive Sciences', author: 'Livingstone MS, Arcaro MJ, Schade PF',                                                                title: 'Cortex is cortex: ubiquitous principles drive face-domain development', href: 'https://www.sciencedirect.com/science/article/pii/S1364661318302572?via%3Dihub' },
  { year: '2019', journal: 'Neuropsychologia',      author: 'Arcaro MJ, Thaler L, Quinlan DJ, Monaco S, Khan S, Valyear KF, Goebel R, Dutton GN, Goodale MA, Kastner S, Culham JC', title: 'Psychophysical and neuroimaging responses to moving stimuli in a patient with the Riddoch phenomenon due to bilateral visual cortex lesions', href: 'https://www.sciencedirect.com/science/article/pii/S0028393218302045' },

  // 2018
  { year: '2018', journal: 'Journal of Vision',     author: 'Benson N, Jamison KW, Arcaro MJ, Vu A, Glasser MF, Coalson TS, Van Essen D, Yacoub E, Ugurbil K, Winawer J, Kay K', title: 'The HCP 7T Retinotopy: Description and pRF Analysis', href: 'https://jov.arvojournals.org/article.aspx?articleid=2719988' },
  { year: '2018', journal: 'Nature Communications', author: 'Arcaro MJ, Pinsk MA, Chen J, Kastner S',                                                                    title: 'Organizing principles of pulvino-cortical coupling in humans', href: 'https://rdcu.be/bdRBG' },
  { year: '2018', journal: 'NeuroImage',            author: 'Todd N, Zhang Y, Arcaro MJ, Becerra L, Borsook D, Livingstone MS, McDonald N',                               title: 'Focused ultrasound induced opening of the blood-brain barrier disrupts inter-hemispheric resting state functional connectivity in the rat brain', href: 'https://www.sciencedirect.com/science/article/pii/S1053811918304877' },
  { year: '2018', journal: 'NeuroImage',            author: 'Haufe S, DeGuzman P, Henin S, Arcaro MJ, Honey CJ, Hasson U, Parra LC',                                      title: 'Elucidating relations between fMRI, ECoG, and EEG through a common natural stimulus', href: 'https://www.sciencedirect.com/science/article/pii/S1053811918305238' },

  // 2017
  { year: '2017', journal: 'Nature Neuroscience',   author: 'Arcaro MJ*, Schade PF*, Vincent JL, Ponce CR, & Livingstone MS*',                                            title: 'Seeing faces is necessary for face-domain formation', href: 'https://www.nature.com/articles/nn.4635' },
  { year: '2017', journal: 'eLife',                 author: 'Arcaro MJ & Livingstone MS',                                                                                 title: 'A hierarchical, retinotopic proto-organization of the primate visual system at birth', href: 'https://elifesciences.org/articles/26196' },
  { year: '2017', journal: 'Journal of Neuroscience', author: 'Arcaro MJ & Livingstone MS',                                                                               title: 'Retinotopic organization of scene areas in the macaque inferior temporal cortex', href: 'http://www.jneurosci.org/content/early/2017/07/03/JNEUROSCI.0569-17.2017' },
  { year: '2017', journal: 'Nature Communications', author: 'Livingstone MS*, Vincent JL*, Arcaro MJ*, Srihasam K, Schade P, Savage T',                                   title: 'Development of the macaque face-patch system', href: 'https://www.nature.com/articles/ncomms14897' },

  // 2016
  { year: '2016', journal: 'Cerebral Cortex',       author: 'Chen J, Honey CJ, Simony E, Arcaro MJ, Norman KA, Hasson U',                                                 title: 'Accessing Real-Life Episodic Information from Minutes versus Hours Earlier Modulates Hippocampal and High-Order Cortical Dynamics', href: 'https://academic.oup.com/cercor/article-lookup/doi/10.1093/cercor/bhv155' },

  // 2015
  { year: '2015', journal: 'Journal of Neuroscience', author: 'Arcaro MJ, Pinsk MA, Kastner S',                                                                           title: 'The anatomical and functional organization of the human visual pulvinar', href: 'https://www.jneurosci.org/content/jneuro/35/27/9848.full.pdf' },
  { year: '2015', journal: 'Visual Neuroscience',   author: 'Arcaro MJ & Kastner S',                                                                                      title: 'Topographic organization of areas V3 and V4 and its relation to supra-areal organization of the primate visual system', href: 'pdf/Arcaro2015_VN.pdf' },
  { year: '2015', journal: 'eLife',                 author: 'Arcaro MJ, Honey CJ, Mruczek REB, Kastner S, Hasson U',                                                      title: 'Widespread correlation patterns in fMRI signal across visual cortex reflect eccentricity organization', href: 'https://elifesciences.org/articles/03952' },
  { year: '2015', journal: 'IPMI',                  author: 'Lombaert H, Arcaro MJ, Ayanche N',                                                                           title: 'Brain Transfer: Spectral Analysis of Cortical Surfaces and Functional Maps', href: 'pdf/IPM-BrainTransfer.pdf' },
  { year: '2015', journal: 'Cerebral Cortex',       author: 'Wang L, Mruczek REB, Arcaro MJ, Kastner S',                                                                  title: 'Probabilistic Maps of Visual Topography in Human Cortex', href: 'https://academic.oup.com/cercor/article-lookup/doi/10.1093/cercor/bhu277' },

  // 2014
  { year: '2014', journal: 'PNAS',                  author: 'Kelly YT, Webb TW, Meier JD, Arcaro MJ, Graziano MSA',                                                       title: 'Attributing awareness to oneself and to others', href: 'http://www.pnas.org/content/111/13/5012.abstract' },

  // 2012
  { year: '2012', journal: 'Neuron',                author: 'Wang L, Saalmann YB, Pinsk MA, Arcaro MJ, Kastner S',                                                        title: 'Electrophysiological low-frequency coherence and cross-frequency coupling contributed to BOLD connectivity', href: 'http://www.cell.com/neuron/abstract/S0896-6273(12)00887-2' },

  // 2011
  { year: '2011', journal: 'Journal of Neuroscience', author: 'Arcaro MJ, Pinsk MA, Li X, Kastner S',                                                                     title: 'Visuotopic organization of macaque posterior parietal cortex: An fMRI study', href: 'https://www.jneurosci.org/content/jneuro/31/6/2064.full.pdf' },

  // 2010
  { year: '2010', journal: 'Cognitive Neuroscience', author: 'Caplovitz GP, Arcaro MJ, Kastner S',                                                                        title: 'Stage 3 and what we see', href: 'pdf/CaplovitzCN_2010.pdf' },
  { year: '2010', journal: 'Journal of Visualized Experiments (JoVE)', author: 'Carmel D, Arcaro MJ, Kastner S, Hasson U',                                                title: 'How to create and use binocular rivalry', href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3159595/' },

  // 2009
  { year: '2009', journal: 'Journal of Neuroscience', author: 'Arcaro MJ*, McMains S*, Singer B, Kastner S',                                                               title: 'Retinotopic organization of human ventral visual cortex' },
  { year: '2009', journal: 'Journal of Neurophysiology', author: 'Pinsk MA, Arcaro MJ, Weiner KS, Kalkus JF, Inati SJ, Gross CG, Kastner S',                              title: 'Neural representations of faces and body parts in the macaque and human cortex: A comparative fMRI study' },
];

const NEWS = [
  { date: 'Apr 2026', body: 'Big congrats to Jess on winning Penn\u2019s Eliot Stellar Prize for her honors thesis on tree shrew object recognition behavior.' },
  { date: 'Apr 2026', body: 'Big congrats to Vlad on his paper on the development of neonate visual cortex. Out now in Neuron!', link: 'https://www.cell.com/neuron/fulltext/S0896-6273(26)00267-9' },
  { date: 'Dec 2025', body: 'Big congrats to Danny on his paper on natural scene processing in the human pulvinar. Out now in Nature Communications!', link: 'https://www.nature.com/articles/s41467-025-67472-3' },
  { date: 'Sept 2025', body: 'Big congrats to Monami on her paper mapping inside-out development of myelination in macaques and humans. Out now in PLOS Biology!', link: 'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003378' },
  { date: 'Jan 2025', body: 'Big congrats to Emily on her paper assessing the evolution of primate visual cortex. Out now in PNAS!', link: 'https://www.pnas.org/doi/10.1073/pnas.2421585122' },
  { date: 'Dec 2024', body: 'Big congrats to Vlad on his paper mapping the human neonate pulvinar. Out now in Current Biology!', link: 'https://www.cell.com/current-biology/abstract/S0960-9822(24)01583-5' },
  { date: 'Sept 2024', body: 'Big congrats to Hiroki on his macaque face patch histology paper. Out now in Cell Reports!', link: 'https://www.cell.com/cell-reports/fulltext/S2211-1247(24)01083-0' },
  { date: 'Jan 2024', body: 'Perspective piece on the universality of topographic brain maps. Out now in Annual Reviews Neuroscience!', link: 'https://www.annualreviews.org/doi/abs/10.1146/annurev-neuro-082823-073701' },
  { date: 'Jan 2024', body: 'The lab has received a Whitehall Foundation grant to study neuroanatomical constraints on the development of visual domains.' },
  { date: 'Oct 2023', body: 'The lab welcomes our new postdoc, Xingyu Liu!' },
  { date: 'Oct 2023', body: 'The lab welcomes our new postdoc, Vlad Ayzenberg!' },
  { date: 'Apr 2023', body: 'The lab is thrilled to be part of the Thalamus Conte Center where we will study thalamocortical cognitive networks in the healthy human brain.' },
];

const PI = {
  name: 'Michael Arcaro', role: 'Principal Investigator',
  img: PEOPLE_IMG + 'Arcaro.jpg',
  links: [
    { label: 'Bluesky', href: 'https://bsky.app/profile/mikearcaro.bsky.social' },
    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=07tNFdgAAAAJ&hl=en' },
    { label: 'CV',      href: 'https://www.arcarolab.org/pdf/Arcaro_CV_current.pdf' },
    { label: 'Email',   href: 'mailto:arcaro@sas.upenn.edu' },
  ],
};

const LAB_MEMBERS = [
  PI,
  { name: 'Xingyu Liu',           role: 'Postdoctoral Researcher', img: PEOPLE_IMG + 'xingyu.jpg',      links: [{ label: 'Twitter', href: 'https://twitter.com/liaobuzhinanbei' }, { label: 'Scholar', href: 'https://scholar.google.com/citations?user=gz-estEAAAAJ&hl=en' }] },
  { name: 'Diana King',           role: 'Graduate Student',        img: PEOPLE_IMG + 'DianaKing.jpg',    links: [{ label: 'CV', href: 'https://www.arcarolab.org/pdf/labfiles/Diana_CV.pdf' }] },
  { name: 'Emily Meyer',          role: 'Graduate Student',        img: PEOPLE_IMG + 'MeyerE.jpg',       links: [{ label: 'Bluesky', href: 'https://bsky.app/profile/emilymeyer.bsky.social' }] },
  { name: 'Monami Nishio',        role: 'Graduate Student',        note: 'co-advised with Dr. Allyson Mackey', img: PEOPLE_IMG + 'Monami.jpg', links: [{ label: 'CV', href: 'https://www.arcarolab.org/pdf/labfiles/20250828CV_MonamiNishio.pdf' }] },
  { name: 'Reyansh Sathishkumar', role: 'Graduate Student',        img: PEOPLE_IMG + 'Reyansh.jpg',      links: [] },
  { name: 'Camila Romero',       role: 'Graduate Student',                        img: PEOPLE_IMG + 'Romero_Camila.jpeg', links: [] },
];

const ALUMNI = [
  { name: 'Vlad Ayzenberg',     position: 'Assistant Professor, Temple University', href: 'https://sites.google.com/view/vlad-lab/home' },
  { name: 'Hiroki Oishi',       position: 'Assistant Professor, NIPS',              href: 'https://scholar.google.com/citations?user=0q6ri-8AAAAJ&hl=ja' },
  { name: 'Marcelina Martynek' },
  { name: 'Marco Balboa' },
  { name: 'Jennifer O\u2019Neill' },
  { name: 'Wei Song Ong' },
  { name: 'Lucy Song' },
  { name: 'Jess Wu' },
  { name: 'Trinity Kellarakos' },
  { name: 'Amelia Demopoulos' },
];

const COLLABORATORS = [
  { name: 'Margaret Livingstone', inst: 'Harvard Medical School',    href: 'https://neuro.hms.harvard.edu/faculty-staff/margaret-livingstone' },
  { name: 'Kevin Weiner',         inst: 'UC Berkeley',               href: 'https://psychology.berkeley.edu/people/kevin-weiner' },
  { name: 'Kendrick Kay',         inst: 'University of Minnesota',   href: 'https://www.neuroscience.umn.edu/people/kendrick-kay-phd' },
  { name: 'Nabil Imam',           inst: 'Georgia Tech',              href: 'https://www.cc.gatech.edu/people/nabil-imam' },
  { name: 'Joe Wekselblatt',      inst: 'CalTech',                   href: 'https://scholar.google.com/citations?user=3QgQWQgAAAAJ&hl=en' },
  { name: 'Kevin Hitchens',       inst: 'University of Pittsburgh',  href: 'https://www.aic.pitt.edu/people/t-kevin-hitchens-phd-mba' },
];

const RESEARCH_THEMES = [
  {
    n: '01', id: 'architecture', title: 'Architecture',
    headline: 'How is the visual brain organized, from cortex to thalamus?',
    body: 'Topographic maps are a central organizing principle of the visual brain. Retinotopic organization pervades not only visual cortex but also subcortical structures like the pulvinar, extending the reach of cortical organizing principles into thalamus. Using naturalistic stimuli, we have identified pulvinar regions selective for faces and bodies that are co-active with corresponding cortical areas during natural scene viewing. Functional clustering and hierarchical structure manifest in subcortex just as they do in cortex. Functional domains emerge within this map-based architecture, and they are architectonically distinct: face-selective patches show unique microstructural properties. This shared topographic framework provides a basis for understanding how the brain processes information and establishes functional homologies across primate species.',
    pubs: [
      { author: 'Guest DR et al.',             year: 2026, title: 'Processing of natural scenes in the human pulvinar',              journal: 'Nature Communications',        href: 'https://www.nature.com/articles/s41467-025-67472-3' },
      { author: 'Arcaro MJ & Livingstone MS',  year: 2024, title: 'A whole-brain topographic ontology',                             journal: 'Annual Reviews Neuroscience',   href: 'https://www.annualreviews.org/doi/abs/10.1146/annurev-neuro-082823-073701' },
      { author: 'Oishi H et al.',              year: 2024, title: 'Inferotemporal face patches are histo-architectonically distinct', journal: 'Cell Reports',                  href: 'https://www.cell.com/cell-reports/fulltext/S2211-1247(24)01083-0' },
    ],
    media: { kind: 'image', src: IMG + 'maps.png', alt: 'Retinotopic maps throughout the primate visual system', caption: 'Retinotopic maps throughout the primate visual system.' },
  },
  {
    n: '02', id: 'development', title: 'Development',
    headline: 'How does the visual system become organized during development?',
    body: 'The newborn brain is not a blank slate: major pathways, maps, and thalamo-cortical connections are already in place early in life. But early organization is not the same as adult organization. Visual systems continue to mature as brain circuits grow, experience accumulates, and behavior changes. Our work asks how early-developing architecture constrains later specialization, and how experience refines visual pathways across infancy, childhood, and adulthood.',
    pubs: [
      { author: 'Ayzenberg V & Arcaro MJ',   year: 2026, title: 'Functional organization of the human visual system at birth and across late gestation', journal: 'Neuron',            href: 'https://www.sciencedirect.com/science/article/pii/S0896627326002679' },
      { author: 'Ayzenberg V et al.',   year: 2025, title: 'An intrinsic hierarchical, retinotopic organization of visual pulvinar connectivity in the human neonate', journal: 'Current Biology',            href: 'https://www.cell.com/current-biology/abstract/S0960-9822(24)01583-5' },
      { author: 'Scott LS & Arcaro MJ', year: 2023, title: 'A domain-relevant framework for the development of face processing',                                       journal: 'Nature Reviews Psychology',  href: 'https://www.nature.com/articles/s44159-023-00152-5' },
      { author: 'Arcaro MJ et al.',     year: 2017, title: 'Seeing faces is necessary for face-domain formation',                                                       journal: 'Nature Neuroscience',        href: 'https://www.nature.com/articles/nn.4635' },
    ],
    media: { kind: 'video', src: 'https://www.arcarolab.org/img/research-img/BrainMaps.mp4', poster: IMG + 'neonate_viscortex.jpg', caption: 'Emergence of cortical maps across development.' },
  },
  {
    n: '03', id: 'evolution', title: 'Evolution',
    headline: 'How has evolution modified a conserved visual system architecture across primates?',
    body: 'Humans and other primates share core principles of visual system organization, including topographic maps, hierarchical pathways, and links between anatomical structure and functional representation. Yet these shared principles are not implemented identically across species. Visual areas can expand, anatomical landmarks can correspond to different functional representations, and developmental programs can unfold over different timelines. Our work uses comparative neuroimaging, anatomy, and developmental analyses to ask which features of visual system organization are conserved across primates, and which have been modified in humans.',
    pubs: [
      { author: 'Meyer E et al.',              year: 2025, title: 'Expansion of a conserved architecture drives the evolution of primate visual cortex',                  journal: 'PNAS',                        href: 'https://www.pnas.org/doi/10.1073/pnas.2421585122' },
      { author: 'Nishio M et al.',             year: 2025, title: 'Humans have a longer period of cortical maturation across depth and hierarchy than macaques',          journal: 'PLOS Biology',                href: 'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003378' },
      { author: 'Arcaro MJ et al.',             year: 2022, title: 'The retrocalcarine sulcus maps different retinotopic representations in macaques and humans',          journal: 'Brain Structure and Function', href: 'https://link.springer.com/article/10.1007/s00429-021-02427-0' },
    ],
    media: { kind: 'image', src: IMG + 'humanmacaque.jpg', alt: 'Cross-species visual system comparison', caption: 'Cross-species comparison of primate visual cortex.' },
  },
];

const OPENSCIENCE_PROJECTS = [
  {
    id: 'brainana', title: 'Brainana',
    tagline: 'An automated, BIDS-compatible preprocessing pipeline for macaque MRI.',
    description: 'Brainana integrates structural and functional MRI preprocessing, cortical surface reconstruction, quality control reporting, and template-to-individual atlas projection in a unified macaque neuroimaging framework. Distributed as a containerized package with optional cloud execution, it has been evaluated on 23 datasets spanning task-evoked and resting-state data.',
    img: 'https://brainana.readthedocs.io/en/latest/_images/brainana_unified_framework.png',
    imgAlt: 'Brainana unified framework schematic',
    links: [{ label: 'Documentation', href: 'https://brainana.readthedocs.io/en/latest/index.html' }],
  },
  {

    id: 'shrewModularbox', title: 'ModularShrewBox',
    tagline: 'A low-cost, modular behavior box for visual experiments in small animals.',
    description: 'Designed for tree shrews and other small animals. Stepper-motor reward pumps, adjustable monitor mount, capacitive touch pads, and an onboard Raspberry Pi. Laser-cut and 3D-printable, daisy-chainable, and driven by Python/PsychoPy.',
    note: 'We are updating some components to the box. If interested in building, please reach out for guidance.',
    img: 'https://raw.githubusercontent.com/arcaro-lab/ShrewBox/main/Pictures/behaviorbox.png',
    imgAlt: 'ShrewBox behavior apparatus',
    links: [{ label: 'GitHub Repository', href: 'https://github.com/arcaro-lab/ShrewBox' }],

  },
  {
    id: 'shrew3Dbox', title: '3D In-Cage Display',
    tagline: 'A low-cost behavior box for in-cage visual experiments in small animals.',
    description: 'Designed for tree shrews and other small animals. Dual display leveraging the Pepper\'s Ghost illusion for a holographic-like display, and an onboard Raspberry Pi for visual stimulus delivery.',
    img: 'img/research-img/DesignV5v5.png',
    imgAlt: '3D in-cage display apparatus',
    links: [{ label: 'GitHub Repository - Coming Soon', href: '' }],
  },
  {
    id: 'brainmaps', title: 'BrainMaps',
    tagline: 'A repository of fMRI brain maps from the lab.',
    description: 'Group-level retinotopic, category-selective, and connectivity maps from our published work. Provided in standard spaces for download and reuse.',
    img: null,
    links: [{ label: 'GitHub Repository', href: 'https://github.com/arcaro-lab/BrainMaps' }],
  },
  {
    id: 'lab-github', title: 'Arcaro Lab on GitHub',
    tagline: 'All other code released by the lab.',
    description: 'Analysis scripts, experimental task code, and supplementary repositories accompanying our publications.',
    img: null,
    links: [{ label: 'github.com/arcaro-lab', href: 'https://github.com/arcaro-lab' }],
  },
];

const PRESENTATIONS = [
  { year: '2026', author: 'Nishio M, Liu X, Collignon O, Xu Y, Szwed M, Zimmermann M, Mackey AP, Arcaro MJ', yearDisplay: '2026', title: 'Reorganization across cortical hierarchies and modality-specific thalamic plasticity  in congenital sensory loss', venue: 'Vision Sciences Society 2026' },
  { year: '2026', author: 'Oishi H, Takemura H, Hitchens TK, Livingstone MS, Weiner KS, Arcaro MJ', yearDisplay: '2026', title: 'Spatial organization of occipital white matter tracts in prenatal rhesus macaque brains', venue: 'Organization of Human Brain Mapping 2026' },
  { year: '2026', author: 'Oishi H, Takemura H, Hitchens TK, Livingstone MS, Weiner KS, Arcaro MJ', yearDisplay: '2026', title: 'Prenatal emergence of occipital white matter tracts in rhesus macaque brains', venue: 'Annual Meeting of Japan Human Brain Mapping Society 2026' },
  { year: '2025', author: 'Ayzenberg V, Arcaro MJ', title: 'The building blocks of vision: Cortical and subcortical organization of the newborn visual system', venue: 'Vision Sciences Society Conference 2025' },
  { year: '2025', author: 'Liu X, Arcaro MJ', title: 'A common pulvinar-cortical architecture across visual tasks', venue: 'Vision Sciences Society Conference 2025' },
  { year: '2025', author: 'Meyer E, Zhang L, Cottaris NP, Brainard DH, Arcaro MJ', title: 'Modeling tree shrew high-level visual behaviors', venue: 'Vision Sciences Society Conference 2025' },
  { year: '2025', author: 'Jagadeesh AV, Najafian S, Arcaro MJ*, Livingstone MS*', title: 'Spatiofeatural receptive field modeling of primate IT cortex neurons', venue: 'Vision Sciences Society Conference 2025' },
  { year: '2025', author: 'Najafian S, Berezovskii V, Arcaro MJ*, Livingstone MS*', title: 'Exploring the influence of binocular anti-coactivation on ocular dominance column formation beyond primary visual cortex', venue: 'Vision Sciences Society Conference 2025' },
  { year: '2025', author: 'Caldinelli C, Li JJ, Chao G, Arcaro MJ & Collins A', title: 'The role of the thalamus in dynamic decision-making', venue: 'RLDM 2025' },
  { year: '2025', author: 'Oishi H, Berezovski VK, Livingstone MS, Weiner KS, Arcaro MJ', title: 'Eccentricity representation shapes the neurometabolic organization in macaque IT categorical regions', venue: 'Japanese Human Brain Mapping Society' },
  { year: '2025', author: 'Meyer EE, Arcaro MJ', title: 'Investigating the capacity for tree shrew high-level vision', venue: 'Tree Shrew Discovery Conference 2025' },
  { year: '2025', author: 'Lugovskoy AA, Meyer EE, Arcaro MJ', title: 'An open-source, customizable system for studying high-level visual behavior in tree shrews', venue: 'Tree Shrew Discovery Conference 2025' },
  { year: '2024', author: 'Arcaro MJ', title: 'Topographic maps scaffold visual development', venue: 'Society for Neuroscience Conference Abstracts 49 Symposium' },
  { year: '2024', author: 'Liu X, Arcaro MJ', title: 'Functional coupling with cognitive control networks reveals shared and distinct organizational principles of pulvinar and mediodorsal nucleus', venue: 'Society for Neuroscience Conference Abstracts 49' },
  { year: '2024', author: 'Oishi H, Berezovski VK, Livingstone MS, Weiner KS, Arcaro MJ', title: 'The histo-architecture of inferotemporal face patches in macaques', venue: 'Society for Neuroscience Conference Abstracts 49' },
  { year: '2024', author: 'Najafian S, Berezovski VK, Arcaro MJ, MS Livingstone', title: 'Exploring the influence of binocular co-activation on ocular dominance column formation beyond primary visual cortex', venue: 'Society for Neuroscience Conference Abstracts 49' },
  { year: '2024', author: 'Caldinelli C, Li JJ, Arcaro MJ, Collins AG', title: 'The role of the thalamus in dynamic decision-making', venue: 'Society for Neuroscience Conference Abstracts 49' },
  { year: '2024', author: 'Liu X, Arcaro MJ, Tran MLG, Alitto HJ, Usrey W, Kastner S', title: 'Endogenous attentional sampling under spatial uncertainty', venue: 'Society for Neuroscience Conference Abstracts 49' },
  { year: '2024', author: 'Ayzenberg V & Arcaro MJ', title: 'The building blocks of vision: cortical and subcortical organization of the newborn visual system', venue: "FIT'NG Conference" },
  { year: '2024', author: 'Hwang S, Wekselblatt J, Hitchens KT, Shapiro MG, Arcaro MJ', title: 'Functional neuroimaging of the tree shrew (Tupaia belangeri) brain', venue: 'Experimental Nuclear Magnetic Resonance Conference' },
  { year: '2024', author: 'Xie Y, Arcaro MJ*, Imam N*', title: 'Modeling the formation of extrastriate visual maps', venue: 'Vision Sciences Society 2024. *equal contribution' },
  { year: '2024', author: 'Jagadeesh A, Najafian S, Kay KN, Arcaro MJ*, Livingstone MS*', title: 'Spatially-specific feature tuning drives response properties of macaque IT cortex', venue: 'Vision Sciences Society 2024. *equal contribution' },
  { year: '2024', author: 'Liu X, Arcaro MJ, Kastner S', title: 'Endogenous attentional sampling under spatial uncertainty: preliminary results', venue: 'Vision Sciences Society 2024' },
  { year: '2023', author: 'Arcaro MJ, Hitchens KT, Wekselblatt J', title: 'A multimodal digital atlas of the tree shrew (Tupaia belangeri) brain', venue: 'Society for Neuroscience Conference Abstracts 48' },
  { year: '2023', author: 'Meyer EE, Song C, Ong WS, Arcaro MJ', title: 'Investigating the capacity for tree shrew high-level vision', venue: 'Society for Neuroscience Conference Abstracts 48' },
  { year: '2023', author: 'Sharma S, Arcaro MJ, Livingstone MS', title: 'The impact of strobe-rearing on the development of the macaque visual system', venue: 'Society for Neuroscience Conference Abstracts 48' },
  { year: '2023', author: 'Oishi H, Berezovskii VK, Livingstone MS, Weiner KS, Arcaro MJ', title: 'The microarchitecture of face patches in macaques', venue: 'Organization of Human Brain Mapping 2023' },
  { year: '2023', author: 'Meyer EE & Arcaro MJ', title: 'Larger area size, not increased number, better explains expansion of human visual cortex', venue: 'Vision Sciences Society 2023' },
  { year: '2023', author: 'Arcaro MJ', title: 'The building blocks of vision: evidence for a hierarchical, retinotopic organization in the human neonate brain', venue: 'Vision Sciences Society 2023' },
  { year: '2023', author: 'Arcaro MJ', title: 'Topographic constraints on visual development', venue: 'Vision Sciences Society 2023 Symposium' },
  { year: '2023', author: 'Sharma S, Arcaro MJ, Livingstone MS', title: 'Strobe-rearing preserves motion selectivity but disrupts direction selectivity in macaque area MT', venue: 'Vision Sciences Society 2023' },
  { year: '2023', author: 'Rodriguez IF, Linsley D, Gopal J, Fel T, Arcaro MJ, Sharma S, Livingstone MS, Serre T', title: 'Harmonizing the visual strategies of image-computable models with humans yields more performant and interpretable models of primate visual system function', venue: 'Vision Sciences Society 2023' },
  { year: '2023', author: 'Arcaro MJ', title: 'Preliminary report on a population template atlas of the tree shrew brain', venue: 'Tree Shrew Discovery 2023' },
  { year: '2023', author: 'Meyer EE, Ong WS, Balboa M, Arcaro MJ', title: 'Assessing tree shrew high-level visual behavior using conventional and natural paradigms', venue: 'Tree Shrew Discovery 2023' },
  { year: '2022', author: 'Meyer EE, Ong WS, Balboa M, Arcaro MJ', title: 'Assessing tree shrew high-level visual behavior using conventional and natural paradigms', venue: 'Society for Neuroscience Conference Abstracts 47: Program Number 297.04' },
  { year: '2022', author: 'Oishi H, Berezovski VK, Livingstone MS, Weiner K, Arcaro MJ', title: 'The microarchitecture of face-selective patches in macaques', venue: 'Society for Neuroscience Conference Abstracts 47: Program Number 715.09' },
  { year: '2022', author: 'Arcaro MJ', title: 'Macro- and microstructural analyses of face-selective patches in macaques', venue: 'Workshop on Cortical Sulci. Paris, France' },
  { year: '2022', author: 'Song C & Arcaro MJ', title: 'Mapping anatomical connectivity between visual cortex and the pulvinar in human neonates', venue: 'Vision Sciences Society 2022' },
  { year: '2022', author: 'Arcaro MJ, Guest DR, Allen E, Kay KN', title: 'Recapitulation of cortical visual hierarchy in the human pulvinar', venue: 'Vision Sciences Society 2022' },
  { year: '2021', author: 'Arcaro MJ & Livingstone MS', title: 'Face neurons see Waldo', venue: 'Society for Neuroscience Conference Abstracts 46: Program Number P487.07' },
  { year: '2021', author: 'Arcaro MJ', title: 'Sulcal morphology predicts face patches in macaques', venue: 'FLUX 2021 Symposium' },
  { year: '2021', author: 'Ellis C, Yates T, Arcaro MJ, Turk-Browne NB', title: 'Prediction of retinotopic organization in infant visual cortex from movies', venue: 'V-VSS 2021' },
  { year: '2021', author: 'Guest D, Allen E, Wu Y, Naselaris T, Arcaro MJ, Kay K', title: 'Evidence for a ventral visual stream in the pulvinar', venue: 'V-VSS 2021' },
  { year: '2021', author: 'Martynek M, Kastner S, Livingstone MS, Arcaro MJ', title: 'Testing the molecular anchor hypothesis in humans and macaques', venue: 'SfN Global Connectome' },
  { year: '2020', author: 'Arcaro MJ, Mautz T, Livingstone MS', title: 'Anatomical folding predicts the location of face-selective domains in macaque IT', venue: 'Vision Sciences Society Meeting Abstract 20. V-VSS 2020' },
  { year: '2020', author: 'Ellis C, Yates T, Skalaban L, Bejjanki V, Arcaro MJ, Turk-Browne N', title: 'Retinotopic mapping with fMRI in awake, behaving infants', venue: 'Vision Sciences Society Meeting Abstract 20. V-VSS 2020' },
  { year: '2019', author: 'Arcaro MJ, Ponce CR, Livingstone MS', title: 'The neurons that mistook a hat for a face', venue: 'Society for Neuroscience Conference Abstracts 45: Program Number 489.05' },
  { year: '2019', author: 'Arcaro MJ, Ponce CR, Livingstone MS', title: 'The neurons that mistook a hat for a face', venue: 'Vision Sciences Society Meeting Abstract 19' },
  { year: '2019', author: 'Natu V, Arcaro MJ, Barnett MA, Gomez J, Livingstone MS, Grill-Spector K, Weiner KS', title: 'Development and evolution of sulcal morphology in place-selective regions of ventral temporal cortex', venue: 'HBM 2019' },
  { year: '2018', author: 'Arcaro MJ, Schade PF, Livingstone MS', title: 'Multiple body maps in newborn macaques', venue: 'Society for Neuroscience Conference Abstracts 44: Program Number 642.14' },
  { year: '2018', author: 'Arcaro MJ, Schade PF, Livingstone MS', title: 'Preserved cortical organization in the absence of early visual input', venue: 'Vision Sciences Society Meeting Abstract 18' },
  { year: '2018', author: 'Schade PF, Arcaro MJ, Livingstone MS', title: 'Effects of experience on face and body selective neurons in macaque IT', venue: 'Society for Neuroscience Conference Abstracts 44: Program Number 307.16' },
  { year: '2018', author: 'Benson NC, Jamison KW, Arcaro MJ, Vu AT, Glasser MF, Van Essen DC, Ugurbil K, Winawer J, Kay KN', title: 'The human connectome project 7t retinotopy dataset: A freely available resource of human visual organization', venue: 'Society for Neuroscience Conference Abstracts 44: Program Number 719.07' },
  { year: '2017', author: 'Arcaro MJ, Schade PF, Livingstone MS', title: 'Experience-dependent development of the visual system is anchored to an innate retinotopic organization', venue: 'Society for Neuroscience Conference Abstracts 43: Program Number 492.08' },
  { year: '2017', author: 'Arcaro MJ & Livingstone MS', title: 'Retinotopic organization of scene area in macaque inferior temporal cortex and its implications for development', venue: 'Vision Sciences Society Meeting Abstract 17' },
  { year: '2017', author: 'Livingstone MS, Arcaro MJ, Schade PF, Vincent JL, Ponce CR', title: 'The effects of early face deprivation on the macaque face-patch system', venue: 'Society for Neuroscience Conference Abstracts 43: Program Number 492.09' },
  { year: '2016', author: 'Arcaro MJ, Vincent JL, Schade P, Srihasam K, Livingstone MS', title: 'A retinotopic proto-organization in IT present at birth', venue: 'Society for Neuroscience Conference Abstracts 42: Program Number 800.04' },
  { year: '2016', author: 'Culham JC, Arcaro MJ, Thaler L, McLean DA, Quinlan DJ, Dutton GN, Goodale MA, Kastner S', title: 'Cortical and subcortical responses to moving stimuli in a patient with Riddoch phenomenon arising from bilateral visual cortex lesions', venue: '34th European Workshop on Cognitive Neuropsychology. Bressanone, Italy. Poster #114' },
  { year: '2015', author: 'Arcaro MJ, Pinsk MA, Kastner S', title: 'Functional and anatomical organization of the dorsal pulvinar in humans', venue: 'Society for Neuroscience Conference Abstracts 41: Program Number 148.27' },
  { year: '2015', author: 'Lombaert H, Arcaro MJ, Kastner S, Ayache N', title: 'Brain transfer for the analysis of cortical data', venue: 'Society for Neuroscience Conference Abstracts 41: Program Number 830.11' },
  { year: '2014', author: 'Arcaro MJ, Pinsk MA, Kastner S', title: 'Functional and anatomical connectivity between the pulvinar and temporal cortex', venue: 'Society for Neuroscience Conference Abstracts 40: Program Number 816.15' },
  { year: '2013', author: 'Arcaro MJ, Pinsk MA, Kastner S', title: 'Investigating the organization of functional and anatomical thalamo-cortical connectivity in the human pulvinar', venue: 'Society for Neuroscience Nanosymposium 310: Program Number 310.08' },
  { year: '2012', author: 'Arcaro MJ, Honey CJ, Mruczek REB, Kastner S, Hasson U', title: 'Functional connectivity reveals a large-scale eccentricity organization within visual cortex', venue: 'Society for Neuroscience Conference Abstracts 38: Program Number 573.08' },
  { year: '2012', author: 'Wang L, Mruczek REB, Arcaro MJ, Kastner S', title: 'Visual topographic probability maps (VTPM) in standard MNI space', venue: 'Society for Neuroscience Conference Abstracts' },
  { year: '2011', author: 'Arcaro MJ & Kastner S', title: 'Topographic organization and attention functions of the human pulvinar', venue: 'Society for Neuroscience Minisymposium 113: Program Number 113.02' },
  { year: '2011', author: 'Arcaro MJ, Mclean DA, Quinlan J, Dutton GN, Goodale MA, Kastner S, Culham JC', title: 'Cortical and subcortical response properties in a patient with visual cortex lesions', venue: 'Society for Neuroscience Conference Abstracts 37: Program Number 695.12' },
  { year: '2011', author: 'Pinsk MA, Saalmann YB, Wang L, Arcaro MJ, Li X, Kastner S', title: 'Electrophysiological basis of resting state fMRI', venue: 'Society for Neuroscience Conference Abstracts 37: Program Number 398.08' },
  { year: '2010', author: 'Arcaro MJ, Pinsk MA, McMains SA, Kastner S', title: 'Visuotopic organization of the human pulvinar revealed using high-resolution fMRI', venue: 'Society for Neuroscience Conference Abstracts 36: Program Number 72.14' },
  { year: '2010', author: 'Arcaro MJ, Pinsk MA, Li X, Kastner S', title: 'Topographic organization of posterior parietal cortex in awake macaque monkeys: an fMRI study', venue: 'Gordon Conference: Neurobiology of Cognition, Waterville Valley, NH' },
  { year: '2010', author: 'Pinsk MA, Arcaro MJ, Kastner S', title: 'A comparative approach using fMRI to investigate the face perception network in humans and macaques', venue: 'ECVP. Lausanne, Switzerland' },
  { year: '2009', author: 'Arcaro MJ, Pinsk MA, Konen C, Li X, Kastner S', title: 'Topographic organization of posterior parietal cortex in awake macaque monkeys revealed using fMRI', venue: 'Society for Neuroscience Conference Abstracts 35: Program Number 759.3' },
  { year: '2009', author: 'Lee RF, Xu J, Prabhakaran K, Arcaro MJ', title: 'Spatial and spectral analysis for a radial sampling balance SSFP for fMRI', venue: 'ISMRM: Program Number 7071' },
  { year: '2008', author: 'Arcaro MJ & Kastner S', title: 'Neural correlates of binocular rivalry in the human visual system using simple and complex stimuli', venue: 'Society for Neuroscience Conference Abstracts 34: Program Number 462.24' },
  { year: '2008', author: 'Arcaro MJ, McMains S, Kastner S', title: 'Phase-encoded attention tasks reveal topographic maps in posterior parahippocampal cortex', venue: 'Vision Sciences Society Meeting Abstract (8)6, 1001' },
  { year: '2008', author: 'Pinsk MA, Arcaro MJ, Konen CS, Li X, Kastner S, Inati SJ', title: 'Improved functional MRI of the macaque ventral visual pathway at 3T using multi-echo EPI and dynamic, field map corrected image reconstruction', venue: 'Society for Neuroscience Conference Abstracts 34: Program Number 260.2' },
  { year: '2008', author: 'Konen CS, Pinsk MA, Arcaro MJ, Li X, Inati SJ, Kastner S', title: 'Object representations in monkey posterior parietal cortex', venue: 'Society for Neuroscience Conference Abstracts 34: Program Number 261.2' },
  { year: '2008', author: 'Konen CS, Pinsk MA, Arcaro MJ, Kastner S', title: 'Object representations in the dorsal pathway: fMRI adaptation effects in macaque posterior parietal cortex', venue: 'Vision Sciences Society Meeting Abstract (8)6, 493' },
  { year: '2007', author: 'Arcaro MJ, McMains S, Kastner S', title: 'Phase-encoded attentive tracking reveals topographic maps in human ventral occipital cortex', venue: 'Society for Neuroscience Conference Abstracts 33: Program Number 280.4' },
];

const SPECIES = [
  {
    id: 'human',
    commonName: 'Human',
    latinName: 'Homo sapiens',
    img: 'img/species-img/human.png',
    detailImg: IMG + 'neonate_viscortex.jpg',
    imgAlt: 'Human',
    why: "Humans are the primary translational target of our work. Non-invasive neuroimaging allows us to study thalamocortical organization, resting-state connectivity, and the full developmental arc from neonates to adults.",
    methods: ['7T and 3T fMRI', 'Resting-state & naturalistic movie viewing', 'Propofol sedation & sleep studies', 'Developmental imaging (neonates to adults)', 'Diffusion tensor imaging'],
    questions: "How does the pulvinar coordinate cortical networks? How is the hierarchical organization of visual cortex established at birth? How does the extended human developmental timeline shape perceptual and cognitive abilities?",
    labWork: "The lab's human work centers on the functional organization of the visual thalamus and its relationship to cortex. Across resting state, naturalistic movie viewing, and altered states of consciousness, we have characterized the architecture of the pulvinar and its hierarchical coupling with visual and higher-order cortical areas. A parallel line of work examines visual cortex development using fMRI in neonates and infants, asking what organization is present at birth and how it is shaped by subsequent experience.",
    papers: [
      { author: 'Ayzenberg V & Arcaro MJ', year: 2026, title: 'Functional organization of the human visual system at birth and across late gestation', journal: 'Neuron', href: 'https://www.cell.com/neuron/fulltext/S0896-6273(26)00267-9' },
      { author: 'Guest DR, Allen EJ, Kay KN, Arcaro MJ', year: 2026, title: 'Processing of natural scenes in the human pulvinar', journal: 'Nature Communications', href: 'https://www.nature.com/articles/s41467-025-67472-3' },
      { author: 'Arcaro MJ, Pinsk MA, Chen J, Kastner S', year: 2018, title: 'Organizing principles of pulvino-cortical coupling in humans', journal: 'Nature Communications', href: 'https://rdcu.be/bdRBG' },
    ],
  },
  {
    id: 'macaque',
    commonName: 'Rhesus Macaque',
    latinName: 'Macaca mulatta',
    img: 'img/species-img/macaque.png',
    detailImg: IMG + 'humanmacaque.jpg',
    imgAlt: 'Rhesus Macaque',
    why: "Macaques share the closest phylogenetic relationship with humans among our model species and have a well-characterized visual system, bridging invasive and non-invasive methods and permitting controlled experience-deprivation experiments impossible in humans.",
    methods: ['fMRI', 'Electrophysiology', 'Anatomical tracing & histology', 'Face-rearing & deprivation paradigms', 'Cortical surface analysis'],
    questions: "How are functional domains such as face patches organized relative to retinotopic maps? What role does early visual experience play in domain formation? How does macaque cortical maturation compare with the prolonged human timeline?",
    labWork: "The lab's macaque work has focused on the relationship between retinotopic map organization and higher-level functional domains, particularly face- and body-selective patches in inferotemporal cortex. We have shown that these domains are architectonically distinct from surrounding cortex, that their locations are predictable from sulcal morphology, and that visual experience during development is necessary for their formation. More recent work examines how cortical maturation proceeds across the hierarchy in macaques compared to humans, and characterizes the evolution of visual cortex organization across primate species.",
    papers: [
      { author: 'Oishi H, Berezovskii VK, Livingstone MS, Weiner KS, Arcaro MJ', year: 2026, title: 'Metabolic organization of macaque visual cortex reflects retinotopic eccentricity and category selectivity', journal: 'PLOS Biology', href: 'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003847' },
      { author: 'Oishi H et al.', year: 2024, title: 'Inferotemporal face patches are histo-architectonically distinct', journal: 'Cell Reports', href: 'https://www.cell.com/cell-reports/fulltext/S2211-1247(24)01083-0' },
      { author: 'Meyer E et al.', year: 2025, title: 'Expansion of a conserved architecture drives the evolution of primate visual cortex', journal: 'PNAS', href: 'https://www.pnas.org/doi/10.1073/pnas.2421585122' },
    ],
  },
  {
    id: 'treeshrew',
    commonName: 'Tree Shrew',
    latinName: 'Tupaia belangeri',
    img: 'img/species-img/treeshrew.png',
    detailImg: IMG + 'shrewatlas.png',
    imgAlt: 'Tree Shrew brain atlas',
    why: "Tree shrews occupy an important position for comparative vision research: they are closer to primates than rodents are, but they lack the foveal specialization that defines primate vision. This makes them a powerful model for asking which features of visual system organization depend on a primate-like visual ecology and which reflect more general mammalian principles.",
    methods: ['fMRI', 'Behavioral phenotyping', 'Population receptive field mapping', 'Multi-species brain atlas construction', 'Ultrasound neuroimaging'],
    questions: "Can high-level visual categorization and object recognition emerge without a fovea? Which aspects of visual system organization are shared across tree shrews and primates, and which depend on primate-specific specializations?",
    labWork: "Tree shrews let us ask which features of high-level vision are specific to primates and which reflect broader principles of mammalian visual system organization. They are close relatives of primates with an organized visual cortex, but unlike humans and macaques they lack a fovea and have coarser visual acuity. This combination allows us to test whether sophisticated visual abilities require primate-like visual precision, or whether they can emerge from a compact visual system organized around similar computational principles. Our work examines how tree shrews recognize objects, generalize across visual change, and flexibly use different kinds of visual information as task demands change.",
    papers: [
      { author: 'Meyer EE et al.', year: 2026, title: 'Transformation-tolerant object recognition in tree shrews despite lacking a fovea', journal: 'bioRxiv', href: 'https://www.biorxiv.org/content/10.64898/2026.04.10.717715v1' },
      
    ],
  },
];