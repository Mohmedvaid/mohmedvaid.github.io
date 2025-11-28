import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Copy, Check, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onViewResume?: () => void;
}

export const ContactDialog = ({ isOpen, onClose, onViewResume }: ContactDialogProps) => {
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  // Obfuscated phone number - assembled on click to avoid bot scraping
  const getPhoneNumber = () => {
    const parts = ['307', '213', '9838'];
    return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
  };

  const email = "mohmedvaid@gmail.com";

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-white/20 dark:border-gray-800 max-w-md rounded-3xl">
        <div className="flex flex-col items-center text-center p-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 flex items-center justify-center shadow-lg"
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>

          <DialogTitle className="text-3xl font-display font-bold mb-2 text-gray-900 dark:text-white">
            Let's Connect!
          </DialogTitle>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'd love to hear from you. Choose your preferred method.
          </p>

          <div className="w-full space-y-4">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Email</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white break-all">
                      {email}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="ml-2"
                  onClick={() => copyToClipboard(email, 'email')}
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <Button
                className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => window.location.href = `mailto:${email}`}
              >
                Send Email
              </Button>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Phone</p>
                    {!phoneRevealed ? (
                      <div className="relative">
                        <p className="text-sm font-medium text-gray-900 dark:text-white blur-sm select-none">
                          (***) ***-****
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {getPhoneNumber()}
                      </p>
                    )}
                  </div>
                </div>
                {phoneRevealed && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="ml-2"
                    onClick={() => copyToClipboard(getPhoneNumber(), 'phone')}
                  >
                    {phoneCopied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                )}
              </div>
              
              {!phoneRevealed ? (
                <Button
                  className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => setPhoneRevealed(true)}
                >
                  Reveal Phone Number
                </Button>
              ) : (
                <Button
                  className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => window.location.href = `tel:${getPhoneNumber().replace(/\D/g, '')}`}
                >
                  Call Now
                </Button>
              )}
            </motion.div>

            {/* View Resume Button */}
            {onViewResume && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <Button
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white gap-2"
                  onClick={() => {
                    onViewResume();
                  }}
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </Button>
              </motion.div>
            )}
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-600 mt-6">
            Available Mon-Fri, 9AM-6PM CST
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
