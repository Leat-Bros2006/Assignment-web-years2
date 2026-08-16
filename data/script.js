export const navbar = [
    {
        menu: "ទំព័រដើម",
        link: "#"
    },
    {
        menu: "វគ្គសិក្សា",
        link: "../html/courses.html"
    },
    {
        menu: "ប្រភេទ",
        link: "#"
    },
    {
        menu: "អំពីយើង",
        link: "../html/aboutUs.html"
    },
    {
        menu: "ទំនាក់ទំនង",
        link: "../html/contact.html"
    },
]

// Course Data
export const courses = [
    // id: 1
    {
        id: 1,
        title: "HTML Complete Course",
        titleKh: "វគ្គសិក្សា HTML ពេញលេញ",
        category: "Web Development",
        categoryKh: "អភិវឌ្ឍន៍គេហទំព័រ",
        level: "Beginner",
        levelKh: "កម្រិតដំបូង",
        price: 25,
        duration: "10 Hours",
        rating: 4.7,
        students: 320,
        image: "../images/p1.png",

        description: "រៀន HTML ពីមូលដ្ឋានរហូតដល់ការបង្កើត Structure Website, Tag, Form និង HTML5។",
        video: "https://www.youtube.com/embed/qz0aGYrrlhU"
    },

    // id: 2
    {
        id: 2,
        title: "CSS Mastery",
        titleKh: "វគ្គសិក្សា CSS",
        category: "Web Development",
        categoryKh: "អភិវឌ្ឍន៍គេហទំព័រ",
        level: "Beginner",
        levelKh: "កម្រិតដំបូង",
        price: 30,
        duration: "12 Hours",
        rating: 4.8,
        students: 280,
        image: "../images/p2.png",

        description: "រៀន CSS Styling, Flexbox, Grid, Animation និង Responsive Design ដើម្បីរចនា Website ស្អាត។",
        video: "https://www.youtube.com/embed/1Rs2ND1ryYc"
    },

    // id: 3
    {
        id: 3,
        title: "JavaScript Fundamentals",
        titleKh: "មូលដ្ឋានគ្រឹះ JavaScript",
        category: "Web Development",
        categoryKh: "អភិវឌ្ឍន៍គេហទំព័រ",
        level: "Beginner",
        levelKh: "កម្រិតដំបូង",
        price: 40,
        duration: "18 Hours",
        rating: 4.9,
        students: 550,
        image: "../images/p3.png",

        description: "សិក្សា JavaScript ពី Variable, Function, Array, Object, DOM និងការបង្កើត Interactive Website។",
        video: "https://www.youtube.com/embed/PkZNo7MFNFg"
    },

    // id: 4
    {
        id: 4,
        title: "Advanced JavaScript",
        titleKh: "JavaScript កម្រិតខ្ពស់",
        category: "Web Development",
        categoryKh: "អភិវឌ្ឍន៍គេហទំព័រ",
        level: "Advanced",
        levelKh: "កម្រិតខ្ពស់",
        price: 65,
        duration: "22 Hours",
        rating: 4.9,
        students: 240,
        image: "../images/p4.png",

        description: "រៀន JavaScript កម្រិតខ្ពស់ដូចជា Async, Promise, API, Module និង Best Practice។",
        video: "https://www.youtube.com/embed/PoRJizFvM7s"
    },

    // id: 5
    {
        id: 5,
        title: "Bootstrap 5",
        titleKh: "វគ្គសិក្សា Bootstrap 5",
        category: "Web Development",
        categoryKh: "អភិវឌ្ឍន៍គេហទំព័រ",
        level: "Beginner",
        levelKh: "កម្រិតដំបូង",
        price: 20,
        duration: "8 Hours",
        rating: 4.6,
        students: 400,
        image: "../images/p5.png",

        description: "រៀន Bootstrap 5 Framework សម្រាប់បង្កើត Website Responsive បានលឿន និងមាន Design ស្អាត។",
        video: "https://www.youtube.com/embed/-qfEOE4vtxE"
    },

    // id: 6
    {
        id: 6,
        title: "Tailwind CSS",
        titleKh: "វគ្គសិក្សា Tailwind CSS",
        category: "Web Development",
        categoryKh: "អភិវឌ្ឍន៍គេហទំព័រ",
        level: "Intermediate",
        levelKh: "កម្រិតមធ្យម",
        price: 35,
        duration: "14 Hours",
        rating: 4.8,
        students: 310,
        image: "../images/p6.png",

        description: "រៀន Tailwind CSS Utility Class និងបង្កើត UI Modern ដោយមិនចាំបាច់សរសេរ CSS ច្រើន។",
        video: "https://www.youtube.com/embed/pfaSUYaSgRo"
    },

    // id: 7
    {
        id: 7,
        title: "React JS",
        titleKh: "វគ្គសិក្សា React JS",
        category: "Frontend Framework",
        categoryKh: "Framework ខាងមុខ (Frontend)",
        level: "Intermediate",
        levelKh: "កម្រិតមធ្យម",
        price: 75,
        duration: "30 Hours",
        rating: 4.9,
        students: 670,
        image: "../images/p7.png",

        description: "រៀន React JS ពី Component, Props, State, Hooks, Router និងការបង្កើត Web Application។",
        video: "https://www.youtube.com/embed/SqcY0GlETPk"
    },

    // id: 8
    {
        id: 8,
        title: "Next.js",
        titleKh: "វគ្គសិក្សា Next.js",
        category: "Frontend Framework",
        categoryKh: "Framework ខាងមុខ (Frontend)",
        level: "Advanced",
        levelKh: "កម្រិតខ្ពស់",
        price: 90,
        duration: "35 Hours",
        rating: 4.8,
        students: 210,
        image: "../images/p8.png",

        description: "សិក្សា Next.js Framework សម្រាប់បង្កើត React Application ដែលមាន Performance ខ្ពស់។",
        video: "https://www.youtube.com/embed/ZVnjOPwW4ZA"
    },

    // id: 9
    {
        id: 9,
        title: "Vue.js",
        titleKh: "វគ្គសិក្សា Vue.js",
        category: "Frontend Framework",
        categoryKh: "Framework ខាងមុខ (Frontend)",
        level: "Intermediate",
        levelKh: "កម្រិតមធ្យម",
        price: 70,
        duration: "25 Hours",
        rating: 4.7,
        students: 180,
        image: "../images/p9.png",

        description: "រៀន Vue.js ពី Component, Props, Reactive Data និងការបង្កើត Frontend Application។",
        video: "https://www.youtube.com/embed/FXpIoQ_rT_c"
    },

    // id: 10
    {
        id: 10,
        title: "Python Programming",
        titleKh: "សរសេរកម្មវិធី Python",
        category: "Programming",
        categoryKh: "សរសេរកម្មវិធី",
        level: "Beginner",
        levelKh: "កម្រិតដំបូង",
        price: 50,
        duration: "20 Hours",
        rating: 4.9,
        students: 800,
        image: "../images/p10.png",

        description: "រៀន Python ពី Syntax មូលដ្ឋាន, Variable, Function, Loop និងការសរសេរកម្មវិធី។",
        video: "https://www.youtube.com/embed/rfscVS0vtbw"
    },
    // id: 11
    {
        id: 11,
        title: "Python OOP",
        titleKh: "Python OOP",
        category: "Programming",
        categoryKh: "សរសេរកម្មវិធី",
        level: "Intermediate",
        levelKh: "កម្រិតមធ្យម",
        price: 60,
        duration: "18 Hours",
        rating: 4.8,
        students: 260,
        image: "../images/p11.png",

        description: "រៀន Object Oriented Programming ក្នុង Python ដូចជា Class, Object, Inheritance និង Encapsulation។",
        video: "https://www.youtube.com/embed/Ej_02ICOIgs"
    },

    // id: 12
    {
        id: 12,
        title: "Python Django",
        titleKh: "Web Development with Django",
        category: "Backend Development",
        categoryKh: "អភិវឌ្ឍន៍ Backend",
        level: "Advanced",
        levelKh: "កម្រិតខ្ពស់",
        price: 95,
        duration: "40 Hours",
        rating: 4.9,
        students: 150,
        image: "../images/p12.png",

        description: "រៀនបង្កើត Web Application ជាមួយ Django Framework, Database, Model និង Authentication។",
        video: "https://www.youtube.com/embed/rHux0gMZ3Eg"
    },

    // id: 13
    {
        id: 13,
        title: "PHP & MySQL",
        titleKh: "PHP និង MySQL",
        category: "Backend Development",
        categoryKh: "អភិវឌ្ឍន៍ Backend",
        level: "Intermediate",
        levelKh: "កម្រិតមធ្យម",
        price: 55,
        duration: "24 Hours",
        rating: 4.7,
        students: 340,
        image: "../images/p13.png",

        description: "រៀន PHP និង MySQL សម្រាប់បង្កើត Dynamic Website និងភ្ជាប់ Database។",
        video: "https://www.youtube.com/embed/OK_JCtrrv-c"
    },

    // id: 14
    {
        id: 14,
        title: "Laravel Framework",
        titleKh: "Laravel Framework",
        category: "Backend Development",
        categoryKh: "អភិវឌ្ឍន៍ Backend",
        level: "Advanced",
        levelKh: "កម្រិតខ្ពស់",
        price: 85,
        duration: "32 Hours",
        rating: 4.8,
        students: 220,
        image: "../images/p14.png",

        description: "សិក្សា Laravel Framework, Routing, Controller, Migration និង Database Management។",
        video: "https://www.youtube.com/embed/MYyJ4PuL4pY"
    },

    // id: 15
    {
        id: 15,
        title: "Node.js",
        titleKh: "Node.js Backend Development",
        category: "Backend Development",
        categoryKh: "អភិវឌ្ឍន៍ Backend",
        level: "Intermediate",
        levelKh: "កម្រិតមធ្យម",
        price: 80,
        duration: "28 Hours",
        rating: 4.8,
        students: 390,
        image: "../images/p15.png",

        description: "រៀន Node.js សម្រាប់បង្កើត Backend Server, API និងភ្ជាប់ជាមួយ Database។",
        video: "https://www.youtube.com/embed/Oe421EPjeBE"
    },

    // id: 16
    {
        id: 16,
        title: "Express.js",
        titleKh: "Express.js",
        category: "Backend Development",
        categoryKh: "អភិវឌ្ឍន៍ Backend",
        level: "Intermediate",
        levelKh: "កម្រិតមធ្យម",
        price: 60,
        duration: "15 Hours",
        rating: 4.7,
        students: 175,
        image: "../images/p16.png",

        description: "រៀន Express.js សម្រាប់បង្កើត REST API, Routing និង Middleware។",
        video: "https://www.youtube.com/embed/L72fhGm1tfE"
    },

    // id: 17
    {
        id: 17,
        title: "UI/UX Design",
        titleKh: "រចនា UI/UX",
        category: "Design",
        categoryKh: "ការរចនា",
        level: "Beginner",
        levelKh: "កម្រិតដំបូង",
        price: 45,
        duration: "16 Hours",
        rating: 4.8,
        students: 450,
        image: "../images/p17.png",

        description: "រៀនគោលការណ៍ UI/UX Design, User Research, Wireframe និងការរចនា Interface។",
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU"
    },

    // id: 18
    {
        id: 18,
        title: "Figma for Beginners",
        titleKh: "Figma សម្រាប់អ្នកចាប់ផ្តើម",
        category: "Design",
        categoryKh: "ការរចនា",
        level: "Beginner",
        levelKh: "កម្រិតដំបូង",
        price: 35,
        duration: "12 Hours",
        rating: 4.7,
        students: 500,
        image: "../images/p18.png",

        description: "រៀនប្រើ Figma ចាប់ពីការបង្កើត Design, Component, Prototype និង UI Design។",
        video: "https://www.youtube.com/embed/FTFaQWZBqQ8"
    },

    // id: 19
    {
        id: 19,
        title: "Adobe Photoshop",
        titleKh: "Adobe Photoshop",
        category: "Design",
        categoryKh: "ការរចនា",
        level: "Intermediate",
        levelKh: "កម្រិតមធ្យម",
        price: 50,
        duration: "18 Hours",
        rating: 4.6,
        students: 270,
        image: "../images/p19.png",

        description: "រៀន Photoshop សម្រាប់កែរូបភាព, Design Poster, Banner និង Graphic Design។",
        video: "https://www.youtube.com/embed/IyR_uYsRdPs"
    },

    // id: 20
    {
        id: 20,
        title: "Flutter Mobile App",
        titleKh: "ការអភិវឌ្ឍកម្មវិធី Flutter",
        category: "Mobile Development",
        categoryKh: "អភិវឌ្ឍន៍ Mobile",
        level: "Intermediate",
        levelKh: "កម្រិតមធ្យម",
        price: 85,
        duration: "35 Hours",
        rating: 4.9,
        students: 300,
        image: "../images/p20.png",
        description: "រៀន Flutter និង Dart ដើម្បីបង្កើត Mobile Application សម្រាប់ Android និង iOS។",
        video: "https://www.youtube.com/embed/VPvVD8t02U8"
    }
];

