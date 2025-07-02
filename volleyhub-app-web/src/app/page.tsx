"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/modules/page.module.css";

export default function Home() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.logo_slugan}>
        <span className={styles.circle}>
          <Image
            className={styles.logo}
            src="/favicon.ico"
            alt="volleyhub logo"
            width={80}
            height={80}
            priority
          />
        </span>
        <h3 className = {styles.title}>volleyhub</h3>
      </div>
    </main>
  );
}
