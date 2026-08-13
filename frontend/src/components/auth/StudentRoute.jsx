import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StudentRoute = ({ children }) => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        // If user is a recruiter, redirect them to admin dashboard
        if (user && user.role === 'recruiter') {
            navigate("/admin/companies");
        }
        // If not logged in at all, redirect to login
        if (!user) {
            navigate("/login");
        }
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default StudentRoute;
