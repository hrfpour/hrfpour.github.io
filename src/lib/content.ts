/**
 * Central bilingual content store for farhadipour.com
 * All user-facing text lives here (English / Persian).
 *
 * NOTE: Academic details marked as placeholder (universities, publications,
 * dates, stats) are SAMPLE data for the template preview — replace them with
 * real information in this single file.
 */

export type Lang = "en" | "fa";

/** A piece of text in both languages */
export type LT = { en: string; fa: string };

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const NAV_ITEMS: { id: string; label: LT }[] = [
  { id: "home", label: { en: "Home", fa: "خانه" } },
  { id: "about", label: { en: "About", fa: "درباره من" } },
  { id: "research", label: { en: "Research", fa: "پژوهش" } },
  { id: "publications", label: { en: "Publications", fa: "مقالات" } },
  { id: "projects", label: { en: "Projects", fa: "پروژه‌ها" } },
  { id: "skills", label: { en: "Skills", fa: "مهارت‌ها" } },
  { id: "journey", label: { en: "Journey", fa: "مسیر من" } },
  { id: "blog", label: { en: "Blog", fa: "بلاگ" } },
  { id: "contact", label: { en: "Contact", fa: "تماس" } },
];

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  nameEn: "Hamidreza Farhadipour",
  nameFa: "حمیدرضا فرهادی‌پور",
  avatar: "/images/profile.jpg",
  avatarSmall: "/images/profile-sm.jpg",
  email: "contact@farhadipour.com", // TODO: replace with real email
  github: "https://github.com/hrfpour",
  linkedin: "https://www.linkedin.com/in/hamidreza-farhadipour", // TODO: verify
  scholar: "https://scholar.google.com", // TODO: add real scholar link
  domain: "farhadipour.com",
  roles: {
    en: [
      "Data Scientist",
      "M.Sc. Student in Computer Science",
      "Machine Learning Researcher",
    ],
    fa: [
      "دانشمند داده",
      "دانشجوی کارشناسی ارشد علوم کامپیوتر",
      "پژوهشگر یادگیری ماشین",
    ],
  },
  bioShort: {
    en: "I turn complex, high-volume data into clear, actionable insight — with a research focus on network traffic analysis, time-series modeling and anomaly detection.",
    fa: "داده‌های پیچیده و حجیم را به بینش‌های شفاف و کاربردی تبدیل می‌کنم؛ با تمرکز پژوهشی بر تحلیل ترافیک شبکه، مدل‌سازی سری‌های زمانی و تشخیص ناهنجاری.",
  },
  bioLong: {
    en: "I am a Data Scientist and M.Sc. student in Computer Science with a strong passion for extracting meaningful patterns from complex datasets. My work revolves around network traffic analysis, time-series modeling, and anomaly detection — building systems that not only predict accurately, but can also be interpreted and trusted.\n\nI believe clean, interpretable visualizations are the shortest path between raw data and real-world decisions. Whether I am designing interactive dashboards, benchmarking statistical methods against deep learning models, or teaching fellow students, my goal is the same: bridge the gap between raw data and actionable insight.",
    fa: "من دانشجوِ کارشناسی ارشد علوم کامپیوتر و دانشمند داده هستم و شوق اصلی‌ام استخراج الگوهای معنادار از داده‌های پیچیده است. کارهایم حول محور تحلیل ترافیک شبکه، مدل‌سازی سری‌های زمانی و تشخیص ناهنجاری می‌چرخد؛ یعنی ساخت سامانه‌هایی که علاوه بر دقت بالا، قابل تفسیر و قابل اعتماد هم باشند.\n\nباور دارم بصری‌سازی‌های تمیز و قابل فهم، کوتاه‌ترین مسیر میان داده‌ی خام و تصمیم‌های واقعی هستند. چه در حال طراحی داشبوردهای تعاملی باشم، چه مقایسه روش‌های آماری با مدل‌های یادگیری عمیق، یا تدریس به هم‌دانشگاهی‌ها، هدفم یکی است: پر کردن شکاف میان داده خام و بینش کاربردی.",
  },
  location: { en: "Tehran, Iran", fa: "تهران، ایران" },
};

/* ------------------------------------------------------------------ */
/* UI strings                                                          */
/* ------------------------------------------------------------------ */

