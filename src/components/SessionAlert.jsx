import React from 'react'
import { useDispatch } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom';
import { REMOVE_USER } from '../redux/sliceData';

function SessionAlert() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const session = sessionStorage.getItem('token');
    const handleLogOut = () => {
        dispatch(REMOVE_USER());
        navigate('/');
    }
    let match = useMatch('/');
    return (
        <div>
            {match?.pathname !== '/login' && !session ?
                <div class="modal modal-open modal-middle">
                    <div class="modal-box text-left bg-indigo-800 text-white">
                        <h3 class="font-bold text-lg">Sesi anda telah berakhir!</h3>
                        <p class="py-4">Silakan melakukan Login kembali</p>
                        <div class="modal-action">
                            <button onClick={handleLogOut} className="btn text-white">Logout</button>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default SessionAlert