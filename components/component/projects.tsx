/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/cGxHnsBbWa7
 */
import { motion } from 'framer-motion';

import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TbBrandNextjs } from 'react-icons/tb';
import {
    SiPrisma,
    SiTailwindcss,
    SiMongodb,
    SiFigma,
    SiPlanetscale,
    SiStripe,
    SiTypescript,
    SiFramer,
    SiReact,
} from 'react-icons/si';
import { MaskContainer } from '../ui/svg-mask-effect';
import { Badge } from '../ui/badge';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import Link from 'next/link';
import { ChevronRightCircle, ChevronRightSquare } from 'lucide-react';

export function Projects() {
    const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
            }}
            className="flex-col items-center justify-center space-y-3"
        >
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="space-y-3"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            My Projects
                        </h2>
                        {/* <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            overview
                        </p> */}
                    </motion.div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:gap-10 xl:gap-12">
                        {/* //@c1*/}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Card className="aspect-square md:aspect-auto bg-slate-300">
                                <CardHeader className="flex flex-col gap-2 items-center justify-center">
                                    <CardTitle>Awal</CardTitle>
                                    <Image
                                        src="/projects/awal-logo.jpg"
                                        alt="awal"
                                        width={200}
                                        height={100}
                                        className="rounded-lg bg-auto "
                                        loading={'lazy'}
                                    />
                                    <CardDescription id="projectIntro">
                                        Awal is a community-driven initiative to
                                        foster the Tamazight language in the
                                        digital realm.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex items-center justify-center flex-1">
                                    <div className="grid gap-2 text-center">
                                        <div
                                            className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center"
                                            id="logo"
                                        >
                                            <TbBrandNextjs className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiPrisma className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiTailwindcss className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiMongodb className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiFigma className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiFramer className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiTypescript className="text-slate-800 text-2xl md:text-4xl" />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-row">
                                    <Dialog>
                                        <DialogTrigger>
                                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110">
                                                <span>Details</span>
                                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                                    <div className="relative h-full w-8 bg-slate-100/20"></div>
                                                </div>
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle className="mb-5">
                                                    Check out details
                                                </DialogTitle>
                                                <DialogDescription>
                                                    {' '}
                                                    <ul className="flex flex-col items-start justify-center pl-5 space-y-1 mb-5 text-slate-200">
                                                        <li>Shadcn UI</li>
                                                        <li>
                                                            Framer-Motion for
                                                            Animation
                                                        </li>
                                                        <li>
                                                            Next-Auth for
                                                            Authentication
                                                        </li>
                                                        <li>
                                                            Next.js
                                                            Internationalization
                                                        </li>
                                                        <li>
                                                            MongoDb + Prisma
                                                        </li>
                                                    </ul>
                                                    <ul className="flex flex-col items-start justify-center pl-5 space-y-5">
                                                        <li>
                                                            <Link
                                                                href="https://github.com/CollectivaT-dev/awal-web"
                                                                target="_blank"
                                                                scroll={false}
                                                                className="flex flex-row justify-center items-center gap-2 text-lg text-slate-100 hover:text-purple-400 ease-in-out duration-500"
                                                            >
                                                                Github
                                                                <ChevronRightSquare
                                                                    size={18}
                                                                />
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link
                                                                href="https://www.awaldigital.org/"
                                                                target="_blank"
                                                                scroll={false}
                                                                className="flex flex-row justify-center items-center gap-2 text-lg text-slate-100"
                                                            >
                                                                <button className="relative overflow-hidden rounded-md bg-slate-100 px-5 py-2.5 text-slate-900 transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">
                                                                    Try me
                                                                </button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        {/* //@ c2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Card className="aspect-square md:aspect-auto bg-slate-300">
                                <CardHeader className="flex flex-col gap-2 items-center justify-center">
                                    <CardTitle>Next.js Website</CardTitle>
                                    <Image
                                        src="/projects/awal-logo.jpg"
                                        alt="awal"
                                        width={200}
                                        height={100}
                                        className="rounded-md bg-fill"
                                    />
                                    <CardDescription id="projectIntro">
                                        A beautiful and responsive website built
                                        with Next.js.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex items-center justify-center flex-1">
                                    <div className="grid gap-2 text-center">
                                        <div
                                            className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2"
                                            id="logo"
                                        >
                                            <TbBrandNextjs className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiPrisma className="text-slate-800 text-2xl md:text-4xl" />{' '}
                                            <SiTypescript className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiReact className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiTailwindcss className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiPlanetscale className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiStripe className="text-slate-800 text-2xl md:text-4xl" />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-row">
                                    <Dialog>
                                        <DialogTrigger>
                                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110">
                                                <span>Details</span>
                                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                                    <div className="relative h-full w-8 bg-slate-100/20"></div>
                                                </div>
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle className="mb-5">
                                                    Check out details
                                                </DialogTitle>
                                                <DialogDescription>
                                                    <ul className="flex flex-col items-start justify-center pl-5 space-y-1 mb-5 text-slate-200">
                                                        <li>Shadcn UI</li>
                                                        <li>Stripe Webhooks</li>
                                                        <li>Clerk for Auth</li>
                                                        <li>
                                                            Customized CMS and
                                                            API routes.{' '}
                                                        </li>
                                                        <li>
                                                            MySQL + Prisma +
                                                            PlanetScale
                                                        </li>
                                                    </ul>
                                                    <ul className="flex flex-col items-start justify-center pl-5 space-y-5">
                                                        <li>
                                                            <Link
                                                                href="https://github.com/ppalladio/e-comm-front"
                                                                target="_blank"
                                                                scroll={false}
                                                                className="flex flex-row justify-center items-center gap-2 text-lg text-slate-100 hover:text-purple-400 ease-in-out duration-500"
                                                            >
                                                                Github -
                                                                Storefront{' '}
                                                                <ChevronRightSquare
                                                                    size={18}
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="https://github.com/ppalladio/e-comm"
                                                                target="_blank"
                                                                scroll={false}
                                                                className="flex flex-row justify-center items-center gap-2 text-lg text-slate-100 hover:text-purple-400 ease-in-out duration-500"
                                                            >
                                                                Github - CMS{' '}
                                                                <ChevronRightSquare
                                                                    size={18}
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="https://github.com/ppalladio/portfolio-next"
                                                                target="_blank"
                                                                scroll={false}
                                                                className="flex flex-row justify-center items-center gap-2 text-lg text-slate-100"
                                                            >
                                                                <button className="relative overflow-hidden rounded-md bg-slate-100 px-5 py-2.5 text-slate-900 transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">
                                                                    Try me
                                                                </button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </CardFooter>
                            </Card>
                        </motion.div>
                        {/* //@ c3 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Card className="aspect-square md:aspect-auto bg-slate-300">
                                <CardHeader className="flex flex-col gap-2 items-center justify-center">
                                    <CardTitle>Next.js Website</CardTitle>
                                    <Image
                                        src="/projects/awal-logo.jpg"
                                        alt="awal"
                                        width={200}
                                        height={100}
                                        className="rounded-md bg-fill"
                                    />
                                    <CardDescription id="projectIntro">
                                        A beautiful and responsive website built
                                        with Next.js.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex items-center justify-center flex-1">
                                    <div className="grid gap-2 text-center">
                                        <div
                                            className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2"
                                            id="logo"
                                        >
                                            <TbBrandNextjs className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiPrisma className="text-slate-800 text-2xl md:text-4xl" />{' '}
                                            <SiTypescript className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiReact className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiTailwindcss className="text-slate-800 text-2xl md:text-4xl" />
                                            <SiMongodb className="text-slate-800 text-2xl md:text-4xl" />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-row">
                                    <Dialog>
                                        <DialogTrigger>
                                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110">
                                                <span>Details</span>
                                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                                    <div className="relative h-full w-8 bg-slate-100/20"></div>
                                                </div>
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle className="mb-5">
                                                    Check out details
                                                </DialogTitle>
                                                <DialogDescription>
                                                    {' '}
                                                    <ul className="flex flex-col items-start justify-center pl-5 space-y-1 mb-5 text-slate-200">
                                                        <li>
                                                            Tailwind Animation
                                                        </li>

                                                        <li>
                                                            Next-Auth for Google
                                                            and Github Log in /
                                                            Sign up
                                                        </li>
                                                        <li>
                                                            Booking /
                                                            Reservation system
                                                        </li>
                                                        <li>
                                                            Image upload using
                                                            Cloudinary CDN
                                                        </li>
                                                        <li>
                                                            MongoDb + Prisma
                                                        </li>
                                                    </ul>
                                                    <ul className="flex flex-col items-start justify-center pl-5 space-y-5">
                                                        <li>
                                                            <Link
                                                                href="https://github.com/ppalladio/fullstack-booking-website"
                                                                target="_blank"
                                                                scroll={false}
                                                                className="flex flex-row justify-center items-center gap-2 text-lg text-slate-100"
                                                            >
                                                                Github
                                                                <ChevronRightSquare
                                                                    size={18}
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="https://github.com/ppalladio/portfolio-next"
                                                                target="_blank"
                                                                scroll={false}
                                                                className="flex flex-row justify-center items-center gap-2 text-lg text-slate-100"
                                                            >
                                                                <button className="relative overflow-hidden rounded-md bg-slate-100 px-5 py-2.5 text-slate-900 transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">
                                                                    Try me
                                                                </button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </CardFooter>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Card className="aspect-square md:aspect-auto h-[100%] w-[100%] bg-slate-400 ">
                                <MaskContainer
                                    revealText={
                                        <p className="font-pixelify line-through max-w-4xl mx-auto text-purple-800 text-center  text-4xl font-bold">
                                            placeholder
                                        </p>
                                    }
                                    className="h-[100%] border rounded-md cursor-none"
                                >
                                    Lorem ipsum dolor sit,{' '}
                                    <span className="text-red-500">
                                        amet consectetur adipisicing elit.
                                    </span>{' '}
                                    Ducimus quaerat eos quam amet nihil,
                                    blanditiis quae quod voluptatibus sit
                                    dolorum similique, nostrum voluptate ea sed
                                    nobis tempora. Iusto, esse facere.
                                </MaskContainer>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}