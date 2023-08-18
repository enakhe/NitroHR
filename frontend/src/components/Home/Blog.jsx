import { Fragment } from "react"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { posts } from "../../app/objects";

const Blog = () => {
    return (
        <Fragment>
            <div className="bg-[#f6f8fc] relative bg-[#f6f8fc] isolate lg:py-12 sm:py-32">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0bbf64] to-[#c3f4db] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} />
                </div>
                <div className="mx-auto max-w-7xl py-12 md:py-5 lg:py-0 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-800">
                            Learn how to grow your business with our expert advice.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {
                            posts.map((item, index) => (
                                <Card
                                    shadow={false}
                                    key={index}
                                    className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden hover:animate-jump animate-once animate-ease-in-out text-center">
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-6 md:px-12">
                                        <Typography
                                            variant="h2"
                                            color="white"
                                            className="mb-6 font font-bold font-medium leading-[1.5]">
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="paragraph"
                                            color="white"
                                            className="mb-6 font leading-[1.5]">
                                            {item.description}
                                        </Typography>
                                        <Typography variant="h5" className="mb-4 text-gray-400">
                                            {item.author.name}
                                        </Typography>
                                        <Avatar
                                            size="xl"
                                            variant="circular"
                                            alt="tania andrew"
                                            className="border-2 border-white"
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                        />
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Blog;