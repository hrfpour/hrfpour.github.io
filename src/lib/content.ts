/**
 * Central bilingual content store for farhadipour.com
 * All user-facing text lives here (English / Persian).
 *
 * Real data source: Hamidreza Farhadipour's CV (2025-2026).
 * Update this single file to change any site text.
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
  email: "hrfpour@gmail.com",
  github: "https://github.com/hrfpour",
  linkedin: "https://www.linkedin.com/in/hamidreza-farhadipour-897aba284",
  scholar: "https://scholar.google.com/citations?user=ZeLKEY4AAAAJ&hl=en",
  domain: "farhadipour.com",
  roles: {
    en: ["Data Scientist", "M.Sc. Data Science Student", "ML Researcher"],
    fa: ["دانشمند داده", "دانشجوی ارشد علم داده", "پژوهشگر یادگیری ماشین"],
  },
  bioShort: {
    en: "M.Sc. Data Science student & B.Sc. Statistics graduate — combining statistical rigor with machine learning, from Bayesian reliability to spatio-temporal graph neural networks.",
    fa: "دانشجوی کارشناسی ارشد علم داده و فارغ‌التحصیل آمار — پیوند دقت آماری با یادگیری ماشین؛ از قابلیت اطمینان بیزی تا شبکه‌های عصبی گرافی فضایی-زمانی.",
  },
  bioLong: {
    en: "I am an M.Sc. Data Science student and B.Sc. Statistics graduate (Allameh Tabataba'i University), relying on statistical inference and predictive modeling to solve data-driven problems. I have hands-on research experience in advanced statistical analysis, machine learning, and deep learning — and I am comfortable running the full data-analysis cycle, from handling missing data to feature engineering, training, evaluation, and model interpretation, with an evidence-based and methodologically rigorous mindset.\n\nMy thesis focuses on enhancing reliability in traffic forecasting by integrating spatio-temporal graph neural networks with Bayesian approaches. Alongside research, I have served as a teaching assistant for Programming with R, and I enjoy collaborating on projects that extract valid insight from data, enable sharper decisions, and create measurable value.",
    fa: "دانشجوی کارشناسی ارشد علم داده و کارشناس آمار از دانشگاه علامه طباطبائی هستم؛ متکی بر روش‌های استنباط آماری و مدل‌سازی پیش‌بینی برای حل مسائل داده‌محور. تجربهٔ عملی و پژوهشی در تحلیل‌های آماری پیشرفته، یادگیری ماشین و یادگیری عمیق دارم و در طراحی و پیاده‌سازی چرخهٔ کامل تحلیل داده — از مدیریت داده‌های گمشده تا مهندسی ویژگی، آموزش، ارزیابی و تفسیر مدل‌ها — با رویکردی مبتنی بر شواهد و دقت روش‌شناختی توانمندم.\n\nپایان‌نامهٔ من دربارهٔ ارزیابی و بهبود قابلیت اطمینان در پیش‌بینی ترافیک با تلفیق شبکه‌های عصبی گرافی فضایی-زمانی و رویکرد بیزی است. در کنار پژوهش، دستیار آموزشی درس برنامه‌نویسی با R بوده‌ام و علاقه‌مندم در پروژه‌هایی همکاری کنم که بر استخراج بینش معتبر از داده‌ها، تصمیم‌گیری دقیق‌تر و خلق ارزش قابل سنجش تمرکز دارند.",
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
  "stat.gpa": { en: "M.Sc. GPA — out of 20", fa: "معدل کارشناسی ارشد — از ۲۰" },
  "stat.projects": { en: "Academic Projects", fa: "پروژهٔ دانشگاهی" },
  "stat.certificates": { en: "Certificates", fa: "گواهینامهٔ حرفه‌ای" },
  "stat.teaching": { en: "TA Course", fa: "دورهٔ دستیاری آموزشی" },
  "hero.scroll": { en: "Scroll to explore", fa: "برای کاوش اسکرول کنید" },

  /* Section headings */
  "about.kicker": { en: "About me", fa: "درباره من" },
  "about.title": { en: "A little bit about who I am", fa: "کمی بیشتر با من آشنا شوید" },
  "about.subtitle": {
    en: "Statistician by training, data scientist by craft, and a teacher at heart.",
    fa: "آماردان در تحصیل، دانشمند داده در کار، و دلبستهٔ تدریس.",
  },
  "research.kicker": { en: "Research", fa: "پژوهش" },
  "research.title": { en: "Research interests", fa: "حوزه‌های پژوهشی" },
  "research.subtitle": {
    en: "Topics I actively explore, read about, and build on.",
    fa: "موضوعاتی که فعالانه درباره‌شان پژوهش می‌کنم و روی آن‌ها می‌سازم.",
  },
  "projects.kicker": { en: "Projects", fa: "پروژه‌ها" },
  "projects.title": { en: "Things I have designed & built", fa: "چیزهایی که طراحی و ساخته‌ام" },
  "projects.subtitle": {
    en: "Academic and course projects — from statistical modeling to deep learning.",
    fa: "پروژه‌های دانشگاهی و درسی — از مدل‌سازی آماری تا یادگیری عمیق.",
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
    en: "M.Sc. in Data Science (in progress)",
    fa: "کارشناسی ارشد علم داده (در حال تحصیل)",
  },
  "about.factBirth": { en: "Birthplace", fa: "زادگاه" },
  "about.factBirthValue": { en: "Abhar, Zanjan, Iran", fa: "ابهر، زنجان، ایران" },
  "about.factLang": { en: "Languages", fa: "زبان‌ها" },
  "about.factLangValue": {
    en: "Persian & Azerbaijani Turkish (native) · English (professional)",
    fa: "فارسی و ترکی آذربایجانی (زبان مادری) · انگلیسی (حرفه‌ای)",
  },
  "about.downloadCv": { en: "Download full CV", fa: "دانلود رزومه کامل" },

  /* Projects */
  "projects.all": { en: "All", fa: "همه" },
  "projects.cat.ml": { en: "Machine Learning", fa: "یادگیری ماشین" },
  "projects.cat.dl": { en: "Deep Learning", fa: "یادگیری عمیق" },
  "projects.cat.ts": { en: "Time Series", fa: "سری زمانی" },
  "projects.cat.db": { en: "Databases", fa: "پایگاه داده" },
  "projects.supervisor": { en: "Supervised by", fa: "زیر نظر" },
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
  "contact.sending": { en: "Opening…", fa: "در حال باز کردن…" },
  "contact.sentTitle": { en: "Opening your email app…", fa: "در حال باز کردن برنامه ایمیل…" },
  "contact.sentDesc": {
    en: "Your email client opens with the message pre-filled — just press send. If nothing happens, write to hrfpour@gmail.com directly.",
    fa: "برنامهٔ ایمیل شما با پیام آماده باز می‌شود — فقط دکمهٔ ارسال را بزنید. اگر اتفاقی نیفتاد، مستقیم به hrfpour@gmail.com ایمیل بزنید.",
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
    title: { en: "Graph Neural Networks & Traffic Forecasting", fa: "شبکه‌های عصبی گرافی و پیش‌بینی ترافیک" },
    description: {
      en: "My thesis focus: spatio-temporal GNNs that model road-network structure for more reliable traffic prediction.",
      fa: "موضوع پایان‌نامه‌ام: شبکه‌های عصبی گرافی فضایی-زمانی که ساختار شبکهٔ راه را برای پیش‌بینی مطمئن‌تر ترافیک مدل می‌کنند.",
    },
  },
  {
    icon: "radar",
    title: { en: "Bayesian Methods & Reliability", fa: "روش‌های بیزی و قابلیت اطمینان" },
    description: {
      en: "Probabilistic thinking for models you can trust — prior knowledge, uncertainty quantification, and reliability evaluation.",
      fa: "تفکر احتمالاتی برای مدل‌های قابل‌اعتماد — دانش پیشین، کمّی‌سازی عدم‌قطعیت و ارزیابی قابلیت اطمینان.",
    },
  },
  {
    icon: "activity",
    title: { en: "Time-Series Analysis", fa: "تحلیل سری‌های زمانی" },
    description: {
      en: "Forecasting with classical models (ARIMA/SARIMA) and neural approaches — with honest uncertainty and careful backtesting.",
      fa: "پیش‌بینی با مدل‌های کلاسیک (ARIMA/SARIMA) و رویکردهای عصبی — با عدم‌قطعیت صادقانه و بک‌تست دقیق.",
    },
  },
  {
    icon: "brain",
    title: { en: "Machine Learning", fa: "یادگیری ماشین" },
    description: {
      en: "From classical statistical learning to modern ensembles — building models that generalize, with rigorous validation.",
      fa: "از یادگیری آماری کلاسیک تا مدل‌های جمعی مدرن — ساخت مدل‌های تعمیم‌پذیر با اعتبارسنجی دقیق.",
    },
  },
  {
    icon: "eye",
    title: { en: "Deep Learning & Computer Vision", fa: "یادگیری عمیق و بینایی ماشین" },
    description: {
      en: "Training modern CNN architectures for image classification and exploring transfer learning on real datasets.",
      fa: "آموزش معماری‌های مدرن CNN برای دسته‌بندی تصویر و به‌کارگیری یادگیری انتقالی روی داده‌های واقعی.",
    },
  },
  {
    icon: "chart",
    title: { en: "Data Mining & Evolutionary Computation", fa: "داده‌کاوی و محاسبات تکاملی" },
    description: {
      en: "Clustering, classification, and optimization with genetic algorithms and swarm intelligence — finding structure where nothing is labeled.",
      fa: "خوشه‌بندی، رده‌بندی و بهینه‌سازی با الگوریتم‌های ژنتیک و هوش جمعی — یافتن ساختار در داده‌های بدون برچسب.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "ml" | "dl" | "ts" | "db";

export interface Project {
  id: string;
  title: LT;
  description: LT;
  tech: string[];
  category: ProjectCategory;
  year: LT;
  supervisor: LT;
  github?: string;
  demo?: string;
  featured?: boolean;
  icon: "dashboard" | "radar" | "brain" | "shield" | "database" | "globe" | "chart" | "dna";
}

export const PROJECTS: Project[] = [
  {
    id: "prj-ts",
    title: { en: "Time-Series Modeling & Forecasting", fa: "مدل‌سازی و پیش‌بینی سری‌های زمانی" },
    description: {
      en: "End-to-end forecasting study: decomposition and stationarity testing, ARIMA/SARIMA model selection, residual diagnostics, and accuracy benchmarking (RMSE/MAE) across candidate models.",
      fa: "مطالعهٔ کامل پیش‌بینی: تجزیه و آزمون ایستایی، انتخاب مدل ARIMA/SARIMA، آزمون‌های باقیمانده و مقایسهٔ دقت (RMSE/MAE) مدل‌های کاندید.",
    },
    tech: ["Python", "pandas", "statsmodels", "ARIMA / SARIMA", "Matplotlib"],
    category: "ts",
    year: { en: "Jan 2024", fa: "دی ۱۴۰۲" },
    supervisor: { en: "Dr. Mohammadreza Salehirad", fa: "دکتر محمدرضا صالحی‌راد" },
    featured: true,
    icon: "chart",
  },
  {
    id: "prj-db",
    title: { en: "Hybrid SQL + NoSQL Database Architecture", fa: "معماری ترکیبی پایگاه داده (SQL و NoSQL)" },
    description: {
      en: "Designed and implemented a hybrid relational/document database architecture — mapping each workload to the right store and benchmarking cross-store queries for a realistic application scenario.",
      fa: "طراحی و پیاده‌سازی معماری ترکیبی رابطه‌ای/سندی پایگاه داده — تناسب هر بار کاری با فروشگاه مناسب و محک‌زدن کوئری‌های بین‌فروشگاهی برای یک سناریوی واقعی.",
    },
    tech: ["SQL", "MongoDB", "Schema Design", "Query Optimization"],
    category: "db",
    year: { en: "Jan 2025", fa: "دی ۱۴۰۳" },
    supervisor: { en: "Dr. Mohammad Ebrahim Shiri", fa: "دکتر محمدابراهیم شیری" },
    icon: "database",
  },
  {
    id: "prj-cluster",
    title: { en: "Comprehensive Data Analysis: Clustering & Classification", fa: "تحلیل جامع داده با خوشه‌بندی و رده‌بندی" },
    description: {
      en: "Full analytical cycle on a real dataset — preprocessing and missing-data handling, exploratory analysis, unsupervised segmentation, and supervised classification with model comparison.",
      fa: "چرخهٔ کامل تحلیل روی دادهٔ واقعی — پیش‌پردازش و مدیریت داده‌های گمشده، کاوش اولیه، قطعه‌بندی بدون‌نظارت و رده‌بندی نظارت‌شده با مقایسهٔ مدل‌ها.",
    },
    tech: ["Python", "scikit-learn", "K-Means", "Random Forest", "PCA"],
    category: "ml",
    year: { en: "Feb 2025", fa: "بهمن ۱۴۰۳" },
    supervisor: { en: "Dr. Vahid Rezaie Tabar", fa: "دکتر وحید رضایی‌تبار" },
    icon: "dashboard",
  },
  {
    id: "prj-spam",
    title: { en: "Bayesian Email Spam Detection", fa: "تشخیص هرزنامه ایمیل با رویکرد بیزی" },
    description: {
      en: "Built a probabilistic spam filter from scratch — text preprocessing, Bag-of-Words / TF-IDF features, and Multinomial Naive Bayes evaluated with precision/recall trade-offs.",
      fa: "ساخت فیلتر احتمالاتی هرزنامه از صفر — پیش‌پردازش متن، ویژگی‌های Bag-of-Words و TF-IDF و Naive Bayes چندجمله‌ای با ارزیابی توازن دقت/بازیابی.",
    },
    tech: ["Python", "Naive Bayes", "NLP", "scikit-learn"],
    category: "ml",
    year: { en: "Nov 2025", fa: "آبان ۱۴۰۴" },
    supervisor: { en: "Dr. Farzad Eskandari", fa: "دکتر فرزاد اسکندری" },
    icon: "shield",
  },
  {
    id: "prj-cnn",
    title: { en: "Pistachio Image Classification with Modern CNNs", fa: "دسته‌بندی تصاویر پسته با معماری‌های مدرن CNN" },
    description: {
      en: "Transfer-learning benchmark of modern CNN architectures for pistachio variety classification — augmentation strategies and a comparative evaluation of accuracy versus inference cost.",
      fa: "محک‌زدن معماری‌های مدرن CNN با یادگیری انتقالی برای دسته‌بندی ارقام پسته — راهبردهای افزایش داده و مقایسهٔ دقت در برابر هزینهٔ استنتاج.",
    },
    tech: ["PyTorch", "Transfer Learning", "ResNet", "EfficientNet"],
    category: "dl",
    year: { en: "Dec 2025", fa: "آذر ۱۴۰۴" },
    supervisor: { en: "Dr. Mohammadsharam Moein", fa: "دکتر محمدشهرام معین" },
    featured: true,
    icon: "brain",
  },
  {
    id: "prj-evo",
    title: { en: "Evolutionary vs. Swarm Algorithms: A Comparative Study", fa: "مقایسهٔ تطبیقی الگوریتم‌های تکاملی و هوش جمعی" },
    description: {
      en: "Implemented Genetic Algorithms and Particle Swarm Optimization from scratch, comparing convergence, robustness, and solution quality on continuous and discrete optimization benchmarks.",
      fa: "پیاده‌سازی الگوریتم ژنتیک و بهینه‌سازی ازدحام ذرات از صفر و مقایسهٔ همگرایی، پایداری و کیفیت جواب روی بنچمارک‌های بهینه‌سازی پیوسته و گسسته.",
    },
    tech: ["Python", "Genetic Algorithm", "Particle Swarm Optimization", "Benchmarking"],
    category: "ml",
    year: { en: "Jan 2026", fa: "دی ۱۴۰۴" },
    supervisor: { en: "Dr. Shokouh Shahbeik", fa: "دکتر شکوه شاهبیک" },
    icon: "dna",
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
    title: { en: "Programming & Databases", fa: "برنامه‌نویسی و پایگاه داده" },
    skills: ["Python (Pandas, NumPy)", "R", "SQL", "SPSS", "Git & GitHub", "Jupyter"],
  },
  {
    icon: "brain",
    title: { en: "Machine Learning & Deep Learning", fa: "یادگیری ماشین و یادگیری عمیق" },
    skills: ["Scikit-learn", "PyTorch", "CNNs & Transfer Learning", "ARIMA / SARIMA", "Naive Bayes & Ensembles"],
  },
  {
    icon: "chart",
    title: { en: "Statistics & Data Mining", fa: "آمار و داده‌کاوی" },
    skills: ["Statistical Inference", "Hypothesis Testing", "Clustering & Classification", "Feature Engineering", "Regression Analysis"],
  },
  {
    icon: "wrench",
    title: { en: "Data Engineering & Visualization", fa: "مهندسی و بصری‌سازی داده" },
    skills: ["SQL / DBMS", "MongoDB (NoSQL)", "Missing-Data Handling", "Matplotlib & Plotly", "ggplot2"],
  },
  {
    icon: "sparkles",
    title: { en: "Communication & Teaching", fa: "ارتباط و تدریس" },
    skills: ["Scientific Writing (FA/EN)", "Teaching & TA Experience", "Data Storytelling", "Technical Presentation"],
  },
];

/* ------------------------------------------------------------------ */
/* Education & Experience                                              */
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
    degree: { en: "M.Sc. in Data Science", fa: "کارشناسی ارشد علم داده" },
    school: { en: "Allameh Tabataba'i University (ATU), Tehran", fa: "دانشگاه علامه طباطبائی، تهران" },
    period: { en: "Oct 2024 — Present", fa: "مهر ۱۴۰۳ — اکنون" },
    current: true,
    details: [
      { en: "GPA: 18.74 / 20", fa: "معدل: ۱۸٫۷۴ از ۲۰" },
      {
        en: "Thesis: Enhancing reliability in traffic forecasting by integrating spatio-temporal graph neural networks with Bayesian approaches",
        fa: "پایان‌نامه: ارزیابی و بهبود قابلیت اطمینان در پیش‌بینی ترافیک با استفاده از تلفیق شبکه‌های عصبی گرافی فضایی-زمانی با رویکرد بیزی",
      },
    ],
  },
  {
    degree: { en: "B.Sc. in Statistics", fa: "کارشناسی آمار" },
    school: { en: "Allameh Tabataba'i University (ATU), Tehran", fa: "دانشگاه علامه طباطبائی، تهران" },
    period: { en: "Sep 2019 — Jul 2024", fa: "مهر ۱۳۹۸ — تیر ۱۴۰۳" },
    details: [
      { en: "GPA: 15.98 / 20", fa: "معدل: ۱۵٫۹۸ از ۲۰" },
      {
        en: "Core coursework: statistical inference, regression analysis, data mining, machine learning",
        fa: "دروس اصلی: استنباط آماری، تحلیل رگرسیون، داده‌کاوی، یادگیری ماشین",
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
    role: { en: "Teaching Assistant — Programming with R", fa: "دستیار آموزشی — درس برنامه‌نویسی با R" },
    org: { en: "Allameh Tabataba'i University", fa: "دانشگاه علامه طباطبائی" },
    period: { en: "Graduate studies", fa: "دورهٔ تحصیلات تکمیلی" },
    details: [
      {
        en: "Led hands-on R sessions and reviewed assignments for the Programming with R course.",
        fa: "برگزاری جلسات عملی R و بازبینی تمرین‌های درس برنامه‌نویسی با R.",
      },
      {
        en: "Supported students with data manipulation, visualization, and statistical computing in R.",
        fa: "همراهی دانشجویان در دست‌ورزی داده، بصری‌سازی و محاسبات آماری با R.",
      },
    ],
  },
];

export interface Honor {
  icon: "award" | "cert";
  title: LT;
  issuer: LT;
  year?: string;
}

export const HONORS: Honor[] = [
  {
    icon: "cert",
    title: { en: "Machine Learning — Course Certificate", fa: "یادگیری ماشین — گواهینامهٔ دوره" },
    issuer: { en: "Allameh Tabataba'i University", fa: "دانشگاه علامه طباطبائی" },
  },
  {
    icon: "cert",
    title: { en: "Data Mining — Course Certificate", fa: "داده‌کاوی — گواهینامهٔ دوره" },
    issuer: { en: "Allameh Tabataba'i University", fa: "دانشگاه علامه طباطبائی" },
  },
  {
    icon: "cert",
    title: { en: "Advanced Python", fa: "پایتون پیشرفته" },
    issuer: { en: "Sharif University of Technology (Maktabkhooneh)", fa: "دانشگاه صنعتی شریف (مکتب‌خونه)" },
  },
];

/* ------------------------------------------------------------------ */
/* Blog posts (planned)                                                */
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
      en: "A Gentle Introduction to Spatio-Temporal Graph Neural Networks",
      fa: "درآمدی بر شبکه‌های عصبی گرافی فضایی-زمانی",
    },
    excerpt: {
      en: "How GNNs encode road networks in space and time — and why they are changing traffic forecasting.",
      fa: "شبکه‌های عصبی گرافی چگونه شبکهٔ راه را در فضا و زمان مدل می‌کنند — و چرا آیندهٔ پیش‌بینی ترافیک را تغییر می‌دهند.",
    },
    date: { en: "Planned", fa: "در نوبت نگارش" },
    readTime: 8,
    tag: { en: "Deep Learning", fa: "یادگیری عمیق" },
    soon: true,
  },
  {
    title: {
      en: "Bayesian Thinking for Trustworthy Machine Learning",
      fa: "تفکر بیزی برای یادگیری ماشین قابل‌اعتماد",
    },
    excerpt: {
      en: "Priors, posterior uncertainty, and what it means for a model to know what it doesn't know.",
      fa: "پیشین‌ها، عدم‌قطعیت پسین و معنای این که مدل بداند چه چیزهایی را نمی‌داند.",
    },
    date: { en: "Planned", fa: "در نوبت نگارش" },
    readTime: 6,
    tag: { en: "Statistics", fa: "آمار" },
    soon: true,
  },
  {
    title: {
      en: "Time Series in R: From ARIMA to Modern Workflows",
      fa: "سری زمانی در R: از ARIMA تا گردش‌کارهای مدرن",
    },
    excerpt: {
      en: "Practical forecasting recipes in R — the language I teach — with tidyverts and reproducible pipelines.",
      fa: "دستورکارهای عملی پیش‌بینی در R — زبانی که تدریس می‌کنم — با tidyverts و خط‌لوله‌های بازتولیدپذیر.",
    },
    date: { en: "Planned", fa: "در نوبت نگارش" },
    readTime: 7,
    tag: { en: "Time Series", fa: "سری زمانی" },
    soon: true,
  },
];

/* ------------------------------------------------------------------ */
/* Contact & social                                                    */
/* ------------------------------------------------------------------ */

export const SOCIALS = {
  github: { label: "GitHub", href: "https://github.com/hrfpour" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/hamidreza-farhadipour-897aba284" },
  scholar: { label: "Google Scholar", href: "https://scholar.google.com/citations?user=ZeLKEY4AAAAJ&hl=en" },
  email: { label: "Email", href: "mailto:hrfpour@gmail.com" },
};

/** Hero stats */
export const HERO_STATS = [
  { value: "18.74", key: "stat.gpa" as StringKey },
  { value: "6", key: "stat.projects" as StringKey },
  { value: "3", key: "stat.certificates" as StringKey },
  { value: "1", key: "stat.teaching" as StringKey },
];
