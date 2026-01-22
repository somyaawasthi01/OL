export const COMPREHENSIVE_QUESTIONS = [
  { id: 'mainSkinConcern', section: 'Discover', question: "What is your main skin goal today?", options: ["Clear Acne", "Hydrate Dryness", "Calm Redness", "Keep it Glowing"] },
  { id: 'hairType', section: 'Discover', question: "Tell us about your hair type!", options: ["Straight", "Wavy", "Curly", "Coily"] },
  { id: 'mainHairConcern', section: 'Discover', question: "What does your hair need most?", options: ["Hydration & Shine", "Strength & Repair", "Volume & Growth", "Scalp Peace"] },
  { id: 'skincareTime', section: 'Discover', question: "How much time for your routine?", options: ["Every Day", "3x a Week", "When I can", "Starting today!"] },
  { id: 'ingredientAllergies', section: 'Discover', question: "Any allergies we should know about?", options: ["None", "Fragrance", "Sulfates", "Nuts", "Dairy"], multi: true }
];

// Verified Knowledge Base with Medical Citations
export const KNOWLEDGE_BASE = [
  {
    id: "kb-1",
    question: "What is dry skin?",
    answer: "Dry skin (Xerosis) is a condition where the skin lack's sufficient moisture in its outer layers. It is often caused by a compromised lipid barrier which allows water to escape (TEWL).",
    citation: { source: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/dry-skin/symptoms-causes/syc-20353885" }
  },
  {
    id: "kb-2",
    question: "Is Vitamin C safe?",
    answer: "Yes, Vitamin C (L-Ascorbic Acid) is safe. It is a powerful antioxidant that protects against UV damage. It should be applied to clean, dry skin to maximize penetration.",
    citation: { source: "PubMed (NIH)", url: "https://pubmed.ncbi.nlm.nih.gov/24844151/" }
  },
  {
    id: "kb-3",
    question: "How to fix hair breakage?",
    answer: "Hair breakage is usually caused by lack of elasticity and mechanical stress. Focus on 'Bond Repair' products containing peptides and proteins.",
    citation: { source: "AAD", url: "https://www.aad.org/public/diseases/hair-loss/insider/stop-breakage" }
  },
  {
    id: "kb-4",
    question: "What is the acid mantle?",
    answer: "The acid mantle is a very thin, slightly acidic film (pH ~5.5) on the skin surface that acts as a barrier to bacteria and viruses.",
    citation: { source: "Scientific Reports", url: "https://www.nature.com/articles/s41598-020-74526-x" }
  }
];

// Deterministic Plans DB with Authority Badges
export const PLANS_DB = {
  "Clear Acne": {
    title: "The Clarity Protocol",
    source: "AAD Guidelines",
    skin: "Focus on BHA (Salicylic Acid) to clear pores and Niacinamide to control oil. Avoid heavy oils.",
    food: "Reduce high-glycemic index foods and dairy. Increase Zinc-rich seeds.",
    habits: "Double cleanse every evening. Change pillowcases every 2 days."
  },
  "Hydrate Dryness": {
    title: "Moisture Lock Ritual",
    source: "Mayo Clinic Protocols",
    skin: "Layer Hyaluronic Acid on damp skin. Seal with a Ceramide-rich cream.",
    food: "Increase healthy fats like Avocado and Walnuts. Drink 2.5L water daily.",
    habits: "Short, lukewarm showers only. Use a humidifier at night."
  },
  "Calm Redness": {
    title: "The Soothing Shield",
    source: "NIH Dermatology",
    skin: "Use Cica (Centella) and Azelaic Acid. Avoid harsh scrubs or physical exfoliants.",
    food: "Focus on anti-inflammatory foods like Turmeric and Salmon.",
    habits: "Identify and avoid triggers like spicy food or extreme heat."
  },
  "Keep it Glowing": {
    title: "Luminous Glow Cycle",
    source: "Clinical Best Practice",
    skin: "Alternate between Vitamin C in the morning and a gentle Lactic Acid peel weekly.",
    food: "High antioxidant berries and Green Tea for cellular protection.",
    habits: "Get 7-8 hours of quality sleep to maximize cell regeneration."
  }
};

export const MORNING_HACKS = [
  { title: "Sip to Glow", desc: "Start with a big glass of lemon water.", benefit: "Wakes up your digestion." },
  { title: "The Wait Protocol", desc: "Wait 2 minutes between serum layers.", benefit: "Maximum absorption depth." },
  { title: "Instant Skin Prep", desc: "Splash your face with cool water to tighten.", benefit: "Instantly depuffs your skin." },
  { title: "Love your Scalp", desc: "A quick 1-minute head massage.", benefit: "Wakes up hair follicles." },
  { title: "Morning Sunshine", desc: "Get 5 minutes of natural light.", benefit: "Sets your mood and clock." }
];

export const EVENING_HACKS = [
  { title: "Silk Dreams", desc: "Switch to a silk pillowcase tonight.", benefit: "Zero friction, no frizz." },
  { title: "Digital Sunset", desc: "No screens 1 hour before sleep.", benefit: "Lets your skin cells repair." },
  { title: "Magnesium Mist", desc: "A little magnesium on your feet.", benefit: "Deep sleep, better recovery." },
  { title: "The Clean Slate", desc: "A double cleanse to wash the day away.", benefit: "Prevents clogs and acne." }
];

export const BIO_TRENDS = [
  { title: "Neuro-Cosmetics", desc: "Ingredients that interact with skin's nerve endings to reduce stress-induced sensitivity." },
  { title: "Exosome Therapy", desc: "Cell-signaling molecules that tell skin cells to repair and regenerate." },
  { title: "Microbiome Balance", desc: "Focusing on the skin's ecosystem rather than just killing bacteria." }
];

export const COMMON_CONCERNS = [
  {
    title: "Persistent Breakouts",
    category: "Skin",
    description: "Inflammatory acne that doesn't respond to typical washes.",
    recommendation: "Focus on BHA and Zinc.",
    ingredientsToLookFor: ["Salicylic Acid", "Zinc PCA", "Niacinamide"]
  },
  {
    title: "Excessive Hair Shedding",
    category: "Hair",
    description: "Noticing more hair than usual in the brush or shower.",
    recommendation: "Scalp stimulation and Rosemary oil.",
    ingredientsToLookFor: ["Rosemary Oil", "Biotin", "Saw Palmetto"]
  }
];

export const DIET_LIBRARY = [
  {
    id: 'walnuts',
    food: 'Walnuts',
    image: '',
    tagline: 'The Brain for your Skin',
    category: 'Skin Matrix',
    impact: 'Strengthens Lipid Barrier',
    what: 'A powerhouse of Omega-3 fatty acids.',
    why: 'Essential fatty acids are the building blocks of healthy cell membranes.',
    how: 'A handful daily as a snack.',
    nutrients: [{ name: 'Omega-3', value: '2.5g' }, { name: 'Zinc', value: 'High' }],
    bestTime: 'Morning',
    cost: '$$',
    prep: 'Ready to eat',
    warning: 'Nut allergy caution',
    combos: ['Yogurt', 'Salads'],
    dietTags: ['Vegan', 'Keto']
  },
  {
    id: 'salmon',
    food: 'Wild Salmon',
    image: '',
    tagline: 'Deep Sea Repair',
    category: 'Collagen',
    impact: 'Anti-Inflammatory Glow',
    what: 'Rich in DMAE and Omega-3s.',
    why: 'Reduces inflammation and supports skin elasticity at a cellular level.',
    how: '2-3 servings per week.',
    nutrients: [{ name: 'Protein', value: '25g' }, { name: 'Astaxanthin', value: 'Potent' }],
    bestTime: 'Lunch/Dinner',
    cost: '$$$',
    prep: 'Grill or bake',
    warning: 'Check for heavy metals in source',
    combos: ['Lemon', 'Asparagus'],
    dietTags: ['Pescatarian', 'Keto']
  }
];

export const SYNERGIES = [
  {
    pair: ['Vitamin C', 'Vitamin E'],
    title: 'Antioxidant Armor',
    benefit: 'Doubles UV protection',
    multiplier: '2x'
  },
  {
    pair: ['Retinol', 'Peptides'],
    title: 'Structural Reboot',
    benefit: 'Accelerates collagen synthesis',
    multiplier: '1.5x'
  }
];

export const HAIR_BIO_INFO = {
  overview: "Hair is primarily composed of Keratin, a tough fibrous protein. The health of your hair is a reflection of both your internal biology and external care protocols.",
  targeting: {
    can: [
      { zone: "Scalp Environment", action: "Optimize blood flow and reduce micro-inflammation." },
      { zone: "Cuticle Layer", action: "Smooth and seal for moisture retention and shine." }
    ],
    cannot: [
      { zone: "Split Ends", action: "Once the fiber is split, biology cannot fuse it back; trimming is the only cure." },
      { zone: "Genetic Density", action: "Follicle count is determined at birth, though we can maximize health of existing ones." }
    ]
  }
};

export const INGREDIENTS_LIBRARY = [
  { name: "Retinol", benefit: "Anti-Aging", what: "Vitamin A derivative.", why: "Boosts cell turnover and collagen.", how: "Nightly application.", results: "Smoother skin texture.", tips: ["Use SPF daily!"], warning: "Can be very drying initially." },
  { name: "Niacinamide", benefit: "Pore Control", what: "Vitamin B3.", why: "Regulates oil and fades spots.", how: "Daily serum step.", results: "Smaller visible pores.", tips: ["Great for all skin types"], warning: "Check for temporary flushing." },
  { name: "Hyaluronic Acid", benefit: "Super Hydrator", what: "A moisture-binding molecule.", why: "Holds 1000x its weight in water.", how: "Apply to damp skin.", results: "Plump, bouncy skin.", tips: ["Seal with a thick cream"], warning: "Avoid in very dry climates without sealer." },
  { name: "Vitamin C", benefit: "Brightening", what: "Potent L-Ascorbic Acid.", why: "Protects from UV and pollution.", how: "Morning ritual.", results: "Radiant, glowy finish.", tips: ["Store in a dark, cool place"], warning: "Can oxidize and turn orange." },
  { name: "Salicylic Acid", benefit: "Clear Pores", what: "Beta Hydroxy Acid (BHA).", why: "Deep cleans inside the pore lining.", how: "Spot treat or use as toner.", results: "Fewer blackheads.", tips: ["Ideal for oily/acne types"], warning: "Don't over-exfoliate." },
  { name: "Glycolic Acid", benefit: "Exfoliation", what: "Alpha Hydroxy Acid (AHA).", why: "Dissolves the glue between cells.", how: "Weekly peel or tonic.", results: "Glass skin finish.", tips: ["Sun sensitivity is high!"], warning: "Mild tingling is normal." },
  { name: "Azelaic Acid", benefit: "Calm Redness", what: "Dicarboxylic acid.", why: "Anti-inflammatory and antimicrobial.", how: "Daily cream or gel.", results: "Even, calm skin tone.", tips: ["Excellent for Rosacea"], warning: "Might cause mild itching." },
  { name: "Squalane", benefit: "Locked Moisture", what: "Plant-based stable lipid.", why: "Mimics skin's natural sebum.", how: "Final step facial oil.", results: "Velvety soft feel.", tips: ["Non-comedogenic (won't clog)"], warning: "None." },
  { name: "Peptides", benefit: "Firming", what: "Amino acid chains.", why: "Signals skin to produce more collagen.", how: "Twice daily serum.", results: "Increased skin density.", tips: ["The ultimate anti-aging win"], warning: "Takes 4-8 weeks to see." },
  { name: "Bakuchiol", benefit: "Natural Retinol", what: "Plant-based antioxidant.", why: "Retinol results without the sting.", how: "Day or Night use.", results: "Bouncy, resilient skin.", tips: ["Safe for sensitive skin"], warning: "Rare plant allergy." },
  { name: "Ceramides", benefit: "Barrier Glue", what: "Natural skin lipids.", why: "Fills gaps in the skin barrier.", how: "Moisturizing cream.", results: "Healthy, resilient shield.", tips: ["Fixes dry, flaky patches"], warning: "None." },
  { name: "Lactic Acid", benefit: "Gentle Glow", what: "Large-molecule AHA.", why: "Exfoliates while pulling in moisture.", how: "Gentle night serum.", results: "Dewy, soft skin.", tips: ["Better for sensitive skin than Glycolic"], warning: "Sun sensitivity." },
  { name: "Panthenol", benefit: "Soothing", what: "Pro-Vitamin B5.", why: "Deeply heals and calms inflammation.", how: "After active treatments.", results: "Comforted, calm skin.", tips: ["Perfect for post-peel recovery"], warning: "None." },
  { name: "Neem Oil", benefit: "Anti-Acne", what: "Potent Ayurvedic extract.", why: "Strongly antimicrobial and antifungal.", how: "Spot treatment.", results: "Clears stubborn breakouts.", tips: ["Strong earthy scent"], warning: "Always patch test." },
  { name: "Tea Tree Oil", benefit: "Purifying", what: "Essential oil from Melaleuca.", why: "Natural antiseptic for acne.", how: "Diluted spot application.", results: "Reduced inflammation.", tips: ["Never apply pure to face"], warning: "Can be sensitizing." },
  { name: "Turmeric", benefit: "Anti-Inflammatory", what: "Curcumin-rich spice.", why: "Brightens and calms redness.", how: "Face masks or diet.", results: "Golden, even glow.", tips: ["Can stain light skin temporarily"], warning: "Check for allergies." },
  { name: "Aloe Vera", benefit: "Healing", what: "Cactus-like plant juice.", why: "Hydrates and cools burned skin.", how: "Pure gel or in lotions.", results: "Instantly cooled skin.", tips: ["Fresh is always best"], warning: "None." },
  { name: "Kojic Acid", benefit: "Fades Spots", what: "Fungi-derived acid.", why: "Inhibits melanin production.", how: "Brightening serum.", results: "Faded hyperpigmentation.", tips: ["Use with Vitamin C for boost"], warning: "Can be irritating." },
  { name: "Alpha Arbutin", benefit: "Dark Spot Correction", what: "Natural hydroquinone derivative.", why: "Safely fades sun spots and scars.", how: "Targeted serum.", results: "Uniform skin tone.", tips: ["Works slowly but safely"], warning: "Patience is required." },
  { name: "Centella Asiatica", benefit: "Cica Repair", what: "Tiger Grass.", why: "Speeds up wound and barrier healing.", how: "Soothing cream step.", results: "Reduced irritation.", tips: ["A K-Beauty superstar"], warning: "None." },
  { name: "Rosemary Oil", benefit: "Hair Growth", what: "Mediterranean herb extract.", why: "Stimulates blood flow to roots.", how: "Scalp oiling.", results: "Thicker hair over time.", tips: ["Consistency is key (3+ months)"], warning: "Dilute in carrier oil." },
  { name: "Argan Oil", benefit: "Liquid Gold", what: "Moroccan nut oil.", why: "Rich in Vitamin E and fatty acids.", how: "Hair ends or face oil.", results: "Extreme shine and softness.", tips: ["Great for heat protection"], warning: "Might be heavy for fine hair." },
  { name: "Shea Butter", benefit: "Deep Nourishment", what: "Fat from African Shea tree.", why: "Intense emollient for dry skin.", how: "Body or foot cream.", results: "Smooth, supple skin.", tips: ["Best for very dry zones"], warning: "Can clog facial pores." },
  { name: "CoQ10", benefit: "Cell Energy", what: "Ubiquinone enzyme.", why: "Protects cells from oxidative stress.", how: "Preventative serums.", results: "Vibrant, energized skin.", tips: ["A hidden anti-aging gem"], warning: "None." },
  { name: "Copper Peptides", benefit: "Tissue Repair", what: "Metal-peptide complex.", why: "Signals deep skin regeneration.", how: "Advanced night routine.", results: "Firmer, younger look.", tips: ["Don't mix with Vitamin C"], warning: "Can be unstable." },
  { name: "Ferulic Acid", benefit: "Antioxidant Booster", what: "Plant-based antioxidant.", why: "Stabilizes Vitamin C and E.", how: "Combined in serums.", results: "Double the UV protection.", tips: ["Smells like hot dog water (normal!)"], warning: "None." },
  { name: "Snail Mucin", benefit: "Texture Smooth", what: "Snail secretion filtrate.", why: "Hydrates and repairs damage.", how: "Essence step.", results: "Super smooth, bouncy skin.", tips: ["Apply to damp skin"], warning: "Check for mollusk allergy." },
  { name: "Ginseng", benefit: "Skin Vitality", what: "Ancient root extract.", why: "Boosts circulation and energy.", how: "Moisturizing essence.", results: "Reduced fine lines.", tips: ["The gold standard of Hanbang"], warning: "Earthy aroma." },
  { name: "Colloidal Oatmeal", benefit: "Eczema Relief", what: "Finely ground oats.", why: "Calms itching and protects barrier.", how: "Soothing baths or lotions.", results: "Peaceful, quiet skin.", tips: ["FDA approved for skin protection"], warning: "None." },
  { name: "Mandelic Acid", benefit: "Gentle Clear", what: "Bitter almond AHA.", why: "Anti-bacterial and exfoliating.", how: "Nightly for acne.", results: "Clearer, brighter skin.", tips: ["Best AHA for dark skin tones"], warning: "Low risk of irritation." },
  { name: "Tranexamic Acid", benefit: "Melasma Fix", what: "Synthetic amino acid.", why: "Blocks the pigment-making pathway.", how: "Daily serum.", results: "Faded brown patches.", tips: ["Works well with Niacinamide"], warning: "None." },
  { name: "Allantoin", benefit: "Skin Softener", what: "Comfrey plant extract.", why: "Promotes cell proliferation.", how: "In many soothing products.", results: "Extra soft, healed skin.", tips: ["Found in baby products"], warning: "None." },
  { name: "Rosehip Oil", benefit: "Scar Healing", what: "Seed oil from rose bushes.", why: "High in Vitamin A and C.", how: "Nightly facial oil.", results: "Faded acne scars.", tips: ["Cold-pressed is best"], warning: "Can go rancid if old." },
  { name: "Jojoba Oil", benefit: "Sebum Mimic", what: "Liquid wax ester.", why: "Trick skin into making less oil.", how: "Cleansing oil or moisturizer.", results: "Balanced oil production.", tips: ["Best for oily skin oiling"], warning: "None." },
  { name: "Rice Water", benefit: "Brightening", what: "Starchy water from rice.", why: "Rich in Inositol and Ferulic acid.", how: "Face rinse or toner.", results: "Smooth, milky complexion.", tips: ["A centuries-old secret"], warning: "Must be fresh." },
  { name: "Green Tea", benefit: "Antioxidant", what: "Camellia Sinensis leaf.", why: "EGCG calms inflammation.", how: "Toner or cream.", results: "Depuffed, calm skin.", tips: ["Reduces sun damage"], warning: "None." },
  { name: "Mugwort", benefit: "Healing", what: "Artemisia plant extract.", why: "Bactericidal and anti-redness.", how: "Soothing mask.", results: "Quiet, calm complexion.", tips: ["Korea's answer to Tea Tree"], warning: "None." },
  { name: "Benzoyl Peroxide", benefit: "Kills Bacteria", what: "Organic peroxide.", why: "Kills C. acnes deep in pores.", how: "Wash or spot treatment.", results: "Clear skin fast.", tips: ["Will bleach towels/sheets!"], warning: "Can be very irritating." },
  { name: "Kaolin Clay", benefit: "Oil Detox", what: "Soft white clay.", why: "Gently pulls out oil and dirt.", how: "Weekly mask.", results: "Matte, clean skin.", tips: ["Best for sensitive oily skin"], warning: "Don't let it dry completely." },
  { name: "Resveratrol", benefit: "Anti-Pollution", what: "Grapeseed antioxidant.", why: "Neutralizes environmental damage.", how: "Night serum.", results: "Stronger defense system.", tips: ["A powerful longevity molecule"], warning: "None." },
  { name: "Propolis", benefit: "Immune Boost", what: "Bee glue.", why: "Antibacterial and nourishing.", how: "Hydrating serum.", results: "Glowing, healthy look.", tips: ["Good for acne scars"], warning: "Avoid if allergic to bees." },
  { name: "Honey", benefit: "Moisture Magnet", what: "Natural humectant.", why: "Antibacterial and hydrator.", how: "Masks and cleansers.", results: "Plump, soft skin.", tips: ["Manuka is medical grade"], warning: "None." },
  { name: "Zinc Oxide", benefit: "Sun Shield", what: "Mineral blocker.", why: "Physically reflects UV rays.", how: "Morning sunscreen.", results: "Protected skin.", tips: ["Safest UV filter"], warning: "Can leave a white cast." },
  { name: "Biotin", benefit: "Hair Support", what: "Vitamin B7.", why: "Key for keratin production.", how: "Supplements or serums.", results: "Stronger strands.", tips: ["Best as a supplement"], warning: "None." },
  { name: "Castor Oil", benefit: "Lash & Brow", what: "Ricinoleic acid rich oil.", why: "Conditions and strengthens hair.", how: "Lash line application.", results: "Thicker looking hair.", tips: ["Very thick - use sparingly"], warning: "Don't get in eyes." },
  { name: "Urea", benefit: "Rough Skin Fix", what: "Natural moisturizing factor.", why: "Exfoliates while hydrating deep.", how: "Foot or body cream.", results: "Silky smooth limbs.", tips: ["Best for Keratosis Pilaris"], warning: "None." },
  { name: "PHA", benefit: "Sensitive Glow", what: "Polyhydroxy Acid.", why: "Gentlest acid exfoliant.", how: "Daily tonic.", results: "Smooth, calm skin.", tips: ["Acid for the most sensitive"], warning: "None." },
  { name: "Tulsi (Holy Basil)", benefit: "Stress-Relief", what: "Powerful Ayurvedic adaptogen.", why: "Reduces oxidative stress on skin.", how: "Face mist or tonic.", results: "Calm, clear complexion.", tips: ["The Queen of Herbs"], warning: "Always patch test." },
  { name: "Ashwagandha", benefit: "Anti-Aging", what: "Ayurvedic vitalizer.", why: "Supports natural collagen production.", how: "In cream or oral supplement.", results: "Firmer skin structure.", tips: ["Best for tired-looking skin"], warning: "Consult doctor for oral use." },
  { name: "Licorice Root", benefit: "Brightening", what: "Natural skin lightener.", why: "Inhibits melanin without irritation.", how: "Daily serum.", results: "Even skin tone.", tips: ["A great Kojic acid alternative"], warning: "None." },
  { name: "Argireline", benefit: "Botox-In-A-Bottle", what: "Acetyl Hexapeptide-8.", why: "Relaxes facial tension and expression lines.", how: "Targeted forehead serum.", results: "Smoother expression lines.", tips: ["The ultimate non-invasive fix"], warning: "None." },
  { name: "Matrixyl 3000", benefit: "Collagen Booster", what: "Advanced dual peptide blend.", why: "Repairs the dermal matrix.", how: "Nightly firming cream.", results: "Significant wrinkle reduction.", tips: ["Apply to neck and decollete"], warning: "None." },
  { name: "Saw Palmetto", benefit: "Scalp Health", what: "Serenoa repens extract.", why: "Natural DHT blocker for hair health.", how: "Scalp serum.", results: "Supports fuller hair.", tips: ["Great for thinning hair concerns"], warning: "None." }
];

export const TISSUE_LAYERS = [
  {
    name: "The Shield",
    level: "Stratum Corneum",
    color: "coral",
    function: "Your biological raincoat. It keeps the good stuff in and the bad stuff out.",
    structures: [
      { name: "Corneocytes", description: "Tough 'bricks' filled with keratin armor." },
      { name: "Lipid Mortar", description: "The fatty glue that prevents water loss (TEWL)." },
      { name: "Acid Mantle", description: "A thin film of acidity that fights off bacteria." }
    ]
  },
  {
    name: "The Factory",
    level: "Epidermis Layer",
    color: "amber",
    function: "Where the magic happens. Cells are born here and travel up to the surface.",
    structures: [
      { name: "Basal Cells", description: "Constant workers making new skin every 28 days." },
      { name: "Melanocytes", description: "Your sun protectors. They produce pigment (melanin)." },
      { name: "Langerhans Cells", description: "The skin's personal security team (immune cells)." }
    ]
  },
  {
    name: "The Engine",
    level: "Deep Dermis",
    color: "teal",
    function: "The living core. Full of blood, nerves, and the collagen that keeps you bouncy.",
    structures: [
      { name: "Collagen", description: "Strong fibers that provide structure and strength." },
      { name: "Elastin", description: "Springy fibers that let your skin snap back." },
      { name: "Hair Follicles", description: "The tiny tunnels where your hair begins its life." },
      { name: "Sweat Glands", description: "The body's natural cooling and detox system." }
    ]
  }
];

export const BARRIER_SCIENCE = {
  title: "Your Skin Shield",
  metrics: {
    ph: { value: "5.5", label: "Happy pH", desc: "Slightly acidic is perfect." },
    tewl: { value: "Low", label: "Water Lock", desc: "No water is escaping!" },
    lipids: { value: "Strong", label: "Lipid Glue", desc: "Your cell glue is solid." }
  }
};

export const SKIN_CARE_ROUTINE = [
  { title: "Cleanse", description: "Wash away the day gently.", importance: "Stops breakouts before they start.", pros: ["Clear skin"], cons: ["Don't over-strip"] },
  { title: "Treat", description: "Add your serums (C, Retinol, etc).", importance: "Targets specific goals like glow.", pros: ["Fast results"], cons: ["Can be sensitive"] },
  { title: "Moisturize", description: "Seal everything in.", importance: "Keeps your barrier soft and strong.", pros: ["Softness"], cons: ["Find the right weight"] },
  { title: "Protect", description: "SPF always!", importance: "Stops 90% of skin aging.", pros: ["Long-term health"], cons: ["Every single day!"] }
];

export const HAIR_CARE_ROUTINE = [
  { title: "Scalp Wash", description: "Clean the roots.", importance: "A healthy scalp means healthy hair.", pros: ["Volume"], cons: ["Rinse well"] },
  { title: "Condition", description: "Smooth the ends.", importance: "Stops breakage and tangles.", pros: ["Shine"], cons: ["Avoid roots"] }
];

export const RELAXATION_METHODS = [
  { name: "Box Breathing", description: "Standard tactical breathing for stress reduction.", howTo: "Inhale 4s, Hold 4s, Exhale 4s, Hold 4s." },
  { name: "Progressive Relaxation", description: "Systematically tensing and releasing muscle groups.", howTo: "Start from toes, work up to the face." },
  { name: "Digital Detox", description: "Blue light reduction before sleep cycle.", howTo: "No screens 60 mins before bed." }
];

export const QUIZ_QUESTIONS = [
  { question: "What is the outermost layer of the skin called?", options: ["Dermis", "Hypodermis", "Stratum Corneum", "Basal Layer"], correct: 2, fact: "The Stratum Corneum is the shield that protects you from the environment." },
  { question: "Which phase is the active growth phase of hair?", options: ["Anagen", "Catagen", "Telogen", "Exogen"], correct: 0, fact: "Hair stays in the Anagen phase for 2 to 7 years!" },
  { question: "What is the ideal pH of healthy skin?", options: ["7.0 (Neutral)", "5.5 (Acidic)", "8.5 (Alkaline)", "2.0 (Strong Acid)"], correct: 1, fact: "A pH of 5.5 keeps the acid mantle intact to fight bacteria." }
];

export const FUN_FACTS = [
  { title: "Dust to Dust", fact: "About 50% of the dust in your home is actually dead skin cells.", category: "skin", icon: "Layers" },
  { title: "Hair is strong", fact: "A single strand of hair can support up to 100 grams in weight.", category: "hair", icon: "Activity" },
  { title: "Unique Prints", fact: "Your fingerprints are formed before you are even born.", category: "body", icon: "Shield" }
];
