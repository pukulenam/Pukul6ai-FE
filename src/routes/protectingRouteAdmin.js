import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function ProtectingRouteAdmin(props) {
    const navigate = useNavigate();
    const admin = useSelector((state) => state.data.datas.user);

    useEffect(() => {
        if (admin?.role !== "admin") {
            navigate("/login");
        }
    }, [admin.role])
    return props.children;
}

export default ProtectingRouteAdmin