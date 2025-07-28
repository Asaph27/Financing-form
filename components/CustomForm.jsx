import React, { useState } from "react";
import styles from "../styles/Form.module.css";

export default function CustomForm() {
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  return (
    <form className={styles.formContainer} autoComplete="off" method="POST">
      <h2 className={styles.formTitle}>FYMEduAfrica Consult Request</h2>

      {/* 1. Contact Information */}
      <div className={styles.formGroup}>
        <label htmlFor="fullName" className={styles.formLabel}>Full Name</label>
        <input type="text" id="fullName" name="fullName" className={styles.formInput} placeholder="Enter applicant’s full legal name" required pattern="^(?!.*\\d)([A-Za-z]+\\s){1,}[A-Za-z]+$" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>Email Address</label>
        <input type="email" id="email" name="email" className={styles.formInput} placeholder="Enter a valid email (checked for reply)" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.formLabel}>Phone (Country Code)</label>
        <input type="tel" id="phone" name="phone" className={styles.formInput} placeholder="+263 771234567" required pattern="^\\+\\d{10,}$" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="country" className={styles.formLabel}>Home Country</label>
        <select id="country" name="country" className={styles.formInput} required defaultValue="">
          <option value="" disabled>Select SADC country of residence</option>
          <option value="Botswana">Botswana</option>
          <option value="DRC">DRC</option>
          <option value="Eswatini">Eswatini</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Namibia">Namibia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="South Africa">South Africa</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>

      {/* 2. Student & Program Details */}
      <div className={styles.formGroup}>
        <label htmlFor="educationLevel" className={styles.formLabel}>Education Level</label>
        <select id="educationLevel" name="educationLevel" className={styles.formInput} required defaultValue="">
          <option value="" disabled>Select highest completed</option>
          <option value="High School">High School</option>
          <option value="Bachelor’s">Bachelor’s</option>
          <option value="Master’s">Master’s</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="targetProgram" className={styles.formLabel}>Target Program</label>
        <select id="targetProgram" name="targetProgram" className={styles.formInput} required defaultValue="">
          <option value="" disabled>Select intended program</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Master’s">Master’s</option>
          <option value="MBA">MBA</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Preferred Destinations</label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <label><input type="checkbox" name="destinations" value="UK" required /> UK</label>
          <label><input type="checkbox" name="destinations" value="USA" required /> USA</label>
          <label><input type="checkbox" name="destinations" value="EU" required /> EU</label>
        </div>
      </div>

      {/* 3. Budget / Funding Capacity */}
      <div className={styles.formGroup}>
        <label htmlFor="budget" className={styles.formLabel}>Estimated Budget (USD)</label>
        <input type="text" id="budget" name="budget" className={styles.formInput} placeholder="e.g. 25000" required pattern="^\\d{4,}$" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="fundingPlan" className={styles.formLabel}>Funding Plan</label>
        <select id="fundingPlan" name="fundingPlan" className={styles.formInput} required defaultValue="">
          <option value="" disabled>How do you plan to fund studies?</option>
          <option value="Self-funded">Self-funded</option>
          <option value="Family">Family</option>
          <option value="Scholarship">Scholarship</option>
          <option value="Loan">Loan</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="scholarshipLikelihood" className={styles.formLabel}>Scholarship/Loan Likelihood</label>
        <select id="scholarshipLikelihood" name="scholarshipLikelihood" className={styles.formInput} required defaultValue="">
          <option value="" disabled>Are you actively seeking funding?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Maybe">Maybe</option>
        </select>
      </div>

      {/* 4. Timeline & Decision-Maker */}
      <div className={styles.formGroup}>
        <label htmlFor="applicantType" className={styles.formLabel}>Are you the applicant or applying on behalf?</label>
        <select id="applicantType" name="applicantType" className={styles.formInput} required defaultValue="">
          <option value="" disabled>Select one</option>
          <option value="Applicant">I am the applicant</option>
          <option value="Parent/Guardian">Parent/Guardian</option>
          <option value="Agent">Agent</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="intakeTimeline" className={styles.formLabel}>Intended Intake Timeline</label>
        <select id="intakeTimeline" name="intakeTimeline" className={styles.formInput} required defaultValue="">
          <option value="" disabled>When do you want to start?</option>
          <option value="Jan 2026">Jan 2026</option>
          <option value="Sep 2026">Sep 2026</option>
          <option value="2027+">2027+</option>
          <option value="Not sure">Not sure</option>
        </select>
      </div>

      {/* 5. Academic Profile */}
      <div className={styles.formGroup}>
        <label htmlFor="gpa" className={styles.formLabel}>GPA / Grades</label>
        <input type="text" id="gpa" name="gpa" className={styles.formInput} placeholder="e.g. 3.8/4.0 or 85%" required pattern="^(\\d+(\\.\\d+)?/\\d+(\\.\\d+)?|\\d{2,3}%?)$" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="testTaken" className={styles.formLabel}>Standardized Test Taken</label>
        <select id="testTaken" name="testTaken" className={styles.formInput} multiple>
          <option value="SAT">SAT</option>
          <option value="ACT">ACT</option>
          <option value="GRE">GRE</option>
          <option value="GMAT">GMAT</option>
          <option value="IELTS">IELTS</option>
          <option value="TOEFL">TOEFL</option>
          <option value="None">None</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="transcript" className={styles.formLabel}>Transcript or Résumé (PDF, optional, max 2MB)</label>
        <input type="file" id="transcript" name="transcript" className={styles.formInput} accept="application/pdf" />
      </div>

      {/* 6. Motivation Qualifier */}
      <div className={styles.formGroup}>
        <label htmlFor="motivation" className={styles.formLabel}>Why do you believe FYMEduAfrica can help you?</label>
        <textarea id="motivation" name="motivation" className={styles.formTextarea} placeholder="Short, direct answer required" required minLength={30} maxLength={300} />
      </div>

      {/* 7. Commitment Filter */}
      <div className={styles.formGroup}>
        <label htmlFor="commitment" className={styles.formLabel}>Are you prepared to follow our admissions process timeline?</label>
        <select id="commitment" name="commitment" className={styles.formInput} required defaultValue="">
          <option value="" disabled>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* 8. Spam / Bot Filter */}
      <input type="text" name="MiddleNameXYZ" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className={styles.formGroup}>
        <label className={styles.formLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input
            type="checkbox"
            name="captcha"
            checked={captchaChecked}
            onChange={e => setCaptchaChecked(e.target.checked)}
            required
          />
          I’m not a robot
        </label>
        {/* For production, integrate Google reCAPTCHA here */}
      </div>

      {/* 9. Consent Disclaimer */}
      <div className={styles.formGroup}>
        <label className={styles.formLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input
            type="checkbox"
            name="consent"
            checked={consentChecked}
            onChange={e => setConsentChecked(e.target.checked)}
            required
          />
          I consent to be contacted by FYMEduAfrica
        </label>
        <label className={styles.formLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input
            type="checkbox"
            name="terms"
            checked={termsChecked}
            onChange={e => setTermsChecked(e.target.checked)}
            required
          />
          I understand this is a preliminary request and does not guarantee acceptance.
        </label>
      </div>

      {/* 10. Submit Action */}
      <button type="submit" className={styles.formButton} disabled={!(captchaChecked && consentChecked && termsChecked)}>
        Request Consult
      </button>
    </form>
  );
}
