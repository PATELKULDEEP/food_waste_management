import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { firestore, storage} from '../../firebase';


function ProfilePage() {

    const { currentUser, logout } = useAuth();
    const [profile,setProfile] = useState([]);
    
    useEffect( async () => {
        
        if(currentUser){
            firestore.collection("accounts").doc(currentUser.uid).onSnapshot(async function (doc) {
                const data = await doc.data();
                setProfile(data);
            });
        }

    }, [currentUser]);

    return (
        <div>
            
        </div>
    )
}

export default ProfilePage
