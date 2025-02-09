export interface ConstactFormResult {
    success?: boolean;
    message?: string;
}

export interface ContactFormData {
    firstname: string,
    lastname: string,
    email: string,
    note: string,
}

export const sendContactUsForm = (payload: ContactFormData): Promise<ConstactFormResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result:ConstactFormResult | null = null;
            if (Math.random() > 0.5) {
                //TODO replace with real API
                console.log(payload, 'form payload');
                result = { success: true, message: 'Thank you for contacting us!' };
            } else {
                result = { success: false, message: 'Something went wrong!' };
            }
            resolve(result);
        }, 1000);
    });
}