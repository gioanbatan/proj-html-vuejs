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
            name: "Dribbble",
            icon: "fa-brands fa-dribbble",
            link: "https://dribbble.com/"
        },
        {
            name: "Flikr",
            icon: "fa-brands fa-flickr",
            link: "https://www.flickr.com/"
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
    footerIcons: [
        {
            name: "Facebook",
            icon: "fa-brands fa-facebook",
            link: "https://www.facebook.com/"
        },

        {
            name: "Twitter",
            icon: "fa-brands fa-twitter",
            link: "https://twitter.com"
        },
        {
            name: "Instagram",
            icon: "fa-brands fa-instagram",
            link: "https://www.instagram.com/"
        }
    ],
    inputSearch: "",
    inputSearchCategory: "",
    inputNewsletter: "",
    macroCategories: [
        {
            name: "Art",
            thumb: "cat_2-740x310.jpg",
            link: ""
        },
        {
            name: "Exercise",
            thumb: "cat_4-740x310.jpg",
            link: ""
        },
        {
            name: "Material Design",
            thumb: "cat_3-740x310.jpg",
            link: ""
        },
        {
            name: "Music",
            thumb: "cat_5-740x310.jpg",
            link: ""
        },
        {
            name: "Photogrphy",
            thumb: "cat_6-740x310.jpg",
            link: ""
        },
        {
            name: "Software Developer",
            thumb: "cat_1-1540x750.jpg",
            link: ""
        }
    ],
    isLogged: false,
    courses: [
        {
            name: "Web Coding and Apache Basics",
            thumbnail: "12345-1-272x161.png",
            category: [
                "Apache",
                "Software Developer"
            ],
            duration: 6,
            cost: 0,
            discount: 0,
            dateCreation: "2022-11-10",
            vote: [5, 5, 5],
            subscriptions: 65,
            special: false,
            featured: true,
        },
        {
            name: "Web Coding and Apache Basics",
            thumbnail: "12345-1-272x161.png",
            category: [
                "Apache",
                "Software Developer"
            ],
            duration: 6,
            cost: 0,
            discount: 0,
            dateCreation: "2022-11-10",
            vote: [5, 5, 5],
            subscriptions: 65,
            special: false,
            featured: true,
        }
    ],
    totalStudents: 1234,
    countriesReached: 150,
    pagesList: [
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
    infoMail: "info@masterstudy.com",
    blogPosts: [
        {
            title: 'Our main target is to "Developing Yourself as a Leader"',
            datePublished: "2003-11-25",
            thumb: "photo-1517520287167-4bbf64a00d66-122x120.jpeg",
            href: ""
        },
        {
            title: "Those Other College Expenses You Aren't Thinking About",
            datePublished: "2011-08-10",
            thumb: "photo-1490376840453-5f616fbebe5b-150x150.jpeg",
            href: ""
        },
    ]
})