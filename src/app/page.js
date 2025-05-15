'use client';

import styles from './styles/header.module.css';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className={`${styles.blob} w-96 h-96`}></div>      
    </div>
  );
}
