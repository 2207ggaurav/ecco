import React, { useContext } from 'react'
import { Logincontext } from '../context/Contextprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ deletedata, get }) => {
    // console.log(deletedata);

    const { account, setAccount } = useContext(Logincontext);
    // console.log(account);

    // const removedata = async (id) => {
    const removedata = async (req, res) => {
        try {
            // const res = await fetch(`remove/${id}`, {
            const res = await fetch(`https://amazonservice-0j2o.onrender.com/remove/${deletedata}`, {
                // method: "GET",
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 400 || !data) {
                console.log("error");
            } else {
                console.log("user delete");
                setAccount(data);
                toast.success("Iteam remove from cart 😃!", {
                    position: "top-center"
                })
                get();
            }
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="add_remove_select" key={deletedata}>
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <p onClick={() => removedata(deletedata)} style={{ cursor: "pointer" }}>Delete</p><span>|</span>
            <p className="forremovemedia">Save Or Later</p><span>|</span>
            <p className="forremovemedia">See More like this</p>
            <ToastContainer />
        </div>

    )
}

export default Option;