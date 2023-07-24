import { useEffect } from 'react';
import ParentChildCheckboxes from "../component/ParentChildCheckboxes"
import Table from "../component/Table";
import { useNavigate } from 'react-router-dom';

const Second = () => {
    const navigate = useNavigate();

    const isUserDataAvailable = () => {
        const userData = localStorage.getItem('userData');
        return !!userData;
    };
    useEffect(() => {
        console.log(!isUserDataAvailable())
        if (!isUserDataAvailable()) {
            console.log(localStorage.getItem('userData'))
            navigate('/');

        }

    }, [])
    return (
        <>
            <div style={{ marginTop: "5rem" }}>
                <Table />
            </div>
            <div style={{ marginTop: "5rem" }}>
                <ParentChildCheckboxes />
            </div>
        </>
    )
}

export default Second