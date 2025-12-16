// Локализация
const translations = {
    ru: {
        'project-info': 'Этот сайт создан в учебных целях для изучения Intel и её процессоров с возможностью задавать вопросы ИИ',
        'hero-title': 'О компании Intel',
        'hero-text-1': 'Intel Corporation — американская корпорация, один из крупнейших производителей микропроцессоров и полупроводниковых компонентов для вычислительной техники. Основана в 1968 году Робертом Нойсом и Гордоном Муром в Санта-Кларе, Калифорния.',
        'hero-text-2': 'Intel является пионером в области разработки процессоров и продолжает лидировать в индустрии, создавая инновационные решения для миллионов устройств по всему миру. Компания известна своими революционными технологиями, включая создание первого микропроцессора в 1971 году.',
        'hero-text-3': 'За более чем 50 лет работы Intel внесла огромный вклад в развитие вычислительной техники. Компания производит процессоры для настольных компьютеров, ноутбуков, серверов, мобильных устройств и встраиваемых систем.',
        'stat-founded': 'Год основания',
        'stat-employees': 'Сотрудников',
        'stat-countries': 'Стран присутствия',
        'history-title': 'История компании',
        'history-1-title': 'Основание',
        'history-1-text': 'Роберт Нойс и Гордон Мур основали Intel Corporation в Санта-Кларе, Калифорния. Компания начинала с производства полупроводниковой памяти.',
        'history-2-title': 'Первый микропроцессор',
        'history-2-text': 'Intel создала первый в мире коммерческий микропроцессор Intel 4004, который содержал 2300 транзисторов и работал на частоте 740 кГц.',
        'history-3-title': 'Core 2 Duo',
        'history-3-text': 'Запуск процессоров Core 2 Duo, которые стали прорывом в производительности и энергоэффективности для настольных и мобильных систем.',
        'history-4-title': 'Core i серия',
        'history-4-text': 'Введение линейки процессоров Core i3, i5, i7 с архитектурой Nehalem, которая установила новые стандарты производительности.',
        'history-5-title': 'Alder Lake',
        'history-5-text': 'Запуск 12-го поколения процессоров с гибридной архитектурой, объединяющей производительные и энергоэффективные ядра.',
        'advantages-title': 'Преимущества процессоров Intel',
        'advantage-1-title': 'Высокая производительность',
        'advantage-1-text': 'Процессоры Intel обеспечивают выдающуюся производительность для игр, профессиональных приложений и многозадачности благодаря передовым архитектурам и технологиям Turbo Boost.',
        'advantage-2-title': 'Энергоэффективность',
        'advantage-2-text': 'Современные процессоры Intel сочетают высокую производительность с отличной энергоэффективностью, обеспечивая длительную работу ноутбуков и снижение энергопотребления.',
        'advantage-3-title': 'Игровая производительность',
        'advantage-3-text': 'Процессоры Intel Core серии i5, i7 и i9 обеспечивают плавный игровой процесс в современных играх с высокими настройками графики и разрешением.',
        'advantage-4-title': 'Безопасность',
        'advantage-4-text': 'Встроенные технологии безопасности Intel защищают ваши данные и обеспечивают безопасную работу в интернете с помощью аппаратных функций защиты.',
        'advantage-5-title': 'Совместимость',
        'advantage-5-text': 'Процессоры Intel обеспечивают отличную совместимость с широким спектром программного обеспечения, операционных систем и периферийных устройств.',
        'advantage-6-title': 'Инновации',
        'advantage-6-text': 'Intel постоянно внедряет новые технологии, такие как AI-ускорение, поддержка DDR5, PCIe 5.0 и гибридные архитектуры для максимальной производительности.',
        'processors-title': 'Поколения процессоров Intel',
        'chat-placeholder': 'Задайте вопрос о процессорах Intel...',
        'modal-title': 'Задать вопрос о процессорах Intel',
        'send': 'Отправить',
        'loading': 'Загрузка...',
        'error': 'Произошла ошибка. Пожалуйста, попробуйте снова.',
        'footer-text': 'Учебный проект • Intel • 2025'
    },
    kg: {
        'project-info': 'Бул сайт Intel жана анын процессорлорун изилдөө үчүн окуу максатында түзүлгөн, ИИге суроолор берилген мүмкүнчүлүгү менен',
        'hero-title': 'Intel компаниясы жөнүндө',
        'hero-text-1': 'Intel Corporation — Америкалык корпорация, эсептөө техникасы үчүн микропроцессорлордун жана жарым өткөргүч компоненттердин эң ири өндүрүүчүлөрдүн бири. 1968-жылы Роберт Нойс жана Гордон Мур тарабынан Калифорниянын Санта-Клара шаарында негизделген.',
        'hero-text-2': 'Intel процессорлорду иштеп чыгуу тармагында пионер болуп саналат жана дүйнө жүзүндөгү миллиондогон түзүлүштөр үчүн инновациялык чечимдерди түзүү менен индустрияда лидерлик кылууну улантууда. Компания 1971-жылы биринчи микропроцессорду түзгөн революциялык технологиялары менен белгилүү.',
        'hero-text-3': '50 жылдан ашык иш менен Intel эсептөө техникасынын өнүгүүсүнө чоң салым кошту. Компания үй компьютерлери, ноутбуктар, серверлер, мобилдик түзүлүштөр жана киргизилген системдер үчүн процессорлорду өндүрөт.',
        'stat-founded': 'Негизделген жылы',
        'stat-employees': 'Кызматкерлер',
        'stat-countries': 'Жайгашкан өлкөлөр',
        'history-title': 'Компаниянын тарыхы',
        'history-1-title': 'Негиздөө',
        'history-1-text': 'Роберт Нойс жана Гордон Мур Калифорниянын Санта-Клара шаарында Intel Corporationду негиздешти. Компания жарым өткөргүч эстөө өндүрүүдөн баштады.',
        'history-2-title': 'Биринчи микропроцессор',
        'history-2-text': 'Intel дүйнөдөгү биринчи коммерциялык микропроцессор Intel 4004ду түздү, ал 2300 транзисторду камтып, 740 кГц жыштыкта иштеди.',
        'history-3-title': 'Core 2 Duo',
        'history-3-text': 'Core 2 Duo процессорлорунун ишке киргизилиши, ал үй жана мобилдик системдер үчүн өндүрүмдүүлүктө жана энергиянын натыйжалуулугунда бузулуш болду.',
        'history-4-title': 'Core i сериясы',
        'history-4-text': 'Nehalem архитектурасы менен Core i3, i5, i7 процессорлорунун сериясынын киргизилиши, ал өндүрүмдүүлүктүн жаңы стандарттарын белгиледи.',
        'history-5-title': 'Alder Lake',
        'history-5-text': '12-муун процессорлордун ишке киргизилиши, ал өндүрүмдүүлүктүү жана энергиянын натыйжалуулугун бириктирген гибриддик архитектура менен.',
        'advantages-title': 'Intel процессорлордун артыкчылыктары',
        'advantage-1-title': 'Жогорку өндүрүмдүүлүк',
        'advantage-1-text': 'Intel процессорлору оюндар, кесипкөйлөрдүн тиркемелери жана көп милдеттүүлүк үчүн алдыңкы архитектуралар жана Turbo Boost технологиялары аркылуу кереметтүү өндүрүмдүүлүктү камсыз кылат.',
        'advantage-2-title': 'Энергиянын натыйжалуулугу',
        'advantage-2-text': 'Заманбап Intel процессорлору жогорку өндүрүмдүүлүктү мыкты энергиянын натыйжалуулугу менен айкалыштырып, ноутбуктардын узак иштеши жана энергия керектөөсүнүн азайышын камсыз кылат.',
        'advantage-3-title': 'Оюн өндүрүмдүүлүгү',
        'advantage-3-text': 'Intel Core i5, i7 жана i9 сериясынын процессорлору заманбап оюндарда жогорку графика жөндөөлөрү жана чечилиши менен тегиз оюн процессин камсыз кылат.',
        'advantage-4-title': 'Коопсуздук',
        'advantage-4-text': 'Intelдин киргизилген коопсуздук технологиялары маалыматтарыңызды коргойт жана аппараттык коргоо функциялары менен интернетте коопсуз иштөөнү камсыз кылат.',
        'advantage-5-title': 'Ыңгайлаштырылгандык',
        'advantage-5-text': 'Intel процессорлору кеңири программалык камсыздоо, операциялык системдер жана перифериялык түзүлүштөр менен мыкты ыңгайлаштырылгандыкты камсыз кылат.',
        'advantage-6-title': 'Инновациялар',
        'advantage-6-text': 'Intel максималдуу өндүрүмдүүлүк үчүн AI-ылдамдатуу, DDR5 колдоосу, PCIe 5.0 жана гибриддик архитектуралар сыяктуу жаңы технологияларды туруктуу киргизип турат.',
        'processors-title': 'Intel процессорлордун муундары',
        'chat-placeholder': 'Intel процессорлору жөнүндө суроо бериңиз...',
        'modal-title': 'Intel процессорлору жөнүндө суроо бериңиз',
        'send': 'Жөнөтүү',
        'loading': 'Жүктөлүүдө...',
        'error': 'Ката кетти. Сураныч, кайра аракет кылыңыз.',
        'footer-text': 'Окуу долбоору • Intel • 2025'
    },
    en: {
        'project-info': 'This site is created for educational purposes to study Intel and its processors with the ability to ask questions to AI',
        'hero-title': 'About Intel Corporation',
        'hero-text-1': 'Intel Corporation is an American corporation, one of the largest manufacturers of microprocessors and semiconductor components for computing technology. Founded in 1968 by Robert Noyce and Gordon Moore in Santa Clara, California.',
        'hero-text-2': 'Intel is a pioneer in processor development and continues to lead the industry, creating innovative solutions for millions of devices worldwide. The company is known for its revolutionary technologies, including the creation of the first microprocessor in 1971.',
        'hero-text-3': 'Over more than 50 years of operation, Intel has made a huge contribution to the development of computing technology. The company produces processors for desktop computers, laptops, servers, mobile devices and embedded systems.',
        'stat-founded': 'Year Founded',
        'stat-employees': 'Employees',
        'stat-countries': 'Countries',
        'history-title': 'Company History',
        'history-1-title': 'Foundation',
        'history-1-text': 'Robert Noyce and Gordon Moore founded Intel Corporation in Santa Clara, California. The company started with semiconductor memory production.',
        'history-2-title': 'First Microprocessor',
        'history-2-text': 'Intel created the world\'s first commercial microprocessor Intel 4004, which contained 2300 transistors and operated at 740 kHz frequency.',
        'history-3-title': 'Core 2 Duo',
        'history-3-text': 'Launch of Core 2 Duo processors, which became a breakthrough in performance and energy efficiency for desktop and mobile systems.',
        'history-4-title': 'Core i Series',
        'history-4-text': 'Introduction of Core i3, i5, i7 processor line with Nehalem architecture, which set new performance standards.',
        'history-5-title': 'Alder Lake',
        'history-5-text': 'Launch of 12th generation processors with hybrid architecture combining performance and energy-efficient cores.',
        'advantages-title': 'Intel Processor Advantages',
        'advantage-1-title': 'High Performance',
        'advantage-1-text': 'Intel processors deliver outstanding performance for gaming, professional applications and multitasking thanks to advanced architectures and Turbo Boost technologies.',
        'advantage-2-title': 'Energy Efficiency',
        'advantage-2-text': 'Modern Intel processors combine high performance with excellent energy efficiency, ensuring long laptop operation and reduced power consumption.',
        'advantage-3-title': 'Gaming Performance',
        'advantage-3-text': 'Intel Core i5, i7 and i9 series processors provide smooth gameplay in modern games with high graphics settings and resolution.',
        'advantage-4-title': 'Security',
        'advantage-4-text': 'Built-in Intel security technologies protect your data and ensure safe internet operation with hardware protection features.',
        'advantage-5-title': 'Compatibility',
        'advantage-5-text': 'Intel processors provide excellent compatibility with a wide range of software, operating systems and peripheral devices.',
        'advantage-6-title': 'Innovation',
        'advantage-6-text': 'Intel constantly introduces new technologies such as AI acceleration, DDR5 support, PCIe 5.0 and hybrid architectures for maximum performance.',
        'processors-title': 'Intel Processor Generations',
        'chat-placeholder': 'Ask a question about Intel processors...',
        'modal-title': 'Ask a Question About Intel Processors',
        'send': 'Send',
        'loading': 'Loading...',
        'error': 'An error occurred. Please try again.',
        'footer-text': 'Educational Project • Intel • 2025'
    }
};

