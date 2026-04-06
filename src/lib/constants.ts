// Site-wide constants
export const SITE_NAME = "Zeal Studio";
export const SITE_TAGLINE = "Capturing Timeless Moments";
export const SITE_DESCRIPTION =
  "Premium photography studio specializing in weddings, portraits, fashion, and events. Based in Pune, serving clients across India.";
export const SITE_URL = "https://zealstudio.com";
export const PHONE_NUMBER = "+91 98765 43210";
export const WHATSAPP_NUMBER = "919876543210";
export const EMAIL = "hello@zealstudio.com";
export const ADDRESS = "123, Creative Lane, Koregaon Park, Pune, Maharashtra 411001";
export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.88!3d18.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sZeal+Studio!5e0!3m2!1sen!2sin!4v1";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/zealstudio",
  facebook: "https://facebook.com/zealstudio",
  youtube: "https://youtube.com/@zealstudio",
  pinterest: "https://pinterest.com/zealstudio",
  twitter: "https://twitter.com/zealstudio",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Courses", href: "/courses" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const SERVICE_CATEGORIES = [
  "Wedding",
  "Portrait",
  "Fashion",
  "Events",
  "Nature",
  "Commercial",
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Wedding",
  "Fashion",
  "Events",
  "Nature",
  "Portrait",
];

// Demo images using picsum for placeholder
export const DEMO_IMAGES = {
  hero: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&q=80",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920&q=80",
  ],
  portfolio: {
    wedding: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80",
    ],
    fashion: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    ],
    events: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    ],
    nature: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    ],
    portrait: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    ],
  },
  about: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
  testimonials: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  ],
};

export const TESTIMONIALS = [
  {
    name: "Priya & Rahul Sharma",
    role: "Wedding Clients",
    text: "Zeal Studio captured our wedding day perfectly. Every emotion, every detail — it was like reliving the day through their photographs. Absolutely stunning work!",
    image: DEMO_IMAGES.testimonials[0],
    rating: 5,
  },
  {
    name: "Anjali Deshmukh",
    role: "Fashion Portfolio",
    text: "Working with Zeal Studio was an incredible experience. They understood my vision and delivered photos that exceeded my expectations. Highly recommended!",
    image: DEMO_IMAGES.testimonials[1],
    rating: 5,
  },
  {
    name: "Vikram & Meera Patel",
    role: "Pre-Wedding Shoot",
    text: "The pre-wedding shoot was magical. The team made us feel so comfortable and the locations they suggested were breathtaking. Thank you for the memories!",
    image: DEMO_IMAGES.testimonials[2],
    rating: 5,
  },
];

export const SERVICES = [
  {
    title: "Wedding Photography",
    description:
      "Timeless wedding photography that captures every precious moment of your special day with artistic elegance.",
    icon: "heart",
    price: "₹50,000",
    features: [
      "Full Day Coverage",
      "500+ Edited Photos",
      "Cinematic Highlights",
      "Premium Album",
      "Online Gallery",
    ],
  },
  {
    title: "Portrait Sessions",
    description:
      "Professional portrait photography for individuals, families, and corporate headshots.",
    icon: "user",
    price: "₹15,000",
    features: [
      "2-Hour Session",
      "50+ Edited Photos",
      "Multiple Outfits",
      "Studio or Outdoor",
      "Digital Delivery",
    ],
  },
  {
    title: "Fashion & Editorial",
    description:
      "High-end fashion photography for models, designers, and brands that demand visual excellence.",
    icon: "camera",
    price: "₹25,000",
    features: [
      "4-Hour Session",
      "100+ Edited Photos",
      "Styling Assistance",
      "Multiple Locations",
      "Magazine-Ready Files",
    ],
  },
  {
    title: "Event Coverage",
    description:
      "Complete event documentation — corporate events, parties, concerts, and special occasions.",
    icon: "calendar",
    price: "₹35,000",
    features: [
      "Full Event Coverage",
      "300+ Edited Photos",
      "Same-Day Preview",
      "Video Highlights",
      "Quick Turnaround",
    ],
  },
];

