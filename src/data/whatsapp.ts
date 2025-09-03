// Configuración de WhatsApp para el proyecto
export const whatsappConfig = {
  // Número de WhatsApp (incluye código de país)
  phoneNumber: '573243019347',
  
  // Mensaje por defecto
  defaultMessage: 'Hola! Me interesa conocer más sobre sus servicios. ¿Podríamos hablar?'
};

// Función para generar URL de WhatsApp
export function generateWhatsAppURL(message?: string): string {
  const finalMessage = message || whatsappConfig.defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
}

// Función para obtener mensaje por defecto
export function getDefaultMessage(): string {
  return whatsappConfig.defaultMessage;
}