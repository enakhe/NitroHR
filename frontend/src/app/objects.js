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
    BanknotesIcon
} from '@heroicons/react/24/solid';

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
                name: 'Leave and Attendance Information Management',
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