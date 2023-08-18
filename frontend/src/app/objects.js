import {
    IdentificationIcon,
    QueueListIcon,
    CurrencyDollarIcon,
    ChartBarIcon,
    PaperAirplaneIcon,
    ClipboardDocumentCheckIcon,
    ChatBubbleLeftEllipsisIcon,
    ShieldCheckIcon,
    DocumentMagnifyingGlassIcon,
    UserGroupIcon,
    QuestionMarkCircleIcon,
    DevicePhoneMobileIcon,
    HandThumbUpIcon,
    BanknotesIcon,
    DocumentIcon,
    ArrowTrendingUpIcon,
    BuildingOfficeIcon,
    BuildingOffice2Icon,
    AcademicCapIcon,
    BriefcaseIcon,
    MegaphoneIcon
} from '@heroicons/react/24/solid';

import employee from '../assets/employee.png'


export const sizes = [
    "less than 10",
    "10- 30",
    "31-50",
    "51-100",
    "101-500",
    "501-1000",
    "1001-5000",
    "5001- 10000",
    "more than 10000",
]

export const navigation = [
    {
        name: 'Product',
        items: [
            {
                name: 'Employee Information Management',
                path: '/employee',
                icon: IdentificationIcon
            },
            {
                name: 'Leave and Attendance Information',
                path: '/attendace',
                icon: QueueListIcon
            },
            {
                name: 'Payroll Management',
                path: '/payroll',
                icon: CurrencyDollarIcon
            },
            {
                name: 'Performance Management',
                path: '/performance',
                icon: ChartBarIcon
            },
            {
                name: 'On-boarding and Off-boarding',
                path: '/boarding',
                icon: ClipboardDocumentCheckIcon

            },
            {
                name: 'Recruiment and Application',
                path: '/recruiment',
                icon: PaperAirplaneIcon
            },
            {
                name: 'Document Management',
                path: '/document',
                icon: DocumentIcon
            },
            {
                name: 'Learning and Development',
                path: '/learning',
                icon: ArrowTrendingUpIcon
            }
        ]
    },
    {
        name: 'About',
        items: [
            {
                name: 'Our Story',
                path: '/about',
                icon: ChatBubbleLeftEllipsisIcon
            },
            {
                name: 'Mission',
                path: '/mission',
                icon: ShieldCheckIcon
            }
        ]
    },
    {
        name: 'Help',
        items: [
            {
                name: 'Blog',
                path: '/blog',
                icon: DocumentMagnifyingGlassIcon
            },
            {
                name: 'Community',
                path: '/community',
                icon: UserGroupIcon
            }
        ]
    },
    {
        name: 'Contact',
        items: [
            {
                name: 'Query',
                path: '/query',
                icon: QuestionMarkCircleIcon
            },
            {
                name: 'Social Media',
                path: '/social-media',
                icon: DevicePhoneMobileIcon
            }
        ],
    },
    {
        name: 'Pricing',
        items: [
            {
                name: 'Partnership',
                path: '/partnership',
                icon: HandThumbUpIcon
            },
            {
                name: 'Prices',
                path: '/prices',
                icon: BanknotesIcon
            }
        ]
    },

]

