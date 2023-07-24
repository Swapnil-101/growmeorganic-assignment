import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface UserInfo {
    name: string;
    phoneNumber: string;
    email: string;
}

const UserForm: React.FC = () => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: '',
        phoneNumber: '',
        email: '',
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [validationErrors, setValidationErrors] = useState<Partial<UserInfo>>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value,
        }));
        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', // Reset the error
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Check for form validation
        const errors: Partial<UserInfo> = {};
        if (!userInfo.name) {
            errors.name = 'Name is required';
        }
        if (!userInfo.phoneNumber) {
            errors.phoneNumber = 'Phone number is required';
        }
        if (!userInfo.email) {
            errors.email = 'Email is required';
        }


        setValidationErrors(errors);


        if (Object.keys(errors).length > 0) {
            setIsFormSubmitted(true);
            return;
        }

        console.log('Form submitted:', userInfo);

        // Storing user data in localStorage
        localStorage.setItem('userData', JSON.stringify(userInfo));

        // Sending the user to the another page
        navigate('/second');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
                    <Grid item xs={12}>
                        <img src="https://www.growmeorganic.com/wp-content/uploads/2021/12/GrowMeOrganic-Logo-300x50.png" alt="Logo" style={{ maxWidth: 200 }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            name="name"
                            color="warning"
                            value={userInfo.name}
                            onChange={handleChange}
                            fullWidth
                            error={!!validationErrors.name}
                            helperText={validationErrors.name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Phone number"
                            variant="outlined"
                            name="phoneNumber"
                            color="warning"
                            value={userInfo.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                            error={!!validationErrors.phoneNumber}
                            helperText={validationErrors.phoneNumber}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            color="warning"
                            value={userInfo.email}
                            onChange={handleChange}
                            fullWidth
                            error={!!validationErrors.email}
                            helperText={validationErrors.email}
                        />
                    </Grid>
                    {isFormSubmitted && Object.keys(validationErrors).length === 0 && (
                        <Grid item xs={12}>
                            <p style={{ color: 'red' }}>Please fill in all the form fields.</p>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="warning">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default UserForm;
