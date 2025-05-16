'use client';

import styles from './styles/header.module.css';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Background gradient (dark navy blue to black, with black at the bottom) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900 to-blue-950 opacity-90"></div>

      {/* Random Blob with Sun-like glowing effect */}
      <div className={`${styles.blob} w-96 h-96 shadow-[0_0_40px_rgba(255,215,0,0.7)]`}></div>

      {/* Overlay text */}
      <div className={styles['overlay-text']}>
        <h1>Your Name</h1>
        <p>Explore my creative projects</p>
      </div>
    </div>
  );
}
