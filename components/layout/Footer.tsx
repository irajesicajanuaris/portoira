import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer>
      <p>
        {profile.name.toUpperCase()} — {profile.location.toUpperCase()} © 2026
      </p>
    </footer>
  );
}