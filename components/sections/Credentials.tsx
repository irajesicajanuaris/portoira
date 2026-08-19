"use client";

import { useState } from "react";

import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import CredentialModal from "../ui/CredentialModal";

import { credentials } from "../data/portfolio";

import type { Credential } from "../types/portfolio";

export default function Credentials() {
  const [selectedCredential, setSelectedCredential] =
    useState<Credential | null>(null);

  return (
    <section id="credentials">
      <Reveal>
        <SectionHeader
          number="05"
          title="Certifications & Recognition"
          subtitle="Verified externally"
        />

        <div className="cred-grid">
          {credentials.map((credential, index) => (
            <Reveal key={credential.title} delay={index * 0.08} amount={0.28}>
              <button
                type="button"
                className="cred-card"
                onClick={() => setSelectedCredential(credential)}
              >
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
        <CredentialModal
          credential={selectedCredential}
          onClose={() => setSelectedCredential(null)}
        />
      )}
    </section>
  );
}
