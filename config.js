export const config_environment = {
  emailjs: {
    serviceId: process.env.EMAILJS_SERVICE_ID || "",
    templateId: process.env.EMAILJS_TEMPLATE_ID || "",
    publicKey: process.env.EMAILJS_PUBLIC_KEY || "",
  },
};
