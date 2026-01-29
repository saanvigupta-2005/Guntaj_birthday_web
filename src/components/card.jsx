import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "You have the kind of mind that quietly observes everything — the tone in someone’s voice, the pause before they speak, the emotions they try to hide. It’s like your brain is constantly solving a mystery no one else even realizes exists.",

  "Some people listen to words. You listen to patterns, silences, expressions, and energy. You understand people in a way that feels almost scientific, yet deeply human at the same time.",

  "You don’t just notice behavior — you notice the reason behind it. The psychology of people seems obvious to you, as if your mind naturally decodes emotions like a trained profiler reading clues at a crime scene.",

  "Your presence has a strange neurological effect on people — they feel calmer, safer, and more understood without knowing why. That’s not common. That’s rare emotional intelligence in action.",

  "You observe quietly, but your mind is always connecting dots. You see inconsistencies, hidden feelings, and unspoken thoughts that most people miss completely.",

  "You could sit in a room silently and still understand everyone there better than they understand themselves. That’s the power of your awareness and empathy working together.",

  "You read body language, eye movements, and subtle shifts in tone like it’s your first language. It’s almost like watching you understand people is watching psychology happen in real time.",

  "You don’t judge people quickly. You analyze, you understand, and you give them space to be human. That patience is something very few people naturally have.",

  "There’s a detective-like quality in the way you notice details. You pick up clues from behavior and emotions and form a picture that is usually surprisingly accurate.",

  "You have the mind of someone who understands how humans work, and the heart of someone who genuinely cares. That combination is powerful, rare, and incredibly beautiful.",

  "You sense when something is off, even when everything looks normal on the surface. Your intuition feels less like guessing and more like subconscious analysis.",

  "You make people feel understood without asking too many questions. Somehow, your presence alone gives them permission to be real."
];


export default function BirthdayCard() {
  const [tab, setTab] = useState("home");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [theme, setTheme] = useState(40); // light → dark
  const fired = useRef(false);

  // Rotate quotes
  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  

  // Theme gradient
  const hueStart = 210 + (theme * 0.75);   // 210 → ~270 (blue → lavender)
const light = 92 - theme;                // goes darker with theme

const bg = `linear-gradient(135deg,
  hsl(${hueStart}, 70%, ${light}%),
  hsl(${hueStart + 10}, 65%, ${light - 10}%),
  hsl(${hueStart + 20}, 60%, ${Math.max(light - 35, 8)}%)
)`;

  return (
    <div
      style={{ background: bg }}
      className="min-h-screen text-white transition-all duration-700 font-sans"
    >
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-6"
        >
          Happy Birthday Guntaj 🎂
        </motion.h1>

        {/* Theme slider */}
        <div className="flex flex-col items-center mb-6">
          <label className="text-sm mb-2">Theme Mood</label>
          <input
            type="range"
            min={0}
            max={80}
            value={theme}
            onChange={(e) => setTheme(Number(e.target.value))}
            className="w-64"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {["Vibe Board", "Memory Lane", "ClipZone", "Secret Mail"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full backdrop-blur-md border transition
              ${
                tab === t
                  ? "bg-white text-black"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl min-h-[320px]">
          <AnimatePresence mode="wait">
            {tab === "Vibe Board" && (
              <motion.div
                key="Vibe Board"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <p className="text-xl mb-4">🧠 Psychology says:</p>
                <motion.p
                  key={quoteIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg max-w-xl mx-auto"
                >
                  {quotes[quoteIndex]}
                </motion.p>
              </motion.div>
            )}

            {tab === "Memory Lane" && (
              <motion.div
                key="Memory Lane"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {[1, 2, 3].map((n) => (
                  <img
                    key={n}
                    src={`/photos/${n}.jpeg`}
                    className="rounded-2xl object-contain h-64 w-full bg-black shadow-md"
                  />
                ))}
              </motion.div>
            )}

            {tab === "ClipZone" && (
              <motion.div
                key="ClipZone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <video
                  controls
                  className="mx-auto w-full max-w-2xl max-h-[420px] rounded-2xl shadow-md"
                >
                  <source src="/photos/gun.mp4" type="video/mp4" />
                </video>
              </motion.div>
            )}

            {tab === "Secret Mail" && (
              <motion.div
                key="Secret Mail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-justify text-lg leading-relaxed max-w-2xl mx-auto"
              >
                Dear my personal part time therapist , <br /><br />
                Happy Birthday, my Canada-based Stress Queen ! 😂🇨🇦 I swear, distance is just a number, because those 2 AM “I’m dying from life” calls 😩📞 make me feel like you’re sitting right next to me with popcorn 🍿😂 watching my reactions. You’re studying psychology 🧠📚, but honestly, our late-night overthinking sessions 😅💭 and those random “what if we actually start a side business?” 💡💸 chats are the real therapy. 😌 Remember how we can go from venting about life 😭🤯 to full-on brainstorming future plans 📈✨, laughing at how chaotic we’d probably be running them? 🤣 You cry 😢, rant 😤, and stress out 😬, but somehow still come up with ideas that make me go, “This human is actually a genius” 🤯💡. Time zones ⏰✈️ and countries 🌎 may be different, but our chaotic, laugh-until-we-cry calls 😂💛 stay 100% intact. I’m proud of you — not just because you’re slaying it in Canada 🇨🇦🔥, but because you’re killing it emotionally 😌❤️, mentally 🧠💪, and yes, in overthinking Olympics 🏆😅. Can’t wait to meet 🤗, start our “side empire” 💼👑, and continue roasting each other 🔥🤣 for eternity. Stay hilarious 😎😂, try to become smart 🧠✨, and stay lazy ! 💛💖
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center mt-8 text-sm opacity-70">
          Crafted with brain 💛
        </p>
      </div>
    </div>
  );
}