export const STRINGS = {
  /* Navbar */
  "brand.initials": { en: "HF.", fa: "HF." },
  "nav.home": { en: "Home", fa: "خانه" },
  "nav.about": { en: "About", fa: "درباره من" },
  "nav.research": { en: "Research", fa: "پژوهش" },
  "nav.publications": { en: "Publications", fa: "مقالات" },
  "nav.projects": { en: "Projects", fa: "پروژه‌ها" },
  "nav.skills": { en: "Skills", fa: "مهارت‌ها" },
  "nav.journey": { en: "Journey", fa: "مسیر من" },
  "nav.blog": { en: "Blog", fa: "بلاگ" },
  "nav.contact": { en: "Contact", fa: "تماس" },
  "nav.openMenu": { en: "Open menu", fa: "باز کردن منو" },

  /* Hero */
  "hero.badge": { en: "Welcome to my academic home", fa: "به خانه آکادمیک من خوش آمدید" },
  "hero.greeting": { en: "Hi, I'm", fa: "سلام، من" },
  "hero.available": { en: "Open to research collaboration", fa: "آماده همکاری پژوهشی" },
  "hero.ctaResearch": { en: "Explore my research", fa: "پژوهش‌های من" },
  "hero.ctaCv": { en: "Download CV", fa: "دانلود رزومه" },
  "hero.ctaContact": { en: "Get in touch", fa: "ارتباط با من" },
  "stat.publications": { en: "Publications", fa: "مقاله علمی" },
  "stat.projects": { en: "Research Projects", fa: "پروژه پژوهشی" },
  "stat.awards": { en: "Awards & Honors", fa: "جایزه و افتخار" },
  "stat.teaching": { en: "TA Courses", fa: "دوره تدریس‌شده" },
  "hero.scroll": { en: "Scroll to explore", fa: "برای کاوش اسکرول کنید" },

  /* Section headings */
  "about.kicker": { en: "About me", fa: "درباره من" },
  "about.title": { en: "A little bit about who I am", fa: "کمی بیشتر با من آشنا شوید" },
  "about.subtitle": {
    en: "Data scientist by craft, researcher by curiosity, and teacher by passion.",
    fa: "در حرفه، دانشمند داده؛ در کنجکاوی، پژوهشگر؛ و در عشق، معلم.",
  },
  "research.kicker": { en: "Research", fa: "پژوهش" },
  "research.title": { en: "Research interests", fa: "حوزه‌های پژوهشی" },
  "research.subtitle": {
    en: "Topics I actively explore, read about, and build on.",
    fa: "موضوعاتی که فعالانه درباره‌شان پژوهش می‌کنم و روی آن‌ها می‌سازم.",
  },
  "publications.kicker": { en: "Publications", fa: "انتشارات" },
  "publications.title": { en: "Selected publications & manuscripts", fa: "مقالات منتخب و دست‌نوشته‌ها" },
  "publications.subtitle": {
    en: "Peer-reviewed papers, preprints, and work under review.",
    fa: "مقالات داوری‌شده، پیش‌چاپ‌ها و مقالات در حال داوری.",
  },
  "projects.kicker": { en: "Projects", fa: "پروژه‌ها" },
  "projects.title": { en: "Things I have designed & built", fa: "چیزهایی که طراحی و ساخته‌ام" },
  "projects.subtitle": {
    en: "A selection of research, data, and engineering projects.",
    fa: "گزیده‌ای از پروژه‌های پژوهشی، داده‌ای و مهندسی.",
  },
  "skills.kicker": { en: "Skills", fa: "مهارت‌ها" },
  "skills.title": { en: "Tools of the trade", fa: "ابزارهای کار من" },
  "skills.subtitle": {
    en: "Technologies and methods I use daily for research and development.",
    fa: "فناوری‌ها و روش‌هایی که روزانه برای پژوهش و توسعه استفاده می‌کنم.",
  },
  "journey.kicker": { en: "Journey", fa: "مسیر من" },
  "journey.title": { en: "Education & experience", fa: "تحصیلات و تجربیات" },
  "journey.subtitle": {
    en: "The path that shaped my academic and professional life.",
    fa: "مسیری که زندگی علمی و حرفه‌ای من را شکل داده است.",
  },
  "blog.kicker": { en: "Blog", fa: "بلاگ" },
  "blog.title": { en: "Latest writing & notes", fa: "آخرین نوشته‌ها و یادداشت‌ها" },
  "blog.subtitle": {
    en: "Short articles, tutorials, and notes on data science and ML.",
    fa: "مقالات کوتاه، آموزش‌ها و یادداشت‌هایی درباره علم داده و یادگیری ماشین.",
  },
  "contact.kicker": { en: "Contact", fa: "تماس" },
  "contact.title": { en: "Let's work together", fa: "با هم کار کنیم" },
  "contact.subtitle": {
    en: "Have a research idea, a project, or just want to say hi? My inbox is always open.",
    fa: "ایده پژوهشی دارید، پروژه‌ای در سر دارید، یا فقط می‌خواهید سلام کنید؟ صندوق ایمیل من همیشه باز است.",
  },

  /* About extras */
  "about.infoTitle": { en: "Quick facts", fa: "اطلاعات سریع" },
  "about.factName": { en: "Full name", fa: "نام کامل" },
  "about.factDegree": { en: "Degree", fa: "مدرک" },
  "about.factDegreeValue": {
    en: "M.Sc. Computer Science (in progress)",
    fa: "کارشناسی ارشد علوم کامپیوتر (در حال تحصیل)",
  },
  "about.factField": { en: "Field", fa: "گرایش" },
  "about.factFieldValue": { en: "Data Science & ML", fa: "علم داده و یادگیری ماشین" },
  "about.factLang": { en: "Languages", fa: "زبان‌ها" },
  "about.factLangValue": { en: "Persian (native), English (fluent)", fa: "فارسی (زبان مادری)، انگلیسی (پیشرفته)" },
  "about.downloadCv": { en: "Download full CV", fa: "دانلود رزومه کامل" },

  /* Publications */
  "pub.authors": { en: "Authors", fa: "نویسندگان" },
  "pub.keywords": { en: "Keywords", fa: "واژگان کلیدی" },
  "pub.copied": { en: "BibTeX copied to clipboard", fa: "BibTeX در حافظه کپی شد" },
  "pub.type.journal": { en: "Journal", fa: "ژورنال" },
  "pub.type.conference": { en: "Conference", fa: "کنفرانس" },
  "pub.type.preprint": { en: "Preprint", fa: "پیش‌چاپ" },
  "pub.type.inprogress": { en: "In progress", fa: "در حال انجام" },
  "pub.linkPdf": { en: "PDF", fa: "PDF" },
  "pub.linkDoi": { en: "DOI", fa: "DOI" },
  "pub.linkCode": { en: "Code", fa: "کد" },
  "pub.bibtex": { en: "BibTeX", fa: "BibTeX" },

  /* Projects */
  "projects.all": { en: "All", fa: "همه" },
  "projects.cat.ml": { en: "Machine Learning", fa: "یادگیری ماشین" },
  "projects.cat.dl": { en: "Deep Learning", fa: "یادگیری عمیق" },
  "projects.cat.viz": { en: "Data Visualization", fa: "بصری‌سازی داده" },
  "projects.cat.web": { en: "Web", fa: "وب" },
  "projects.viewCode": { en: "Source", fa: "سورس" },
  "projects.demo": { en: "Live demo", fa: "دمو" },
  "projects.featured": { en: "Featured", fa: "ویژه" },

  /* Journey */
  "journey.education": { en: "Education", fa: "تحصیلات" },
  "journey.experience": { en: "Experience", fa: "تجربیات" },
  "journey.present": { en: "Present", fa: "اکنون" },
  "journey.honorsTitle": { en: "Honors & certifications", fa: "افتخارات و گواهینامه‌ها" },
  "journey.honorsSub": {
    en: "Awards, scholarships, and professional certificates along the way.",
    fa: "جوایز، بورس‌ها و گواهینامه‌های حرفه‌ای در این مسیر.",
  },

  /* Blog */
  "blog.readMore": { en: "Read article", fa: "خواندن مقاله" },
  "blog.minRead": { en: "min read", fa: "دقیقه مطالعه" },
  "blog.soon": { en: "Coming soon", fa: "به‌زودی" },

  /* Contact */
  "contact.infoEmail": { en: "Email", fa: "ایمیل" },
  "contact.infoLocation": { en: "Location", fa: "موقعیت" },
  "contact.infoCollab": { en: "Collaboration", fa: "همکاری" },
  "contact.infoCollabValue": {
    en: "Open to co-authoring & consulting",
    fa: "آماده هم‌نویسی مقاله و مشاوره",
  },
  "contact.formName": { en: "Your name", fa: "نام شما" },
  "contact.formEmail": { en: "Your email", fa: "ایمیل شما" },
  "contact.formSubject": { en: "Subject", fa: "موضوع" },
  "contact.formMessage": { en: "Message", fa: "پیام" },
  "contact.formNamePh": { en: "e.g. Alan Turing", fa: "مثلاً علیرضا محمدی" },
  "contact.formEmailPh": { en: "e.g. you@example.com", fa: "مثلاً you@example.com" },
  "contact.formSubjectPh": { en: "What is this about?", fa: "موضوع پیام چیست؟" },
  "contact.formMessagePh": {
    en: "Tell me about your idea, project, or question…",
    fa: "درباره ایده، پروژه یا سوال خود بنویسید…",
  },
  "contact.send": { en: "Send message", fa: "ارسال پیام" },
  "contact.sending": { en: "Sending…", fa: "در حال ارسال…" },
  "contact.sentTitle": { en: "Message sent (demo)", fa: "پیام ارسال شد (نمایشی)" },
  "contact.sentDesc": {
    en: "Thanks for reaching out! This is a template preview — the backend will be connected soon.",
    fa: "از تماس شما سپاسگزارم! این یک پیش‌نمایش قالب است — به‌زودی بک‌اند به آن متصل می‌شود.",
  },
  "contact.errorRequired": { en: "Please fill in all required fields.", fa: "لطفاً همه فیلدهای ضروری را تکمیل کنید." },

  /* Footer */
  "footer.tagline": {
    en: "Personal academic website — research, projects, and notes.",
    fa: "وب‌سایت شخصی آکادمیک — پژوهش‌ها، پروژه‌ها و یادداشت‌ها.",
  },
  "footer.quickLinks": { en: "Quick links", fa: "دسترسی سریع" },
  "footer.connect": { en: "Connect", fa: "ارتباط" },
  "footer.rights": { en: "All rights reserved.", fa: "تمامی حقوق محفوظ است." },
  "footer.builtWith": { en: "Built with Next.js & Tailwind CSS", fa: "ساخته‌شده با Next.js و Tailwind CSS" },
  "footer.backToTop": { en: "Back to top", fa: "بازگشت به بالا" },
} satisfies Record<string, LT>;

export type StringKey = keyof typeof STRINGS;

/* ------------------------------------------------------------------ */
/* Research areas                                                      */
/* ------------------------------------------------------------------ */

export interface ResearchArea {
  icon: "network" | "radar" | "activity" | "eye" | "chart" | "brain";
  title: LT;
  description: LT;
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    icon: "network",
    title: { en: "Network Traffic Analysis", fa: "تحلیل ترافیک شبکه" },
    description: {
      en: "Mining high-volume telemetry and NetFlow data to understand, classify, and secure modern networks.",
      fa: "کاوش در داده‌های حجیم تله‌متری و NetFlow برای فهم، طبقه‌بندی و امن‌سازی شبکه‌های مدرن.",
    },
  },
  {
    icon: "radar",
    title: { en: "Anomaly Detection", fa: "تشخیص ناهنجاری" },
    description: {
      en: "Statistical methods (MAD, IQR) and ML models (Isolation Forest, LSTM) for spotting outliers in streaming data.",
      fa: "روش‌های آماری (MAD، IQR) و مدل‌های یادگیری ماشین (Isolation Forest، LSTM) برای یافتن نقاط پرت در داده‌های جریانی.",
    },
  },
  {
    icon: "activity",
    title: { en: "Time-Series Modeling", fa: "مدل‌سازی سری‌های زمانی" },
    description: {
      en: "Forecasting and sequential pattern mining with classical statistics and deep recurrent architectures.",
      fa: "پیش‌بینی و کاوش الگوهای ترتیبی با آمار کلاسیک و معماری‌های عمیق بازگشتی.",
    },
  },
  {
    icon: "eye",
    title: { en: "Interpretable ML", fa: "یادگیری ماشین قابل تفسیر" },
    description: {
      en: "Models should explain themselves — attention analysis, SHAP values, and human-readable decision rules.",
      fa: "مدل‌ها باید خودشان را توضیح دهند — تحلیل توجه، مقادیر SHAP و قواعد تصمیم قابل فهم برای انسان.",
    },
  },
  {
    icon: "chart",
    title: { en: "Data Visualization", fa: "بصری‌سازی داده" },
    description: {
      en: "Interactive dashboards and visual analytics that make complex datasets instantly understandable.",
      fa: "داشبوردهای تعاملی و تحلیل‌های بصری که داده‌های پیچیده را فوراً قابل فهم می‌کنند.",
    },
  },
  {
    icon: "brain",
    title: { en: "Deep Learning", fa: "یادگیری عمیق" },
    description: {
      en: "Designing and training neural architectures — CNNs, RNNs, and hybrid models — for real-world problems.",
      fa: "طراحی و آموزش معماری‌های عصبی — CNN، RNN و مدل‌های ترکیبی — برای مسائل دنیای واقعی.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Publications (sample data — replace with real ones)                 */
/* ------------------------------------------------------------------ */

export type PubType = "journal" | "conference" | "preprint" | "inprogress";

export interface Publication {
  id: string;
  title: LT;
  authors: string; // same in both languages (Latin script)
  venue: LT;
  year: number;
  type: PubType;
  abstract: LT;
  keywords: string[];
  links: { pdf?: string; doi?: string; code?: string };
  bibtex: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: {
      en: "Statistical and Deep Learning Approaches for Anomaly Detection in High-Frequency Network Traffic: A Comparative Study",
      fa: "رویکردهای آماری و یادگیری عمیق برای تشخیص ناهنجاری در ترافیک شبکه با فرکانس بالا: یک مطالعه تطبیقی",
    },
    authors: "H. Farhadipour, A. Colleague, R. Advisor",
    venue: {
      en: "Journal of Network and Computer Applications (under review)",
      fa: "Journal of Network and Computer Applications (در حال داوری)",
    },
    year: 2025,
    type: "inprogress",
    abstract: {
      en: "We benchmark MAD, IQR, Isolation Forest, and LSTM-based detectors on streaming NetFlow data, proposing a hybrid scoring pipeline that reduces false positives by 31% while keeping latency under 50 ms per flow.",
      fa: "ما روش‌های MAD، IQR، Isolation Forest و آشکارسازهای مبتنی بر LSTM را روی داده‌های جریانی NetFlow محک می‌زنیم و یک خط‌لوله امتیازدهی ترکیبی پیشنهاد می‌کنیم که مثبت‌های کاذب را ۳۱٪ کاهش می‌دهد و تأخیر را زیر ۵۰ میلی‌ثانیه برای هر جریان نگه می‌دارد.",
    },
    keywords: ["Anomaly Detection", "NetFlow", "LSTM", "Isolation Forest"],
    links: {},
    bibtex: `@article{farhadipour2025anomaly,\n  title={Statistical and Deep Learning Approaches for Anomaly Detection in High-Frequency Network Traffic},\n  author={Farhadipour, Hamidreza and Colleague, A. and Advisor, R.},\n  journal={Journal of Network and Computer Applications},\n  year={2025}\n}`,
  },
  {
    id: "pub-2",
    title: {
      en: "LSTM-Based Sequential Modeling for Real-Time Intrusion Detection in Streaming Network Data",
      fa: "مدل‌سازی ترتیبی مبتنی بر LSTM برای تشخیص نفوذ بلادرنگ در داده‌های جریانی شبکه",
    },
    authors: "H. Farhadipour, M. Collaborator",
    venue: {
      en: "Proc. 29th International Computer Conference (CSICC), Tehran",
      fa: "مجموعه مقالات بیست‌ونهمین کنفرانس بین‌المللی کامپیوتر (CSICC)، تهران",
    },
    year: 2024,
    type: "conference",
    abstract: {
      en: "A lightweight stacked-LSTM architecture for online intrusion detection that processes packet sequences in sliding windows, achieving 97.2% F1-score on a public benchmark while running on edge hardware.",
      fa: "معماری سبک LSTM انباشته برای تشخیص نفوذ برخط که دنباله بسته‌ها را در پنجره‌های لغزان پردازش می‌کند و روی یک بنچمارک عمومی به امتیاز F1 برابر ۹۷٫۲٪ رسیده و روی سخت‌افزار لبه اجرا می‌شود.",
    },
    keywords: ["Intrusion Detection", "LSTM", "Real-time", "Edge Computing"],
    links: { pdf: "#", code: "https://github.com/hrfpour" },
    bibtex: `@inproceedings{farhadipour2024lstm,\n  title={LSTM-Based Sequential Modeling for Real-Time Intrusion Detection},\n  author={Farhadipour, Hamidreza and Collaborator, M.},\n  booktitle={Proc. 29th International Computer Conference (CSICC)},\n  year={2024}\n}`,
  },
  {
    id: "pub-3",
    title: {
      en: "Interpretable Time-Series Anomaly Scoring with Attention Mechanisms",
      fa: "امتیازدهی قابل تفسیر ناهنجاری در سری‌های زمانی با سازوکار توجه",
    },
    authors: "H. Farhadipour",
    venue: {
      en: "arXiv preprint arXiv:2405.00000",
      fa: "پیش‌چاپ arXiv: arXiv:2405.00000",
    },
    year: 2024,
    type: "preprint",
    abstract: {
      en: "We show that attention weights of a small transformer encoder can double as anomaly explanations, producing per-timestep saliency maps that domain experts found actionable in a user study (n=12).",
      fa: "نشان می‌دهیم که وزن‌های توجه یک انکودر ترنسفورمر کوچک می‌توانند به‌عنوان توضیح ناهنجاری عمل کنند و نقشه‌های اهمیت زمانی تولید کنند که در یک مطالعۀ کاربری (n=12) برای کارشناسان حوزه قابل استفاده بود.",
    },
    keywords: ["Attention", "Explainability", "Time Series", "Transformer"],
    links: { pdf: "#" },
    bibtex: `@misc{farhadipour2024attention,\n  title={Interpretable Time-Series Anomaly Scoring with Attention Mechanisms},\n  author={Farhadipour, Hamidreza},\n  howpublished={arXiv preprint},\n  year={2024}\n}`,
  },
  {
    id: "pub-4",
    title: {
      en: "A Survey of Machine Learning Methods for Network Telemetry Analysis",
      fa: "مروری بر روش‌های یادگیری ماشین برای تحلیل تله‌متری شبکه",
    },
    authors: "H. Farhadipour, R. Advisor",
    venue: {
      en: "In preparation",
      fa: "در حال آماده‌سازی",
    },
    year: 2025,
    type: "inprogress",
    abstract: {
      en: "A structured survey covering 120+ papers on ML-driven network analytics: traffic classification, anomaly detection, capacity forecasting, and the datasets/benchmarks that drive the field forward.",
      fa: "یک مرور ساختاریافته روی بیش از ۱۲۰ مقاله در حوزه تحلیل شبکه با یادگیری ماشین: طبقه‌بندی ترافیک، تشخیص ناهنجاری، پیش‌بینی ظرفیت و مجموعه‌داده‌ها و بنچمارک‌های پیش‌برنده این حوزه.",
    },
    keywords: ["Survey", "Network Telemetry", "Machine Learning"],
    links: {},
    bibtex: `@unpublished{farhadipour2025survey,\n  title={A Survey of Machine Learning Methods for Network Telemetry Analysis},\n  author={Farhadipour, Hamidreza and Advisor, R.},\n  note={In preparation},\n  year={2025}\n}`,
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "ml" | "dl" | "viz" | "web";

export interface Project {
  id: string;
  title: LT;
  description: LT;
  tech: string[];
  category: ProjectCategory;
  year: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  icon: "dashboard" | "radar" | "brain" | "shield" | "database" | "globe";
}

export const PROJECTS: Project[] = [
  {
    id: "prj-1",
    title: { en: "Network Traffic Analytics Dashboard", fa: "داشبورد تحلیل ترافیک شبکه" },
    description: {
      en: "Interactive Streamlit + Plotly dashboard for exploring network telemetry: time-series views, anomaly highlighting, and statistical summaries out of the box.",
      fa: "داشبورد تعاملی با Streamlit و Plotly برای کاوش تله‌متری شبکه: نماهای سری زمانی، برجسته‌سازی ناهنجاری‌ها و خلاصه‌های آماری آماده.",
    },
    tech: ["Python", "Streamlit", "Plotly", "Pandas"],
    category: "viz",
    year: "2024",
    github: "https://github.com/hrfpour",
    featured: true,
    icon: "dashboard",
  },
  {
    id: "prj-2",
    title: { en: "Anomaly Detection in High-Frequency Data", fa: "تشخیص ناهنجاری در داده‌های با فرکانس بالا" },
    description: {
      en: "Comparative study of statistical (MAD, IQR) and ML (Isolation Forest, LSTM) methods for outlier detection in streaming network data — with reproducible notebooks.",
      fa: "مطالعه تطبیقی روش‌های آماری (MAD، IQR) و یادگیری ماشین (Isolation Forest، LSTM) برای کشف نقاط پرت در داده‌های جریانی شبکه — همراه با نوت‌بوک‌های بازتولیدپذیر.",
    },
    tech: ["Python", "Scikit-learn", "PyTorch", "LSTM"],
    category: "ml",
    year: "2024",
    github: "https://github.com/hrfpour",
    featured: true,
    icon: "radar",
  },
  {
    id: "prj-3",
    title: { en: "Time-Series Forecasting Engine", fa: "موتور پیش‌بینی سری زمانی" },
    description: {
      en: "Modular forecasting pipeline (classical + deep models) with backtesting, hyperparameter search, and exportable reports.",
      fa: "خط‌لوله ماژولار پیش‌بینی (مدل‌های کلاسیک و عمیق) همراه با بک‌تستینگ، جست‌وجوی ابرپارامتر و گزارش‌های خروجی.",
    },
    tech: ["PyTorch", "Optuna", "Pandas"],
    category: "dl",
    year: "2024",
    github: "https://github.com/hrfpour",
    icon: "brain",
  },
  {
    id: "prj-4",
    title: { en: "NetFlow Intrusion Classifier", fa: "طبقه‌بند نفوذ NetFlow" },
    description: {
      en: "Real-time classifier that labels NetFlow records as benign or malicious using gradient-boosted trees, designed for edge deployment.",
      fa: "طبقه‌بند بلادرنگی که رکوردهای NetFlow را با درخت‌های تقویت گرادیان به عنوان سالم یا مخرب برچسب می‌زند؛ طراحی‌شده برای استقرار در لبه.",
    },
    tech: ["XGBoost", "scikit-learn", "FastAPI"],
    category: "ml",
    year: "2023",
    github: "https://github.com/hrfpour",
    icon: "shield",
  },
  {
    id: "prj-5",
    title: { en: "Insight SQL Analytics Warehouse", fa: "انبار داده تحلیلی Insight" },
    description: {
      en: "Star-schema data warehouse + SQL analytics layer feeding KPI dashboards; includes ETL jobs and data-quality checks.",
      fa: "انبار داده با طرح ستاره‌ای و لایه تحلیل SQL تغذیه‌کننده داشبوردهای KPI؛ شامل Jobهای ETL و کنترل کیفیت داده.",
    },
    tech: ["PostgreSQL", "SQL", "dbt"],
    category: "viz",
    year: "2023",
    github: "https://github.com/hrfpour",
    icon: "database",
  },
  {
    id: "prj-6",
    title: { en: "This Website", fa: "همین وب‌سایت" },
    description: {
      en: "A bilingual (EN/FA) academic portfolio with dark mode, RTL support, and a fully responsive design — built from scratch.",
      fa: "نمونه‌کار آکادمیک دوزبانه (انگلیسی/فارسی) با حالت تیره، پشتیبانی راست‌به‌چپ و طراحی کاملاً واکنش‌گرا — ساخته‌شده از صفر.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    year: "2025",
    github: "https://github.com/hrfpour",
    icon: "globe",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  icon: "code" | "sparkles" | "brain" | "chart" | "wrench";
  title: LT;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: "code",
    title: { en: "Languages & Core", fa: "زبان‌ها و مبانی" },
    skills: ["Python", "SQL", "R", "Bash", "Git & GitHub", "OOP & Clean Code"],
  },
  {
    icon: "sparkles",
    title: { en: "Machine Learning", fa: "یادگیری ماشین" },
    skills: ["Scikit-learn", "XGBoost", "Feature Engineering", "Model Evaluation", "Anomaly Detection"],
  },
  {
    icon: "brain",
    title: { en: "Deep Learning", fa: "یادگیری عمیق" },
    skills: ["PyTorch", "TensorFlow / Keras", "LSTM / GRU", "CNN", "Attention & Transformers"],
  },
  {
    icon: "chart",
    title: { en: "Data & Visualization", fa: "داده و بصری‌سازی" },
    skills: ["Pandas", "NumPy", "Plotly", "Matplotlib", "Streamlit", "Jupyter"],
  },
  {
    icon: "wrench",
    title: { en: "Tools & Platforms", fa: "ابزارها و پلتفرم‌ها" },
    skills: ["Linux", "Docker", "PostgreSQL", "FastAPI", "LaTeX", "GitHub Actions"],
  },
];

/* ------------------------------------------------------------------ */
/* Education & Experience (sample data)                                */
/* ------------------------------------------------------------------ */

export interface EducationItem {
  degree: LT;
  school: LT;
  period: LT;
  current?: boolean;
  details: LT[];
}

export const EDUCATION: EducationItem[] = [
  {
    degree: { en: "M.Sc. in Computer Science", fa: "کارشناسی ارشد علوم کامپیوتر" },
    school: { en: "University of Tehran", fa: "دانشگاه تهران" },
    period: { en: "2023 — Present", fa: "۲۰۲۳ — اکنون" },
    current: true,
    details: [
      {
        en: "Focus: Data Science & Machine Learning",
        fa: "گرایش: علم داده و یادگیری ماشین",
      },
      {
        en: "Thesis: Deep learning approaches for anomaly detection in high-volume network traffic",
        fa: "پایان‌نامه: رویکردهای یادگیری عمیق برای تشخیص ناهنجاری در ترافیک شبکه با حجم بالا",
      },
      {
        en: "Graduate Research Assistant at the Data Science Lab",
        fa: "دستیار پژوهشگر ارشد در آزمایشگاه علم داده",
      },
    ],
  },
  {
    degree: { en: "B.Sc. in Computer Science", fa: "کارشناسی علوم کامپیوتر" },
    school: { en: "University of Isfahan", fa: "دانشگاه اصفهان" },
    period: { en: "2019 — 2023", fa: "۲۰۱۹ — ۲۰۲۳" },
    details: [
      {
        en: "Final project: real-time network traffic classification with ML",
        fa: "پروژه پایانی: طبقه‌بندی بلادرنگ ترافیک شبکه با یادگیری ماشین",
      },
      {
        en: "Teaching assistant for Data Structures (2 semesters)",
        fa: "دستیار آموزش درس ساختمان داده (۲ نیم‌سال)",
      },
    ],
  },
];

export interface ExperienceItem {
  role: LT;
  org: LT;
  period: LT;
  current?: boolean;
  details: LT[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: { en: "Graduate Research Assistant", fa: "دستیار پژوهشگر ارشد" },
    org: { en: "Data Science Lab — University of Tehran", fa: "آزمایشگاه علم داده — دانشگاه تهران" },
    period: { en: "2024 — Present", fa: "۲۰۲۴ — اکنون" },
    current: true,
    details: [
      {
        en: "Leading research on ML-based anomaly detection for network telemetry.",
        fa: "راهبری پژوهش در زمینه تشخیص ناهنجاری مبتنی بر یادگیری ماشین برای تله‌متری شبکه.",
      },
      {
        en: "Co-authoring journal & conference papers; maintaining the lab's benchmark suite.",
        fa: "هم‌نویسی مقالات ژورنالی و کنفرانسی؛ نگهداری مجموعه بنچمارک آزمایشگاه.",
      },
    ],
  },
  {
    role: { en: "Teaching Assistant — Machine Learning", fa: "دستیار آموزش — یادگیری ماشین" },
    org: { en: "University of Tehran", fa: "دانشگاه تهران" },
    period: { en: "Fall 2024", fa: "پاییز ۲۰۲۴" },
    details: [
      {
        en: "Ran weekly problem-solving sessions and graded projects for 60+ students.",
        fa: "برگزاری جلسات هفتگی حل تمرین و تصحیح پروژه‌های بیش از ۶۰ دانشجو.",
      },
      {
        en: "Created hands-on notebooks on feature engineering and model evaluation.",
        fa: "ساخت نوت‌بوک‌های عملی درباره مهندسی ویژگی و ارزیابی مدل.",
      },
    ],
  },
  {
    role: { en: "Data Science Intern", fa: "کارآموز علم داده" },
    org: { en: "Tech Startup — Tehran", fa: "استارتاپ فناوری — تهران" },
    period: { en: "Summer 2023", fa: "تابستان ۲۰۲۳" },
    details: [
      {
        en: "Built churn-prediction and reporting pipelines serving the product team.",
        fa: "ساخت خطوط لوله پیش‌بینی ریزش مشتری و گزارش‌دهی در خدمت تیم محصول.",
      },
      {
        en: "Automated weekly KPI dashboards, cutting manual reporting time by 70%.",
        fa: "خودکارسازی داشبوردهای هفتگی KPI و کاهش ۷۰٪ی زمان گزارش‌گیری دستی.",
      },
    ],
  },
];

export interface Honor {
  icon: "award" | "cert";
  title: LT;
  issuer: LT;
  year: string;
}

export const HONORS: Honor[] = [
  {
    icon: "award",
    title: { en: "Excellence Scholarship (M.Sc.)", fa: "بورسیه ممتاز (کارشناسی ارشد)" },
    issuer: { en: "University of Tehran", fa: "دانشگاه تهران" },
    year: "2023",
  },
  {
    icon: "cert",
    title: { en: "Machine Learning Specialization", fa: "تخصص یادگیری ماشین" },
    issuer: { en: "Coursera — DeepLearning.AI", fa: "Coursera — DeepLearning.AI" },
    year: "2023",
  },
  {
    icon: "cert",
    title: { en: "Deep Learning Specialization", fa: "تخصص یادگیری عمیق" },
    issuer: { en: "Coursera — DeepLearning.AI", fa: "Coursera — DeepLearning.AI" },
    year: "2024",
  },
  {
    icon: "award",
    title: { en: "Top 1% — SQL & Python Badges", fa: "۱٪ برتر — نشان‌های SQL و Python" },
    issuer: { en: "Kaggle", fa: "Kaggle" },
    year: "2023",
  },
];

/* ------------------------------------------------------------------ */
/* Blog posts (sample)                                                 */
/* ------------------------------------------------------------------ */

export interface BlogPost {
  title: LT;
  excerpt: LT;
  date: LT;
  readTime: number;
  tag: LT;
  soon?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: {
      en: "Understanding Isolation Forest: An Intuitive Guide",
      fa: "درک شهودی Isolation Forest: راهنمای ساده",
    },
    excerpt: {
      en: "Why does randomly cutting the feature space find anomalies so well? A visual, math-light walkthrough with Python examples.",
      fa: "چرا برش تصادفی فضای ویژگی این‌قدر خوب ناهنجاری‌ها را پیدا می‌کند؟ یک walkthrough تصویری با مثال‌های پایتون و حداقل ریاضیات.",
    },
    date: { en: "Feb 2025", fa: "بهمن ۱۴۰۳" },
    readTime: 7,
    tag: { en: "Machine Learning", fa: "یادگیری ماشین" },
  },
  {
    title: {
      en: "From Raw Packets to Insights: Network Telemetry 101",
      fa: "از بسته خام تا بینش: تله‌متری شبکه ۱۰۱",
    },
    excerpt: {
      en: "NetFlow, sFlow, packet captures — what they are, when to use each, and how to turn them into analysis-ready datasets.",
      fa: "NetFlow، sFlow و Packet Capture — چیستند، کِی از هرکدام استفاده کنیم و چگونه به مجموعه‌داده‌های آماده تحلیل تبدیلشان کنیم.",
    },
    date: { en: "Jan 2025", fa: "دی ۱۴۰۳" },
    readTime: 10,
    tag: { en: "Networking", fa: "شبکه" },
  },
  {
    title: {
      en: "LSTMs for Anomaly Detection: Lessons Learned",
      fa: "LSTM برای تشخیص ناهنجاری: درس‌های آموخته",
    },
    excerpt: {
      en: "Window sizes, thresholds, and the traps of leakage — practical lessons from benchmarking recurrent models on streaming data.",
      fa: "اندازه پنجره‌ها، آستانه‌ها و دام‌های نشتی داده — درس‌های عملی از محک‌زدن مدل‌های بازگشتی روی داده‌های جریانی.",
    },
    date: { en: "Nov 2024", fa: "آبان ۱۴۰۳" },
    readTime: 8,
    tag: { en: "Deep Learning", fa: "یادگیری عمیق" },
    soon: true,
  },
];

/* ------------------------------------------------------------------ */
/* Contact & social                                                    */
/* ------------------------------------------------------------------ */

export const SOCIALS = {
  github: { label: "GitHub", href: "https://github.com/hrfpour" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/hamidreza-farhadipour" },
  scholar: { label: "Google Scholar", href: "https://scholar.google.com" },
  email: { label: "Email", href: "mailto:contact@farhadipour.com" },
};

/** Hero stats — values are placeholders; update freely. */
export const HERO_STATS = [
  { value: "4", key: "stat.publications" as StringKey },
  { value: "8+", key: "stat.projects" as StringKey },
  { value: "3", key: "stat.awards" as StringKey },
  { value: "2", key: "stat.teaching" as StringKey },
];