export const employeeDataManagement = [
    {
        idNo: 1,
        title: "Employee Data Management",
        icon: IdentificationIcon,
        id: "employee",
        subTitle: "A centralized hub for data",
        desc: "Our Employee Data Management service simplifies HR tasks. From onboarding to offboarding, access and manage employee information effortlessly. Stay compliant, reduce errors, and enhance efficiency with accurate data tracking. Experience streamlined HR operations and focus on what matters most – growing your business.",
        image: employee,
    },
    {
        idNo: 2,
        title: "Leave and Attendance",
        icon: QueueListIcon,
        id: "leave",
        subTitle: "Optimizing Workforce Operations",
        desc: "Streamline employee leave and attendance with our comprehensive service. Easily request and approve leaves, track attendance, and maintain accurate records. Say goodbye to manual processes and ensure compliance with automated notifications and reporting. Simplify workforce management and optimize productivity today.",
        image: employee,
    },
    {
        idNo: 3,
        title: "Payroll Management System",
        icon: CurrencyDollarIcon,
        id: "payroll",
        subTitle: "Secure and right calculations",
        desc: "Designed to simplify your payroll processes. From accurate calculations to tax withholdings and timely payouts, our system ensures hassle-free payroll management. Say goodbye to manual calculations and compliance worries. Let our system handle it all while you focus on what matters – driving your business forward. Discover how effortless payroll management can be with our trusted solution.",
        image: employee,
    },

    {
        idNo: 4,
        title: "Performance Management",
        icon: ChartBarIcon,
        id: "performance",
        subTitle: "Accurate progress tracking",
        desc: "Discover our Performance Management service that empowers your team to excel. From setting objectives to monitoring progress and providing valuable feedback, our system ensures growth and success. Drive individual and team performance to new heights with streamlined evaluations and actionable insights. Unleash your team's potential and achieve remarkable results.",
        image: employee,
    },
    {
        idNo: 5,
        title: "Onboarding and Offboarding",
        icon: ClipboardDocumentCheckIcon,
        id: "boarding",
        subTitle: "Best for all boarding activities",
        desc: "Experience a smooth transition with our Onboarding and Offboarding services. Simplify welcoming new hires and ensuring a smooth exit process. Our comprehensive system guides employees through essential steps while ensuring compliance and efficient documentation. Say goodbye to administrative burdens and hello to streamlined processes. ",
        image: employee,
    },
    {
        idNo: 6,
        title: "Recruitment and Application",
        icon: PaperAirplaneIcon,
        id: "recruitment",
        subTitle: "A centralized hub for data",
        desc: "Made to simplify your hiring journey. From posting job openings to managing applications, our system streamlines the process. Enhance candidate selection with efficient tracking and organized communication. Say goodbye to scattered resumes and hello to a structured recruitment process. ",
        image: employee,
    }, 
    {
        idNo: 7,
        title: "Document Management",
        icon: DocumentIcon,
        id: "document",
        subTitle: "A arranged and secure document management",
        desc: "From organizing and accessing crucial HR documents to ensuring compliance and secure storage, our system simplifies the process. Bid farewell to manual paperwork and embrace efficient digital documentation. Elevate your document management strategy with our trusted solution. Optimize your HR operations and ensure data security.",
        image: employee,
    },
    {
        idNo: 8,
        title: "Learning and Development",
        icon: ArrowTrendingUpIcon,
        id: "learning",
        subTitle: "A condusive and fast place to learn",
        desc: "From skill enhancement to career advancement, our system empowers employees to thrive. Deliver engaging training, monitor progress, and ensure skill mastery. Say farewell to outdated training methods and embrace modern development techniques.",
        image: employee,
    }
]

export const feature = [
    {
        name: 'Employee Information Management',
        path: '/employee',
        icon: IdentificationIcon
    },
    {
        name: 'Leave and Attendance Information',
        path: '/attendace',
        icon: QueueListIcon
    },
    {
        name: 'Payroll Management',
        path: '/payroll',
        icon: CurrencyDollarIcon
    },
    {
        name: 'Performance Management',
        path: '/performance',
        icon: ChartBarIcon
    },
    {
        name: 'Recruiment and Application Tracking',
        path: '/recruiment',
        icon: PaperAirplaneIcon
    },
    {
        name: 'On-boarding and Off-boarding',
        path: '/boarding',
        icon: ClipboardDocumentCheckIcon

    },
    {
        name: 'Recruiment and Application Tracking',
        path: '/recruiment',
        icon: PaperAirplaneIcon
    },
    {
        name: 'On-boarding and Off-boarding',
        path: '/boarding',
        icon: ClipboardDocumentCheckIcon

    }
]

export const typesOfCompany = [
    {
        name: 'Startups & Small Businesses',
        icon: BuildingOfficeIcon,
    },
    {
        name: 'Medium-Sized Enterprises',
        icon: BuildingOffice2Icon,
    },
    {
        name: 'Large Corporations & Companies ',
        icon: BriefcaseIcon,
    },
    {
        name: 'Human Resource Agencies',
        icon: UserGroupIcon,
    },
    {
        name: 'Educational Institutions',
        icon: AcademicCapIcon,
    },
    {
        name: 'Nonprofit Organizations',
        icon: MegaphoneIcon,
    },
    {
        name: 'Government Bodies Agencies',
        icon: BuildingOfficeIcon,
    },
    {
        name: 'Healthcare Institutions & Businesses',
        icon: BuildingOfficeIcon,
    },
    {
        name: 'Retail and Hospitality Agencies',
        icon: BuildingOfficeIcon,
    },
]


export const testimony = [
    {
        ceoName: "Micheal Gough",
        image: "https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=",
        para: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
        companyName: "Google"
    },
    {
        ceoName: "Izuagbe Samuel",
        image: "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=",
        para: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
        companyName: "Google"
    },
    {
        ceoName: "Okiki Emmanuel",
        image: "https://media.istockphoto.com/id/862596588/photo/its-got-all-of-my-ceo-duties-covered.jpg?s=612x612&w=0&k=20&c=9T_aTHeL4fRQ1VA-eTN5mPe8R6IVHlsdDJU2R0Dtw8M=",
        para: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
        companyName: "LinkedIn"
    }
]

export const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
]

export const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]