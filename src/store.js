import { reactive } from "vue";

export const store = reactive({
    test: "Hello Store!!!",
    languageOptions: [
        {
            name: "English",
            id: "en"
        },
        {
            name: "Italiano",
            id: "it"
        }
    ],
    navItems: [
        {
            name: "Courses",
            link: "#",
            newFlag: false,
        },
        {
            name: "Zoom",
            link: "",
            newFlag: true,
        },
        {
            name: "Pages",
            link: "",
            newFlag: false,
        },
        {
            name: "Bundles",
            link: "",
            newFlag: false,
        },
        {
            name: "Course Formats",
            link: "",
            newFlag: false,
        },
        {
            name: "Add Course",
            link: "",
            newFlag: true,
        },
        {
            name: "Demos",
            link: "",
            newFlag: false,
        },
    ],
    headerIcons: [
        {
            name: "Twitter",
            icon: "fa-brands fa-twitter",
            link: "https://twitter.com"
        },
        {
            name: "Instagram",
            icon: "fa-brands fa-instagram",
            link: "https://www.instagram.com/"
        },
        {
            name: "Behance",
            icon: "fa-brands fa-behance",
            link: "https://www.behance.net/"
        },
        {
            name: "???",
            icon: "fa-solid fa-basketball",
            link: ""
        },
        {
            name: "???",
            icon: "fa-solid fa-quote-right",
            link: ""
        },
        {
            name: "git",
            icon: "fa-brands fa-git",
            link: "https://git-scm.com/"
        },
        {
            name: "LinkedIn",
            icon: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/"
        },
        {
            name: "Pinterest",
            icon: "fa-brands fa-pinterest",
            link: "https://www.pinterest.it/"
        }
    ],
    inputSearch: "",
    inputSearchCategory: "",
    macroCategories: [
        "Art",
        "Exercise",
        "Material Design",
        "Music",
        "Photography",
        "Software Developer"
    ],
    isLogged: false,
    courses: [
        {
            name: "Web Coding and Apache Basics",
            thumbnail: "./assets/img/12345-1-272x161.png",
            category: "Apache",
            duration: 6,
            cost: 0,
            dateCreation: "2022-11-10",
            vote: [4, 5, 5, 2, 4, 5],
            subscriptions: 65,
            special: false,
            featured: false,
        }
    ],
    totalStudents: 1234,
    countriesReached: 150,
    footerPages: [
        {
            name: "Blog",
            link: "",
        },
        {
            name: "Home",
            link: "",
        },
        {
            name: "Shortcodes",
            link: "",
        },
        {
            name: "Courses",
            link: "",
        },
        {
            name: "Membership A",
            link: "",
        },
        {
            name: "Typography",
            link: "",
        }
    ],
    infoTel: "+1 212 458 300 32",
    infoFax: "+1 212 375 24 14",
    infoMail: "info@masterstudy.com"
})