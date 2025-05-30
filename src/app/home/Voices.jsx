"use client";

import VoiceCard from '@/components/cards/VoiceCard';
import React, { useState, useRef, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const VoicesSection = () => {
    const [playingId, setPlayingId] = useState(null);
    const [progress, setProgress] = useState({});
    const audioRefs = useRef({});
    const carouselRef = useRef(null);

    const voices = [
        {
            id: 1,
            name: "Sydney Sweeney",
            title: "CandleScent eshop",
            type: "inbound agent",
            description: "clear & natural male",
            language: "english-en-us",
            audioUrl: "/assets/audio/ending.mp3",
            duration: "02:29",
            avatar: "/assets/images/sins.jpg"
        },
        {
            id: 2,
            name: "Mia Khalifa",
            title: "Customer Support",
            type: "outbound agent",
            description: "warm & professional female",
            language: "english-en-us",
            audioUrl: "/assets/audio/flavoured.mp3",
            duration: "01:45",
            avatar: "/assets/images/sins.jpg"
        },
        {
            id: 3,
            name: "Ana De Armas",
            title: "Sales Assistant",
            type: "inbound agent",
            description: "confident & friendly male",
            language: "english-en-us",
            audioUrl: "/assets/audio/honey.mp3",
            duration: "03:12",
            avatar: "/assets/images/sins.jpg"
        },
        {
            id: 4,
            name: "Emma Watson",
            title: "Virtual Receptionist",
            type: "outbound agent",
            description: "elegant & articulate female",
            language: "english-en-us",
            audioUrl: "/assets/audio/honey.mp3",
            duration: "02:05",
            avatar: "/assets/images/sins.jpg"
        },
        {
            id: 5,
            name: "Jonny Sins",
            title: "Virtual Receptionist",
            type: "outbound agent",
            description: "elegant & articulate male",
            language: "english-en-us",
            audioUrl: "/assets/audio/peanuts.mp3",
            duration: "02:05",
            avatar: "/assets/images/sins.jpg"
        }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 1,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 20
        }
    };

    // Initialize real audio objects
    useEffect(() => {
        voices.forEach(voice => {
            if (!audioRefs.current[voice.id]) {
                const audio = new Audio(voice.audioUrl);
                audio.preload = 'metadata';
                
                audio.addEventListener('timeupdate', () => handleTimeUpdate(voice.id));
                audio.addEventListener('ended', () => handleAudioEnd(voice.id));
                audio.addEventListener('loadedmetadata', () => {
                    // Audio metadata loaded
                });
                
                audioRefs.current[voice.id] = audio;
            }
        });

        // Cleanup function
        return () => {
            Object.values(audioRefs.current).forEach(audio => {
                if (audio && typeof audio.pause === 'function') {
                    audio.pause();
                    audio.removeEventListener('timeupdate', () => handleTimeUpdate);
                    audio.removeEventListener('ended', () => handleAudioEnd);
                }
            });
        };
    }, []);

    const togglePlay = (voiceId) => {
        const audio = audioRefs.current[voiceId];
        if (!audio) return;

        if (playingId === voiceId) {
            audio.pause();
            setPlayingId(null);
        } else {
            // Pause all other audio and reset their progress
            Object.entries(audioRefs.current).forEach(([id, a]) => {
                if (a && typeof a.pause === 'function') {
                    a.pause();
                    // Reset progress for all other audios
                    if (parseInt(id) !== voiceId) {
                        a.currentTime = 0;
                        setProgress(prev => ({ ...prev, [id]: 0 }));
                    }
                }
            });
            setPlayingId(voiceId);
            audio.play().catch(console.error);
        }
    };

    const handleTimeUpdate = (voiceId) => {
        const audio = audioRefs.current[voiceId];
        if (audio && audio.duration) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            setProgress(prev => ({ ...prev, [voiceId]: progressPercent }));
        }
    };

    const handleAudioEnd = (voiceId) => {
        setPlayingId(null);
        setProgress(prev => ({ ...prev, [voiceId]: 0 }));
        // Reset the audio to beginning
        const audio = audioRefs.current[voiceId];
        if (audio) {
            audio.currentTime = 0;
        }
    };

    return (
        <section className="px-4 bg-black relative pb-28 pt-10 ">
            <div className="max-w-[100rem] mx-auto relative z-10 rounded-lg py-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        AI Voice Collection
                    </h2>
                    <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                        Discover our premium collection of AI voices, each crafted for different use cases and speaking styles
                    </p>
                </div>

                <div className="relative">
                    <Carousel
                        ref={carouselRef}
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={!playingId} // Pause auto-play when audio is playing
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="transform 500ms ease-in-out"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="px-3"
                        arrows={true}
                        pauseOnHover={true}
                    >
                        {voices.map((voice) => (
                            <VoiceCard
                                key={voice.id}
                                voice={voice}
                                isPlaying={playingId === voice.id}
                                onTogglePlay={() => togglePlay(voice.id)}
                                progress={progress[voice.id] || 0}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>

        </section>
    );
};

export default VoicesSection;