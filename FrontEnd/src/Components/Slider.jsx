import zoomcar from '../images/zoomcar_logo.png';
import {useContext} from 'react';
import { MainContext } from './Context/MainContextProvider';
import { useNavigate } from 'react-router-dom';

export default function Slider({setmenu,menu}) {

    let {isAuth,setIsAuth} = useContext(MainContext);
    let name = localStorage.getItem("userName");
    let navigate = useNavigate();


const styles = {
    show:{
        position:"fixed",
        top:"0",
        background:"#0000007a",
        width:"100%",
        height:"100vh",
        display:"flex",
        zIndex:"2"
    },
    hide:{
        position:"fixed",
        top:"0",
        background:"#0000007a",
        width:"100%",
        height:"100vh",
        display:"none",
        zIndex:"2"
    }
}

  return (
    <div className='menu' style={menu ? styles.show : styles.hide}>
        <div style={{
            background:"white",
            width:"30vw"
            }}
            className="slider_content"
            >
                <ul style={{listStyle:"none",padding:"0"}}>
                    <li style={{
                        padding: "15px 20px",
                        display:'block',
                        background:"black",
                        color:"white"
                    }}>
                        <div>
                            {isAuth ? <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <div style={{
                                    display:"flex",
                                    gap:"10px",
                                    alignItems:"center"
                                }}>
                                    <i style={{
                                    fontSize:"2rem"
                                    }} class="bi bi-person-circle"></i>
                                    <h5 style={{
                                        margin:"0"
                                    }}>{name}</h5>
                                </div>
                                <button onClick={()=>{
                                    setIsAuth(false);
                                    navigate("/");
                                }}
                                style={{
                                    background: "#1AA71A",
                                    color: "white",
                                    padding: "5px 14px",
                                    borderRadius: "5px",
                                    fontWeight: "bold",
                                }}
                                >Logout</button>
                            </div> : <div style={{display:"flex",alignItems:"center",gap:"10px"}}><i style={{fontSize:"1.4rem"}} className="bi bi-person-fill"></i><h5 style={{margin:"0"}}> Login or Signup</h5></div>}
                        </div>
                    </li>
                    <li>
                        <div style={{display:'flex',alignItems:"center"}}><i style={{fontSize:"24px"}} className="bi bi-geo-alt"></i> <p style={{marginLeft:"13px",marginBottom:"0"}}>Change City</p></div>
                        <p style={{
                            margin:"0",
                            color:"#10a310",
                            fontWeight:"bold",
                            fontSize:"16px"
                        }}>Mumbai</p>
                    </li>
                    <li>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"12px"
                        }}>
                            <span style={{
                                width:"24px"
                            }}>
                            <img src={zoomcar} alt="" />
                            </span>
                            <p style={{margin:"0"}}>Become a Host</p>
                        </div>
                    </li>
                    <li>
                        <div style={{
                                display:"flex",
                                alignItems:"center",
                                gap:"12px"
                            }}>
                                <span style={{
                                    fontSize:"24px"
                                }}>
                                    <i className="bi bi-file-earmark-text"></i>
                                </span>
                                <p style={{margin:"0"}}>Zoomcar Fleet Vehicles Policies</p>
                        </div>
                    </li>
                    <li>
                    <div style={{
                                display:"flex",
                                alignItems:"center",
                                gap:"12px"
                            }}>
                                <span style={{
                                    fontSize:"24px"
                                }}>
                                    <i className="bi bi-file-earmark-text"></i>
                                </span>
                                <p style={{margin:"0"}}>Zoomcar Host Vehicles Policies</p>
                        </div>
                    </li>
                    <li>
                    <div style={{
                                display:"flex",
                                alignItems:"center",
                                gap:"12px"
                            }}>
                                <span style={{
                                    fontSize:"24px"
                                }}>
                                    <i className="bi bi-telephone"></i>
                                </span>
                                <p style={{margin:"0"}}>Help & Support</p>
                        </div>
                    </li>
                    <li></li>
                </ul>
        </div>
        <div style={{width:"70vw",height:"100%"}} onClick={()=>{setmenu(false)}} className="empty_area"></div>
    </div>
  )
}
