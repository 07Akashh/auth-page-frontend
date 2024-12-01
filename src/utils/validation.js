export const validateSignup = (form) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+\d{1,3}\d{10}$/;

    if (!form.fullName.trim()) {
        errors.fullName = 'Full Name is required.';
    } else if (form.fullName.trim().split(' ').length < 2 || form.fullName.trim().split(' ').length > 3) {
        errors.fullName = 'Full Name must be valid Full Name.';
    }
    
    if (!form.email || !emailRegex.test(form.email)) errors.email = 'Valid email is required.';
    if (!form.dob) {
        errors.dob = 'Date of Birth is required.';
    } else {
        const today = new Date();
        const enteredDate = new Date(form.dob);
        if (enteredDate > today) {
            errors.dob = 'Date of Birth must be in the past.';
        }
    }
    
    if (!form.phone || !phoneRegex.test(form.phone))
        errors.phone = 'Phone number must start with country code and have 10 digits.';
    if (!form.password) {
        errors.password = 'Password is required.';
    } else if (form.password.length < 6) {
        errors.password = 'Password must be at least 6 characters.';
    }
    
    if (form.password !== form.confirmPassword) errors.confirmPassword = 'Passwords did not match.';
    return errors;
};

export const validateLogin = (form) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email || !emailRegex.test(form.email)) errors.email = 'Valid email is required.';
    if (!form.password) errors.password = 'Password is required.';

    return errors;
};