export const BLOG_POSTS = [
  {
    slug: "wedding-photography-tips-2026",
    title: "10 Wedding Photography Tips for the Perfect Shot in 2026",
    excerpt:
      "Discover the latest trends and techniques for capturing stunning wedding moments that couples will cherish forever.",
    image: DEMO_IMAGES.portfolio.wedding[0],
    date: "2026-03-15",
    category: "Wedding",
    readTime: "5 min read",
    content: `<h2>The Art of Wedding Photography</h2>
<p>Wedding photography has evolved dramatically over the years. In 2026, couples expect more than just traditional posed shots — they want authentic, emotional storytelling through images.</p>

<h3>1. Scout the Venue in Advance</h3>
<p>Visit the venue before the wedding day to identify the best lighting spots, backgrounds, and potential challenges. This preparation ensures you're ready for every moment.</p>

<h3>2. Capture the Details</h3>
<p>Rings, flowers, invitations, and table settings tell the story of the day. Dedicate time to photograph these elements before the ceremony begins.</p>

<h3>3. Use Natural Light</h3>
<p>Whenever possible, utilize natural light for soft, romantic images. Golden hour provides the most flattering light for couple portraits.</p>

<h3>4. Be Ready for Candid Moments</h3>
<p>The best wedding photos often happen between planned events. Keep your camera ready for spontaneous laughter, tears, and celebrations.</p>

<h3>5. Tell a Story</h3>
<p>Arrange your photos to tell the complete story of the day, from preparation to the last dance. This narrative approach creates a meaningful album.</p>`,
  },
  {
    slug: "best-portrait-poses-guide",
    title: "The Ultimate Guide to Portrait Poses for Every Occasion",
    excerpt:
      "Master the art of posing with our comprehensive guide. From casual to corporate, find the perfect pose for every portrait session.",
    image: DEMO_IMAGES.portfolio.portrait[0],
    date: "2026-02-28",
    category: "Portrait",
    readTime: "7 min read",
    content: `<h2>Portrait Posing Made Easy</h2>
<p>Great portrait photography starts with understanding how to guide your subjects into flattering, natural poses.</p>

<h3>The Basics of Good Posture</h3>
<p>Standing tall with shoulders back and a slight angle to the camera creates a more dynamic and slimming appearance.</p>

<h3>Hand Placement</h3>
<p>Hands should always be doing something purposeful — in pockets, touching hair, or resting on a surface. Idle hands look awkward in photos.</p>`,
  },
  {
    slug: "photography-trends-2026",
    title: "Top Photography Trends Dominating 2026",
    excerpt:
      "From AI-enhanced editing to cinematic storytelling, explore the photography trends shaping the industry this year.",
    image: DEMO_IMAGES.portfolio.fashion[0],
    date: "2026-01-20",
    category: "Industry",
    readTime: "6 min read",
    content: `<h2>What's Trending in Photography</h2>
<p>The photography industry continues to evolve with new technologies, styles, and client expectations.</p>

<h3>AI-Enhanced Editing</h3>
<p>Artificial intelligence tools are revolutionizing post-processing, allowing photographers to deliver higher quality results in less time.</p>

<h3>Cinematic Photography</h3>
<p>Borrowing techniques from filmmaking, cinematic photography creates dramatic, story-driven images with rich color grading.</p>`,
  },
];

