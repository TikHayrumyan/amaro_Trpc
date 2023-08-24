import { signIn, signOut, useSession } from "next-auth/react";
import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useState,useRef } from "react";


export const Header = () => {
    const {data: sessionData} = useSession();
    const buttonRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [LangToggle,SetLangToggle] = useState("ENG");

    const handleClose = () => {
      setOpen(false);
    };
  
    
    // return (
    //     <div className="navbar bg-primary text-primary-content">
    //         <div className="flex-1 pl-5 text-3xl font-bold">
    //             {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
    //         </div>

    //         <div className="btn btn-success" onClick={() => signIn()}>
    //             Sign in
    //         </div>
    //         <div className="btn btn-success" onClick={() => signOut()}>
    //             Logout
    //         </div>
            
    //     </div>
    // )

    return (
        <>
            <div className="sm:flex sm:w-full sm:h-[5vh] sm:items-center sm:justify-center sm:bg-white">
                <div className="golden13Container sm:flex sm:items-center sm:justify-between sm:w-full sm:h-full ">
                    {/* left side */}
                    <div>
                        <Button className='sm:flex sm:justify-start sm:p-0 sm:w-[4vw] sm:font-semibold sm:text-[0.9vw] sm:text-black' ref={buttonRef}  aria-expanded={open ? 'true' : undefined} onClick={() => {setOpen(!open);}}>{LangToggle}<KeyboardArrowDownOutlinedIcon/></Button>
                        <Menu
                            className='sm:flex sm:flex-col sm:w-[4vw]'
                            id="basic-menu"
                            anchorEl={buttonRef.current}
                            open={open}
                            onClose={handleClose}
                            // aria-labelledby="basic-demo-button"

                        >
                            <MenuItem onClick={handleClose}>RU</MenuItem>
                            <MenuItem onClick={handleClose}>HY</MenuItem>
                            
                        </Menu>
                    </div>  
                    {/* Right Side */}
                    <div className='sm:flex sm:w-[10vw] sm:justify-between'>
                        {/* Sign In */}
                        <span className='sm:font-semibold sm:text-[0.9vw] sm:text-black cursor-pointer'>Sign In</span>
                        <div className='sm:flex sm:w-[4.5vw] sm:justify-between'>
                            <SearchOutlinedIcon className='cursor-pointer sm:w-[1.25vw] sm:h-auto'/>
                            <PermIdentityOutlinedIcon className='cursor-pointer sm:w-[1.25vw] sm:h-auto'/>
                            <ShoppingBagOutlinedIcon className='cursor-pointer sm:w-[1.25vw] sm:h-auto'/>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}   

