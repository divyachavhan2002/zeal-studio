"use client";

import { useState } from "react";
import { Mail, Phone, Download, Eye, Trash2, Filter } from "lucide-react";

const initialInquiries = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "+91 98765 11111",
    eventType: "Wedding",
    date: "2026-06-15",
    message: "Looking for a wedding photographer for our ceremony in Pune.",
    status: "new",
    receivedAt: "2026-04-05",
  },
  {
    id: "2",
    name: "Vikram Patel",
    email: "vikram@gmail.com",
    phone: "+91 98765 22222",
    eventType: "Corporate Event",
    date: "2026-05-10",
    message: "Need event coverage for our annual company meetup.",
    status: "replied",
    receivedAt: "2026-04-04",
  },
  {
    id: "3",
    name: "Anjali Desai",
    email: "anjali@gmail.com",
    phone: "+91 98765 33333",
    eventType: "Portrait",
    date: "2026-04-20",
    message: "Interested in a professional portrait session.",
    status: "new",
    receivedAt: "2026-04-03",
  },
  {
    id: "4",
    name: "Rohit Kumar",
    email: "rohit@gmail.com",
    phone: "+91 98765 44444",
    eventType: "Fashion",
    date: "2026-05-01",
    message: "Fashion portfolio shoot for my modeling career.",
    status: "booked",
    receivedAt: "2026-04-02",
  },
  {
    id: "5",
    name: "Meera Joshi",
    email: "meera@gmail.com",
    phone: "+91 98765 55555",
    eventType: "Pre-Wedding",
    date: "2026-07-01",
    message: "Pre-wedding shoot at scenic locations around Pune.",
    status: "new",
    receivedAt: "2026-04-01",
  },
];

export default function InquiriesAdminPage() {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [filter, setFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState<
    (typeof initialInquiries)[0] | null
  >(null);

  const filtered =
    filter === "all"
      ? inquiries
      : inquiries.filter((i) => i.status === filter);

  const handleDelete = (id: string) => {
    if (confirm("Delete this inquiry?")) {
      setInquiries(inquiries.filter((i) => i.id !== id));
    }
  };

  const exportLeads = () => {
    const csv = [
      "Name,Email,Phone,Event Type,Date,Message,Status",
      ...inquiries.map(
        (i) =>
          `"${i.name}","${i.email}","${i.phone}","${i.eventType}","${i.date}","${i.message}","${i.status}"`
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inquiries.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Client Inquiries
          </h1>
          <p className="text-muted mt-1">
            Manage and respond to client inquiries and leads.
          </p>
        </div>
        <button
          onClick={exportLeads}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
        >
          <Download className="w-5 h-5" /> Export CSV
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {["all", "new", "replied", "booked"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
              filter === f
                ? "bg-primary text-black"
                : "bg-surface dark:bg-surface-dark text-muted border border-border"
            }`}
          >
            {f}{" "}
            {f !== "all" && (
              <span className="ml-1 text-xs">
                ({inquiries.filter((i) => i.status === f).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Inquiries Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface dark:bg-surface-dark">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase hidden sm:table-cell">
                  Event Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase hidden md:table-cell">
                  Event Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((inquiry) => (
                <tr key={inquiry.id} className="border-t border-border">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-foreground">
                      {inquiry.name}
                    </p>
                    <p className="text-xs text-muted">{inquiry.email}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted hidden sm:table-cell">
                    {inquiry.eventType}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted hidden md:table-cell">
                    {inquiry.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                        inquiry.status === "new"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : inquiry.status === "replied"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      }`}
                    >
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setSelectedInquiry(inquiry)}
                        className="p-1.5 text-muted hover:text-primary transition-colors"
                        title="View details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <a
                        href={`mailto:${inquiry.email}`}
                        className="p-1.5 text-muted hover:text-primary transition-colors"
                        title="Send email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${inquiry.phone}`}
                        className="p-1.5 text-muted hover:text-primary transition-colors"
                        title="Call"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => handleDelete(inquiry.id)}
                        className="p-1.5 text-muted hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Inquiry Details
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted uppercase">Name</p>
                <p className="text-foreground font-medium">
                  {selectedInquiry.name}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase">Email</p>
                <p className="text-foreground">{selectedInquiry.email}</p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase">Phone</p>
                <p className="text-foreground">{selectedInquiry.phone}</p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase">Event Type</p>
                <p className="text-foreground">{selectedInquiry.eventType}</p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase">Event Date</p>
                <p className="text-foreground">{selectedInquiry.date}</p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase">Message</p>
                <p className="text-foreground">{selectedInquiry.message}</p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase">Received</p>
                <p className="text-foreground">{selectedInquiry.receivedAt}</p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href={`mailto:${selectedInquiry.email}`}
                className="flex-1 py-3 bg-primary text-black font-semibold rounded-xl text-center hover:bg-primary-dark transition-all"
              >
                Reply via Email
              </a>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-6 py-3 border border-border text-foreground rounded-xl hover:bg-surface transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