export const COURSES = [
  {
    id: "foundation-course",
    slug: "foundation-photography",
    title: "Foundation Photography Course",
    duration: "2 Months",
    icon: "camera",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80",
    description:
      "Learn photography from scratch including camera basics, composition, and lighting. Perfect for absolute beginners who want a solid grounding in professional photography.",
    highlights: [
      "Camera operations & manual mode mastery",
      "Composition rules & framing techniques",
      "Natural & artificial lighting fundamentals",
      "Introduction to post-processing",
      "Hands-on outdoor shoots",
      "Certificate of completion",
    ],
    skillsCovered: [
      "Camera Handling",
      "Manual Mode",
      "Composition",
      "Natural Lighting",
      "Basic Editing",
      "Visual Storytelling",
    ],
    whatYouWillLearn: [
      "Understand camera settings — aperture, shutter speed, ISO",
      "Master composition rules like rule of thirds and leading lines",
      "Work with natural and artificial lighting setups",
      "Edit photos using Lightroom basics",
      "Complete 3 real-world photo projects",
      "Build a starter portfolio",
    ],
    curriculum: [
      {
        module: "Module 1: Introduction to Photography",
        topics: [
          "History & evolution of photography",
          "Types of cameras & lenses",
          "Understanding your camera body",
          "Memory cards, batteries & accessories",
        ],
      },
      {
        module: "Module 2: Camera Settings & Exposure",
        topics: [
          "Aperture, Shutter Speed & ISO triangle",
          "Manual mode shooting",
          "Metering modes & white balance",
          "Focus modes & techniques",
        ],
      },
      {
        module: "Module 3: Composition & Framing",
        topics: [
          "Rule of thirds & golden ratio",
          "Leading lines & symmetry",
          "Depth & layering in photos",
          "Perspective & angles",
        ],
      },
      {
        module: "Module 4: Lighting Fundamentals",
        topics: [
          "Natural light — golden hour, blue hour",
          "Window light & reflectors",
          "Introduction to flash photography",
          "Light direction & quality",
        ],
      },
      {
        module: "Module 5: Practical Shoots & Portfolio",
        topics: [
          "Outdoor portrait shoot",
          "Street photography assignment",
          "Landscape & nature shoot",
          "Portfolio review & certification",
        ],
      },
    ],
    studentWorkImages: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    ],
  },
  {
    id: "advance-photography-course",
    slug: "advance-photography",
    title: "Advance Photography Course",
    duration: "3 Months",
    icon: "aperture",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1920&q=80",
    description:
      "Master advanced photography techniques, creative shooting, and professional workflows. Take your skills beyond the basics with studio lighting, off-camera flash, and client-ready output.",
    highlights: [
      "Advanced studio lighting setups",
      "Off-camera flash & multi-light techniques",
      "Advanced composition & colour theory",
      "Client management & shoot planning",
      "Portfolio building workshop",
      "Live project assignments",
    ],
    skillsCovered: [
      "Studio Lighting",
      "Off-Camera Flash",
      "Creative Composition",
      "Color Theory",
      "Client Management",
      "Advanced Editing",
    ],
    whatYouWillLearn: [
      "Set up and control studio lighting for any scenario",
      "Use off-camera flash and multi-light setups",
      "Apply advanced colour theory to create mood",
      "Plan and execute professional client shoots",
      "Build a portfolio that attracts paid work",
      "Complete 5 advanced real-world projects",
    ],
    curriculum: [
      {
        module: "Module 1: Advanced Camera Techniques",
        topics: [
          "High-speed & long-exposure photography",
          "HDR & bracketing techniques",
          "Lens selection for creative effects",
          "Advanced autofocus strategies",
        ],
      },
      {
        module: "Module 2: Studio Lighting Mastery",
        topics: [
          "One-light, two-light & three-light setups",
          "Softboxes, umbrellas & modifiers",
          "Rembrandt, butterfly & split lighting",
          "Product & still-life lighting",
        ],
      },
      {
        module: "Module 3: Off-Camera Flash",
        topics: [
          "Speedlight fundamentals",
          "Wireless trigger systems",
          "Balancing flash with ambient light",
          "Creative flash techniques",
        ],
      },
      {
        module: "Module 4: Creative Direction",
        topics: [
          "Mood boards & visual planning",
          "Color theory & palette creation",
          "Directing subjects & models",
          "Location scouting & storytelling",
        ],
      },
      {
        module: "Module 5: Business & Portfolio",
        topics: [
          "Client communication & contracts",
          "Pricing your photography",
          "Portfolio curation & presentation",
          "Social media marketing for photographers",
        ],
      },
      {
        module: "Module 6: Final Project",
        topics: [
          "Plan a complete professional shoot",
          "Execute with advanced techniques",
          "Post-process to client-ready standard",
          "Final portfolio review & certification",
        ],
      },
    ],
    studentWorkImages: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    ],
  },
  {
    id: "digital-editing-course",
    slug: "digital-editing",
    title: "Digital Editing Course",
    duration: "1 Month",
    icon: "sliders",
    level: "Beginner to Intermediate",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1920&q=80",
    description:
      "Learn Photoshop, Lightroom, and editing techniques to enhance your photos. From color grading to retouching, master the art of professional post-production.",
    highlights: [
      "Adobe Lightroom workflow & presets",
      "Photoshop retouching & compositing",
      "Color grading & tonal adjustments",
      "Batch editing for efficiency",
      "Skin retouching techniques",
      "Export settings for print & web",
    ],
    skillsCovered: [
      "Adobe Lightroom",
      "Adobe Photoshop",
      "Color Grading",
      "Retouching",
      "Batch Processing",
      "File Management",
    ],
    whatYouWillLearn: [
      "Navigate Lightroom & Photoshop like a pro",
      "Create custom presets and editing styles",
      "Retouch portraits while keeping skin natural",
      "Color grade photos for mood and consistency",
      "Batch-edit hundreds of photos efficiently",
      "Export files optimised for print, web & social media",
    ],
    curriculum: [
      {
        module: "Module 1: Lightroom Fundamentals",
        topics: [
          "Importing, organising & cataloguing",
          "Basic adjustments — exposure, contrast, colour",
          "HSL panel & tone curve mastery",
          "Creating & applying presets",
        ],
      },
      {
        module: "Module 2: Advanced Lightroom",
        topics: [
          "Local adjustments — brushes & gradients",
          "Lens corrections & perspective",
          "Batch editing workflows",
          "Exporting for different platforms",
        ],
      },
      {
        module: "Module 3: Photoshop Essentials",
        topics: [
          "Layers, masks & selections",
          "Healing & clone stamp tools",
          "Frequency separation retouching",
          "Compositing basics",
        ],
      },
      {
        module: "Module 4: Advanced Editing & Output",
        topics: [
          "Dodge & burn techniques",
          "Color grading with curves & LUTs",
          "Skin retouching masterclass",
          "Final export, sharpening & delivery",
        ],
      },
    ],
    studentWorkImages: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    ],
  },
  {
    id: "crash-course",
    slug: "crash-course",
    title: "Crash Course (Photography Basics)",
    duration: "2 Weeks",
    icon: "zap",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80",
    description:
      "Quick introduction to photography fundamentals for beginners. An intensive fast-track programme ideal for hobbyists, content creators, and anyone who wants quick results.",
    highlights: [
      "Quick-start camera essentials",
      "Composition shortcuts & tips",
      "Mobile & DSLR photography",
      "Social-media-ready editing",
      "Weekend practical sessions",
      "Quick reference handbook",
    ],
    skillsCovered: [
      "Camera Basics",
      "Quick Composition",
      "Mobile Photography",
      "Basic Editing",
      "Social Media Content",
      "Storytelling",
    ],
    whatYouWillLearn: [
      "Operate any camera in manual mode confidently",
      "Apply top composition rules instantly",
      "Shoot high-quality photos on mobile and DSLR",
      "Edit photos quickly for social media",
      "Complete 2 weekend practical assignments",
      "Receive a quick-reference photography handbook",
    ],
    curriculum: [
      {
        module: "Week 1: Camera & Composition Crash",
        topics: [
          "Camera anatomy & essential settings",
          "Exposure triangle speed-run",
          "Top 5 composition rules that work every time",
          "Mobile photography tips & apps",
          "Weekend shoot assignment",
        ],
      },
      {
        module: "Week 2: Lighting, Editing & Output",
        topics: [
          "Natural light shooting techniques",
          "Quick editing with Lightroom Mobile",
          "Social-media formatting & export",
          "Portfolio mini-project",
          "Certificate & handbook distribution",
        ],
      },
    ],
    studentWorkImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    ],
  },
  {
    id: "diploma-fashion-photography",
    slug: "fashion-photography-diploma",
    title: "Diploma in Fashion Photography",
    duration: "6 Months",
    icon: "sparkles",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80",
    description:
      "Professional training in fashion photography, studio lighting, and model shoots. A comprehensive diploma covering editorial styling, lookbook creation, and building a fashion portfolio.",
    highlights: [
      "Fashion lighting & mood boards",
      "Model direction & posing techniques",
      "Editorial & lookbook shooting",
      "Styling & wardrobe coordination",
      "Industry networking opportunities",
      "Professional portfolio review",
    ],
    skillsCovered: [
      "Fashion Lighting",
      "Model Direction",
      "Editorial Shooting",
      "Styling Coordination",
      "Lookbook Creation",
      "Fashion Retouching",
    ],
    whatYouWillLearn: [
      "Light and shoot professional fashion editorials",
      "Direct models with confidence and creative vision",
      "Create lookbooks and portfolios for designers/brands",
      "Coordinate with stylists, MUAs, and creative teams",
      "Retouch fashion images to industry standards",
      "Network with industry professionals and build contacts",
    ],
    curriculum: [
      {
        module: "Module 1: Fashion Photography Foundations",
        topics: [
          "History of fashion photography",
          "Understanding fashion genres — editorial, commercial, street",
          "Essential gear for fashion shoots",
          "Analysing iconic fashion photographs",
        ],
      },
      {
        module: "Module 2: Lighting for Fashion",
        topics: [
          "Beauty lighting — clamshell, butterfly, ring light",
          "Dramatic & editorial lighting setups",
          "Outdoor fashion lighting techniques",
          "Working with reflectors & scrims",
        ],
      },
      {
        module: "Module 3: Model Direction & Posing",
        topics: [
          "Communicating with models on set",
          "Posing techniques for different body types",
          "Movement & action shots",
          "Expressing mood & narrative through poses",
        ],
      },
      {
        module: "Module 4: Styling & Creative Direction",
        topics: [
          "Mood boards & concept development",
          "Working with stylists & makeup artists",
          "Wardrobe coordination & colour palettes",
          "Set design & prop styling",
        ],
      },
      {
        module: "Module 5: Editorial & Lookbook Shoots",
        topics: [
          "Planning an editorial spread",
          "Shooting a complete lookbook",
          "E-commerce & catalogue photography",
          "Flat-lay & product photography for fashion",
        ],
      },
      {
        module: "Module 6: Post-Production & Portfolio",
        topics: [
          "Fashion retouching in Photoshop",
          "Colour grading for fashion",
          "Portfolio curation for fashion photographers",
          "Industry submission & publication",
          "Final project & diploma certification",
        ],
      },
    ],
    studentWorkImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    ],
  },
  {
    id: "diploma-wedding-photography",
    slug: "wedding-photography-diploma",
    title: "Diploma in Wedding Photography",
    duration: "6 Months",
    icon: "heart",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    description:
      "Complete wedding photography training including candid, traditional, and editing workflow. Everything you need to launch a successful wedding photography career.",
    highlights: [
      "Candid & documentary techniques",
      "Wedding-day workflow & timeline",
      "Cinematic couple portrait sessions",
      "Album design & delivery",
      "Client communication & contracts",
      "Live wedding shoot assistance",
    ],
    skillsCovered: [
      "Candid Photography",
      "Wedding Lighting",
      "Couple Portraiture",
      "Album Design",
      "Client Management",
      "Video Highlights",
    ],
    whatYouWillLearn: [
      "Shoot candid and documentary-style wedding photography",
      "Manage lighting in churches, venues, and outdoor settings",
      "Create cinematic couple portraits during golden hour",
      "Design and deliver professional wedding albums",
      "Handle client communication, contracts, and pricing",
      "Assist at 2 real weddings as part of training",
    ],
    curriculum: [
      {
        module: "Module 1: Wedding Photography Essentials",
        topics: [
          "Types of wedding photography — candid, traditional, fine-art",
          "Essential gear & backup strategies",
          "Understanding the wedding-day timeline",
          "Cultural & religious considerations",
        ],
      },
      {
        module: "Module 2: Pre-Wedding & Engagement",
        topics: [
          "Pre-wedding shoot planning & locations",
          "Posing couples naturally",
          "Creative concepts & themes",
          "Editing pre-wedding images",
        ],
      },
      {
        module: "Module 3: Ceremony & Reception",
        topics: [
          "Shooting in low-light venues",
          "Flash techniques for events",
          "Capturing key moments — vows, rings, first dance",
          "Candid guest photography",
        ],
      },
      {
        module: "Module 4: Couple Portraits & Bridal",
        topics: [
          "Golden hour couple portrait sessions",
          "Bridal portrait techniques",
          "Using veils, trains & natural elements",
          "Group & family formal portraits",
        ],
      },
      {
        module: "Module 5: Post-Production & Album Design",
        topics: [
          "Culling & selecting images",
          "Wedding-specific editing styles",
          "Album layout & design principles",
          "Slideshow & cinematic highlight reels",
        ],
      },
      {
        module: "Module 6: Business & Live Projects",
        topics: [
          "Pricing packages for weddings",
          "Client contracts & communication",
          "Marketing your wedding photography business",
          "Live wedding shoot assistance (2 events)",
          "Final portfolio review & diploma certification",
        ],
      },
    ],
    studentWorkImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    ],
  },
];
