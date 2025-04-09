'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image";
import Link from "next/link";

// Define the interface for projectData
interface ProjectData {
    title: string;
    subtitle: string;
    description: string;
    tools: string[];
    videoUrl?: string;
    images: string[];// Assumes the first image is used as the hero image.
    contributions: string[];
    imagesWithDescriptions?: {
        image: string;
        description: string;
    }[];
}

export default function ProjectPage({ projectData }: { projectData: ProjectData }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? projectData.images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === projectData.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <main className="min-h-screen bg-white text-black">
            <div className="pt-24 px-6">
                {/* Hero */}
                <section className="mb-12">
                    <div className="max-w-5xl mx-auto aspect-[16/9] relative overflow-hidden">
                        <Image
                            src={projectData.images[0]}
                            alt="Project hero image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </section>

                {/* Project Info */}
                <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-mono font-light text-primary">{projectData.title}</h1>
                        <h2 className="text-2xl font-mono font-light text-neutral-600">{projectData.subtitle}</h2>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            {projectData.description}
                        </p>
                    </div>
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-mono text-primary mb-4">MY CONTRIBUTIONS</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                {projectData.contributions.map((contribution, index) => (
                                    <li
                                        key={index}
                                        className="text-neutral-600 leading-relaxed flex items-start gap-2"
                                    >
                                        <span className="font-mono text-sm text-neutral-400">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        {contribution}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-mono text-primary mb-4">TOOLS</h2>
                            <div className="flex flex-wrap gap-2">
                                {projectData.tools.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Demo Video */}
                {projectData.videoUrl && projectData.videoUrl!=null && (
                    <section className="max-w-5xl mx-auto mb-24">
                        <h2 className="text-2xl font-mono text-primary mb-4">PROJECT DEMO</h2>
                        <div className="aspect-video w-full">
                            <iframe
                                src={projectData.videoUrl}
                                title="Project Demo"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </section>
                )}

                {/* Image with Description */}
                {projectData.imagesWithDescriptions &&
                    projectData.imagesWithDescriptions.length > 0 && (
                        <section className="max-w-5xl mx-auto mb-24">
                            <h2 className="text-2xl font-mono text-primary mb-4">
                                OVERVIEW
                            </h2>
                            <div className="grid grid-cols-1 gap-8">
                                {projectData.imagesWithDescriptions.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        {item.image && (
                                            <div className="relative w-full flex justify-center">
                                                <Image
                                                    src={item.image}
                                                    alt={`Gallery item ${index}`}
                                                    width={1080}
                                                    height={300}
                                                    className="object-cover w-10/12"
                                                />
                                            </div>
                                        )}
                                        <p className="text-neutral-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                {/* Image Gallery */}
                <section className="max-w-5xl mx-auto mb-24">
                    <h2 className="text-2xl font-mono text-primary mb-4">IMAGE GALLERY</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectData.images.slice(1).map((image, index) => (
                            <div
                                key={index}
                                className="relative cursor-pointer transition-transform duration-200 hover:scale-105 hover:clickable"
                                onClick={() => openModal(index + 1)}
                            >
                                <Image
                                    src={image}
                                    alt={`Project image ${index + 2}`}
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* See Other Projects */}
                <section className="max-w-5xl mx-auto mb-24 text-center">
                    <div className="mt-16 text-center">
                        <Link
                            href="/works"
                            className="font-mono items-center text-primary"
                        >
                            <Button className="bg-neutral-100 hover:bg-accent transition-color">
                                View Other Projects
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-6xl w-full h-auto px-12"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="relative z-10">
                            <Image
                                src={projectData.images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute inset-y-0 left-0 flex items-center z-50">
                            <Button
                                size="icon"
                                onClick={goToPrevious}
                                className="rounded-full bg-transparent hover:bg-black/50"
                            >
                                <ChevronLeft className="h-4 w-4 text-white" />
                            </Button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center z-50">
                            <Button
                                size="icon"
                                onClick={goToNext}
                                className="rounded-full bg-transparent hover:bg-black/50"
                            >
                                <ChevronRight className="h-4 w-4 text-white" />
                            </Button>
                        </div>

                        {/* Exit Button */}
                        <div className="absolute top-0 right-0 z-50">
                            <Button
                                size="icon"
                                onClick={closeModal}
                                className="rounded-full bg-transparent hover:bg-black/50"
                            >
                                <span className="text-white">X</span>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
