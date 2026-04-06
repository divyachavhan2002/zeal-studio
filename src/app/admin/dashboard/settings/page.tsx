"use client";

import { useState } from "react";
import { Save, Key, Bell, Shield, Palette } from "lucide-react";

export default function SettingsAdminPage() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    siteName: "Zeal Studio",
    siteUrl: "https://zealstudio.com",
    whatsappNumber: "919876543210",
    googleAnalytics: "G-XXXXXXXXXX",
    facebookPixel: "XXXXXXXXXXXXXXX",
    enableDarkMode: true,
    enableWhatsApp: true,
    enableEmailButton: true,
    enableExitPopup: true,
    enableNewsletter: true,
    watermarkEnabled: false,
    watermarkOpacity: "30",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted mt-1">
            Configure your website settings, integrations, and preferences.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
        >
          <Save className="w-5 h-5" />
          {saved ? "Saved!" : "Save Settings"}
        </button>
      </div>

      {/* General Settings */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Palette className="w-5 h-5 text-primary" /> General
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Site Name
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => handleChange("siteName", e.target.value)}
              className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Site URL
            </label>
            <input
              type="url"
              value={settings.siteUrl}
              onChange={(e) => handleChange("siteUrl", e.target.value)}
              className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              WhatsApp Number
            </label>
            <input
              type="text"
              value={settings.whatsappNumber}
              onChange={(e) => handleChange("whatsappNumber", e.target.value)}
              className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" /> Integrations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Google Analytics ID
            </label>
            <input
              type="text"
              value={settings.googleAnalytics}
              onChange={(e) => handleChange("googleAnalytics", e.target.value)}
              placeholder="G-XXXXXXXXXX"
              className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Facebook Pixel ID
            </label>
            <input
              type="text"
              value={settings.facebookPixel}
              onChange={(e) => handleChange("facebookPixel", e.target.value)}
              placeholder="XXXXXXXXXXXXXXX"
              className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Feature Toggles */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" /> Feature Toggles
        </h2>
        <div className="space-y-4">
          {[
            { key: "enableDarkMode", label: "Dark Mode Toggle" },
            { key: "enableWhatsApp", label: "WhatsApp Floating Button" },
            { key: "enableEmailButton", label: "Email Floating Button" },
            { key: "enableExitPopup", label: "Exit-Intent Popup" },
            { key: "enableNewsletter", label: "Newsletter Subscription" },
            { key: "watermarkEnabled", label: "Image Watermark" },
          ].map((toggle) => (
            <div
              key={toggle.key}
              className="flex items-center justify-between py-3 border-b border-border last:border-0"
            >
              <span className="text-foreground text-sm font-medium">
                {toggle.label}
              </span>
              <button
                onClick={() =>
                  handleChange(
                    toggle.key,
                    !(settings as Record<string, string | boolean>)[toggle.key]
                  )
                }
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  (settings as Record<string, string | boolean>)[toggle.key]
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    (settings as Record<string, string | boolean>)[toggle.key]
                      ? "translate-x-6"
                      : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Password Change */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Key className="w-5 h-5 text-primary" /> Change Password
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Password changed successfully!");
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Current Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              New Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-2.5 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
