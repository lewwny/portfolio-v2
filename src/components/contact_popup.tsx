import React, { useRef, useState, FormEvent } from 'react';
import '../styles/contact_popup.css';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

interface ContactPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

interface StatusState {
    type: 'success' | 'error' | null;
    msg: string;
}

interface EmailJSError {
    text: string;
    status?: number;
}

function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [status, setStatus] = useState<StatusState>({ type: null, msg: '' });

    if (!isOpen) return null;

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: null, msg: '' });

        if (!formRef.current) return;

        const emailInput = formRef.current.querySelector('input[name="user_email"]') as HTMLInputElement;
        if (emailInput) {
            const messageInput = formRef.current.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
            if (messageInput) {
                messageInput.value += `\n\nEmail: ${emailInput.value}`;
            }
        }

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || 'your_service_id';
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || 'your_template_id';
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || 'your_public_key';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus({ 
                    type: 'success', 
                    msg: t('contact.success_message') || 'Message sent!' 
                });
                
                formRef.current?.reset();
                
                setTimeout(() => {
                    onClose();
                    setStatus({ type: null, msg: '' });
                }, 3000);
            })
            .catch((error: unknown) => {
                const emailError = error as EmailJSError;
                console.error(emailError.text);
                
                setStatus({ 
                    type: 'error', 
                    msg: t('contact.error_message') || 'Failed to send message.' 
                });
                console.log('api key : ', PUBLIC_KEY);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className="contact_popup_overlay" onClick={onClose}>
            <div className="contact_popup_content" onClick={(e) => e.stopPropagation()}>
                
                <button className="close_btn" onClick={onClose} aria-label="Close contact form">
                    &times;
                </button>
                
                <h2>{t('contact.title') || 'Contact Me'}</h2>
                
                <form ref={formRef} onSubmit={sendEmail}>
                    <div className="form_group">
                        <label htmlFor="user_email">{t('contact.email_label') || 'Your Email'}</label>
                        <input 
                            id="user_email"
                            type="email" 
                            name="user_email" 
                            required 
                            placeholder="name@example.com" 
                        />
                    </div>

                    <div className="form_group">
                        <label htmlFor="message">{t('contact.message_label') || 'Message'}</label>
                        <textarea 
                            id="message"
                            name="message" 
                            required 
                            rows={5}
                            placeholder="Hello..." 
                        />
                    </div>

                    <button type="submit" className="submit_btn" disabled={isSending}>
                        {isSending ? (t('contact.sending') || 'Sending...') : (t('contact.send_btn') || 'Send')}
                    </button>

                    {status.msg && (
                        <p className={`status_msg ${status.type}`}>
                            {status.msg}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ContactPopup;