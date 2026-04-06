"use client";

import { useState } from "react";
import { Save, Edit, FileText } from "lucide-react";

const contentSections = [
  {
    id: "homepage-hero",
    label: "Homepage Hero",
    fields: [
      { name: "tagline", label: "Tagline", type: "text", value: "Capturing Timeless Moments" },
      { name: "subtitle", label: "Subtitle", type: "textarea", value: "Award-winning photography studio crafting visual stories that last a lifetime. From weddings to fashion — we bring your vision to life." },
    ],
  },
  {
    id: "about",
    label: "About Section",
    fields: [
      { name: "title", label: "Section Title", type: "text", value: "Crafting Visual Stories Since 2018" },
      { name: "description", label: "Description", type: "textarea", value: "Zeal Studio was born from a simple yet powerful belief — that every moment deserves to be captured beautifully." },
      { name: "experience", label: "Years of Experience", type: "text", value: "8+" },
    ],
  },
  {
    id: "services",
    label: "Services Section",
    fields: [
      { name: "wedding-price", label: "Wedding Photography Price", type: "text", value: "₹50,000" },
      { name: "portrait-price", label: "Portrait Session Price", type: "text", value: "₹15,000" },
      { name: "fashion-price", label: "Fashion Photography Price", type: "text", value: "₹25,000" },
      { name: "event-price", label: "Event Coverage Price", type: "text", value: "₹35,000" },
    ],
  },
  {
    id: "contact",
    label: "Contact Info",
    fields: [
      { name: "phone", label: "Phone Number", type: "text", value: "+91 98765 43210" },
      { name: "email", label: "Email", type: "text", value: "hello@zealstudio.com" },
      { name: "address", label: "Address", type: "textarea", value: "123, Creative Lane, Koregaon Park, Pune, Maharashtra 411001" },
      { name: "hours", label: "Business Hours", type: "text", value: "Mon – Sat: 9:00 AM – 7:00 PM" },
    ],
  },
];

export default function ContentAdminPage() {
  const [sections, setSections] = useState(contentSections);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [saved, setSaved] = useState(false);

  const currentSection = sections.find((s) => s.id === activeSection)!;

  const handleFieldChange = (fieldName: string, value: string) => {
    setSections(
      sections.map((s) =>
        s.id === activeSection
          ? {
              ...s,
              fields: s.fields.map((f) =>
                f.name === fieldName ? { ...f, value } : f
              ),
            }
          : s
      )
    );
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Content Management
        </h1>
        <p className="text-muted mt-1">
          Edit website text, pricing, and contact information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-4 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                  activeSection === section.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-surface dark:hover:bg-surface-dark"
                }`}
              >
                <FileText className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Editor */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">
                {currentSection.label}
              </h2>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all"
              >
                <Save className="w-4 h-4" />
                {saved ? "Saved!" : "Save Changes"}
              </button>
            </div>

            <div className="space-y-6">
              {currentSection.fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      rows={4}
                      value={field.value}
                      onChange={(e) =>
                        handleFieldChange(field.name, e.target.value)
                      }
                      className="w-full px-4 py-3 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) =>
                        handleFieldChange(field.name, e.target.value)
                      }
                      className="w-full px-4 py-3 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
