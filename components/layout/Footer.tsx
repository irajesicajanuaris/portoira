"use client";

import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer>
      <p>
        {profile.name} · {profile.location} · © 2026
      </p>
    </footer>
  );
}
