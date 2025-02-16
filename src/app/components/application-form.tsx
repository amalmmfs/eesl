"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  education: z.string().min(2, "Please specify your qualification"),
});

interface ApplicationFormProps {
  role: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationForm({
  role,
  isOpen,
  onClose,
}: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91",
    education: "",
    resume: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxSize: 10 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        setFormData({ ...formData, resume: acceptedFiles[0] });
      }
    },
  });

  // const calculateProgress = () => {
  //   const fields = ["name", "email", "phone", "education", "resume"] as const;
  //   const filledFields = fields.filter((field) => {
  //     if (field === "resume") {
  //       return !!formData.resume;
  //     }
  //     return formData[field]?.length > 0;
  //   });
  //   return (filledFields.length / fields.length) * 100;
  // };
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // TODO Handle form submission logic here
      toast.success("Application submitted successfully!");
      onClose();
    } catch (error: unknown) {
      toast.error("Failed to submit application. Please try again.");
      console.error("Error submitting application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-md p-6 m-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <h2 className="text-2xl font-bold mb-4">
            {role === "PhD"
              ? "Apply for PhD"
              : `Apply for the position of ${role}`}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                {...register("name")}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Enter your full name"
                autoFocus
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                {...register("email")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <PhoneInput
                country="in"
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputClass="w-full p-2 border rounded focus:ring-2 focus:ring-primary/20 transition-all"
                containerClass="w-full"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Educational Qualification
              </label>
              <Input
                {...register("education")}
                value={formData.education}
                onChange={(e) =>
                  setFormData({ ...formData, education: e.target.value })
                }
                className="w-full focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Enter your highest qualification"
              />
              {errors.education && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.education.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Resume (PDF, max 10MB)
              </label>
              <div
                {...getRootProps()}
                className={`
                border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                ${
                  isDragActive
                    ? "border-primary bg-primary/5"
                    : "border-gray-300 hover:border-primary"
                }
              `}
              >
                <input {...getInputProps()} />
                {formData.resume ? (
                  <div className="text-sm text-gray-600">
                    Selected: {formData.resume.name}
                  </div>
                ) : (
                  <p className="text-gray-500">
                    {isDragActive
                      ? "Drop your resume here"
                      : "Drag & drop your resume, or click to select"}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-black font-medium px-8 py-2 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}
