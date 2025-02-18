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
import { motion } from "framer-motion";

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Handle form submission logic here
      console.log("Submitting application data:", data);
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
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="bg-white/95 rounded-2xl w-full max-w-xl p-8 m-4 relative shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-6">
            {role === "PhD" ? "Apply for PhD" : `Apply for ${role}`}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                {...register("name")}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Enter your full name"
                autoFocus
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input
                {...register("email")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <PhoneInput
                country="in"
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputClass="w-full p-2 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                containerClass="w-full"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Educational Qualification
              </label>
              <Input
                {...register("education")}
                value={formData.education}
                onChange={(e) =>
                  setFormData({ ...formData, education: e.target.value })
                }
                className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Enter your highest qualification"
              />
              {errors.education && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  {errors.education.message}
                </span>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Resume (PDF, max 10MB)
              </label>
              <div
                {...getRootProps()}
                className={`
                  mt-1 rounded-lg border-2 border-dashed p-8 text-center cursor-pointer transition-all
                  ${
                    isDragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-blue-400"
                  }
                `}
              >
                <input {...getInputProps()} />
                {formData.resume ? (
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{formData.resume.name}</span>
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

            <div className="flex justify-end gap-4 mt-8">
              <Button
                variant="outline"
                onClick={onClose}
                className="px-6 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Dialog>
  );
}
