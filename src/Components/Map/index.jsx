import { HiLockClosed } from "react-icons/hi";
import { RiAccountCircleFill } from "react-icons/ri";
import './style.css'
import Rasm from '../../assets/templatemo_thumb_1.jpg'
import Rasm2 from '../../assets/templatemo_thumb_2.jpg'
import Rasm3 from '../../assets/templatemo_thumb_3.jpg'
import Rasm4 from '../../assets/templatemo_thumb_4.jpg'
// import Rasm5 from './templatemo_section_2_top_bg.jpg'


import React, { useState } from 'react';
import Modal from './modal';
import Modal2 from "./modal2";
import Modal3 from "./modal3";
import Modal4 from "./modal4";
import { useNavigate } from "react-router";

export default function Grils() {
    const size = {
        fontSize: '13px'
    }
    const navigate = useNavigate()
    
    const handleNext = () => {
        navigate('/carusel')
    }
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    const handleShowModal3 = () => setShowModal3(true);
    const handleCloseModal3 = () => setShowModal3(false);

    const handleShowModal4 = () => setShowModal4(true);
    const handleCloseModal4 = () => setShowModal4(false);
    return (
        <div style={{ zIndex: "999" }} className='App4 w-full flex justify-center mt-7 ml-5'>
            <div className='flex justify-center w-full -ml-11 gap-4'>
                <div className='grid text-start justify-items-start'>
                    <h4 className='text-2xl font-bold text-[#678275] text-start'>Welcome To Nature Website </h4>
                    <span style={size} className='-mt-7'>This website template is provided by <span className='text-[#33659B] cursor-pointer'>TemplateMo.com.</span> You may download, modify and apply this layout for <br /> your personal or business websites. Credit go to  <span className='text-[#33659B] cursor-pointer'>Free Photos</span> for photos and <span className='text-[#33659B] cursor-pointer'> Smashing Magazine</span> for icons. <br /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque rutrum est non pede.</span>
                    <p style={size} className='-mt-7'>Mauris varius risus fermentum nulla. Mauris vel sapien mattis urna luctus ultrices. Cum sociis natoque <br /> penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus tincidunt vehicula est. <br /> Vestibulum purus. In hac habitasse platea dictumst.</p>
                    <p style={size} className='-mt-9'>Quisque ut odio. Etiam fringilla vestibulum nulla. Suspendisse venenatis. Cum sociis natoque penatibus et <br /> magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <h4 className='text-2xl font-bold mt-4 text-[#678275] text-start'>Photo Gallary</h4>

                    <div className="m-2 flex mb-20 gap-3">
                        <button onClick={handleShowModal1}><img style={{border:'1x solid #000'}} src={Rasm} alt="" /></button>
                        <Modal show={showModal1} handleClose={handleCloseModal1} imageUrl={Rasm} />

                        <button onClick={handleShowModal2}><img style={{border:'1x solid #000'}} src={Rasm2} alt="" /></button>
                        <Modal2 show={showModal2} handleClose={handleCloseModal2} imageUrl={Rasm2} />

                        <button onClick={handleShowModal3}><img style={{border:'1x solid #000'}} src={Rasm3} alt="" /></button>
                        <Modal3 show={showModal3} handleClose={handleCloseModal3} imageUrl={Rasm3} />

                        <button onClick={handleShowModal4}><img style={{border:'1x solid #000'}} src={Rasm4} alt="" /></button>
                        <Modal4 show={showModal4} handleClose={handleCloseModal4} imageUrl={Rasm4} />
                    </div>
                </div>
                <div className='grid scroll my-24 -z-999'>
                    <div className='w-[300px] grid justify-items-center h-[220px] bg-[#C3E4C6] rounded-xl'>
                        <div className="flex justify-items-start text-start items-center -ml-20 gap-2 text-sm text-[#276B45] uppercase font-medium ">
                            <div className="bg-[#FF934E] w-[45px] rounded-xl mt-2 shadow-2xl h-[45px] flex justify-center items-center">
                                <HiLockClosed size={29} color="white" />
                            </div>
                            MEMBER LOGIN</div>
                        <div style={{ zIndex: '-1' }} className="w-[270px] h-[155px] bg-[#6EC99D] justify-items-center rounded-xl mb-96">
                            <div className="mb-5 gap-2 p-2">
                                <label style={{ fontSize: '15px' }} htmlFor="Username" className="flex gap-2 m-4 text-white">
                                    Username:
                                    <input style={size} type="text" placeholder="username" className="w-[116px] h-[20px] bg-[#D7EAE0] p-2 flex items-center" />
                                </label>
                                <label style={{ fontSize: '15px' ,paddingTop:'6px'}} htmlFor="Username" className="flex gap-2 mx-4 -mt-5 text-white">
                                    Password:
                                    <input style={size} type="text" placeholder="*******" className="w-[116px] h-[20px] bg-[#D7EAE0] ml-1 p-2 flex items-center" />
                                </label><br />
                                <div className="flex items-center gap-2 -mt-4 ml-5">
                                    <input className="items-center" type="checkbox" />
                                    <h4 style={size} className="text-white">Remember Me</h4>
                                    <button style={size} className="btnimg2 w-[55px] h-[22px] ml-14"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[300px] grid justify-items-center items-center h-[220px] bg-[#C3E4C6] rounded-xl mt-3'>
                        <div className="flex justify-start text-start -ml-20 items-center gap-2 text-sm text-[#276B45] uppercase font-medium ">
                            <div className="bg-[#FF934E] w-[45px] rounded-xl shadow-2xl mt-2 h-[45px] flex justify-center items-center">
                                <RiAccountCircleFill size={29} color="white" />
                            </div>
                            MEMBER LOGIN</div>
                        <div style={{ zIndex: '-1' }} className="w-[270px] h-[155px] bg-[#6EC99D] flex justify-start rounded-xl mb-96">
                            <div className="mb-5 text-start text-white text-sm ml-6 mt-4 justify-start grid">
                                <a href="#" style={{borderBottom:'1px solid white'}} className="pb-2 w-[220px] mb-1">Flash Templates</a>
                                <a href="#" style={{borderBottom:'1px solid white'}} className="pb-2 w-[220px] mb-1">Css Templates</a>
                                <a href="#" style={{borderBottom:'1px solid white'}} className="pb-2 w-[220px] mb-1">Web design articles</a>
                                <a onClick={() => handleNext()} style={{borderBottom:'1px solid white'}} className="pb-2 w-[220px] mb-1 cursor-pointer">Royalty Free Photos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

