import {useEffect} from 'react';
import ParentChildCheckboxes from "../component/ParentChildCheckboxes"
import Table from "../component/Table"
const Second = () => {
      const isUserDataAvailable = () => {
    const userData = localStorage.getItem('userData');
    return !!userData;
  };
    useEffect(() => {
        console.log(!isUserDataAvailable())
        if (!isUserDataAvailable()){
            console.log(localStorage.getItem('userData'))
            window.location.href = '/'
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