// Данные о процессорах
const processors = {
    ru: [
        {
            name: 'Intel Core i3/i5/i7 (1-го поколения)',
            generation: 'Поколение Nehalem/Westmere',
            description: 'Первое поколение процессоров Core i, представленное в 2008-2010 годах. Значительное улучшение архитектуры.',
            features: ['Многоядерная архитектура', 'Технология Turbo Boost', 'Встроенный контроллер памяти', 'Поддержка Hyper-Threading']
        },
        {
            name: 'Intel Core i3/i5/i7 (2-го поколения)',
            generation: 'Поколение Sandy Bridge',
            description: 'Второе поколение, представленное в 2011 году. Интеграция графики в процессор.',
            features: ['Улучшенная архитектура', 'Встроенная графика Intel HD', 'Технология Quick Sync', 'Улучшенная производительность']
        },
        {
            name: 'Intel Core i3/i5/i7 (6-го поколения)',
            generation: 'Поколение Skylake',
            description: 'Шестое поколение, представленное в 2015 году. Новая архитектура с улучшенной производительностью.',
            features: ['14 нм техпроцесс', 'Новая архитектура Skylake', 'Поддержка DDR4', 'Улучшенная графика']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (9-го поколения)',
            generation: 'Поколение Coffee Lake Refresh',
            description: 'Девятое поколение, представленное в 2018-2019 годах. Введение Core i9 в мейнстрим.',
            features: ['14 нм техпроцесс', 'До 8 ядер в Core i9', 'Улучшенная производительность', 'Поддержка высокоскоростной памяти']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (12-го поколения)',
            generation: 'Поколение Alder Lake',
            description: 'Двенадцатое поколение, представленное в 2021 году. Гибридная архитектура с P- и E-ядрами.',
            features: ['10 нм техпроцесс (Intel 7)', 'Гибридная архитектура', 'Поддержка DDR5', 'PCIe 5.0']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (14-го поколения)',
            generation: 'Поколение Raptor Lake Refresh / Meteor Lake',
            description: 'Четырнадцатое поколение, представленное в 2023 году. Новые архитектуры и улучшения.',
            features: ['7-10 нм техпроцесс', 'Новая архитектура Meteor Lake', 'Улучшенная энергоэффективность', 'AI-ускорение']
        }
    ],
    kg: [
        {
            name: 'Intel Core i3/i5/i7 (1-муун)',
            generation: 'Nehalem/Westmere мууну',
            description: 'Core i процессорлорунун биринчи мууну, 2008-2010-жылдары тааныштырылган. Архитектуранын маанилүү жакшыртылышы.',
            features: ['Көп ядролуу архитектура', 'Turbo Boost технологиясы', 'Киргизилген эстөө контроллери', 'Hyper-Threading колдоосу']
        },
        {
            name: 'Intel Core i3/i5/i7 (2-муун)',
            generation: 'Sandy Bridge мууну',
            description: 'Экинчи муун, 2011-жылы тааныштырылган. Процессорго графиканын интеграциясы.',
            features: ['Жакшыртылган архитектура', 'Киргизилген Intel HD графикасы', 'Quick Sync технологиясы', 'Жакшыртылган өндүрүмдүүлүк']
        },
        {
            name: 'Intel Core i3/i5/i7 (6-муун)',
            generation: 'Skylake мууну',
            description: 'Алтынчы муун, 2015-жылы тааныштырылган. Жакшыртылган өндүрүмдүүлүктүү жаңы архитектура.',
            features: ['14 нм технология', 'Жаңы Skylake архитектурасы', 'DDR4 колдоосу', 'Жакшыртылган графика']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (9-муун)',
            generation: 'Coffee Lake Refresh мууну',
            description: 'Тогузунчу муун, 2018-2019-жылдары тааныштырылган. Core i9дун мейнстримге киргизилиши.',
            features: ['14 нм технология', 'Core i9до 8 ядрого чейин', 'Жакшыртылган өндүрүмдүүлүк', 'Жогорку ылдамдыктагы эстөөнү колдоо']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (12-муун)',
            generation: 'Alder Lake мууну',
            description: 'Он экинчи муун, 2021-жылы тааныштырылган. P- жана E-ядролору менен гибриддик архитектура.',
            features: ['10 нм технология (Intel 7)', 'Гибриддик архитектура', 'DDR5 колдоосу', 'PCIe 5.0']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (14-муун)',
            generation: 'Raptor Lake Refresh / Meteor Lake мууну',
            description: 'Он төртүнчү муун, 2023-жылы тааныштырылган. Жаңы архитектуралар жана жакшыртуулар.',
            features: ['7-10 нм технология', 'Жаңы Meteor Lake архитектурасы', 'Жакшыртылган энергиянын натыйжалуулугу', 'AI-ылдамдатуу']
        }
    ],
    en: [
        {
            name: 'Intel Core i3/i5/i7 (1st Gen)',
            generation: 'Nehalem/Westmere Generation',
            description: 'First generation of Core i processors, introduced in 2008-2010. Significant architecture improvement.',
            features: ['Multi-core architecture', 'Turbo Boost technology', 'Integrated memory controller', 'Hyper-Threading support']
        },
        {
            name: 'Intel Core i3/i5/i7 (2nd Gen)',
            generation: 'Sandy Bridge Generation',
            description: 'Second generation, introduced in 2011. Integration of graphics into the processor.',
            features: ['Improved architecture', 'Intel HD integrated graphics', 'Quick Sync technology', 'Improved performance']
        },
        {
            name: 'Intel Core i3/i5/i7 (6th Gen)',
            generation: 'Skylake Generation',
            description: 'Sixth generation, introduced in 2015. New architecture with improved performance.',
            features: ['14 nm process', 'New Skylake architecture', 'DDR4 support', 'Improved graphics']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (9th Gen)',
            generation: 'Coffee Lake Refresh Generation',
            description: 'Ninth generation, introduced in 2018-2019. Introduction of Core i9 to mainstream.',
            features: ['14 nm process', 'Up to 8 cores in Core i9', 'Improved performance', 'High-speed memory support']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (12th Gen)',
            generation: 'Alder Lake Generation',
            description: 'Twelfth generation, introduced in 2021. Hybrid architecture with P- and E-cores.',
            features: ['10 nm process (Intel 7)', 'Hybrid architecture', 'DDR5 support', 'PCIe 5.0']
        },
        {
            name: 'Intel Core i3/i5/i7/i9 (14th Gen)',
            generation: 'Raptor Lake Refresh / Meteor Lake Generation',
            description: 'Fourteenth generation, introduced in 2023. New architectures and improvements.',
            features: ['7-10 nm process', 'New Meteor Lake architecture', 'Improved energy efficiency', 'AI acceleration']
        }
    ]
};

