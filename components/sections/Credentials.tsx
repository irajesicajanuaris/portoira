"use client";

import { useState } from "react";

import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import CredentialModal from "../ui/CredentialModal";

import { credentials } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

import type { Credential } from "../types/portfolio";

export default function Credentials() {
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null);
  const { t } = useLanguage();

  const translatedCredentials: Credential[] = [
    { ...credentials[0], title: t.cred1Title, desc: t.cred1Desc },
    { ...credentials[1], title: t.cred2Title, desc: t.cred2Desc },
    { ...credentials[2], title: t.cred3Title, desc: t.cred3Desc },
  ];

  return (
    <section id="credentials">
      <Reveal>
        <SectionHeader number={t.credNum} title={t.credTitle} subtitle={t.credSub} />

        <div className="cred-grid">
          {translatedCredentials.map((credential, index) => (
            <Reveal key={credential.title} delay={index * 0.08} amount={0.28}>
              <button type="button" className="cred-card" onClick={() => setSelectedCredential(credential)}>
                <div className="cred-icon">{credential.icon}</div>
                <div className="cred-content">
                  <h4>{credential.title}</h4>
                  <p>{credential.desc}</p>
                  <div className="cred-footer">
                    <span className="cred-when">{credential.when}</span>
                    <span className="cred-view">VIEW CREDENTIAL →</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {selectedCredential && (
        <CredentialModal credential={selectedCredential} onClose={() => setSelectedCredential(null)} />
      )}
    </section>
  );
}
