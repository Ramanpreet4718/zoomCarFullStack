import React, { useState } from 'react'
import About from './About';
import Blogs from './Blogs';
import Career from './Careers';
import Help from './Help';
import './BtmNav.css';

export default function BtmNav() {
    let [comp,setComp] = useState(<About/>);
    const [selected, setSelected] = useState('About');

    const handleClick = (name) => {
      setSelected(name);
    };  

  return (
    <div style={{
        background:"#383838",
        color:'white'
    }}
    className="btm-nav-parent"
    >
        <div style={{
            paddingBottom:"2%"
        }} className='btn_nav' id='btm_id'>
            <nav style={{ display: 'flex', alignItems: 'center' }}>
                <p
                    onClick={() => {
                        handleClick('About');
                        setComp(<About/>)
                    }}
                    style={{
                    borderBottom: selected === 'About' ? '2px solid white' : 'none',
                    }}
                >
                    ABOUT US
                </p>

                <p
                    onClick={() => {
                        handleClick('Blogs');
                        setComp(<Blogs/>);
                    }}
                    style={{
                    borderBottom: selected === 'Blogs' ? '2px solid white' : 'none',
                    }}
                >
                    BLOGS
                </p>

                <p
                    onClick={() => {
                        handleClick('Careers');
                        setComp(<Career/>);
                    }}
                    style={{
                    borderBottom: selected === 'Careers' ? '2px solid white' : 'none',
                    }}
                >
                    CAREERS
                </p>

                <p
                    onClick={() => {
                        handleClick('Help & Support');
                        setComp(<Help/>);
                    }}
                    style={{
                    borderBottom: selected === 'Help & Support' ? '2px solid white' : 'none',
                    }}
                >
                    HELP & SUPPORT
                </p>
            </nav>
        </div>
        {comp}
    </div>
  )
}
