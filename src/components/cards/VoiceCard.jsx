import React from 'react';
import { Play, Pause } from 'lucide-react';

const VoiceCard = ({ voice, isPlaying, onTogglePlay, progress }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/30 shadow-2xl transition-all duration-500 hover:border-white/40 w-full h-[370px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 transition-all duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-20 animate-pulse" />
            <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br from-purple-400 to-pink-400 shadow-lg transition-all duration-500">
                        {voice.name[0]}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg text-white transition-all duration-300">
                            {voice.name}
                        </h3>
                        <p className="text-sm text-purple-200 transition-all duration-300">
                            {voice.title}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-white text-xs font-medium rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300">
                        {voice.type}
                    </span>
                    <span className="px-3 py-1 text-white text-xs rounded-full backdrop-blur-sm bg-white/30 transition-all duration-300">
                        {voice.description}
                    </span>
                    <span className="px-3 py-1 text-white text-xs rounded-full backdrop-blur-sm bg-white/30 transition-all duration-300">
                        {voice.language}
                    </span>
                </div>
                <div className="flex-1 flex flex-col justify-end">
                    <div className="rounded-2xl p-4 backdrop-blur-sm border bg-gradient-to-r from-purple-600/40 to-pink-600/40 border-white/20 transition-all duration-500">
                        {/* Waveform Visualization */}
                        <div className="flex items-center justify-center h-16 mb-4 overflow-hidden">
                            <div className="flex items-end space-x-1 h-full">
                                {Array.from({ length: 40 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-1 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full transition-all duration-75 ${isPlaying ? 'animate-pulse' : ''
                                            }`}
                                        style={{
                                            height: `${Math.random() * 60 + 20}%`,
                                            opacity: progress > (i / 40) * 100 ? 1 : 0.4
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-white/70 text-sm">00:00</span>

                            <button
                                onClick={onTogglePlay}
                                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 hover:shadow-lg hover:shadow-purple-400/50 hover:scale-105"
                            >
                                {isPlaying ? (
                                    <Pause className="w-5 h-5 text-white" />
                                ) : (
                                    <Play className="w-5 h-5 text-white ml-0.5" />
                                )}
                            </button>

                            <span className="text-white/70 text-sm">{voice.duration}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoiceCard;