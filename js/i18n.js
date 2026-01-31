/* i18n: EN / 中文 */
(function () {
    var storageKey = "portfolio-lang";
    var defaultLang = "en";

    var t = {
        en: {
            // left column
            about_me: "about me",
            present: "present",
            keywords: "keywords",
            past: "past",
            name_line: "Yutong YANG — 杨雨彤",
            intro_1: "Master's in the <a href=\"https://vis.sjtu.edu.cn/index.html\">Data Intelligence Visual Analytics Team</a> at Shanghai Jiao Tong University (SJTU). Intern or collaboration experience with <a href=\"https://vis.pku.edu.cn/\">PKU</a>, <a href=\"https://fduvis.net/\">FDU</a>, CAFA, NUA, CASS.",
            intro_2: "Interning at <a href=\"https://www.oecd.org/en/about/directorates/sahel-and-west-africa-club.html\">SWAC, OECD</a>.",
            master_sjtu: "Master @ SJTU",
            bachelor_sjtu: "Bachelor @ SJTU",
            keywords_string: "human–computer interaction · human–AI interaction · information design · data visualization · data analysis",
            // tabs
            tab_projects: "projects",
            tab_more: "more",
            // more page
            section_footprints: "My Footprints",
            section_student_work: "Student Work",
            section_student_work_desc: "I worked at the Art Center of the Student Union at Shanghai Jiao Tong University. I mainly worked in photography, videography, and interviewing.",
            video_caption: "<a href=\"https://www.bilibili.com/video/BV1t7411i7wD/?spm_id_from=333.999.0.0&vd_source=b92b262d8b3a96c50054cbd7822e5e7b\" target=\"_blank\" class=\"linkStyle1\">A video link to an event I participated in :)</a> — I was one of the mobile cameras that worked from a close-up stage perspective.",
            section_courses: "Some interesting courses I have taken or audited",
            course_1: "French Philosophy",
            course_2: "Information Design",
            course_3: "Phenomenology",
            course_4: "A Spiritual Odyssey of the West",
            course_5: "Interactive Design",
            course_6: "Epistemology",
            // internship
            internship_title: "Internship",
            internship_intro: "OECD/SWAC · 2025–2026 · Data visualization & interaction design. Research-oriented data products for African urbanisation and policy.",
            cap_1: "Abstract Africa Rural-Urban Population Map",
            cap_2: "West Africa Food Trade",
            cap_3: "West Africa Agglomeration Growth",
            cap_4: "Africa Rural–Urban Storytelling",
            cap_5: "Africa Urbanisation",
            // project labels (reused)
            label_design_research: "Design Research",
            label_information_design: "Information Design",
            label_interactive_design: "Interactive Information Design",
            label_ai_product: "AI Product · Interactive Design",
            label_ai_interaction: "AI Product · Interaction",
            label_data_viz: "Data Visualization",
            // project 1
            proj_1_title: "Mapping What I Feel",
            proj_1_subtitle: "Mapping What I Feel — Affective Geovisualization Design",
            proj_1_keywords: "emotional maps · case research · design synthesis",
            proj_1_desc: "Affective visualization design is an emerging research direction focused on communicating and influencing emotion through visualization. The area is highly interdisciplinary and benefits from fine-grained analysis. The project focuses on affective geovisualization design: using the Person-Process-Place (PPP) model from geographic theory, a curated corpus of affective geovisualization designs was analyzed to derive a design taxonomy that characterizes methods for eliciting and enhancing emotions through geographic visualization, and to identify four high-level design paradigms (e.g., computational, anthropomorphic) that link geographic information with human experience. The work extends existing affective visualization frameworks with geographic specificity and provides design examples, domain-specific analyses, and insights for this underexplored yet highly innovative domain.",
            proj_2_keywords: "metro · abstract encoding · information design",
            // project 2
            proj_2_title: "City Pulse",
            proj_2_subtitle: "City Pulse — Global Metro Line Development",
            proj_2_desc: "Metro systems are the pulsing veins of cities, traversing the city’s texture and preserving the memory of urban life. Visualizing the metro, which is a visceral and accustomed part of the daily lived experience for residents, makes it reappear in residents’ perspectives in a new form, becoming a more emblematic landscape of each city’s unique identity and development. City Pulse uses an abstraction method that encodes metro routes as lines, cities as squares, and the global map as an abstract representation. The interactive system enables a comprehensive visual exploration of the global metro lines. Through this highly abstract and minimalist form, each city’s structure, symbolic identity, and regional development are revealed. Moreover, the colorful global metro map efficiently portrays the diversity and evolution of metro lines worldwide. The pictorial narrates the design process and reflections.",
            proj_3_keywords: "city history · interactive exploration · multi-view",
            // project 3
            proj_3_title: "EmoGeoCity",
            proj_3_subtitle: "EmoGeoCity — City History & Culture Explorer",
            proj_3_desc: "A city’s history and culture studies involves understanding the literary works and historical events that have shaped the city’s identity. Increased availability of quantitative historical data has provided new opportunities. EmoGeoCity is a visual analytics system that studies a city’s cultural and historical evolution using digital humanities methods and emotional geography, with Nanjing as an example. The system incorporates sentiment analysis into historical research to quantify the emotional content of works and synthesize an overall emotion trend within a specific location. A dynamic emotional map, integrating locations, works, and events, enables a macroscopic observation of city emotions over time. An emotional polyline is designed to provide a microscopic interpretation of the emotion trend of a single location. Exploration through the system reveals the evolution of the city from an emotional geographic perspective, which gives insights for humanities researchers studying a city’s history and literature, as well as for the general public interested in gaining knowledge on historical sites. Case and user studies illustrate its effectiveness and usability.",
            proj_4_keywords: "linguistic typology · multi-database · AI-assisted analysis",
            // project 4
            proj_4_title: "Global Mosaic",
            proj_4_subtitle: "Global Mosaic — Language, Culture & Environment",
            proj_4_desc: "Recent advancements in typology have led to a shift toward large-scale, quantitative analyses. Linguistic, cultural and environmental databases like Grambank, D-PLACE, and WALS offer rich and structured data, facilitating the exploration of complex relationships in interdisciplinary research. Key challenges include selecting meaningful and theoretically relevant features from vast and heterogeneous datasets; manual evaluation of thousands of variables is time consuming and prone to omissions or bias; and fully data-driven feature discovery is computationally expensive and linguistically opaque. Global Mosaic is an AI-enhanced, knowledge-driven platform for multi-database feature selection and validation. By embedding expert knowledge into an interactive AI-supported visual environment, the platform guides and augments researchers' decision making rather than replacing it.",
            // project 5
            proj_5_title: "Octopus Maps",
            proj_5_subtitle: "Octopus Maps — Visual Rhetoric in Persuasive Cartography",
            proj_5_keywords: "persuasive maps · visual rhetoric · design space",
            proj_5_desc: "When designed deliberately, data visualizations can become powerful persuasive tools, influencing viewers' opinions, values, and actions. A fundamental mechanism of persuasion resides in rhetorical construction, a perspective that remains under-addressed in visualization research. The project presents a focused analysis of octopus maps—a visual genre that has maintained persuasive power across centuries and achieved significant social impact. Using rhetorical schema theory, 90 octopus maps from the 19th century to the present were collected and analyzed; the design space reveals how visual metaphors are strategically constructed and what rhetorical strategies are applied to maps, octopus imagery, and text. Findings include: octopus maps remain a lively design convention in today's digital age; while most stem from Western discourse that views the octopus as an evil symbol, some designs offer alternative interpretations, highlighting the dynamic nature of rhetoric across sociocultural settings. The work also discusses ethical concerns of persuasive visualization.",
            proj_6_keywords: "classic novel · character extraction · LLM + human annotation",
            // project 6
            proj_6_title: "Classic Chinese Novel Extraction",
            proj_6_subtitle: "Classic Chinese Novel — Dialogue Character Extraction & Annotation",
            proj_6_desc: "The framework supports extracting, annotating, attributing and visualizing dialogue characters in classic Chinese novels, with interactive workflows that incorporate expert knowledge. Classic Chinese novels such as Dream of the Red Chamber feature complex characters and intricate relationships; manual extraction is labor-intensive and limited in scalability, while context richness and character-reference complexity pose challenges for fully automated methods. Co-reference resolution—whether different names refer to the same character—is particularly difficult due to multiple aliases and context-dependent naming. The system is LLM-assisted: a backend handles segmentation, extraction, and database storage; a frontend supports interactive annotation and visualization. Co-reference resolution uses a combined LLM and visualization-assisted approach, integrating user expertise to refine character chains and improve attribution accuracy. The front-end provides an annotation interface with color-coded dialogue display and a dialogue network (characters as nodes, speaker-listener relationships as links); experts can correct name chains and regenerate the network. The approach bridges fully automated methods and human expertise, offering a scalable solution for dialogue character recognition in classic Chinese novels.",
            proj_7_keywords: "personality · demographics · correlation analysis",
            // project 7
            proj_7_title: "MBTIviz",
            proj_7_subtitle: "MBTIviz — Personality & Demographics Explorer",
            proj_7_desc: "Growing interest in the correlation between personality traits and real-life individual characteristics has been driven by the popularity of the Myers‒Briggs Type Indicator (MBTI) on social media. MBTIviz is a visualization system that supports comprehensive, accessible analysis of the correlation between personality and demographic variables such as occupation and nationality, based on an MBTI-demographic dataset. Analysing demographic data with personality information poses challenges due to the complexity of big data; correlation tables commonly used in the humanities do not offer an intuitive representation of variable relationships. The system provides an integrated view of statistical data (all demographic information in a single visual format) and a more informative, visually appealing presentation of correlation data, facilitating exploration of linkages between personality traits and real-life characteristics. It includes machine learning predictive views that help non-expert users understand their personality traits and obtain career predictions based on demographic data."
        },
        zh: {
            about_me: "我...",
            present: "我在",
            keywords: "关键词",
            past: "我曾",
            name_line: "杨雨彤 — Yutong YANG",
            intro_1: "上海交通大学 <a href=\"https://vis.sjtu.edu.cn/index.html\">数据智能与可视分析团队</a> 硕士。实习或合作经历：<a href=\"https://vis.pku.edu.cn/\">PKU</a>、<a href=\"https://fduvis.net/\">FDU</a>、CAFA、NUA、CASS。",
            intro_2: "现于 <a href=\"https://www.oecd.org/en/about/directorates/sahel-and-west-africa-club.html\">SWAC, OECD</a> 实习。",
            master_sjtu: "硕士 @ 上海交大",
            bachelor_sjtu: "本科 @ 上海交大",
            keywords_string: "人机交互 · 人AI交互 · 信息设计 · 数据可视化 · 数据分析",
            tab_projects: "项目",
            tab_more: "更多",
            section_footprints: "足迹⋆｡ ⊹ ࣪˖ ",
            section_student_work: "学生工作",
            section_student_work_desc: "曾在上海交通大学学生会艺术中心工作，主要负责摄影、摄像与采访。",
            video_caption: "<a href=\"https://www.bilibili.com/video/BV1t7411i7wD/?spm_id_from=333.999.0.0&vd_source=b92b262d8b3a96c50054cbd7822e5e7b\" target=\"_blank\" class=\"linkStyle1\">我参与的一场绿洲音乐节活动的视频 :)</a> — 担任近景舞台机位（游机）之一。",
            section_courses: "选修或旁听过的课程",
            course_1: "法国哲学",
            course_2: "信息设计",
            course_3: "现象学",
            course_4: "西方精神之旅",
            course_5: "交互设计",
            course_6: "认识论",
            internship_title: "实习",
            internship_intro: "OECD/SWAC · 2025–2026 · 数据可视化与交互设计。面向非洲城市化与政策的研究型数据产品。",
            cap_1: "非洲城乡人口抽象地图",
            cap_2: "西非粮食贸易",
            cap_3: "西非城市聚落发展",
            cap_4: "非洲城乡数据故事",
            cap_5: "非洲城市化",
            label_design_research: "设计研究",
            label_information_design: "信息设计",
            label_interactive_design: "交互信息设计",
            label_ai_product: "AI · 交互设计",
            label_ai_interaction: "AI · 交互设计",
            label_data_viz: "数据分析与可视化",
            proj_1_title: "Mapping What I Feel",
            proj_1_subtitle: "Mapping What I Feel — 情感地理可视化设计",
            proj_1_keywords: "情感地图 · 案例调研 · 设计归纳",
            proj_1_desc: "情感可视化设计是新兴研究方向，关注通过可视化传达与影响情绪。该领域高度跨学科，需从更细粒度角度分析。项目聚焦「情感地理可视化设计」：基于地理理论中的 Person-Process-Place (PPP) 模型分析一批情感地理可视化作品，归纳出通过地理可视化唤起与强化情感的设计分类，并识别四种高层设计范式（如计算式、拟人式），用以连结地理信息与人类经验。在现有情感可视化框架上加入地理特异性，提供设计示例、领域分析与启示，支持这一尚未充分探索但极具创新性的方向。",
            proj_2_title: "City Pulse",
            proj_2_subtitle: "City Pulse — 全球地铁发展",
            proj_2_keywords: "地铁 · 抽象编码 · 信息设计",
            proj_2_desc: "地铁是城市的脉搏，穿行于城市肌理并承载居民的生活记忆。将居民习以为常的地铁以可视化形式重新呈现，可使其成为城市身份与发展的象征景观。City Pulse 采用一种抽象编码方法：地铁线路为线、城市为方块、全球地图为抽象表达，并实现交互系统，支持对全球地铁线路的全面视觉探索。借由高度抽象与极简形式，呈现每座城市的结构、符号身份与区域发展；彩色全球地铁图有效呈现各地地铁的多样性与演变。pictorial 形式叙述设计过程与反思。",
            proj_3_title: "EmoGeoCity",
            proj_3_subtitle: "EmoGeoCity — 城市历史与文化探索",
            proj_3_keywords: "城市历史 · 交互探索 · 多视图",
            proj_3_desc: "城市历史与文化研究涉及理解塑造城市身份的文学作品与历史事件；定量历史数据的增加带来了新可能。EmoGeoCity 是一个结合数字人文方法与情感地理的可视分析系统，以南京为例研究城市文化与历史演化。系统将情感分析纳入历史研究，量化作品情感内容并综合特定场所的整体情感趋势；动态情感地图整合地点、作品与事件，支持从宏观观察城市情感随时间变化；情感折线则提供单点情感趋势的微观解读。通过系统探索可从情感地理视角揭示城市演变，为人文研究者与对历史场所感兴趣的公众提供洞察。案例与用户研究展示了系统的有效性与可用性。",
            proj_4_title: "Global Mosaic",
            proj_4_subtitle: "Global Mosaic — 语言、文化与环境",
            proj_4_keywords: "语言类型学 · 多库整合 · AI 辅助分析",
            proj_4_desc: "类型学近年趋向大规模定量分析。Grambank、D-PLACE、WALS 等语言、文化与环境数据库提供丰富结构化数据，便于跨学科研究中探索复杂关系。主要挑战包括：从海量异质数据中选取有理论意义的特征；对成千上万个变量的人工评估耗时且易遗漏或偏倚；完全数据驱动的特征发现计算成本高且语言上不透明。Global Mosaic 是一个 AI 增强、知识驱动的多库特征选择与验证平台，将专家知识嵌入交互式 AI 支持的视觉环境，以引导和增强研究者决策而非替代之。",
            proj_5_title: "Octopus Maps",
            proj_5_subtitle: "Octopus Maps — 说服性地图中的视觉修辞",
            proj_5_keywords: "说服地图 · 视觉修辞 · 设计归纳",
            proj_5_desc: "当被刻意设计时，数据可视化可成为强有力的说服工具，影响观众的观点、价值与行为。说服的根本机制在于修辞建构，这一视角在当前可视化研究中尚不充分。项目对「章鱼地图」这一跨越世纪仍具说服力与社会影响力的视觉类型进行聚焦分析。基于修辞图式理论，收集并分析了从 19 世纪至今的 90 幅章鱼地图，考察其如何实现说服意图，并构建了揭示视觉隐喻如何被策略性建构、以及地图、章鱼意象与文本等组件常用修辞策略的设计空间。分析还得到若干发现：章鱼地图在数字时代仍是活跃设计惯例；多数源自将章鱼视为邪恶符号的西方话语，部分设计则提供另类解读，体现修辞在不同社会文化中的动态性。并结合章鱼地图的启示讨论说服性可视化的伦理关切。",
            proj_6_title: "Classic Chinese Novel Extraction",
            proj_6_subtitle: "古典中文小说 — 对话人物抽取与标注",
            proj_6_keywords: "古典小说 · 人物抽取 · LLM+人工标注",
            proj_6_desc: "该框架支持古典中文小说对话人物的抽取、标注、归属与可视化，通过交互流程将专家知识融入该过程。古典小说如《红楼梦》人物关系复杂；人工抽取费时且难以扩展，而语境丰富与指称复杂又给全自动方法带来挑战。共指消解——判断不同名称是否指向同一人物——因别名众多与语境依赖而尤为困难。系统采用 LLM 辅助：后端负责切分、抽取与数据库存储，前端负责交互式标注与可视化。共指消解采用 LLM 与可视化辅助相结合的方式，融入用户专业知识以优化人物链并提高归属准确度。前端提供颜色编码的对话展示与将人物表示为节点、说—听关系为连线的对话网络；专家可修正人物链并重新生成网络。方案在全自动方法与人工专家之间架起桥梁，为古典中文小说对话人物识别提供可扩展的解决方案。",
            proj_7_title: "MBTIviz",
            proj_7_subtitle: "MBTIviz — 人格与人口统计探索",
            proj_7_keywords: "人格 · 人口统计 · 关联分析",
            proj_7_desc: "MBTI 在社交媒体上的流行推动了对人格特质与现实生活中个体特征之间相关性的关注。MBTIviz 是一个基于 MBTI–人口统计数据集的可视化系统，支持研究者对人格与职业、国籍等人口统计变量相关性进行全面、易用分析。将人口统计数据与人格信息结合分析仍因大数据复杂性而面临挑战；人文学科常用的相关分析表在呈现变量关系时也不够直观。系统提供统计数据的整合视图，将所有人口统计信息置于单一视觉形式中，并以更丰富、直观的方式呈现相关数据，便于进一步探索人格特质与现实生活中个体特征之间的关联；并包含基于机器学习的预测视图，帮助非专家用户理解自身人格特质并根据人口统计数据进行职业预测。"
        }
    };

    function getLang() {
        try {
            var s = localStorage.getItem(storageKey);
            if (s === "zh" || s === "en") return s;
        } catch (e) {}
        return defaultLang;
    }

    function setLang(lang) {
        if (lang !== "en" && lang !== "zh") return;
        try { localStorage.setItem(storageKey, lang); } catch (e) {}
        document.documentElement.lang = lang;
        document.body.setAttribute("data-lang", lang);

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (t[lang] && t[lang][key] !== undefined) el.textContent = t[lang][key];
        });
        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-html");
            if (t[lang] && t[lang][key] !== undefined) el.innerHTML = t[lang][key];
        });

        var switchers = document.querySelectorAll("[data-lang-switch]");
        switchers.forEach(function (btn) {
            var target = btn.getAttribute("data-lang-switch");
            btn.classList.toggle("active", target === lang);
        });
    }

    window.i18n = { setLang: setLang, getLang: getLang, t: t };
    document.addEventListener("DOMContentLoaded", function () {
        setLang(getLang());
    });
})();