// Глобальные переменные
let currentLang = 'ru';
let currentSlide = 0;
let isMobile = window.innerWidth < 768;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguageSwitcher();
    initSlider();
    initModal();
    checkMobile();
    
    window.addEventListener('resize', () => {
        checkMobile();
    });
});

// Проверка мобильного устройства
function checkMobile() {
    isMobile = window.innerWidth < 768;
}

// Переключение темы
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Переключение языков
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Обновление текстов
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Обновление placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Обновление слайдера
    updateSlider();
}

// Слайдер
function initSlider() {
    updateSlider();
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + processors[currentLang].length) % processors[currentLang].length;
        updateSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % processors[currentLang].length;
        updateSlider();
    });
    
    // Автопрокрутка только на десктопе
    if (!isMobile) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % processors[currentLang].length;
            updateSlider();
        }, 5000);
    }
}

function updateSlider() {
    const track = document.getElementById('sliderTrack');
    const dots = document.getElementById('sliderDots');
    const data = processors[currentLang];
    
    if (!track || !dots || !data) return;
    
    track.innerHTML = '';
    dots.innerHTML = '';
    
    data.forEach((processor, index) => {
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        const imageHtml = processor.image ? `<div class="processor-image"><img src="${processor.image}" alt="${processor.name}" onerror="this.style.display='none'"></div>` : '';
        slide.innerHTML = `
            ${imageHtml}
            <h3>${processor.name}</h3>
            <div class="generation">${processor.generation}</div>
            <p class="description">${processor.description}</p>
            <ul class="features">
                ${processor.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        track.appendChild(slide);
        
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === currentSlide ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
        dots.appendChild(dot);
    });
    
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Модальное окно
function initModal() {
    const modal = document.getElementById('questionModal');
    const aiBtn = document.getElementById('aiQuestionBtn');
    const closeBtn = document.getElementById('closeModal');
    const modalSendBtn = document.getElementById('modalSendBtn');
    const modalInput = document.getElementById('modalInput');
    const modalMessages = document.getElementById('modalMessages');
    
    if (!modal || !aiBtn || !closeBtn || !modalSendBtn || !modalInput || !modalMessages) return;
    
    aiBtn.addEventListener('click', () => {
        modal.classList.add('show');
        modalInput.focus();
    });
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    const sendMessage = () => {
        const question = modalInput.value.trim();
        if (question) {
            addMessage(modalMessages, question, 'user');
            modalInput.value = '';
            sendToAPI(question, modalMessages);
        }
    };
    
    modalSendBtn.addEventListener('click', sendMessage);
    
    modalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Добавление сообщения
function addMessage(container, text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
}

// Отправка в API (готово для сервера)
// GPT автоматически определит язык вопроса и ответит на том же языке
async function sendToAPI(question, container) {
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'message loading';
    loadingMsg.textContent = translations[currentLang]['loading'];
    container.appendChild(loadingMsg);
    container.scrollTop = container.scrollHeight;
    
    try {
        // Запрос на серверный endpoint /ask
        // Отправляем только вопрос - GPT сам определит язык и ответит на нем
        const response = await fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: question
                // language больше не отправляется - GPT определяет язык автоматически
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        loadingMsg.remove();
        
        if (data.answer) {
            addMessage(container, data.answer, 'assistant');
        } else {
            addMessage(container, translations[currentLang]['error'], 'assistant');
        }
    } catch (error) {
        loadingMsg.remove();
        console.error('Error:', error);
        addMessage(container, translations[currentLang]['error'] + ': ' + error.message, 'assistant');
    }
}