// Why Data
export const whyStudy = [
    {
        title: "💻 រៀនតាម Google Meet",
        des: "រៀនផ្ទាល់ជាមួយគ្រូតាម Google Meet មាន interaction ពិតៗ"
    },
    {
        title: "🤝 ការបង្រៀន",
        des: "គ្រូបង្រៀន step-by-step និងឲ្យសិស្សអនុវត្តក្នុងថ្នាក់ភ្លាមៗ"
    },
    {
        title: "🚀 Support ពេលរៀន",
        des: "សិស្សអាចសួរភ្លាមៗ ពេលមានចម្ងល់"
    },
    {
        title: "🎥 វីដេអូមានគុណភាព",
        des: "បន្ទាប់ពីរៀនមាន record វីដេអូទុកសម្រាប់ជំនួយដល់សិស្ស"
    },
]

// Teacher Detail
export const teachers = [
    {
        id: 1,
        name: "Heng Menghoy",
        position: "Full Stack Web Developer",
        image: "./images/profile.png",
        bio: "មានបទពិសោធន៍បង្រៀន Web Development ជាច្រើនឆ្នាំ...",
        students: 1000,
        courses: 30,
        experience: 5
    }
];

// Heros
export const heros = [
    "👨‍🎓 10,000+ សិស្ស",
    "⭐ 4.8 ពិន្ទុមធ្យម",
    "📚 30+ វគ្គសិក្សា"
]

// features
export const features = [
    "✔ រៀនបានគ្រប់ទីកន្លែង",
    "✔ អនុវត្តក្នុងថ្នាក់ភ្លាមៗ",
    "✔ រាល់ការបង្រៀនតែងមានថតវីដេអូទុក សម្រាប់ជំនួយដល់សិស្ស",
    "✔ ខាងស្តាំជាវីដេអូលើ Youtube អាចទៅមើលពីរបៀបដែលគ្រូបង្រៀនបាន"
]

// instuctorStats
export const instructorStats = [
    {
        increse: "1000",
        student: "សិស្ស"
    },
    {
        increse: "30",
        student: "វគ្គសិក្សា"
    },
    {
        increse: "5",
        student: "ឆ្នាំបទពិសោធន៍"
    },
]
